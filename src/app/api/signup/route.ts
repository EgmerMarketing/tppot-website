import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  FRIENDLY_SEND_ERROR,
  RATE_LIMIT_ERROR,
  clientIp,
  consumeRateLimit,
  contactFromEmail,
  contactToEmail,
  mailboxFromHeader,
} from "@/lib/contact";
import { buildSignupEmail, parseSignup } from "@/lib/signup";

export const runtime = "nodejs";

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
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "That submission could not be read. Please try again." }, { status: 400 });
  }

  const parsed = parseSignup(body);
  if (parsed.kind === "honeypot") return NextResponse.json({ success: true });
  if (parsed.kind === "invalid") {
    return NextResponse.json({ error: parsed.error, field: parsed.field }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = contactToEmail();
  const from = contactFromEmail();
  if (!apiKey || !mailboxFromHeader(to) || !mailboxFromHeader(from)) {
    console.error("Signup form is not configured: check RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 503 });
  }

  try {
    const { error } = await new Resend(apiKey).emails.send(buildSignupEmail(parsed.data, to, from));
    if (error) {
      console.error("Signup Resend error:", error.name, error.message);
      return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 502 });
    }
  } catch (error) {
    console.error("Signup send failed:", error);
    return NextResponse.json({ error: FRIENDLY_SEND_ERROR }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
