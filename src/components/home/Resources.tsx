import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

/* Handout titles come from Melissa's existing family handouts (copy doc,
   Nov 4, 2026). Covers are typographic: no stock or AI imagery. */
const handouts = [
  { title: "Sleep Schedules and Wake Windows", topic: "Sleep", tone: "solid" },
  { title: "Split Nights", topic: "Sleep", tone: "tint" },
  { title: "Tummy Time Doesn't Have to Happen on the Floor", topic: "Development", tone: "surface" },
  { title: "Moving to a Crib", topic: "Sleep", tone: "tint" },
  { title: "Conversation Starters", topic: "For family and friends", tone: "surface" },
  { title: "Short Naps", topic: "Sleep", tone: "solid" },
  { title: "Traveling with a Baby", topic: "Daily life", tone: "tint" },
  { title: "Night Weaning", topic: "Feeding", tone: "surface" },
] as const;

export default function Resources() {
  return (
    <section id="resources" aria-labelledby="resources-title" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
        <BlurFade inView direction="up" offset={14} duration={0.8}>
          <h2 id="resources-title" className="max-w-[20ch] text-[2.1rem] leading-[1.12] sm:text-[2.75rem]">
            Free postpartum resources for new parents
          </h2>
          <p className="mt-5 max-w-[54ch] text-[1.1rem] text-muted">
            Simple, practical handouts from Melissa. Print them, save them to your phone, or pass them to whoever is helping you this week.
          </p>
        </BlurFade>
      </div>

      <BlurFade inView direction="up" offset={20} delay={0.1} duration={0.9}>
        <ul
          aria-label="Free handouts"
          tabIndex={0}
          className="rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:px-6"
        >
          {handouts.map((handout) => (
            <li key={handout.title} className="shrink-0 snap-start">
              <Link
                href="/resources"
                className={cn(
                  "group relative flex aspect-[3/4] w-[15.5rem] flex-col rounded-[1.25rem] p-6 ring-1 transition-transform duration-500 ease-(--ease-out-soft) hover:-translate-y-1.5 sm:w-[17rem]",
                  handout.tone === "solid" && "bg-btn text-btn-fg ring-transparent",
                  handout.tone === "tint" && "bg-tint ring-line",
                  handout.tone === "surface" && "bg-surface ring-line",
                )}
              >
                <span aria-hidden="true" className="absolute inset-x-6 top-6 h-px bg-current opacity-25" />
                <span className={cn("mt-4 font-sans text-[0.85rem] font-bold", handout.tone === "solid" ? "text-btn-fg" : "text-muted")}>
                  {handout.topic}
                </span>
                <h3
                  className={cn(
                    "mt-auto font-serif text-[1.55rem] font-medium leading-[1.2]",
                    handout.tone === "solid" && "text-btn-fg",
                  )}
                >
                  {handout.title}
                </h3>
                <span className={cn("mt-5 font-sans text-[0.85rem]", handout.tone === "solid" ? "text-btn-fg" : "text-muted")}>
                  The Postpartum OT
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </BlurFade>

      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
        <Link href="/resources" className="group mt-6 inline-flex min-h-11 items-center gap-2 font-sans text-[1rem] font-bold text-heading">
          See all free resources
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 transition-transform duration-500 ease-(--ease-out-soft) group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
