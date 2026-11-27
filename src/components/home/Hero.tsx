import Link from "next/link";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import HeroHeadline from "@/components/home/HeroHeadline";
import { BlurFade } from "@/components/ui/blur-fade";
import EpisodePlayer from "@/components/site/EpisodePlayer";
import { type Episode, formatEpisodeDate } from "@/lib/podcast";

export default function Hero({ latest }: { latest: Episode | null }) {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-[84rem] gap-14 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <HeroHeadline />

          <BlurFade delay={0.7} direction="up" offset={10} duration={0.7}>
            <p className="mt-7 max-w-[34rem] text-[1.2rem] leading-[1.6] text-muted sm:text-[1.3rem]">
              If you&apos;re wondering how anyone gets anything done with a newborn, you&apos;re not failing. You&apos;re in the fourth trimester.
            </p>
          </BlurFade>

          <BlurFade delay={0.85} direction="up" offset={10} duration={0.7}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#community"
                className="group inline-flex h-[3.25rem] items-center gap-3 rounded-full bg-btn pl-6 pr-1.5 font-sans text-[1rem] font-bold text-btn-fg shadow-(--shadow) transition-transform duration-300 ease-(--ease-press) active:scale-[0.98]"
              >
                Join the community waitlist
                <span className="grid size-10 place-items-center rounded-full bg-[color-mix(in_oklab,var(--btn-fg)_16%,transparent)] transition-transform duration-500 ease-(--ease-out-soft) group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
                </span>
              </Link>
              <Link
                href="#podcast"
                className="inline-flex h-[3.25rem] items-center rounded-full border border-line-strong px-6 font-sans text-[1rem] font-bold text-heading transition-colors duration-300 hover:bg-tint"
              >
                Listen to the podcast
              </Link>
            </div>
            <p className="mt-6 max-w-[34rem] font-sans text-[0.88rem] text-muted">
              Educational information, not medical or professional advice. In crisis? Call or text{" "}
              <a href="tel:988" className="font-bold text-heading underline underline-offset-4">988</a>.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.5} direction="up" offset={24} duration={1} className="lg:col-span-5">
          <HeroPanel latest={latest} />
        </BlurFade>
      </div>
    </section>
  );
}

function HeroPanel({ latest }: { latest: Episode | null }) {
  return (
    <div className="rounded-[2rem] bg-tint p-2 ring-1 ring-line">
      <div className="grid gap-2">
        <article className="rounded-[calc(2rem-0.5rem)] bg-surface p-6 shadow-(--shadow) sm:p-7">
          <p className="font-sans text-[0.95rem] font-bold text-heading">Functional Fourth Trimester</p>
          {latest ? (
            <>
              <p className="mt-1 font-sans text-[0.88rem] text-muted">
                Newest episode, {formatEpisodeDate(latest.date)}
                {latest.minutes ? `, ${latest.minutes} minutes` : ""}
              </p>
              <p className="mt-4 font-serif text-[1.4rem] leading-[1.3] text-heading sm:text-[1.55rem]">{latest.title}</p>
              {latest.audio && <EpisodePlayer src={latest.audio} title={latest.title} className="mt-6" />}
            </>
          ) : (
            <p className="mt-3 text-muted">
              Honest conversations about life after a baby.{" "}
              <Link href="/podcast" className="text-heading underline underline-offset-4">See all episodes</Link>.
            </p>
          )}
        </article>

        <div className="grid gap-2 sm:grid-cols-[1.15fr_1fr]">
          <Link
            href="#community"
            className="group rounded-[calc(2rem-0.5rem)] bg-surface p-6 transition-transform duration-500 ease-(--ease-out-soft) hover:-translate-y-0.5"
          >
            <Users aria-hidden="true" strokeWidth={1.5} className="size-6 text-accent" />
            <p className="mt-4 font-sans text-[1rem] font-bold text-heading">Community, coming soon</p>
            <p className="mt-1 text-[0.95rem] leading-snug text-muted">Weekly live sessions on Wednesdays.</p>
          </Link>
          <Link
            href="#resources"
            className="group rounded-[calc(2rem-0.5rem)] bg-btn p-6 text-btn-fg transition-transform duration-500 ease-(--ease-out-soft) hover:-translate-y-0.5"
          >
            <BookOpen aria-hidden="true" strokeWidth={1.5} className="size-6" />
            <p className="mt-4 font-sans text-[1rem] font-bold">Free resources</p>
            <p className="mt-1 text-[0.95rem] leading-snug ">Handouts on wake windows, split nights and more.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
