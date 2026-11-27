import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import { WhereNext } from "@/components/site/Character";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { LearnMore } from "@/components/site/Scan";
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
      <PageHeader title={title} disclaimer={DISCLAIMER_FULL} emphasis="Education" />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <h2>What is this site?</h2>
        <p>Education about daily life after birth for moms, dads, and caregivers. Not medical care.</p>
        <LearnMore summary="Legal review and the rest of the disclaimer">
          <NeedsMelissa>
            [NEEDS MELISSA: legal review. A lawyer has not signed this page. It is plain language for families, not a finished legal policy.]
          </NeedsMelissa>
          <p>
            Articles and handout placeholders are not mental health treatment, lactation consulting, or physical therapy.
            Reading a page does not create a clinician-patient relationship with Melissa O&apos;Neal
            or Postpartum OT LLC. The site cannot see your chart, your baby, or your home.
          </p>
          <p>
            Links to 988, HRSA, Postpartum Support International, Safe to Sleep, and podcast apps go
            to those organizations. Their pages can change. Phone numbers on this site were checked
            against those organizations&apos; public pages on November 26, 2026.
          </p>
        </LearnMore>
        <h2>What if this is an emergency?</h2>
        <p>
          Call or text 988 in a crisis. Call 911 in an emergency. More contacts are on{" "}
          <Link href="/need-help-now">Need Help Now</Link>. Do not use the contact form for urgent help.
        </p>
      </div>
      <WhereNext links={[{ href: "/need-help-now", label: "Need Help Now" }, { href: "/accessibility", label: "Accessibility" }]} />
    </article>
  );
}
