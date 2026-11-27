import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import EmailSignup from "@/components/site/EmailSignup";
import CircleJoinLink from "@/components/site/CircleJoinLink";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import Section from "@/components/ui/Section";
import { NextStep, WhereNext } from "@/components/site/Character";

const title = "Online Postpartum Support Group for New Parents: Functional Fourth Trimester Circle";

export const metadata: Metadata = {
  title,
  description:
    "The Functional Fourth Trimester Circle is a private Facebook group for parents, caregivers, and healthcare and birth professionals. Join the email waitlist, or request to join and answer three questions.",
};

export default function CommunityPage() {
  return (
    <article className="bg-cream">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Community", url: `${SITE_URL}/community` }])} />
      <PageHeader
        title={title}
        lede="Parents, caregivers, and healthcare and birth professionals can request to join. If you need someone now, use Need Help Now first."
        emphasis="Circle"
        icon="dads"
      />
      <div className="mx-auto max-w-[760px] px-6 py-8 md:px-8">
        <h2 className="max-w-[70ch] font-serif text-3xl font-semibold leading-snug text-[#0A3660] md:text-4xl">
          You&apos;re <span className="font-bold text-[#2f6b6a]">not alone</span> in this.
        </h2>
        <p className="mt-3 font-serif text-lg text-black">
          If you need someone now, call or text 988. A group is not a crisis line.
        </p>
        <NextStep href="/need-help-now">Next: Need Help Now</NextStep>
      </div>
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <h2>What is the Functional Fourth Trimester Circle?</h2>
        <KeyPoints
          items={[
            "Private Facebook group, started November 18, 2026.",
            "Three questions are required before a request is approved.",
            "The email waitlist is how you hear from Melissa.",
            "Live calls are listed Wednesdays, 11:00 to 11:30 AM Mountain Time.",
          ]}
        />
        <LearnMore summary="What is still unconfirmed">
          <p>The build order is the group, then live calls, then an app. No member count is shown. This page does not say the live sessions have started, what they cost, or where to click to join.</p>
          <NeedsMelissa>
            [NEEDS MELISSA: whether a member count may be shown, and the exact wording of the three questions if it should be published. Do not send people to the old professional Facebook group.]
          </NeedsMelissa>
          <NeedsMelissa>
            [NEEDS MELISSA: platform, start date, free or paid, how to sign up, whether replays exist, and guest experts.]
          </NeedsMelissa>
        </LearnMore>

        <h2>What if I feel alone right now?</h2>
        <p>
          A group is not a crisis line. Call or text <a href="tel:988">988</a>, or open{" "}
          <Link href="/need-help-now">Need Help Now</Link>.
        </p>

      </div>
      <Section variant="teal" width="prose" id="waitlist" aria-labelledby="community-waitlist">
        <h2 id="community-waitlist" className="font-serif text-4xl font-semibold text-white">
          Join the waitlist
        </h2>
        <div className="surface-card mt-6 rounded-2xl bg-white p-6 text-black">
          <EmailSignup idPrefix="community" heading="Join the waitlist for the community, coming soon" />
          <CircleJoinLink />
        </div>
      </Section>
      <div className="family-copy mx-auto max-w-[760px] px-6 py-12 md:px-8">
        <h2>Will sessions be recorded?</h2>
        <p>Nothing is promised about replays.</p>
        <LearnMore summary="Consent and the app">
          <NeedsMelissa>
            [NEEDS MELISSA: the consent note for live sessions and any recordings.]
          </NeedsMelissa>
          <NeedsMelissa>
            [NEEDS MELISSA: what an app waitlist may promise. The app is phase 2 and has no page.]
          </NeedsMelissa>
        </LearnMore>
      </div>
      <WhereNext links={[{ href: "/topics/dads-and-partners", label: "Dads and partners" }, { href: "/need-help-now", label: "Need Help Now" }]} />
    </article>
  );
}
