import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";

export default function NotFound() {
  return (
    <article className="bg-cream pb-16">
      <PageHeader title="We can't find that page" />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
      <p className="mt-4 font-serif text-lg leading-relaxed text-black">
        The link may be old. You can start with the fourth trimester, or get help now if that is
        why you came.
      </p>
      <ul className="mt-6 space-y-3 font-sans text-base font-bold">
        <li><Link className="text-[#0A3660] underline" href="/">Home</Link></li>
        <li><Link className="text-[#0A3660] underline" href="/start-here">Start Here</Link></li>
        <li><Link className="text-[#0A3660] underline" href="/need-help-now">Need help now</Link></li>
      </ul>
      </div>
    </article>
  );
}
