import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
import { episodesFor } from "@/lib/podcast";

const title = "Postpartum Recovery: How Long It Takes, What's Normal and What Helps";
const description =
  "Postpartum recovery does not follow one clock. What an occupational therapist looks at in daily life, and when to call your own provider.";

export const metadata: Metadata = { title, description };

export default function RecoveryPage() {
  return (
    <TopicLayout
      title={title}
      description={description}
      path="/topics/postpartum-recovery"
      crumb="Recovery"
      primary="podcast"
      capsule="Recovery does not follow one clock. Ask your own provider what fits your body."
      episodes={episodesFor("recovery")}
      guides={[
        { href: "/resources/your-top-postpartum-questions", label: "Your top postpartum questions, answered" },
      ]}
    >
      <KeyPoints
        items={[
          "There is no single number of weeks.",
          "A checkup is a visit, not a finish line.",
          "Keep the day smaller: one job for one person.",
          "C-section and pelvic-floor rules stay with your clinician.",
          "Call 911 or 988 if it feels like an emergency.",
        ]}
      />
      <h2>How long does postpartum recovery take?</h2>
      <p>Skin, sleep, mood, stairs, and work can each move on a different schedule.</p>
      <LearnMore>
        <p>
          There is no honest single number. A checkup is a chance to ask, not a graduation. If someone
          tells you that you should be “back” by a certain week, you can still ask your own clinician
          what they expect for you.
        </p>
      </LearnMore>
      <h2>What helps on an ordinary day?</h2>
      <p>Sit to feed if that is easier. Hand one named job to someone else.</p>
      <LearnMore>
        <p>
          Keep the day smaller than it was. Ask one person to own one job, such as food or the laundry.
          Occupational therapy is interested in those setups. It is not a promise that a routine will speed healing.
        </p>
      </LearnMore>
      <h2>What about C-section recovery at home?</h2>
      <p>Follow your surgeon or midwife. This site does not give lifting limits.</p>
      <LearnMore>
        <p>
          A full page on C-section daily life is planned for later and is not published. Do not take
          exercise ideas from this website.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: is C-section daily-life recovery a topic you teach, or referral only? Phase 2 page is not built.]
        </NeedsMelissa>
      </LearnMore>
      <h2>Is pelvic floor care the same as postpartum OT?</h2>
      <p>No. Pelvic floor physical therapy is a different profession. This page does not teach those exercises.</p>
      <LearnMore>
        <p>
          Pelvic floor physical therapy focuses on the pelvic floor. Occupational therapy, as this site uses it,
          looks at how you get through the activities of the day.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: confirm whether pelvic floor, diastasis, wrist pain, and C-section recovery are your topics or referral only.]
        </NeedsMelissa>
      </LearnMore>
      <h2>What about wrist and thumb pain?</h2>
      <p>That page is not published. Do not start a brace or exercise without your provider.</p>
      <LearnMore>
        <p>
          A page on wrist and thumb pain, sometimes called mommy thumb, is phase 2 and is not published.
        </p>
      </LearnMore>
      <h2>When should I call my provider?</h2>
      <p>
        Call about pain, bleeding, fever, or a mood you cannot carry. Emergency:{" "}
        <a href="tel:911">911</a>. Crisis: <a href="tel:988">988</a>.{" "}
        <Link href="/need-help-now">Need Help Now</Link>.
      </p>
    </TopicLayout>
  );
}
