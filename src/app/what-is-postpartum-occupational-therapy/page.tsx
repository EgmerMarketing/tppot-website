import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import NeedsMelissa from "@/components/site/NeedsMelissa";
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
      <PageHeader title={title} />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <NeedsMelissa>
          [NEEDS MELISSA: the 40 to 60 word wording for what postpartum occupational therapy is, in your voice. The paragraphs below are general education only.]
        </NeedsMelissa>
        <p>
          Occupational therapists help people do the activities that matter in ordinary life.
          After a baby, those activities are often sleep, feeding, washing, leaving the house, and
          splitting the work of the day. That is the idea behind postpartum occupational therapy
          on this site. It is education. It is not a diagnosis and not a replacement for your
          doctor, midwife, or mental health clinician.
        </p>
        <CtaRow primary="podcast" />

        <h2>What does an occupational therapist do for postpartum moms and dads?</h2>
        <p>
          An OT looks at the activity, not only the body part. Getting out of bed to feed the baby,
          setting up a night shift, or planning the first week back at work are activities. Moms,
          dads, and other caregivers can all be part of that plan. Melissa has not published a menu
          of family services or prices.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: whether you offer any paid visits or classes for families, and what is in scope of your license.]
        </NeedsMelissa>

        <h2>Postpartum OT vs pelvic floor physical therapy</h2>
        <p>
          Pelvic floor physical therapy is a different service, focused on the pelvic floor.
          Occupational therapy here is about how you do the day. This site does not teach pelvic
          floor exercises and does not say one profession replaces the other.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: confirm this distinction, and whether pelvic floor, diastasis, wrist pain, or C-section recovery are topics you teach or referral only.]
        </NeedsMelissa>

        <h2>How to find a postpartum occupational therapist</h2>
        <p>
          Ask the provider who already knows you, or the hospital where you gave birth, who they
          trust. This website does not have a directory of therapists for families.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: if you want a vetted family directory, it is not built. The professional directory idea is only a placeholder on For Professionals.]
        </NeedsMelissa>

        <h2>Is postpartum occupational therapy covered by insurance?</h2>
        <NeedsMelissa>
          [NEEDS MELISSA: insurance coverage. No coverage, price, or billing claim is published.]
        </NeedsMelissa>
        <p>
          This site does not say whether a visit is covered. Ask your own plan and the clinic you
          are considering. Nothing here is a quote.
        </p>

        <EpisodeList episodes={[episodes[6]]} />
        <p>
          More of the podcast is on the <Link href="/podcast">podcast page</Link>.
        </p>
        <Byline />
      </div>
    </article>
  );
}
