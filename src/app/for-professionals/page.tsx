import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { LearnMore } from "@/components/site/Scan";
import YoutubeFacade from "@/components/site/YoutubeFacade";
import ResourceGate from "@/components/site/ResourceGate";
import { PROFESSIONAL_HANDOUTS } from "@/lib/handouts";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema, videoObjectSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const youtubeTitle =
  "Website Accessibility and Occupational Therapy | Melissa O’Neal | The Modern Healthcare Lab";
const youtubeUrl = "https://www.youtube.com/watch?v=IxN_xZoQPl0";
const youtubeId = "IxN_xZoQPl0";
const youtubeThumb = "https://i.ytimg.com/vi/IxN_xZoQPl0/hqdefault.jpg";

const episodeTitle =
  "Bringing Care to the Home: How In-Home OT Transforms Postpartum Recovery";
const episodeUrl =
  "https://www.buzzsprout.com/1971868/episodes/16741171-bringing-care-to-the-home-how-in-home-ot-transforms-postpartum-recovery";

const courseTitle =
  "The Fourth Trimester: How Occupational Therapy Can Transform Postpartum Care";
const courseUrl =
  "https://readysetconnect.com/courses/the-fourth-trimester-how-occupational-therapy-can-transform-postpartum-care/";

const title = "Postpartum OT Resources for Healthcare Professionals";

const offers = [
  {
    name: "Vetted directory listing",
    note: "[NEEDS MELISSA: whether a paid directory listing exists, and the price. Not approved. No dollar amount is shown.]",
  },
  {
    name: "Professional community",
    note: "[NEEDS MELISSA: whether a paid professional community exists, and the price. Not approved. No member count is shown.]",
  },
  {
    name: "Apply to lead a support group session",
    note: "[NEEDS MELISSA: whether clinicians can apply to lead a session, and whether applying is free. That has not been confirmed.]",
  },
  {
    name: "Apply to be a podcast guest",
    note: "[NEEDS MELISSA: whether clinicians can apply to be a podcast guest, and whether applying is free. That has not been confirmed.]",
  },
];

export const metadata: Metadata = {
  title,
  description:
    "A single page for healthcare professionals. Family pages are the rest of this site. Offers and prices are not approved yet.",
};

