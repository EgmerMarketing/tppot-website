"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Check, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Shared email signup. tone "card" sits on a white or night surface; tone
 * "navy" sits on the navy footer in both themes (Maren 9.12).
 */
export default function SignupForm({
  source,
  submitLabel = "Join the waitlist",
  tone = "card",
}: {
  source: string;
  submitLabel?: string;
  tone?: "card" | "navy";
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState(false);
  const navy = tone === "navy";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError("");
    setEmailError(false);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          firstName: form.get("firstName"),
          community: form.get("community") === "on",
          updates: form.get("updates") === "on",
          website: form.get("website"),
          source,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; field?: string };
      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        setEmailError(data.field === "email");
        return;
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setError("We couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className={cn("flex items-start gap-4 rounded-frame-card p-6", navy ? "bg-white/8" : "bg-chip")}
      >
        <span className={cn("grid size-10 shrink-0 place-items-center rounded-frame", navy ? "bg-white text-navy" : "bg-navy text-white")}>
          <Check aria-hidden="true" strokeWidth={2} className="size-5" />
        </span>
        <div>
          <p className={cn("font-sans text-[1.05rem] font-bold", navy ? "text-on-navy" : "text-heading")}>You&apos;re on the list.</p>
          <p className={cn("mt-1", navy ? "text-on-navy-muted" : "text-muted")}>
            Thank you. You&apos;ll hear from Melissa when there&apos;s something to send.
          </p>
        </div>
      </div>
    );
  }

  const labelClass = cn("font-sans text-[0.9375rem] font-bold", navy ? "text-on-navy" : "text-heading");
  const hintClass = cn("font-normal", navy ? "text-on-navy-muted" : "text-muted");
  const inputClass = cn(
    "mt-2 block h-[52px] w-full rounded-frame-input border-[1.5px] px-4 font-sans text-base transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4 focus:ring-[rgb(70_150_149/0.25)]",
    navy
      ? "border-transparent bg-white text-[#13202b] focus:border-[#8fd0ce] aria-[invalid=true]:border-[#fda29b]"
      : "border-[var(--field-border)] bg-surface text-ink focus:border-heading dark:focus:border-[#8fd0ce] aria-[invalid=true]:border-error",
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email <span className={hintClass}>(required)</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={emailError || undefined}
            aria-describedby={emailError ? `${id}-error` : undefined}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            First name <span className={hintClass}>(optional)</span>
          </label>
          <input id={`${id}-name`} name="firstName" type="text" autoComplete="given-name" className={inputClass} />
        </div>
      </div>

      <fieldset className="grid gap-1">
        <legend className="sr-only">What would you like?</legend>
        {[
          { name: "community", label: "Tell me when the community opens" },
          { name: "updates", label: "Send me new podcast episodes and handouts" },
        ].map((option) => (
          <label
            key={option.name}
            className={cn("flex min-h-11 cursor-pointer items-center gap-3 font-sans text-[0.98rem]", navy ? "text-on-navy" : "text-ink")}
          >
            <input
              type="checkbox"
              name={option.name}
              className={cn("size-5 shrink-0 cursor-pointer", navy ? "accent-[#8fd0ce]" : "accent-[var(--btn-bg)]")}
            />
            {option.label}
          </label>
        ))}
      </fieldset>

      {/* Hidden from people; bots that fill every field get dropped quietly. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p id={`${id}-error`} role="alert" className={cn("font-sans text-[0.95rem] font-bold", navy ? "text-[#fda29b]" : "text-error")}>
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" disabled={status === "sending"} className={cn("btn", navy ? "btn-on-navy" : "btn-primary")}>
          {status === "sending" ? "Sending" : submitLabel}
          {status === "sending" && <LoaderCircle aria-hidden="true" strokeWidth={2} className="size-4 animate-spin" />}
        </button>
        <p className={cn("font-sans text-[0.875rem]", navy ? "text-on-navy-muted" : "text-muted")}>
          Unsubscribe anytime. Read the{" "}
          <Link href="/privacy" className={cn("tlink", navy ? "text-on-navy" : "text-heading")}>
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
