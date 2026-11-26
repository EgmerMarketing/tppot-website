"use client";

import { useState, type FormEvent } from "react";

export default function ResourceGate({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "ready">("idle");
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

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
          resource: id,
          consent: data.get("consent") === "on",
          hp_field: data.get("hp_field"),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.success || typeof body.downloadUrl !== "string") {
        throw new Error(
          body.error || "We couldn't send that right now. Please email hello@thepostpartumot.com.",
        );
      }
      setDownloadUrl(body.downloadUrl);
      setStatus("ready");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "ready") {
    return (
      <p className="mt-3 font-serif text-base text-black">
        The note is on its way to Melissa. There is no email series.{" "}
        <a className="font-sans text-sm font-bold text-[#0A3660] underline" href={downloadUrl}>
          Download {title}
        </a>
      </p>
    );
  }

  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const consentId = `${id}-consent`;
  const errorId = `${id}-error`;

  return (
    <details className="learn-more mt-3 rounded-xl border border-[#0A3660]/20 bg-[#FAF7F2]">
      <summary>Free with your email</summary>
      <form onSubmit={onSubmit} className="space-y-3 px-4 pb-4" noValidate={false}>
        <p className="font-serif text-base text-black">
          Email is required so Melissa can see who asked for this file. Checking the box is that permission. This does not add you to a newsletter, and no email series is running.
        </p>
        <div className="absolute h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={`${id}-hp`}>Company website</label>
          <input id={`${id}-hp`} name="hp_field" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
        <div>
          <label htmlFor={nameId} className="mb-1 block font-sans text-sm font-bold text-[#0A3660]">
            Name <span className="font-normal text-black">(optional)</span>
          </label>
          <input
            id={nameId}
            name="firstName"
            type="text"
            autoComplete="name"
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
        <label htmlFor={consentId} className="flex min-h-11 items-start gap-3 font-serif text-base text-black">
          <input id={consentId} name="consent" type="checkbox" required className="mt-1 h-5 w-5" />
          Melissa may receive my email address and the name of this file.
        </label>
        {status === "error" && (
          <p id={errorId} role="alert" className="rounded-lg border border-[#0A3660] bg-white p-3 font-sans text-sm text-black">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-solid inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 font-sans text-sm font-bold disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Email me the download"}
        </button>
      </form>
    </details>
  );
}
