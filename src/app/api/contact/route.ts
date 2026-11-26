import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  FRIENDLY_SEND_ERROR,
  RATE_LIMIT_ERROR,
  buildContactEmail,
  clientIp,
  contactFromEmail,
  contactToEmail,
  consumeRateLimit,
  mailboxFromHeader,
  parseContactSubmission,
} from "@/lib/contact";

export const runtime = "nodejs";

async function readBody(request: Request): Promise<unknown> {
  const contentType = request.headers.get("content-type") ?? "";
  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await request.formData();
    return Object.fromEntries(
      Array.from(form.entries()).map(([key, value]) => [
        key,
        typeof value === "string" ? value : "",
      ]),
    );
  }
  return request.json();
}

export async function POST(request: Request) {
  const rate = consumeRateLimit(clientIp(request));
  if (rate.limited) {
    return NextResponse.json(
      { error: RATE_LIMIT_ERROR },
      { status: 429, headers: { "Retry-After": String(rate.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await readBody(request);
  } catch {
    return NextResponse.json(
      { error: "That submission could not be read. Please try again." },
      { status: 400 },
    );
  }

  const parsed = parseContactSubmission(body);
  if (parsed.kind === "honeypot") {
    return NextResponse.json({ success: true });
  }
  if (parsed.kind === "invalid") {
    return NextResponse.json(
      { error: parsed.error, field: parsed.field },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Contact form is not configured: RESEND_API_KEY is missing.");
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 503 });
  }

  const to = contactToEmail();
  const from = contactFromEmail();
  if (!mailboxFromHeader(to) || to.includes("<") || !mailboxFromHeader(from)) {
    console.error(
      "Contact form sender configuration is invalid. Check CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.",
    );
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 500 });
  }

  const email = buildContactEmail(parsed.data, to, from);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: email.from,
      to: email.to,
      replyTo: email.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });

    if (error) {
      console.error("Contact form Resend error:", error.name, error.message);
      return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
