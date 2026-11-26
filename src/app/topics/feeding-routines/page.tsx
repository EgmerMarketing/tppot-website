import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";
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
      capsule="Feeding a newborn is a rhythm the household has to live with, whether you breastfeed, pump, bottle-feed, or mix those. The practical questions are when it happens and who does which part so the rest of the day still exists. Pain, latch, and milk supply belong with a lactation consultant or your provider. This page is about the routine, not the technique."
      episodes={episodes.filter((episode) => episode.number === 1).slice(0, 1)}
    >
      <NeedsMelissa>
        [NEEDS MELISSA: is a Certified Breastfeeding Specialist credential current? Until you confirm it, this page does not offer breastfeeding technique help.]
      </NeedsMelissa>
      <h2>How do we build a feeding routine?</h2>
      <p>
        Write down the parts that are already true: about how often the baby eats, who is usually
        holding the baby, and who gets the adult a glass of water. A routine can be that short.
        It does not have to match a clock in a book. If feeding hurts or the baby is not feeding
        well, stop looking for a schedule tip and call a lactation consultant or your provider.
      </p>
      <h2>What belongs in a pumping schedule?</h2>
      <p>
        A pumping schedule, for this site, means when you plan to pump and who handles the bottle,
        the parts, and the bag. It is a household plan. It is not a prescription for how many
        minutes to pump or how much milk you should make. Those questions go to a lactation
        consultant or your provider.
      </p>
      <h2>Bottles and the other adult</h2>
      <p>
        A partner or caregiver can own the bottle shift: preparing it the way you were shown,
        feeding, and cleaning up. Agree on that window before you are both exhausted. This page
        does not teach bottle amounts.
      </p>
      <h2>When to call a lactation consultant or your provider</h2>
      <p>
        Call for pain, a baby who is too sleepy to feed, worry about weight, or any feeding
        question that feels medical. Occupational therapy here is the routine around feeding.
        If you are in crisis, use <Link href="/need-help-now">Need Help Now</Link>.
      </p>
    </TopicLayout>
  );
}
