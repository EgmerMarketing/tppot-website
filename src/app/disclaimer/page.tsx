import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { DISCLAIMER_FULL, SITE_URL } from "@/lib/site";

const title = "Disclaimer: Education, Not Medical Advice";

export const metadata: Metadata = {
  title,
  description:
    "The Postpartum OT shares educational information for families. It is not medical or professional advice and not an emergency service.",
};

export default function DisclaimerPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Disclaimer", url: `${SITE_URL}/disclaimer` }])} />
      <PageHeader title={title} disclaimer={DISCLAIMER_FULL} />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <NeedsMelissa>
          [NEEDS MELISSA: legal review. A lawyer has not signed this page. It is plain language for families, not a finished legal policy.]
        </NeedsMelissa>
        <h2>What this site is</h2>
        <p>
          Articles, podcast notes, and handout placeholders are general education about daily life
          after birth. They are written for moms, dads, and caregivers. They are not medical advice,
          mental health treatment, lactation consulting, or physical therapy.
        </p>
        <h2>What this site is not</h2>
        <p>
          Reading a page does not create a clinician-patient relationship with Melissa O&apos;Neal
          or Postpartum OT LLC. The site cannot see your chart, your baby, or your home. Your own
          providers are the people who can advise you.
        </p>
        <h2>Emergencies</h2>
        <p>
          If you are in crisis, call or text 988. If you are in an emergency, call 911. More
          contacts are on <Link href="/need-help-now">Need Help Now</Link>. Do not use the contact
          form or the email list for urgent help.
        </p>
        <h2>Other people&apos;s sites</h2>
        <p>
          Links to 988, HRSA, Postpartum Support International, Safe to Sleep, and podcast apps go
          to those organizations. Their pages can change. Phone numbers on this site were checked
          against those organizations&apos; public pages on November 26, 2026.
        </p>
      </div>
    </article>
  );
}
