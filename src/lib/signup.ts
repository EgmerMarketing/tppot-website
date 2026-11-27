import { escapeHtml, isEmail } from "@/lib/contact";

/**
 * Email signup for parents: community waitlist, new episodes and handouts.
 * Kartra is inactive and no list tool is chosen yet, so for now each signup is
 * emailed to the inbox through Resend. Swap the route body for the list tool's
 * API (with double opt-in) once Melissa picks one. Never collect health details.
 */

export type SignupInterest = "community" | "updates";

export type SignupPayload = {
  email: string;
  firstName: string;
  interests: SignupInterest[];
  source: string;
};

export type SignupParseResult =
  | { kind: "honeypot" }
  | { kind: "invalid"; error: string; field?: "email" | "firstName" }
  | { kind: "valid"; data: SignupPayload };

const INTEREST_LABELS: Record<SignupInterest, string> = {
  community: "Tell me when the community opens",
  updates: "Send me new podcast episodes and handouts",
};

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

export function parseSignup(body: unknown): SignupParseResult {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return { kind: "invalid", error: "That submission could not be read. Please try again." };
  }
  const record = body as Record<string, unknown>;
  if (clean(record.website, 200)) return { kind: "honeypot" };

  const email = clean(record.email, 254);
  if (!email) return { kind: "invalid", error: "Please enter your email address.", field: "email" };
  if (!isEmail(email)) {
    return { kind: "invalid", error: "Please enter a valid email address, like name@example.com.", field: "email" };
  }

  const firstName = clean(record.firstName, 80);
  const interests = (["community", "updates"] as const).filter(
    (key) => record[key] === true || record[key] === "on" || record[key] === "true",
  );
  const source = clean(record.source, 60) || "site";

  return { kind: "valid", data: { email, firstName, interests, source } };
}

export function buildSignupEmail(data: SignupPayload, to: string, from: string) {
  const chosen = data.interests.length
    ? data.interests.map((key) => INTEREST_LABELS[key])
    : ["No boxes checked"];
  const name = data.firstName || "(no first name given)";
  return {
    from,
    to,
    replyTo: data.email,
    subject: `New signup: ${data.email} | The Postpartum OT`,
    html: `<div style="font-family: Georgia, serif; color: #0A3660; line-height: 1.5;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New email signup</h1>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>First name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Asked for:</strong> ${chosen.map(escapeHtml).join("; ")}</p>
      <p><strong>Form:</strong> ${escapeHtml(data.source)}</p>
    </div>`,
    text: [
      "New email signup",
      `Email: ${data.email}`,
      `First name: ${name}`,
      `Asked for: ${chosen.join("; ")}`,
      `Form: ${data.source}`,
    ].join("\n"),
  };
}
