"use client";

import { useState } from "react";
import { Star, Send, CheckCircle, ExternalLink } from "lucide-react";

interface ReviewFunnelProps {
  businessName: string;
  googleReviewUrl: string;
  feedbackEmail: string;
  accentColor?: string;
  accentHover?: string;
}

export default function ReviewFunnel({
  businessName,
  googleReviewUrl,
  feedbackEmail,
  accentColor = "#00ADEE",
  accentHover = "#0095cc",
}: ReviewFunnelProps) {
  const [step, setStep] = useState<"rate" | "google" | "feedback" | "sent">("rate");
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [sending, setSending] = useState(false);

  function handleRatingClick(value: number) {
    setRating(value);
    if (value >= 4) {
      setStep("google");
    } else {
      setStep("feedback");
    }
  }

  async function handleFeedbackSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/api/review-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          feedbackEmail,
          rating,
          name: formData.get("name"),
          message: formData.get("message"),
        }),
      });
    } catch {
      // Still show success even if email fails
    }

    setStep("sent");
    setSending(false);
  }

  // Star rating selector
  if (step === "rate") {
    return (
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          How was your experience with {businessName}?
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Your feedback helps us improve and helps other people find great local businesses.
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleRatingClick(value)}
              onMouseEnter={() => setHoveredStar(value)}
              onMouseLeave={() => setHoveredStar(0)}
              aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
              className="p-2 transition-transform hover:scale-110"
            >
              <Star
                className="w-10 h-10 md:w-12 md:h-12 transition-colors"
                strokeWidth={1.5}
                fill={value <= (hoveredStar || rating) ? accentColor : "transparent"}
                color={value <= (hoveredStar || rating) ? accentColor : "#4B5563"}
              />
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Tap a star to rate your experience
        </p>
      </div>
    );
  }

  // Happy path: redirect to Google Reviews
  if (step === "google") {
    return (
      <div className="text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${accentColor}20` }}>
          <CheckCircle className="w-8 h-8" style={{ color: accentColor }} strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Thank you! We are glad you had a great experience.
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Would you mind taking 30 seconds to share your experience on Google? It makes a huge difference for our business.
        </p>

        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          style={{ backgroundColor: accentColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
        >
          <ExternalLink className="w-5 h-5" strokeWidth={2} />
          Leave a Google Review
        </a>

        <p className="text-xs text-gray-600 mt-4">
          Opens Google in a new tab. Takes about 30 seconds.
        </p>
      </div>
    );
  }

  // Feedback path: private form
  if (step === "feedback") {
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-3 text-center">
          We would love to hear more.
        </h2>
        <p className="text-gray-400 mb-6 text-center">
          Thank you for being honest. Your feedback goes directly to the owner so we can make things right.
        </p>

        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
          <div>
            <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name (optional)
            </label>
            <input
              type="text"
              id="feedback-name"
              name="name"
              placeholder="First name"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="feedback-message" className="block text-sm font-medium text-gray-300 mb-1">
              What could we have done better?
            </label>
            <textarea
              id="feedback-message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your experience..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors resize-vertical"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 text-white px-6 py-4 rounded-lg font-bold transition-colors disabled:opacity-60"
            style={{ backgroundColor: accentColor }}
            onMouseEnter={(e) => !sending && (e.currentTarget.style.backgroundColor = accentHover)}
            onMouseLeave={(e) => !sending && (e.currentTarget.style.backgroundColor = accentColor)}
          >
            <Send className="w-4 h-4" strokeWidth={2} />
            {sending ? "Sending..." : "Send Feedback"}
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-4 text-center">
          This goes directly to the business owner. It will not be posted publicly.
        </p>
      </div>
    );
  }

  // Sent confirmation
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${accentColor}20` }}>
        <CheckCircle className="w-8 h-8" style={{ color: accentColor }} strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl font-bold mb-3">
        Thank you for your feedback.
      </h2>
      <p className="text-gray-400 max-w-md mx-auto">
        We take every piece of feedback seriously. The owner will review this personally.
      </p>
    </div>
  );
}
