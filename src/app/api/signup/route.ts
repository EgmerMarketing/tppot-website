import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  FRIENDLY_SEND_ERROR,
  RATE_LIMIT_ERROR,
  clientIp,
  contactFromEmail,
  contactToEmail,
  consumeRateLimit,
  mailboxFromHeader,
} from "@/lib/contact";
import { buildSignupEmail, parseSignup } from "@/lib/signup";

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
  const rate = consumeRateLimit(`signup:${clientIp(request)}`);
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

  const parsed = parseSignup(body);
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
    console.error("Signup form is not configured: RESEND_API_KEY is missing.");
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 503 });
  }

  const to = contactToEmail();
  const from = contactFromEmail();
  if (!mailboxFromHeader(to) || to.includes("<") || !mailboxFromHeader(from)) {
    console.error("Signup sender configuration is invalid.");
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 500 });
  }

  const email = buildSignupEmail(parsed.data, to, from);

  try {
    const resend = new Resend(apiKey);
    const day = new Date().toISOString().slice(0, 10);
    const purpose = parsed.data.resourceId ?? "waitlist";
    const { error } = await resend.emails.send(
      {
        from: email.from,
        to: email.to,
        replyTo: email.replyTo,
        subject: email.subject,
        html: email.html,
        text: email.text,
      },
      {
        idempotencyKey: `website-signup/${purpose}/${parsed.data.email.toLowerCase().slice(0, 80)}/${day}`,
      },
    );

    if (error) {
      console.error("Signup Resend error:", error.name, error.message);
      return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 502 });
    }
  } catch (error) {
    console.error("Signup send failed:", error);
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 502 });
  }

  return NextResponse.json({
    success: true,
    ...(parsed.data.downloadUrl ? { downloadUrl: parsed.data.downloadUrl } : {}),
  });
}
