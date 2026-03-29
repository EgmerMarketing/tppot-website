import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { businessName = "The Postpartum OT", feedbackEmail, rating, name, message } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const stars = "\u2605".repeat(rating) + "\u2606".repeat(5 - rating);

    // Send via Resend if API key is available
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: `${businessName} Reviews <noreply@thepostpartumot.com>`,
        to: feedbackEmail,
        subject: `Private Feedback (${rating}/5 stars) from ${name || "Anonymous"}`,
        html: `
          <h2>Private Review Feedback</h2>
          <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
          <p><strong>From:</strong> ${name || "Anonymous"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">
            This feedback was submitted through your website review page.
            It was NOT posted publicly. This is a private message for you to review.
          </p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Review feedback error:", error);
    return NextResponse.json({ success: true }); // Don't expose errors to user
  }
}
