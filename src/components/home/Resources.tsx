import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

/* Handout titles come from Melissa's existing family handouts (copy doc,
   Nov 4, 2026). Covers are typographic: no stock or AI imagery. */
const handouts = [
  { title: "Sleep Schedules and Wake Windows", topic: "Sleep" },
  { title: "Split Nights", topic: "Sleep" },
  { title: "Tummy Time Doesn't Have to Happen on the Floor", topic: "Development" },
  { title: "Moving to a Crib", topic: "Sleep" },
  { title: "Conversation Starters", topic: "For family and friends" },
  { title: "Short Naps", topic: "Sleep" },
  { title: "Traveling with a Baby", topic: "Daily life" },
  { title: "Night Weaning", topic: "Feeding" },
] as const;

const tones = ["navy", "teal", "surface"] as const;

export default function Resources() {
  return (
    <section id="resources" aria-labelledby="resources-title" className="pb-20 pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
        <BlurFade inView direction="up" offset={12} duration={0.6}>
          <h2 id="resources-title" className="t-h2 max-w-[20ch]">
            Free postpartum resources for new parents
          </h2>
          <p className="t-lead mt-5 max-w-[54ch] text-muted">
            Simple, practical handouts from Melissa. Print them, save them to your phone, or pass them to whoever is helping you this week.
          </p>
        </BlurFade>
      </div>

      <BlurFade inView direction="up" offset={16} delay={0.1} duration={0.7}>
        <ul aria-label="Free handouts" tabIndex={0} className="rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-2 sm:px-6">
          {handouts.map((handout, i) => {
            const tone = tones[i % tones.length];
            return (
              <li key={handout.title} className="shrink-0 snap-start">
                <Link
                  href="/resources"
                  className={cn(
                    "relative flex aspect-[3/4] w-[15.5rem] flex-col rounded-frame-card p-6 transition-transform duration-[400ms] ease-(--ease-out-soft) hover:-translate-y-1.5 sm:w-[17rem]",
                    tone === "navy" && "bg-navy text-on-navy dark:border dark:border-white/8",
                    tone === "teal" && "bg-teal text-on-teal",
                    tone === "surface" && "border border-line bg-surface text-heading",
                  )}
                >
                  {/* One bracket corner from the brand mark */}
                  <span aria-hidden="true" className="absolute left-5 top-5 size-5 border-l-[1.5px] border-t-[1.5px] border-current opacity-50" />
                  <span
                    className={cn(
                      "mt-8 font-sans text-[0.875rem]",
                      tone === "navy" ? "text-on-navy-muted" : tone === "teal" ? "text-on-teal" : "text-muted",
                    )}
                  >
                    {handout.topic}
                  </span>
                  <h3 className={cn("t-h3 mt-auto", tone === "navy" && "text-on-navy", tone === "teal" && "text-on-teal")}>
                    {handout.title}
                  </h3>
                  <span
                    className={cn(
                      "mt-5 font-sans text-[0.875rem]",
                      tone === "navy" ? "text-on-navy-muted" : tone === "teal" ? "text-on-teal" : "text-muted",
                    )}
                  >
                    The Postpartum OT
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </BlurFade>

      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
        <Link href="/resources" className="tlink arrow-link mt-6 inline-flex min-h-11 items-center gap-2 text-heading">
          See all free resources
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
        </Link>
      </div>
    </section>
  );
}
