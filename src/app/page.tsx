import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import Topics from "@/components/home/Topics";
import Podcast from "@/components/home/Podcast";
import Community from "@/components/home/Community";
import Resources from "@/components/home/Resources";
import MeetMelissa from "@/components/home/MeetMelissa";
import Questions from "@/components/home/Questions";
import HelpNow from "@/components/home/HelpNow";
import { getEpisodes } from "@/lib/podcast";
import { podcastSeriesSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "Postpartum Support for New Moms and Dads | The Postpartum OT" },
  description:
    "Postpartum support for new moms and dads from occupational therapist Melissa O'Neal, OTR/L: sleep, feeding, recovery and daily life with a newborn.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const episodes = await getEpisodes();
  const [latest, ...rest] = episodes;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSeriesSchema()) }}
      />
      <Hero latest={latest ?? null} />
      <Topics />
      <Podcast episodes={rest.slice(0, 3)} total={episodes.length} />
      <Community />
      <Resources />
      <MeetMelissa />
      <Questions />
      {/* Teal help band: help lines and the professional line. The navy footer
          slides under its bottom-left corner. */}
      <div className="band band-teal band-upper">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
          <HelpNow />
          <p className="mt-14 border-t border-[rgb(6_23_38/0.25)] pt-6 font-sans text-[1rem]">
            Healthcare professional?{" "}
            <Link href="/for-professionals" className="tlink">
              Find postpartum OT resources
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
