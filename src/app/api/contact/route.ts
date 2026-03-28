import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, journey, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const journeyLabels: Record<string, string> = {
      exploring: "Just Exploring",
      ready: "Ready to Start",
      practicing: "Already Practicing",
    };

    await resend.emails.send({
      from: "The Postpartum OT <noreply@thepostpartumot.com>",
      to: "hello@thepostpartumot.com",
      replyTo: email,
      subject: `New contact from ${name} | The Postpartum OT`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Journey Stage:</strong> ${journeyLabels[journey] || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided."}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly at hello@thepostpartumot.com" },
      { status: 500 }
    );
  }
}
