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
    span: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
    tone: "navy",
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
    tone: "teal",
  },
] as const;

export default function Topics() {
  return (
    <section aria-labelledby="topics-title" className="mx-auto max-w-[84rem] px-4 pb-20 pt-[72px] sm:px-6 lg:px-10 lg:pb-28 lg:pt-24">
      <BlurFade inView direction="up" offset={12} duration={0.6}>
        <h2 id="topics-title" className="t-h2 max-w-[20ch]">
          Postpartum help for the things that feel hardest right now
        </h2>
        <p className="t-lead mt-5 max-w-[56ch] text-muted">
          Melissa O&apos;Neal, OTR/L, looks at the everyday tasks of life with a new baby. Start with the one that is weighing on you today.
        </p>
      </BlurFade>

      <BlurFade inView direction="up" offset={16} duration={0.7}>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:auto-rows-[minmax(13rem,auto)] lg:grid-cols-12">
          {topics.map((topic) => {
            const Icon = topic.icon;
            const navy = topic.tone === "navy";
            const teal = topic.tone === "teal";
            return (
              <li key={topic.href} className={topic.span}>
                <Link
                  href={topic.href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-frame-card p-7 transition-[transform,border-color] duration-[400ms] ease-(--ease-out-soft) hover:-translate-y-1 sm:p-8",
                    navy && "bg-navy text-on-navy dark:border dark:border-white/8",
                    teal && "bg-teal text-on-teal",
                    !navy && !teal && "border border-line bg-surface hover:border-echo",
                  )}
                >
                  {navy && (
                    <Icon
                      aria-hidden="true"
                      strokeWidth={0.6}
                      className="pointer-events-none absolute -right-12 -top-14 size-72 text-on-navy-accent opacity-[0.16]"
                    />
                  )}
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-frame",
                      navy && "bg-white/10 text-on-navy-accent",
                      teal && "bg-[rgb(6_23_38/0.1)]",
                      !navy && !teal && "bg-chip text-icon-chip",
                    )}
                  >
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-[1.35rem]" />
                  </span>
                  <h3 className={cn("mt-auto pt-10", navy ? "t-h3-feature text-on-navy" : "t-h3", teal && "text-on-teal")}>
                    {topic.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 max-w-[40ch] text-[1rem] leading-relaxed",
                      navy ? "text-on-navy-muted" : teal ? "text-on-teal" : "text-muted",
                    )}
                  >
                    {topic.body}
                  </p>
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="absolute right-6 top-6 size-5 opacity-70 transition-[transform,opacity] duration-[400ms] ease-(--ease-out-soft) group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </BlurFade>
    </section>
  );
}
