"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";

type Status = "idle" | "sending" | "done" | "error";

export default function SignupForm({ source, submitLabel = "Join the waitlist" }: { source: string; submitLabel?: string }) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState(false);

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
      <div role="status" className="flex items-start gap-4 rounded-[1.25rem] bg-tint p-6">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-btn text-btn-fg">
          <Check aria-hidden="true" strokeWidth={2} className="size-5" />
        </span>
        <div>
          <p className="font-sans text-[1.05rem] font-bold text-heading">You&apos;re on the list.</p>
          <p className="mt-1 text-muted">Thank you. You&apos;ll hear from Melissa when there&apos;s something to send.</p>
        </div>
      </div>
    );
  }

  const inputClass =
    "mt-2 block h-12 w-full rounded-xl border border-line-strong bg-surface px-4 font-sans text-base text-ink transition-[border-color,box-shadow] duration-300 placeholder:text-muted focus:border-heading focus:outline-none focus:ring-4 focus:ring-[color-mix(in_oklab,var(--accent)_22%,transparent)] aria-[invalid=true]:border-[#b42318]";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-email`} className="font-sans text-[0.95rem] font-bold text-heading">
            Email <span className="font-normal text-muted">(required)</span>
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
          <label htmlFor={`${id}-name`} className="font-sans text-[0.95rem] font-bold text-heading">
            First name <span className="font-normal text-muted">(optional)</span>
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
          <label key={option.name} className="flex min-h-11 cursor-pointer items-center gap-3 font-sans text-[0.98rem] text-ink">
            <input
              type="checkbox"
              name={option.name}
              className="size-5 shrink-0 cursor-pointer rounded-md accent-[var(--btn-bg)]"
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
        <p id={`${id}-error`} role="alert" className="font-sans text-[0.95rem] font-bold text-[#b42318] [[data-theme=dark]_&]:text-[#fda29b]">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-12 items-center gap-3 rounded-full bg-btn pl-6 pr-1.5 font-sans text-[0.98rem] font-bold text-btn-fg transition-transform duration-300 ease-(--ease-press) active:scale-[0.98] disabled:opacity-70"
        >
          {status === "sending" ? "Sending" : submitLabel}
          <span className="grid size-9 place-items-center rounded-full bg-[color-mix(in_oklab,var(--btn-fg)_16%,transparent)] transition-transform duration-300 ease-(--ease-out-soft) group-hover:translate-x-0.5">
            {status === "sending" ? (
              <LoaderCircle aria-hidden="true" strokeWidth={2} className="size-4 animate-spin" />
            ) : (
              <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
            )}
          </span>
        </button>
        <p className="font-sans text-[0.88rem] text-muted">
          Unsubscribe anytime. Read the{" "}
          <Link href="/privacy" className="text-heading underline underline-offset-4">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
