import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

/* No photo is cleared yet, so the portrait frame holds Melissa's initials
   until she approves a headshot (Shot 1 in the plan). The four bracket
   corners come from her brand mark. Copy is third person and uses only
   confirmed facts: OTR/L and host of the podcast. */
const corners = [
  "left-3.5 top-3.5 border-l-2 border-t-2",
  "right-3.5 top-3.5 border-r-2 border-t-2 rounded-tr-[6px]",
  "right-3.5 bottom-3.5 border-b-2 border-r-2",
  "left-3.5 bottom-3.5 border-b-2 border-l-2 rounded-bl-[6px]",
];

export default function MeetMelissa() {
  return (
    <section
      aria-labelledby="melissa-title"
      className="relative isolate mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(32rem_24rem_at_50%_18%,rgb(70_150_149/0.12),transparent_70%)]"
      />
      <BlurFade inView direction="up" offset={12} duration={0.6} className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
        <div aria-hidden="true" className="relative grid size-44 place-items-center rounded-[0_32px_0_32px] bg-navy sm:size-52">
          {corners.map((c) => (
            <span key={c} className={`absolute size-7 border-on-navy-accent ${c}`} />
          ))}
          <span className="font-serif text-[4rem] italic leading-none text-on-navy-accent">MO</span>
        </div>
        <h2 id="melissa-title" className="t-h2 mt-10">
          Meet Melissa O&apos;Neal, OTR/L, postpartum occupational therapist
        </h2>
        <p className="t-lead mt-6 max-w-[58ch] text-muted">
          Melissa is an occupational therapist and the host of the Functional Fourth Trimester podcast. Her focus is daily life after birth: the routines, roles and small tasks that suddenly feel hard, for moms, dads and everyone helping at home.
        </p>
        <Link href="/about" className="btn btn-secondary mt-9">
          Meet Melissa
        </Link>
      </BlurFade>
    </section>
  );
}
