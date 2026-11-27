import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import EpisodePlayer from "@/components/site/EpisodePlayer";
import { type Episode, formatEpisodeDate } from "@/lib/podcast";
import { PODCAST } from "@/lib/schema";

/* Full-bleed navy band. Its curved top-right corner reveals the page above;
   the teal community band slides under its bottom-left corner. */
export default function Podcast({ episodes, total }: { episodes: Episode[]; total: number }) {
  return (
    <section id="podcast" aria-labelledby="podcast-title" className="band band-navy band-upper">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
        <BlurFade inView direction="up" offset={12} duration={0.6}>
          <h2 id="podcast-title" className="t-h2 max-w-[22ch]">
            Listen to the Functional Fourth Trimester postpartum podcast
          </h2>
          <p className="t-lead mt-5 max-w-[56ch] text-on-navy-muted">
            Honest conversations about life after a baby, with Melissa and the parents and experts who have been there.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[0.9375rem]">
            <a href={PODCAST.apple} className="tlink inline-flex min-h-11 items-center text-on-navy">
              Apple Podcasts
            </a>
            <a href={PODCAST.spotify} className="tlink inline-flex min-h-11 items-center text-on-navy">
              Spotify
            </a>
          </div>
        </BlurFade>

        {episodes.length > 0 ? (
          <ol className="mt-12 border-t border-white/14">
            {episodes.map((episode) => (
              <li key={episode.id} className="group border-b border-white/14 transition-colors duration-300 [@media(pointer:fine)]:hover:bg-white/[0.04]">
                <article className="grid gap-5 py-8 md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-10 md:px-4 lg:py-10">
                  <p
                    aria-hidden="true"
                    className="t-num font-serif italic text-on-navy-accent transition-transform duration-300 ease-(--ease-out-soft) group-hover:translate-x-1.5"
                  >
                    {episode.number ?? "New"}
                  </p>
                  <div>
                    <h3 className="t-h3">
                      {episode.number ? <span className="sr-only">Episode {episode.number}: </span> : null}
                      {episode.title}
                    </h3>
                    <p className="mt-2 font-sans text-[0.875rem] tabular-nums text-on-navy-muted">
                      {formatEpisodeDate(episode.date)}
                      {episode.minutes ? `, ${episode.minutes} minutes` : ""}
                    </p>
                    <p className="mt-3 line-clamp-2 max-w-[68ch] text-on-navy-muted">{episode.summary}</p>
                  </div>
                  {episode.audio && <EpisodePlayer src={episode.audio} title={episode.title} size="lg" tone="navy" />}
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-12 rounded-frame-card bg-white/8 p-8 text-on-navy-muted">
            Episodes are loading slowly right now. You can listen on Apple Podcasts or Spotify in the meantime.
          </p>
        )}

        <Link href="/podcast" className="tlink arrow-link mt-10 inline-flex min-h-11 items-center gap-2 text-on-navy">
          See all {total > 0 ? `${total} episodes` : "episodes"}
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
        </Link>
      </div>
    </section>
  );
}
