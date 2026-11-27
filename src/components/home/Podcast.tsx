import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import EpisodePlayer from "@/components/site/EpisodePlayer";
import { type Episode, formatEpisodeDate } from "@/lib/podcast";
import { PODCAST } from "@/lib/schema";

export default function Podcast({ episodes, total }: { episodes: Episode[]; total: number }) {
  return (
    <section id="podcast" aria-labelledby="podcast-title" className="mx-auto max-w-[84rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <BlurFade inView direction="up" offset={14} duration={0.8}>
        <h2 id="podcast-title" className="max-w-[22ch] text-[2.1rem] leading-[1.12] sm:text-[2.75rem]">
          Listen to the Functional Fourth Trimester postpartum podcast
        </h2>
        <p className="mt-5 max-w-[56ch] text-[1.1rem] text-muted">
          Honest conversations about life after a baby, with Melissa and the parents and experts who have been there.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[0.95rem] font-bold">
          <a href={PODCAST.apple} className="inline-flex min-h-11 items-center text-heading underline-offset-4 hover:underline">
            Apple Podcasts
          </a>
          <a href={PODCAST.spotify} className="inline-flex min-h-11 items-center text-heading underline-offset-4 hover:underline">
            Spotify
          </a>
        </div>
      </BlurFade>

      {episodes.length > 0 ? (
        <ol className="mt-12 border-t border-line">
          {episodes.map((episode, i) => (
            <li key={episode.id} className="border-b border-line">
              <BlurFade inView direction="up" offset={14} delay={0.06 * i} duration={0.8}>
                <article className="grid gap-5 py-8 md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-10 lg:py-10">
                  <p aria-hidden="true" className="font-serif text-[3.25rem] italic leading-none text-accent md:text-[4rem]">
                    {episode.number ?? "New"}
                  </p>
                  <div>
                    <h3 className="font-serif text-[1.45rem] font-medium leading-[1.25] sm:text-[1.7rem]">
                      {episode.number ? <span className="sr-only">Episode {episode.number}: </span> : null}
                      {episode.title}
                    </h3>
                    <p className="mt-2 font-sans text-[0.9rem] text-muted">
                      {formatEpisodeDate(episode.date)}
                      {episode.minutes ? `, ${episode.minutes} minutes` : ""}
                    </p>
                    <p className="mt-3 line-clamp-2 max-w-[68ch] text-muted">{episode.summary}</p>
                  </div>
                  {episode.audio && <EpisodePlayer src={episode.audio} title={episode.title} size="lg" />}
                </article>
              </BlurFade>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-12 rounded-[1.5rem] bg-tint p-8 text-muted">
          Episodes are loading slowly right now. You can listen on Apple Podcasts or Spotify in the meantime.
        </p>
      )}

      <Link
        href="/podcast"
        className="group mt-10 inline-flex min-h-11 items-center gap-2 font-sans text-[1rem] font-bold text-heading"
      >
        See all {total > 0 ? `${total} episodes` : "episodes"}
        <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 transition-transform duration-500 ease-(--ease-out-soft) group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
