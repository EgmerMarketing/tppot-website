import Link from "next/link";

const primary =
  "inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0A3660] px-5 py-3 text-center font-sans text-sm font-bold text-white underline-offset-4 hover:bg-[#061D37]";
const secondary =
  "inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0A3660] bg-white px-5 py-3 text-center font-sans text-sm font-bold text-[#0A3660] hover:bg-[#eef6f6]";

export default function CtaRow({
  primary: primaryKind = "podcast",
}: {
  primary?: "podcast" | "waitlist";
}) {
  const podcast = (
    <Link key="podcast" href="/podcast" className={primaryKind === "podcast" ? primary : secondary}>
      Listen to the Functional Fourth Trimester podcast
    </Link>
  );
  const waitlist = (
    <Link key="waitlist" href="/community#waitlist" className={primaryKind === "waitlist" ? primary : secondary}>
      Join the waitlist for the community, coming soon
    </Link>
  );
  const ordered = primaryKind === "waitlist" ? [waitlist, podcast] : [podcast, waitlist];

  return <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{ordered}</div>;
}
