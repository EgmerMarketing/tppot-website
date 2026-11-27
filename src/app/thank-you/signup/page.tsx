import type { Metadata } from "next";
import Link from "next/link";
import DisclaimerLine from "@/components/site/DisclaimerLine";

export const metadata: Metadata = {
  title: "Signup received",
  robots: { index: false, follow: false },
};

export default function SignupThanksPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16 md:px-8">
      <h1 className="font-sans text-4xl font-bold text-[#0A3660]">We received your email</h1>
      <DisclaimerLine />
      <p className="mt-4 font-serif text-lg leading-relaxed text-black">
        This sends your request to Melissa. A confirmed mailing list, and the message that asks
        you to double-confirm, are waiting on the email tool she chooses. You are not on an
        automated list yet.
      </p>
      <p className="mt-4 font-sans text-base font-bold text-[#0A3660]">
        [NEEDS MELISSA: email tool, send frequency, and the welcome email.]
      </p>
      <p className="mt-6">
        <Link href="/podcast" className="font-sans text-base font-bold text-[#0A3660] underline">
          Listen to the podcast while you wait
        </Link>
      </p>
    </article>
  );
}
