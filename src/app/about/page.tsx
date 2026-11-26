import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { SHOW_ABILITY_VILLAGE, SITE_URL } from "@/lib/site";

const title = "Melissa O'Neal, OTR/L: Postpartum Occupational Therapist Behind The Postpartum OT";

export const metadata: Metadata = {
  title,
  description:
    "Melissa O'Neal, OTR/L, is the occupational therapist behind The Postpartum OT. Her story, other credentials, and photos are waiting on her approval.",
};

export default function AboutPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "About", url: `${SITE_URL}/about` }])} />
      <JsonLd data={personSchema()} />
      <PageHeader
        title={title}
        lede="Melissa O'Neal, OTR/L, is the occupational therapist behind this site. Her story and any other credential are not filled in yet."
      />
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:px-8 lg:grid-cols-[220px_1fr]">
        <div
          className="flex aspect-[4/5] w-full max-w-[220px] items-center justify-center rounded-2xl bg-[#eef6f6]"
          role="img"
          aria-label="Placeholder for a photo of Melissa O'Neal. No photo is published yet."
        >
          <span className="font-sans text-5xl font-bold text-[#0A3660]" aria-hidden="true">MO</span>
        </div>
        <div className="family-copy">
          <KeyPoints
            items={[
              "Credential shown: OTR/L.",
              "Daily life after birth: sleep, feeding routines, household jobs.",
              "No photo yet. The header uses the transparent logo.",
              "She hosts Functional Fourth Trimester.",
            ]}
          />
          <LearnMore summary="Photo, logo, and story notes">
            <NeedsMelissa>
              [NEEDS MELISSA: a headshot you approve. Personal photos already on the old site are not used. No stock or AI photo. Initials are the fallback.]
            </NeedsMelissa>
            <NeedsMelissa>
              [NEEDS MELISSA: an SVG logo, if you want one. The header uses the transparent primary PNG.]
            </NeedsMelissa>
            <NeedsMelissa>
              [Melissa&apos;s story here. Third person, from her own answers. Do not publish the unapproved draft, her child&apos;s name, or any years-of-experience number.]
            </NeedsMelissa>
          </LearnMore>

          <h2>Why does Melissa focus on daily life after birth?</h2>
          <p>A fuller story waits on her own words. What is public is the daily work of a household after birth.</p>

          <h2>Which credentials are shown?</h2>
          <p>OTR/L only.</p>
          <LearnMore summary="Credentials still to confirm">
            <NeedsMelissa>
              [NEEDS MELISSA: which state licenses may appear, CDRAC, OT degree and school, Certified Breastfeeding Specialist, and PCES. None of those are shown. PCES seals from the old site are not displayed.]
            </NeedsMelissa>
          </LearnMore>

          <h2>Is a partnership listed?</h2>
          <p>No. Nothing is cleared to publish.</p>
          <LearnMore summary="Partnership placeholder">
            {SHOW_ABILITY_VILLAGE ? (
              <NeedsMelissa>
                [NEEDS MELISSA: the flag is on, but there is still no approved Ability Village sentence or badge in the code. Do not publish a title.]
              </NeedsMelissa>
            ) : (
              <NeedsMelissa>
                [PENDING: Ability Village wording is not cleared. Do not publish a badge, a Director title, or the partner name as a live partnership until Melissa and Adam approve. This block is the placeholder. The public badge is off.]
              </NeedsMelissa>
            )}
          </LearnMore>

          <h2>Where can I hear her?</h2>
          <p>
            She hosts Functional Fourth Trimester. Listen on the <Link href="/podcast">podcast page</Link>.
          </p>
          <CtaRow primary="podcast" />
          <Byline />
        </div>
      </div>
    </article>
  );
}
