"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NeedsMelissa from "@/components/site/NeedsMelissa";

type Status = "idle" | "loading" | "error";

export default function EmailSignup({
  idPrefix,
  heading = "Get new episodes, free handouts and the community launch date",
}: {
  idPrefix: string;
  heading?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          email: data.get("email"),
          community: data.get("community") === "on",
          podcast: data.get("podcast") === "on",
          hp_field: data.get("hp_field"),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.success) {
        throw new Error(
          body.error ||
            "We couldn't send that right now. Please email hello@thepostpartumot.com.",
        );
      }
      form.reset();
      router.push("/thank-you/signup");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  const emailId = `${idPrefix}-email`;
  const nameId = `${idPrefix}-first-name`;
  const communityId = `${idPrefix}-community`;
  const podcastId = `${idPrefix}-podcast`;
  const errorId = `${idPrefix}-error`;

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <h2 className="font-sans text-2xl font-bold leading-snug text-[#0A3660]">{heading}</h2>
      <p className="font-serif text-base leading-relaxed text-black">
        Email is required. First name is optional. Leave health details out of this form.
        Nothing is checked for you.
      </p>
      <NeedsMelissa>
        [NEEDS MELISSA: which email tool replaces Kartra, how often you will write, and the welcome email. This form emails your inbox through Resend. It does not add people to an automated list, and double opt-in is not running yet.]
      </NeedsMelissa>

      <div className="absolute h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-hp`}>Company website</label>
        <input id={`${idPrefix}-hp`} name="hp_field" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div>
        <label htmlFor={nameId} className="mb-1 block font-sans text-sm font-bold text-[#0A3660]">
          First name <span className="font-normal text-black">(optional)</span>
        </label>
        <input
          id={nameId}
          name="firstName"
          type="text"
          autoComplete="given-name"
          maxLength={100}
          className="min-h-12 w-full rounded-lg border border-[#0A3660]/30 bg-white px-3 text-base text-black"
        />
      </div>
      <div>
        <label htmlFor={emailId} className="mb-1 block font-sans text-sm font-bold text-[#0A3660]">
          Email <span className="text-black">(required)</span>
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          aria-describedby={status === "error" ? errorId : undefined}
          className="min-h-12 w-full rounded-lg border border-[#0A3660]/30 bg-white px-3 text-base text-black"
        />
      </div>
      <fieldset className="space-y-3">
        <legend className="mb-2 font-sans text-sm font-bold text-[#0A3660]">
          What should we send? Both start unchecked.
        </legend>
        <label htmlFor={communityId} className="flex min-h-11 items-start gap-3 font-serif text-base text-black">
          <input id={communityId} name="community" type="checkbox" className="mt-1 h-5 w-5" />
          Tell me when the community opens
        </label>
        <label htmlFor={podcastId} className="flex min-h-11 items-start gap-3 font-serif text-base text-black">
          <input id={podcastId} name="podcast" type="checkbox" className="mt-1 h-5 w-5" />
          Send me new podcast episodes and handouts
        </label>
      </fieldset>
      <p className="font-serif text-sm leading-relaxed text-black">
        Unsubscribe anytime once a list exists. Read the{" "}
        <Link href="/legal/privacy-policy" className="font-bold text-[#0A3660] underline">
          privacy policy
        </Link>
        .{" "}
        <span className="font-sans text-sm font-bold text-[#0A3660]">
          [NEEDS MELISSA: update the privacy policy for this signup.]
        </span>
      </p>
      {status === "error" && (
        <p id={errorId} role="alert" className="rounded-lg border border-[#0A3660] bg-white p-3 font-sans text-sm text-black">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0A3660] px-5 py-3 font-sans text-sm font-bold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Join the waitlist"}
      </button>
    </form>
  );
}
