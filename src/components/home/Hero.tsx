import Link from "next/link";
import { BookOpen, Users } from "lucide-react";
import HeroHeadline from "@/components/home/HeroHeadline";
import { BlurFade } from "@/components/ui/blur-fade";
import EpisodePlayer from "@/components/site/EpisodePlayer";
import { type Episode, formatEpisodeDate } from "@/lib/podcast";

export default function Hero({ latest }: { latest: Episode | null }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]" />
      <div className="mx-auto grid max-w-[84rem] gap-16 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-10 lg:pb-32 lg:pt-[72px]">
        <div className="lg:col-span-7">
          <HeroHeadline />

          <BlurFade delay={0.45} direction="up" offset={10} duration={0.6}>
            <p className="t-lead mt-7 max-w-[34rem] text-muted">
              If you&apos;re wondering how anyone gets anything done with a newborn, you&apos;re not failing. You&apos;re in the fourth trimester.
            </p>
          </BlurFade>

          <BlurFade delay={0.55} direction="up" offset={10} duration={0.6}>
            <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Link href="#community" className="btn btn-primary text-[1.0625rem]">
                Join the community waitlist
              </Link>
              <Link href="#podcast" className="btn btn-secondary text-[1.0625rem]">
                Listen to the podcast
              </Link>
            </div>
            <p className="mt-6 max-w-[34rem] font-sans text-[0.875rem] text-muted">
              Educational information, not medical or professional advice. In crisis? Call or text{" "}
              <a href="tel:988" className="tlink text-heading">988</a>.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} direction="up" offset={16} duration={0.7} className="lg:col-span-5">
          <HeroPanel latest={latest} />
        </BlurFade>
      </div>
    </section>
  );
}

function HeroPanel({ latest }: { latest: Episode | null }) {
  return (
    <div className="relative isolate mb-5 mr-5 lg:mr-0">
      {/* The logo frame, drawn large as one line behind the panel. */}
      <div aria-hidden="true" className="frame-line absolute -z-10" style={{ inset: "20px -20px -20px 20px" }} />
      <div className="grid gap-2.5">
        <article className="rounded-frame-card bg-navy p-7 text-on-navy sm:p-8">
          <p className="font-sans text-[0.9375rem] font-bold text-on-navy">Functional Fourth Trimester</p>
          {latest ? (
            <>
              <p className="mt-1 font-sans text-[0.875rem] text-on-navy-muted">
                Newest episode, {formatEpisodeDate(latest.date)}
                {latest.minutes ? `, ${latest.minutes} minutes` : ""}
              </p>
              <p className="mt-5 font-serif text-[1.625rem] leading-[1.25] text-on-navy">{latest.title}</p>
              {latest.audio && <EpisodePlayer src={latest.audio} title={latest.title} tone="navy" className="mt-7" />}
            </>
          ) : (
            <p className="mt-3 text-on-navy-muted">
              Honest conversations about life after a baby.{" "}
              <Link href="/podcast" className="tlink text-on-navy [--link-underline:#8fd0ce]">
                See all episodes
              </Link>
              .
            </p>
          )}
        </article>

        <div className="grid gap-2.5 sm:grid-cols-[1.15fr_1fr]">
          <Link
            href="#community"
            className="rounded-frame-sm border border-line bg-surface p-6 transition-[transform,border-color] duration-[400ms] ease-(--ease-out-soft) hover:-translate-y-[3px] hover:border-echo"
          >
            <span className="grid size-11 place-items-center rounded-frame bg-chip text-icon-chip">
              <Users aria-hidden="true" strokeWidth={1.5} className="size-6" />
            </span>
            <p className="mt-4 font-sans text-[1rem] font-bold text-heading">Community, coming soon</p>
            <p className="mt-1 text-[0.95rem] leading-snug text-muted">Weekly live sessions on Wednesdays.</p>
          </Link>
          <Link
            href="#resources"
            className="rounded-frame-sm bg-teal p-6 text-on-teal transition-transform duration-[400ms] ease-(--ease-out-soft) hover:-translate-y-[3px]"
          >
            <span className="grid size-11 place-items-center rounded-frame bg-[rgb(6_23_38/0.1)]">
              <BookOpen aria-hidden="true" strokeWidth={1.5} className="size-6" />
            </span>
            <p className="mt-4 font-sans text-[1rem] font-bold">Free resources</p>
            <p className="mt-1 text-[0.95rem] leading-snug">Handouts on wake windows, split nights and more.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
