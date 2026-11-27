import Link from "next/link";
import { ArrowUpRight, Baby, CalendarClock, Layers, Milk, Moon, Sprout } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

const topics = [
  {
    href: "/topics/postpartum-sleep",
    title: "Postpartum sleep deprivation",
    body: "Nights in shifts, naps that run short, and a plan that protects sleep for both of you, not only the baby.",
    icon: Moon,
    span: "lg:col-span-7 lg:row-span-2",
    tone: "feature",
  },
  {
    href: "/topics/feeding-routines",
    title: "Feeding routines and pumping",
    body: "Breast, bottle or both, and how feeding fits into a real day.",
    icon: Milk,
    span: "lg:col-span-5",
    tone: "plain",
  },
  {
    href: "/topics/newborn-daily-routine",
    title: "Newborn daily routine",
    body: "How to get anything done with a baby at home, one small rhythm at a time.",
    icon: CalendarClock,
    span: "lg:col-span-5",
    tone: "plain",
  },
  {
    href: "/topics/postpartum-recovery",
    title: "Postpartum recovery",
    body: "Healing while you lift, carry and feed all day.",
    icon: Sprout,
    span: "lg:col-span-3",
    tone: "plain",
  },
  {
    href: "/topics/postpartum-mental-load-identity",
    title: "Postpartum mental load and identity",
    body: "The invisible to-do list, and feeling like yourself again.",
    icon: Layers,
    span: "lg:col-span-4",
    tone: "plain",
  },
  {
    href: "/topics/dads-and-partners",
    title: "Help for dads and partners",
    body: "You're not the helper. You're a parent, and you deserve support too.",
    icon: Baby,
    span: "lg:col-span-5",
    tone: "solid",
  },
] as const;

export default function Topics() {
  return (
    <section aria-labelledby="topics-title" className="mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <BlurFade inView direction="up" offset={14} duration={0.8}>
        <h2 id="topics-title" className="max-w-[20ch] text-[2.1rem] leading-[1.12] sm:text-[2.75rem]">
          Postpartum help for the things that feel hardest right now
        </h2>
        <p className="mt-5 max-w-[56ch] text-[1.1rem] text-muted">
          Melissa O&apos;Neal, OTR/L, looks at the everyday tasks of life with a new baby. Start with the one that is weighing on you today.
        </p>
      </BlurFade>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:auto-rows-[minmax(13rem,auto)] lg:grid-cols-12">
        {topics.map((topic, i) => {
          const Icon = topic.icon;
          return (
            <li key={topic.href} className={cn(topic.span, topic.tone === "feature" && "sm:col-span-2 lg:col-span-7")}>
              <BlurFade inView direction="up" offset={18} delay={0.05 * i} duration={0.8} className="h-full">
                <Link
                  href={topic.href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 ring-1 transition-[transform,box-shadow] duration-500 ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-(--shadow) sm:p-8",
                    topic.tone === "feature" && "bg-tint ring-line",
                    topic.tone === "plain" && "bg-surface ring-line",
                    topic.tone === "solid" && "bg-btn text-btn-fg ring-transparent",
                  )}
                >
                  {topic.tone === "feature" && (
                    <Icon
                      aria-hidden="true"
                      strokeWidth={0.6}
                      className="pointer-events-none absolute -bottom-10 -right-8 size-72 text-accent opacity-[0.14] transition-transform duration-700 ease-(--ease-out-soft) group-hover:-rotate-6"
                    />
                  )}
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-full",
                      topic.tone === "solid" ? "bg-[color-mix(in_oklab,var(--btn-fg)_14%,transparent)]" : "bg-tint text-accent",
                      topic.tone === "feature" && "bg-surface",
                    )}
                  >
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-[1.35rem]" />
                  </span>
                  <h3
                    className={cn(
                      "mt-auto pt-10 text-[1.25rem] leading-snug",
                      topic.tone === "feature" && "font-serif text-[1.9rem] font-medium leading-[1.15] sm:text-[2.4rem]",
                      topic.tone === "solid" && "text-btn-fg",
                    )}
                  >
                    {topic.title}
                  </h3>
                  <p className={cn("mt-2 max-w-[40ch] text-[1rem] leading-relaxed", topic.tone === "solid" ? "text-btn-fg" : "text-muted")}>
                    {topic.body}
                  </p>
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="absolute right-6 top-6 size-5 opacity-60 transition-all duration-500 ease-(--ease-out-soft) group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              </BlurFade>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
