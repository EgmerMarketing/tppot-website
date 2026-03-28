"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      journey: formData.get("journey") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly at hello@thepostpartumot.com"
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#469695]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-[#469695]" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-bold text-[#0A3660] mb-3 font-serif">
          Message Sent
        </h2>
        <p className="text-[15px] text-[#6B6560] font-serif leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. Melissa will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 p-8 md:p-10">
      <h2 className="text-xl font-bold text-[#0A3660] mb-6 font-serif">
        Or Send a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="journey"
            className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
          >
            Where are you in your postpartum OT journey?
          </label>
          <select
            id="journey"
            name="journey"
            className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors"
          >
            <option value="">Select one</option>
            <option value="exploring">Just Exploring</option>
            <option value="ready">Ready to Start</option>
            <option value="practicing">Already Practicing</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors resize-vertical"
            placeholder="Tell me a little about what you're looking for..."
          />
        </div>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
            <p className="text-sm text-red-700 font-sans">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2.5 bg-[#357574] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A3660] transition-colors font-sans w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" strokeWidth={2} />
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
