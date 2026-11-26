import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
import EpisodeList from "@/components/site/EpisodeList";
import JsonLd from "@/components/site/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { episodes } from "@/lib/podcast";
import { SITE_URL, UPDATED } from "@/lib/site";

const title = "What Is Postpartum Occupational Therapy? How an OT Helps After Birth";
const description =
  "A plain-language look at postpartum occupational therapy: daily life after birth, how it differs from pelvic floor physical therapy, and what this site does not claim.";

export const metadata: Metadata = { title, description };

export default function WhatIsPage() {
  const url = `${SITE_URL}/what-is-postpartum-occupational-therapy`;
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "What Is Postpartum OT?", url }])} />
      <JsonLd data={articleSchema({ headline: title, description, datePublished: UPDATED, url })} />
      <PageHeader
        title={title}
        lede="An occupational therapist looks at the daily jobs after birth: sleep, feeding, washing, and getting out the door. It is education, not a diagnosis."
      />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <KeyPoints
          items={[
            "The activity matters, not only the body part.",
            "Pelvic floor physical therapy is a different service.",
            "This site has no family directory and no prices.",
            "Insurance coverage is not stated here.",
          ]}
        />
        <CtaRow primary="podcast" />
        <LearnMore summary="Wording still needed from Melissa">
          <NeedsMelissa>
            [NEEDS MELISSA: the 40 to 60 word wording for what postpartum occupational therapy is, in your voice. The paragraphs below are general education only.]
          </NeedsMelissa>
        </LearnMore>

        <h2>What does an occupational therapist do for postpartum moms and dads?</h2>
        <p>Getting out of bed, a night shift, and the first week back at work are the kinds of activities.</p>
        <LearnMore>
          <p>Moms, dads, and other caregivers can all be part of that plan. Melissa has not published a menu of family services or prices.</p>
          <NeedsMelissa>
            [NEEDS MELISSA: whether you offer any paid visits or classes for families, and what is in scope of your license.]
          </NeedsMelissa>
        </LearnMore>

        <h2>How is postpartum OT different from pelvic floor physical therapy?</h2>
        <p>Pelvic floor care is a different service. This site does not teach those exercises.</p>
        <LearnMore>
          <p>Occupational therapy here is about how you do the day. One profession does not replace the other.</p>
          <NeedsMelissa>
            [NEEDS MELISSA: confirm this distinction, and whether pelvic floor, diastasis, wrist pain, or C-section recovery are topics you teach or referral only.]
          </NeedsMelissa>
        </LearnMore>

        <h2>How do I find a postpartum occupational therapist?</h2>
        <p>Ask the provider who already knows you. This site has no family directory.</p>
        <LearnMore>
          <p>You can also ask the hospital where you gave birth who they trust.</p>
          <NeedsMelissa>
            [NEEDS MELISSA: if you want a vetted family directory, it is not built. The professional directory idea is only a placeholder on For Professionals.]
          </NeedsMelissa>
        </LearnMore>

        <h2>Is postpartum occupational therapy covered by insurance?</h2>
        <p>This site does not say. Ask your plan and the clinic. Nothing here is a quote.</p>
        <LearnMore>
          <NeedsMelissa>
            [NEEDS MELISSA: insurance coverage. No coverage, price, or billing claim is published.]
          </NeedsMelissa>
        </LearnMore>

        <EpisodeList episodes={[episodes[6]]} />
        <p>
          More of the podcast is on the <Link href="/podcast">podcast page</Link>.
        </p>
        <Byline />
      </div>
    </article>
  );
}
