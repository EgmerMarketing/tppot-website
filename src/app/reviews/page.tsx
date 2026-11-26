import type { Metadata } from "next";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import DisclaimerLine from "@/components/site/DisclaimerLine";

export const metadata: Metadata = {
  title: "Reviews are paused",
  robots: { index: false, follow: false },
};

export default function ReviewsPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16 md:px-8">
      <h1 className="font-sans text-4xl font-bold text-[#0A3660]">Reviews are paused</h1>
      <DisclaimerLine />
      <p className="mt-4 font-serif text-lg leading-relaxed text-black">
        Family words will be shared here only when a family has agreed. The old star funnel is
        turned off, including the path that sent lower ratings to a private email.
      </p>
      <NeedsMelissa>
        [NEEDS MELISSA: whether reviews come back, and in what form. No sample quotes are shown.]
      </NeedsMelissa>
    </article>
  );
}
