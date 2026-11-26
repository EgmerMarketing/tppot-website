import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
import { episodes } from "@/lib/podcast";

const title = "Feeding Routines for New Parents: Breastfeeding, Pumping and Bottles";
const description =
  "How families organize breastfeeding, pumping, and bottles. Latch, pain, and milk supply belong with a lactation consultant or your provider.";

export const metadata: Metadata = { title, description };

export default function FeedingPage() {
  return (
    <TopicLayout
      title={title}
      description={description}
      path="/topics/feeding-routines"
      crumb="Feeding"
      primary="waitlist"
      capsule="This page is the household rhythm around feeding, not latch or milk-supply technique."
      episodes={episodes.filter((episode) => episode.number === 1).slice(0, 1)}
      guides={[
        { href: "/blog/tips-to-travel-postpartum", label: "Tips for traveling postpartum" },
        { href: "/resources/tips-to-travel-postpartum.pdf", label: "Download the travel handout" },
      ]}
    >
      <KeyPoints
        items={[
          "Breast, pump, bottle, or a mix can all be the plan.",
          "Write who holds the baby and who gets you water.",
          "A pumping schedule here means who does which part.",
          "Pain, latch, and supply go to a lactation consultant.",
        ]}
      />
      <LearnMore summary="Credential note">
        <NeedsMelissa>
          [NEEDS MELISSA: is a Certified Breastfeeding Specialist credential current? Until you confirm it, this page does not offer breastfeeding technique help.]
        </NeedsMelissa>
      </LearnMore>
      <h2>How do we build a feeding routine?</h2>
      <p>Note how often the baby eats, who is holding them, and who feeds the adult.</p>
      <LearnMore>
        <p>
          A routine can be that short. It does not have to match a clock in a book. If feeding hurts
          or the baby is not feeding well, stop looking for a schedule tip and call a lactation
          consultant or your provider.
        </p>
      </LearnMore>
      <h2>What belongs in a pumping schedule?</h2>
      <p>When you plan to pump, and who handles the bottle, the parts, and the bag.</p>
      <LearnMore>
        <p>
          It is a household plan. It is not a prescription for how many minutes to pump or how much
          milk you should make. Those questions go to a lactation consultant or your provider.
        </p>
      </LearnMore>
      <h2>Who can take the bottle shift?</h2>
      <p>A partner or caregiver can prepare, feed, and clean up the way you were shown.</p>
      <LearnMore>
        <p>Agree on that window before you are both exhausted. This page does not teach bottle amounts.</p>
      </LearnMore>
      <h2>When should I call a lactation consultant?</h2>
      <p>
        Call for pain, a baby too sleepy to feed, or worry about weight. Crisis help is on{" "}
        <Link href="/need-help-now">Need Help Now</Link>.
      </p>
    </TopicLayout>
  );
}
