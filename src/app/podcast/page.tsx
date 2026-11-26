import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import Byline from "@/components/site/Byline";
import EmailSignup from "@/components/site/EmailSignup";
import EpisodeList from "@/components/site/EpisodeList";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { LearnMore } from "@/components/site/Scan";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema, podcastSeriesSchema } from "@/lib/schema";
import {
  APPLE_PODCAST_URL,
  SPOTIFY_PODCAST_URL,
  YOUTUBE_CHANNEL_URL,
  episodes,
} from "@/lib/podcast";
import { SITE_URL } from "@/lib/site";
import Section from "@/components/ui/Section";

const title = "The Postpartum Podcast for New Parents: Functional Fourth Trimester";

export const metadata: Metadata = {
  title,
  description:
    "Functional Fourth Trimester, a podcast for new parents hosted by Melissa O'Neal, OTR/L. Listen on Apple Podcasts, Spotify, or YouTube.",
};

const groups: { heading: string; numbers: number[] }[] = [
  { heading: "Sleep", numbers: [4, 3] },
  { heading: "Mood", numbers: [2] },
  { heading: "Daily life and development", numbers: [7, 6, 5, 1] },
];

export default function PodcastPage() {
  return (
    <article className="bg-cream">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Podcast", url: `${SITE_URL}/podcast` }])} />
      <JsonLd data={podcastSeriesSchema()} />
      <PageHeader
        title={title}
        lede="Melissa O'Neal, OTR/L, hosts Functional Fourth Trimester. These are the episodes already linked from this site."
      />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <LearnMore summary="Publishing notes">
          <NeedsMelissa>
            [NEEDS MELISSA: how often new episodes come out, and whether functionalfourthtrimester.com stays separate or folds into this page. Show notes still link there.]
          </NeedsMelissa>
          <NeedsMelissa>
            [NEEDS MELISSA: an embedded player, if you want one on this page. None is embedded, so the inactive Kartra player is not here.]
          </NeedsMelissa>
        </LearnMore>

        <h2 className="mt-8 font-sans text-2xl font-bold text-[#0A3660]">
          Listen on Apple Podcasts, Spotify or YouTube
        </h2>
        <ul className="mt-4 space-y-3 font-sans text-base font-bold">
          <li><a className="text-[#0A3660] underline" href={APPLE_PODCAST_URL}>Apple Podcasts</a></li>
          <li><a className="text-[#0A3660] underline" href={SPOTIFY_PODCAST_URL}>Spotify</a></li>
          <li><a className="text-[#0A3660] underline" href={YOUTUBE_CHANNEL_URL}>YouTube</a></li>
        </ul>
        <EpisodeList heading="What are the latest episodes?" episodes={episodes.slice(0, 3)} />

        <h2 className="mt-10 font-sans text-2xl font-bold text-[#0A3660]">
          Which episodes fit which topic?
        </h2>
        <p className="mt-2 font-serif text-base text-black">Seven episodes are linked here. This is not a full catalog.</p>
        <LearnMore summary="Browse by topic">
          {groups.map((group) => (
            <EpisodeList
              key={group.heading}
              heading={group.heading}
              episodes={episodes.filter((episode) => group.numbers.includes(episode.number))}
            />
          ))}
        </LearnMore>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Who is the host?
          </h2>
          <p className="mt-2 font-serif text-base text-black">
            Melissa O&apos;Neal, OTR/L. A longer introduction waits on her own wording.
          </p>
          <LearnMore summary="Host bio placeholder">
            <NeedsMelissa>
              [Melissa&apos;s story here. Host bio in the third person. No years-of-experience number until she confirms one.]
            </NeedsMelissa>
          </LearnMore>
        </section>
        <Byline />
      </div>
      <Section variant="navy" width="prose">
        <div className="surface-card rounded-2xl bg-white p-6 text-black">
          <EmailSignup idPrefix="podcast" heading="Get new episodes in your inbox" />
        </div>
      </Section>
    </article>
  );
}
