import type { Metadata } from "next";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import PageHeader from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Reviews are paused",
  robots: { index: false, follow: false },
};

export default function ReviewsPage() {
  return (
    <article className="bg-cream pb-16">
      <PageHeader title="Reviews are paused" />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
      <p className="mt-4 font-serif text-lg leading-relaxed text-black">
        Family words will be shared here only when a family has agreed. The old star funnel is
        turned off, including the path that sent lower ratings to a private email.
      </p>
      <NeedsMelissa>
        [NEEDS MELISSA: whether reviews come back, and in what form. No sample quotes are shown.]
      </NeedsMelissa>
      </div>
    </article>
  );
}
