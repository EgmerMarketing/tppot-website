import Link from "next/link";
import DisclaimerLine from "@/components/site/DisclaimerLine";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16 md:px-8">
      <h1 className="font-sans text-4xl font-bold text-[#0A3660]">We can&apos;t find that page</h1>
      <DisclaimerLine />
      <p className="mt-4 font-serif text-lg leading-relaxed text-black">
        The link may be old. You can start with the fourth trimester, or get help now if that is
        why you came.
      </p>
      <ul className="mt-6 space-y-3 font-sans text-base font-bold">
        <li><Link className="text-[#0A3660] underline" href="/">Home</Link></li>
        <li><Link className="text-[#0A3660] underline" href="/start-here">Start Here</Link></li>
        <li><Link className="text-[#0A3660] underline" href="/need-help-now">Need help now</Link></li>
      </ul>
    </article>
  );
}
