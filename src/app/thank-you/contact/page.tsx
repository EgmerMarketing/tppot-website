import type { Metadata } from "next";
import Link from "next/link";
import DisclaimerLine from "@/components/site/DisclaimerLine";

export const metadata: Metadata = {
  title: "Message received",
  robots: { index: false, follow: false },
};

export default function ContactThanksPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16 md:px-8">
      <h1 className="font-sans text-4xl font-bold text-[#0A3660]">Message received</h1>
      <DisclaimerLine />
      <p className="mt-4 font-serif text-lg leading-relaxed text-black">
        Your note is on its way to Melissa. This form is not monitored as an emergency line.
        If you need help now, call or text 988, or call 911.
      </p>
      <p className="mt-4 font-sans text-sm font-bold text-[#0A3660]">
        [NEEDS MELISSA: how soon you reply. No response-time promise is made.]
      </p>
      <p className="mt-6">
        <Link href="/" className="font-sans text-sm font-bold text-[#0A3660] underline">
          Back to the home page
        </Link>
      </p>
    </article>
  );
}
