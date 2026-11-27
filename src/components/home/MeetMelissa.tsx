import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

/* No photo is cleared yet, so the portrait slot holds Melissa's initials
   until she approves a headshot (Shot 1 in the plan). Copy is third person
   and uses only confirmed facts: OTR/L and host of the podcast. */
export default function MeetMelissa() {
  return (
    <section aria-labelledby="melissa-title" className="mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <BlurFade inView direction="up" offset={16} duration={0.9} className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
        <div aria-hidden="true" className="grid size-36 place-items-center rounded-full p-2 ring-1 ring-line sm:size-44">
          <div className="grid size-full place-items-center rounded-full bg-tint ring-1 ring-line">
            <span className="font-serif text-[3rem] italic text-accent sm:text-[3.75rem]">MO</span>
          </div>
        </div>
        <h2 id="melissa-title" className="mt-10 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
          Meet Melissa O&apos;Neal, OTR/L, postpartum occupational therapist
        </h2>
        <p className="mt-6 max-w-[58ch] text-[1.15rem] leading-[1.75] text-muted sm:text-[1.25rem]">
          Melissa is an occupational therapist and the host of the Functional Fourth Trimester podcast. Her focus is daily life after birth: the routines, roles and small tasks that suddenly feel hard, for moms, dads and everyone helping at home.
        </p>
        <Link
          href="/about"
          className="group mt-9 inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-6 font-sans text-[1rem] font-bold text-heading transition-colors duration-300 hover:bg-tint"
        >
          Meet Melissa
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 transition-transform duration-500 ease-(--ease-out-soft) group-hover:translate-x-1" />
        </Link>
      </BlurFade>
    </section>
  );
}
