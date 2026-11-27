"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";
type ContactField = "name" | "email" | "message" | "journey";

const fieldClass =
  "w-full min-h-12 border rounded-lg px-3 py-3 text-[#0A3660] font-sans text-base bg-white outline-none transition-colors focus:ring-2";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorField, setErrorField] = useState<ContactField | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    if (status === "error") {
      errorRef.current?.focus();
    }
  }, [status, errorMessage]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setErrorField(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      journey: formData.get("journey"),
      message: formData.get("message"),
      hp_field: formData.get("hp_field"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let body: { success?: boolean; error?: string; field?: ContactField } = {};
      try {
        body = await res.json();
      } catch {
        body = {};
      }

      if (!res.ok || !body.success) {
        setErrorField(body.field ?? null);
        throw new Error(
          body.error ||
            "Something went wrong. Please try again or email us directly at hello@thepostpartumot.com",
        );
      }

      setStatus("success");
      form.reset();
      router.push("/thank-you/contact");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly at hello@thepostpartumot.com",
      );
    }
  }

  function fieldProps(field: ContactField, options?: { describedBy?: string; className?: string }) {
    const invalid = errorField === field;
    const describedBy = [options?.describedBy, invalid ? "contact-form-error" : undefined]
      .filter(Boolean)
      .join(" ");
    return {
      className: `${fieldClass} ${
        invalid
          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
          : "border-[#D4D0CC] focus:border-[#469695] focus:ring-[#469695]/20"
      }${options?.className ? ` ${options.className}` : ""}`,
      ...(invalid ? { "aria-invalid": true as const } : {}),
      ...(describedBy ? { "aria-describedby": describedBy } : {}),
    };
  }

  if (status === "success") {
    return (
      <div
        className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 p-8 md:p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-[#469695]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-[#469695]" strokeWidth={1.5} />
        </div>
        <h2
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-bold text-[#0A3660] mb-3 font-serif outline-none"
        >
          Message Sent
        </h2>
        <p className="text-[15px] text-black font-serif leading-relaxed max-w-sm mx-auto">
          Thank you. Your message is on its way. If you need help now, call or text 988.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-base font-bold text-[#0A3660] font-sans underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 p-8 md:p-10">
      <h2 className="text-xl font-bold text-[#0A3660] mb-2 font-sans">
        Send a message
      </h2>
      <p className="text-base text-black font-serif mb-6">
        Fields marked with <span aria-hidden="true">*</span>
        <span className="sr-only">an asterisk</span> are required. Please do not include
        personal health details. For urgent help, call or text 988.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-busy={status === "loading"}
      >
        {/* Honeypot: clipped inside the card, out of the tab order, ignored by assistive tech. */}
        <div className="absolute h-px w-px overflow-hidden whitespace-nowrap" aria-hidden="true">
          <label htmlFor="hp_field">Company website</label>
          <input
            type="text"
            id="hp_field"
            name="hp_field"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-base font-bold text-[#0A3660] mb-2 font-sans"
          >
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            autoComplete="name"
            maxLength={100}
            placeholder="Your full name"
            {...fieldProps("name")}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-base font-bold text-[#0A3660] mb-2 font-sans"
          >
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            placeholder="you@example.com"
            {...fieldProps("email")}
          />
        </div>

        <div>
          <label
            htmlFor="journey"
            className="block text-base font-bold text-[#0A3660] mb-2 font-sans"
          >
            What is this about?
          </label>
          <select
            id="journey"
            name="journey"
            defaultValue=""
            {...fieldProps("journey", { describedBy: "journey-hint" })}
          >
            <option value="">Select one (optional)</option>
            <option value="family">I&apos;m a parent or caregiver</option>
            <option value="podcast">The podcast</option>
            <option value="community">The community waitlist</option>
            <option value="professional">I&apos;m a healthcare professional</option>
            <option value="other">Something else</option>
          </select>
          <p id="journey-hint" className="mt-2 text-base text-black font-serif">
            Optional. This is not a health question.
          </p>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-base font-bold text-[#0A3660] mb-2 font-sans"
          >
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-required="true"
            maxLength={5000}
            placeholder="What would you like Melissa to know? Please leave out health details."
            {...fieldProps("message", { className: "resize-y" })}
          />
        </div>

        {status === "error" && (
          <div
            id="contact-form-error"
            ref={errorRef}
            tabIndex={-1}
            className="bg-red-50 border border-red-200 rounded-lg p-4 outline-none"
            role="alert"
          >
            <p className="text-base text-red-700 font-sans">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2.5 bg-[#0A3660] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#061D37] transition-colors font-sans w-full justify-center min-h-12 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" strokeWidth={2} />
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
