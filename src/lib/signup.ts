import { escapeHtml, isEmail } from "@/lib/contact";
import { professionalHandout } from "@/lib/handouts";

const NAME_MAX = 100;

export type SignupPayload = {
  firstName: string;
  email: string;
  community: boolean;
  podcast: boolean;
  resourceId?: string;
  resourceTitle?: string;
  downloadUrl?: string;
};

export type SignupParseResult =
  | { kind: "honeypot" }
  | { kind: "invalid"; error: string; field?: "email" | "firstName" }
  | { kind: "valid"; data: SignupPayload };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function flag(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === "yes";
}

export function parseSignup(body: unknown): SignupParseResult {
  if (!isRecord(body)) {
    return { kind: "invalid", error: "That submission could not be read. Please try again." };
  }

  const trap = body.hp_field ?? body.website;
  if (typeof trap === "string" ? trap.trim().length > 0 : trap != null && trap !== "") {
    return { kind: "honeypot" };
  }

  const firstName = typeof body.firstName === "string"
    ? body.firstName.replace(/[\r\n\t]+/g, " ").replace(/\s+/g, " ").trim()
    : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (firstName.length > NAME_MAX) {
    return {
      kind: "invalid",
      error: `First name must be ${NAME_MAX} characters or fewer.`,
      field: "firstName",
    };
  }
  if (!email) {
    return { kind: "invalid", error: "Email is required.", field: "email" };
  }
  if (!isEmail(email)) {
    return { kind: "invalid", error: "Please enter a valid email address.", field: "email" };
  }

  const resourceRaw = typeof body.resource === "string" ? body.resource.trim() : "";
  let resourceId: string | undefined;
  let resourceTitle: string | undefined;
  let downloadUrl: string | undefined;
  if (resourceRaw) {
    const handout = professionalHandout(resourceRaw);
    if (!handout || !handout.gated) {
      return { kind: "invalid", error: "That file is not available from this form." };
    }
    if (!flag(body.consent)) {
      return {
        kind: "invalid",
        error: "Check the box so Melissa may receive your email and the file name.",
      };
    }
    resourceId = handout.id;
    resourceTitle = handout.title;
    downloadUrl = handout.file;
  }

  return {
    kind: "valid",
    data: {
      firstName,
      email,
      community: flag(body.community),
      podcast: flag(body.podcast),
      resourceId,
      resourceTitle,
      downloadUrl,
    },
  };
}

export function buildSignupEmail(
  data: SignupPayload,
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
  const name = data.firstName || "Not given";
  const interests = [
    data.community ? "community-waitlist" : null,
    data.podcast ? "podcast-and-handouts" : null,
  ].filter(Boolean);

  const interestText = interests.length > 0 ? interests.join(", ") : "email only, no box checked";
  const resourceLine = data.resourceTitle
    ? `Handout requested: ${data.resourceTitle}`
    : "";

  return {
    from,
    to,
    replyTo: data.email,
    subject: data.resourceTitle
      ? `Handout request | ${data.resourceTitle}`
      : "Website signup | The Postpartum OT",
    html: `
      <div style="font-family: Georgia, serif; color: #0A3660; line-height: 1.5;">
        <h1 style="font-size: 20px;">${data.resourceTitle ? "Handout request from the website" : "New parent signup from the website"}</h1>
        <p>This is not a confirmed mailing-list subscription. No email series is running. Reply if you want to confirm with them yourself.</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        ${resourceLine ? `<p><strong>${escapeHtml(resourceLine)}</strong></p>` : `<p><strong>Boxes checked:</strong> ${escapeHtml(interestText)}</p>`}
      </div>
    `.trim(),
    text: [
      data.resourceTitle ? "Handout request from the website" : "New parent signup from the website",
      "This is not a confirmed mailing-list subscription. No email series is running.",
      "",
      `Name: ${name}`,
      `Email: ${data.email}`,
      resourceLine || `Boxes checked: ${interestText}`,
    ].join("\n"),
  };
}