export default function ForProfessionalsPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "For Professionals", url: `${SITE_URL}/for-professionals` },
        ])}
      />
      <JsonLd
        data={videoObjectSchema({
          name: youtubeTitle,
          description: "YouTube video from ReadySetConnect.",
          thumbnailUrl: youtubeThumb,
          embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
          url: youtubeUrl,
          publisherName: "ReadySetConnect",
          publisherUrl: "https://www.youtube.com/@readysetconnect1842",
        })}
      />
      <PageHeader
        title={title}
        lede="This page is for occupational therapists and other clinicians. Nothing here is a live checkout."
      />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <h2>What has Melissa shared?</h2>
        <p>Three items from other sites. Titles are copied from those pages.</p>
        <ul className="panel-navy mt-4 grid gap-4 rounded-2xl bg-navy p-3">
          <li className="surface-card rounded-xl bg-white p-4">
            <p className="font-sans text-lg font-bold text-[#0A3660]">{youtubeTitle}</p>
            <p className="mt-1 font-serif text-base text-black">YouTube video from ReadySetConnect.</p>
            <div className="mt-3">
              <YoutubeFacade videoId={youtubeId} title={youtubeTitle} thumbnailUrl={youtubeThumb} />
            </div>
            <p className="mt-3">
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </p>
          </li>
          <li className="surface-card rounded-xl bg-white p-4">
            <p className="font-sans text-lg font-bold text-[#0A3660]">{episodeTitle}</p>
            <p className="mt-1 font-serif text-base text-black">
              OTs in Pelvic Health Podcast. March 24, 2025. Season 1, episode 119. 32:17.
            </p>
            <p className="mt-3">
              <a href={episodeUrl} target="_blank" rel="noopener noreferrer">
                Listen to the episode
              </a>
            </p>
          </li>
          <li className="surface-card rounded-xl bg-white p-4">
            <p className="font-sans text-lg font-bold text-[#0A3660]">{courseTitle}</p>
            <p className="mt-1 font-serif text-base text-black">
              Instructor: Melissa O’Neal OTR/L. ReadySetConnect course.
            </p>
            <p className="mt-3">
              <a href={courseUrl} target="_blank" rel="noopener noreferrer">
                Open the course page
              </a>
            </p>
            <LearnMore summary="Course description from ReadySetConnect">
              <p>
                The postpartum period, often called the “fourth trimester,” is a crucial yet frequently overlooked phase of maternal recovery and family adjustment. Occupational therapists are uniquely positioned to support mothers and families during this time, addressing challenges related to sleep, feeding, mental health, role transitions, and infant development. This webinar explores how postpartum care aligns with OT’s scope of practice according to the OTPF-4 framework, providing evidence-based strategies to enhance maternal and family well-being. Participants will gain practical knowledge to understand and address the functional needs of postpartum families.
              </p>
            </LearnMore>
          </li>
        </ul>

        <h2>Handouts</h2>
        <p>One file is a direct download. The others are free with your email. Melissa gets your address and the file name. There is no email series.</p>
        <ul className="panel-navy mt-4 grid gap-3 rounded-2xl bg-navy p-3">
          {PROFESSIONAL_HANDOUTS.map((handout) => (
            <li key={handout.id} className="surface-card rounded-xl bg-white p-4">
              <p className="font-sans text-lg font-bold text-[#0A3660]">{handout.title}</p>
              <p className="mt-1 font-serif text-base text-black">{handout.summary}</p>
              {handout.gated ? (
                <ResourceGate id={handout.id} title={handout.title} />
              ) : (
                <p className="mt-3">
                  <a href={handout.file}>Download. No email.</a>
                </p>
              )}
            </li>
          ))}
        </ul>

        <h2>Which options exist?</h2>
        <p>Four ideas are listed. None is approved, and there is no price.</p>
        <ul className="panel-navy mt-4 grid gap-3 rounded-2xl bg-navy p-3 sm:grid-cols-2">
          {offers.map((offer) => (
            <li key={offer.name} className="surface-card rounded-xl bg-white p-4">
              <p className="font-sans font-bold text-[#0A3660]">{offer.name}</p>
              <LearnMore summary="Status">
                <NeedsMelissa>{offer.note}</NeedsMelissa>
              </LearnMore>
            </li>
          ))}
        </ul>
        <LearnMore summary="What still has to be decided">
          <p>
            Older paths, including mentorship pages and the mom-and-baby webinar replay URL, now land here. The webinar is not embedded.
          </p>
          <NeedsMelissa>
            [NEEDS MELISSA: which professional offers stay. Mentorship, the mom-and-baby webinar replay, and the professional Facebook group are an open question, not a menu you can buy today.]
          </NeedsMelissa>
        </LearnMore>
        <p>
          There is no application form until Melissa says these options exist. Use the{" "}
          <Link href="/contact">contact form</Link> if you need to write to her, and please do not
          include a patient&apos;s health details.
        </p>

        <h2>Which Facebook group is for clinicians?</h2>
        <p>
          Not the parent Circle.{" "}
          <a href="https://www.facebook.com/groups/1967522367025806">
            Group previously linked from this site
          </a>
          .
        </p>
        <LearnMore summary="How the two groups differ">
          <p>
            The Circle welcomes parents, caregivers, and healthcare and birth professionals. They request to join from the Community page, and three questions are required for approval.
          </p>
          <NeedsMelissa>
            [NEEDS MELISSA: confirm this is the professional group, that the link should stay, and what the group should be called.]
          </NeedsMelissa>
        </LearnMore>
      </div>
    </article>
  );
}
