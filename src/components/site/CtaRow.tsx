import Link from "next/link";

const primary =
  "btn-solid inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-center font-sans text-base font-bold";
const secondary =
  "btn-outline inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-center font-sans text-base font-bold";

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
