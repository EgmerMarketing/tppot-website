/**
 * Contact-form validation and email content.
 * Sending stays in the route handler so the Resend key never reaches the client.
 */

export const DEFAULT_CONTACT_TO = "hello@thepostpartumot.com";
export const DEFAULT_CONTACT_FROM =
  "The Postpartum OT <website@thepostpartumot.com>";

const PUBLIC_INBOX = "hello@thepostpartumot.com";

export const FRIENDLY_SEND_ERROR = `We couldn't send your message right now. Please try again, or email us directly at ${PUBLIC_INBOX}.`;

export const RATE_LIMIT_ERROR = `Too many messages were sent from this connection. Please wait a few minutes and try again, or email ${PUBLIC_INBOX}.`;

/** Why someone is writing. Legacy keys stay valid so an old cached form still submits. */
const JOURNEY_LABELS: Record<string, string> = {
  family: "Parent or caregiver",
  podcast: "Podcast",
  community: "Community waitlist",
  professional: "Healthcare professional",
  other: "Something else",
  curious: "Curious Clinician (legacy)",
  launching: "Confident Launcher (legacy)",
  growing: "Growing Practitioner (legacy)",
  exploring: "Just Exploring (legacy)",
  ready: "Ready to Start (legacy)",
  practicing: "Already Practicing (legacy)",
};

const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const NAME_MAX = 100;
const EMAIL_MAX = 254;
const MESSAGE_MAX = 5000;

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 8;

export type ContactField = "name" | "email" | "message" | "journey";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  journeyLabel: string;
};

export type ContactParseResult =
  | { kind: "honeypot" }
  | { kind: "invalid"; error: string; field?: ContactField }
  | { kind: "valid"; data: ContactPayload };

type RateBucket = Map<string, number[]>;

const rateBuckets: RateBucket = new Map();

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stripControls(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isEmail(value: string): boolean {
  return value.length <= EMAIL_MAX && EMAIL_RE.test(value) && !/[\r\n]/.test(value);
}

/** Pull the mailbox out of `Name <email@domain>` or a bare address. */
export function mailboxFromHeader(value: string): string | null {
  if (/[\r\n]/.test(value)) return null;
  const wrapped = value.match(/<([^<>]+)>\s*$/);
  const email = (wrapped ? wrapped[1] : value).trim();
  return isEmail(email) ? email : null;
}

export function contactToEmail(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_TO;
}

export function contactFromEmail(): string {
  return process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_CONTACT_FROM;
}

export function clientIp(request: Request): string {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 128);
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 128);
  }
  return "unknown";
}

/**
 * Best-effort limit for a single server instance. Vercel does not share this
 * memory across isolates, which is enough to slow casual floods without a
 * third-party store.
 */
export function consumeRateLimit(
  key: string,
  now = Date.now(),
): { limited: boolean; retryAfter: number } {
  const recent = (rateBuckets.get(key) ?? []).filter((stamp) => now - stamp < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    const oldest = recent[0] ?? now;
    const retryAfter = Math.max(1, Math.ceil((RATE_WINDOW_MS - (now - oldest)) / 1000));
    rateBuckets.set(key, recent);
    return { limited: true, retryAfter };
  }
  recent.push(now);
  rateBuckets.set(key, recent);

  if (rateBuckets.size > 2000) {
    const oldest = rateBuckets.keys().next().value;
    if (oldest) rateBuckets.delete(oldest);
  }
  return { limited: false, retryAfter: 0 };
}

function honeypotValueFilled(value: unknown): boolean {
  if (typeof value === "string") return value.trim().length > 0;
  return value != null && value !== "";
}

function honeypotFilled(body: Record<string, unknown>): boolean {
  return honeypotValueFilled(body.hp_field) || honeypotValueFilled(body.website);
}

export function parseContactSubmission(body: unknown): ContactParseResult {
  if (!isRecord(body)) {
    return { kind: "invalid", error: "That submission could not be read. Please try again." };
  }

  if (honeypotFilled(body)) {
    return { kind: "honeypot" };
  }

  const name = typeof body.name === "string"
    ? stripControls(body.name).replace(/[\r\n\t]+/g, " ").replace(/\s+/g, " ").trim()
    : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? stripControls(body.message).trim() : "";

  if (!name) {
    return { kind: "invalid", error: "Name is required.", field: "name" };
  }
  if (name.length > NAME_MAX) {
    return {
      kind: "invalid",
      error: `Name must be ${NAME_MAX} characters or fewer.`,
      field: "name",
    };
  }

  if (!email) {
    return { kind: "invalid", error: "Email is required.", field: "email" };
  }
  if (!isEmail(email)) {
    return { kind: "invalid", error: "Please enter a valid email address.", field: "email" };
  }

  if (!message) {
    return { kind: "invalid", error: "Message is required.", field: "message" };
  }
  if (message.length > MESSAGE_MAX) {
    return {
      kind: "invalid",
      error: `Message must be ${MESSAGE_MAX} characters or fewer.`,
      field: "message",
    };
  }

  const journeyRaw = body.journey;
  let journeyLabel = "Not specified";
  if (journeyRaw != null && journeyRaw !== "") {
    if (typeof journeyRaw !== "string" || !JOURNEY_LABELS[journeyRaw]) {
      return {
        kind: "invalid",
        error: "Please choose a reason from the list.",
        field: "journey",
      };
    }
    journeyLabel = JOURNEY_LABELS[journeyRaw];
  }

  return {
    kind: "valid",
    data: { name, email, message, journeyLabel },
  };
}

export function buildContactEmail(
  data: ContactPayload,
  to: string,
  from: string,
): {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
} {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeJourney = escapeHtml(data.journeyLabel);
  const safeMessage = escapeHtml(data.message);
  const subjectName = data.name.replace(/[\r\n]+/g, " ").slice(0, 80);

  return {
    from,
    to,
    replyTo: data.email,
    subject: `New inquiry from ${subjectName} | The Postpartum OT`,
    html: `
      <div style="font-family: Georgia, 'Times New Roman', serif; color: #0A3660; line-height: 1.5;">
        <h1 style="font-size: 20px; margin: 0 0 16px;">New inquiry from the website</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Reason for writing:</strong> ${safeJourney}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; margin-top: 0;">${safeMessage}</p>
        <p style="color: #6B6560; font-size: 13px;">Reply to this email to respond directly to ${safeName}.</p>
      </div>
    `.trim(),
    text: [
      "New inquiry from the website",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Reason for writing: ${data.journeyLabel}`,
      "",
      data.message,
      "",
      `Reply to this email to respond directly to ${data.name}.`,
    ].join("\n"),
  };
}
