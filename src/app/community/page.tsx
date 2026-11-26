import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import EmailSignup from "@/components/site/EmailSignup";
import CircleJoinLink from "@/components/site/CircleJoinLink";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const title = "Online Postpartum Support Group for New Parents: Functional Fourth Trimester Circle";

export const metadata: Metadata = {
  title,
  description:
    "The Functional Fourth Trimester Circle is a private Facebook group for parents that started November 18, 2026. Join the email waitlist, or request to join the group.",
};

export default function CommunityPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Community", url: `${SITE_URL}/community` }])} />
      <PageHeader
        title={title}
        lede="The Circle is for parents and caregivers. It is not a crisis service. If you need someone now, use Need Help Now before you think about joining a group."
      />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <h2>What is the Functional Fourth Trimester Circle?</h2>
        <p>
          The Functional Fourth Trimester Circle is a private Facebook group that started on November 18, 2026.
          The order of the build is the group, then live calls, then an app. No member count is shown.
          The email waitlist below is the way to hear from Melissa. Requesting to join Facebook is optional.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: whether a member count may be shown, and any group rules beyond the membership questions. Do not send parents to the old professional group.]
        </NeedsMelissa>

        <h2>Functional Fourth Trimester Live: weekly postpartum expert sessions</h2>
        <p>
          Live sessions are listed for Wednesdays, 11:00 to 11:30 AM Mountain Time. This page does
          not say the sessions have started, what they cost, or where to click to join.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: platform, start date, free or paid, how to sign up, whether replays exist, and guest experts. No event listing is published until those are confirmed.]
        </NeedsMelissa>

        <h2>Why online postpartum support helps when you feel alone</h2>
        <aside className="rounded-2xl border-2 border-[#0A3660] bg-white p-5">
          <p>
            Other parents can make a hard week feel less private. A group is not medical care, and
            it is not a place to wait if you are in crisis. Call or text{" "}
            <a href="tel:988">988</a>, or open{" "}
            <Link href="/need-help-now">Need Help Now</Link>.
          </p>
        </aside>

        <h2 id="waitlist">Join the waitlist</h2>
        <div className="rounded-2xl bg-white p-6">
          <EmailSignup idPrefix="community" heading="Join the waitlist for the community, coming soon" />
          <CircleJoinLink />
        </div>

        <h2>Recording and consent</h2>
        <NeedsMelissa>
          [NEEDS MELISSA: the consent note for live sessions and any recordings. Nothing is promised about replays.]
        </NeedsMelissa>
        <NeedsMelissa>
          [NEEDS MELISSA: what an app waitlist may promise. The app is phase 2 and has no page.]
        </NeedsMelissa>
      </div>
    </article>
  );
}
