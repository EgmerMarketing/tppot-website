import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import NeedsMelissa from "@/components/site/NeedsMelissa";
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
        lede="Melissa O'Neal, OTR/L, is the occupational therapist behind this site. The personal story, the photo, and any credential beyond OTR/L are not filled in until she approves them."
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
          <NeedsMelissa>
            [NEEDS MELISSA: a headshot you approve. Personal photos already on the old site are not used. No stock or AI photo. Initials are the fallback.]
          </NeedsMelissa>
          <NeedsMelissa>
            [NEEDS MELISSA: a navy or SVG logo. The file in this repo sits on a black box, so the header uses a text wordmark.]
          </NeedsMelissa>

          <h2>Why Melissa O&apos;Neal focuses on daily life after birth</h2>
          <NeedsMelissa>
            [Melissa&apos;s story here. Third person, from her own answers. Do not publish the unapproved draft, her child&apos;s name, or any years-of-experience number.]
          </NeedsMelissa>
          <p>
            What can be said now is limited on purpose. She is an occupational therapist, OTR/L,
            and this site is her educational home for parents, dads, and caregivers. The work she
            describes in public materials is daily life after birth: sleep, feeding routines, and
            the jobs of a household. A fuller story waits on her words.
          </p>

          <h2>Credentials and training</h2>
          <p>Shown because it is the credential this redesign was told to treat as sourced: OTR/L.</p>
          <NeedsMelissa>
            [NEEDS MELISSA: which state licenses may appear, CDRAC, OT degree and school, Certified Breastfeeding Specialist, and PCES. None of those are shown. PCES seals from the old site are not displayed.]
          </NeedsMelissa>

          <h2>A partnership note that is not cleared</h2>
          {SHOW_ABILITY_VILLAGE ? (
            <NeedsMelissa>
              [NEEDS MELISSA: the flag is on, but there is still no approved Ability Village sentence or badge in the code. Do not publish a title.]
            </NeedsMelissa>
          ) : (
            <NeedsMelissa>
              [PENDING: Ability Village wording is not cleared. Do not publish a badge, a Director title, or the partner name as a live partnership until Melissa and Adam approve. This block is the placeholder. The public badge is off.]
            </NeedsMelissa>
          )}

          <h2>Host of the Functional Fourth Trimester podcast</h2>
          <p>
            Melissa hosts Functional Fourth Trimester. You can listen from the{" "}
            <Link href="/podcast">podcast page</Link>. How often new episodes come out is not stated here.
          </p>
          <CtaRow primary="podcast" />
          <Byline />
        </div>
      </div>
    </article>
  );
}
