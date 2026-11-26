import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import Byline from "@/components/site/Byline";
import EmailSignup from "@/components/site/EmailSignup";
import EpisodeList from "@/components/site/EpisodeList";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema, podcastSeriesSchema } from "@/lib/schema";
import {
  APPLE_PODCAST_URL,
  SPOTIFY_PODCAST_URL,
  YOUTUBE_CHANNEL_URL,
  episodes,
} from "@/lib/podcast";
import { SITE_URL } from "@/lib/site";

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
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Podcast", url: `${SITE_URL}/podcast` }])} />
      <JsonLd data={podcastSeriesSchema()} />
      <PageHeader
        title={title}
        lede="Functional Fourth Trimester is Melissa O'Neal's podcast for parents figuring out daily life after birth. The episodes below are the ones already linked from this website."
      />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <NeedsMelissa>
          [NEEDS MELISSA: how often new episodes come out, and whether functionalfourthtrimester.com stays separate or folds into this page. Show notes still link there.]
        </NeedsMelissa>

        <h2 className="mt-8 font-sans text-2xl font-bold text-[#0A3660]">
          Listen on Apple Podcasts, Spotify or YouTube
        </h2>
        <ul className="mt-4 space-y-3 font-sans text-base font-bold">
          <li><a className="text-[#0A3660] underline" href={APPLE_PODCAST_URL}>Apple Podcasts</a></li>
          <li><a className="text-[#0A3660] underline" href={SPOTIFY_PODCAST_URL}>Spotify</a></li>
          <li><a className="text-[#0A3660] underline" href={YOUTUBE_CHANNEL_URL}>YouTube</a></li>
        </ul>
        <NeedsMelissa>
          [NEEDS MELISSA: an embedded player, if you want one on this page. None is embedded, so the inactive Kartra player is not here.]
        </NeedsMelissa>

        <EpisodeList heading="Latest Functional Fourth Trimester episodes" episodes={episodes.slice(0, 3)} />

        <h2 className="mt-10 font-sans text-2xl font-bold text-[#0A3660]">
          Postpartum podcast episodes by topic
        </h2>
        {groups.map((group) => (
          <EpisodeList
            key={group.heading}
            heading={group.heading}
            episodes={episodes.filter((episode) => group.numbers.includes(episode.number))}
          />
        ))}
        <p className="mt-4 font-serif text-base text-black">
          Topic labels above are only a way to browse these seven episodes. They are not a full catalog.
        </p>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            About the host, Melissa O&apos;Neal, OTR/L
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            Melissa O&apos;Neal, OTR/L, is the occupational therapist who hosts the show. A longer
            introduction waits on her own wording.
          </p>
          <NeedsMelissa>
            [Melissa&apos;s story here. Host bio in the third person. No years-of-experience number until she confirms one.]
          </NeedsMelissa>
        </section>
        <Byline />
        <div className="mt-10 rounded-2xl bg-white p-6">
          <EmailSignup idPrefix="podcast" heading="Get new episodes in your inbox" />
        </div>
      </div>
    </article>
  );
}
