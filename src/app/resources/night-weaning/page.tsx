import type { Metadata } from "next";
import Link from "next/link";
import FamilyGuide from "@/components/site/FamilyGuide";

const title = "A gentle guide to night weaning (9 months+)";
const description =
  "A parent version of a night-weaning handout for babies 9 months and older. General information, not a feeding plan and not medical advice.";

export const metadata: Metadata = { title, description };

export default function NightWeaningPage() {
  return (
    <FamilyGuide
      title={title}
      path="/resources/night-weaning"
      lede="Night weaning is a big change for you and your child. Night feeding is described here as natural and normal. Many babies still wake to eat past the first year. Go by your family’s readiness, not by outside pressure."
    >
      <h2>When the handout says you might consider it</h2>
      <ul>
        <li>Your baby is at least 9 months old.</li>
        <li>You, or your family, feel ready for a change.</li>
        <li>Night feeding is wearing on the birthing parent’s wellbeing, or the family’s.</li>
        <li>Your baby is getting enough food during the day.</li>
      </ul>
      <p>Those are the handout’s conditions. They are not a rule that you must start.</p>

      <h2>When the handout says to wait</h2>
      <ul>
        <li>Your baby is waking about every hour. The handout says that can point to something else, and to get professional support. Talk with your baby’s provider.</li>
        <li>Daytime intake does not seem like enough. Talk with your baby’s provider.</li>
        <li>A developmental leap is underway.</li>
        <li>Separation anxiety is high.</li>
      </ul>

      <h2>Daytime preparation in the handout</h2>
      <p>The handout’s feeding sketch, not a prescription for your baby:</p>
      <ul>
        <li>Around 9 months: about 6 feeds a day.</li>
        <li>By 10 months and after: about 4 to 6 feeds, plus 3 solid meals.</li>
        <li>Cluster feeding before bed is listed as something to consider.</li>
        <li>If you are nursing, the handout says to offer both breasts at each feed.</li>
      </ul>
      <p>Talk with your baby’s provider before you treat those numbers as your plan.</p>
      <p>Other comfort the handout names: a gentle back rub, soft singing or humming, quiet rocking, and staying close.</p>

      <h2>Three gentle approaches from the handout</h2>
      <p><strong>Slow reduction.</strong> Shorten the early-morning feed first. Change a little, then wait several days. Watch whether your baby seems ready for another small step.</p>
      <p><strong>Dream feed.</strong> Offer a feed before your own bedtime, while your baby is drowsy. Reduce the amount over time. If they wake at the old time, use the other comforts.</p>
      <p><strong>Emotional support.</strong> Keep the feeding times you chose, offer the same other comfort, stay present when feelings are big, and stretch the gap between feeds bit by bit.</p>

      <h2>While things change</h2>
      <ul>
        <li>Crying can be a normal response to change.</li>
        <li>A calm adult nearby can help a baby feel secure.</li>
        <li>It is okay to pause or slow down.</li>
        <li>The handout says to trust your own read of your child.</li>
      </ul>
      <p>For the room: a steady bedtime rhythm, a comfortable temperature, white noise if it helps, and a calm space.</p>
      <p>For you: ask a partner or family member to help, rest when you can, drink and eat, and notice what your body is asking for.</p>

      <h2>If your child is a toddler</h2>
      <p>
        The handout suggests books about night weaning, playful talk during the day, steady loving limits, another comfort object, and a partner taking some of the night. Name feelings without judging them. Keep your response steady. Offer extra connection in the daytime. Use simple words.
      </p>

      <h2>When to talk with a provider</h2>
      <ul>
        <li>Fever, breast pain, or redness. The handout names these as signs of mastitis. Contact a healthcare provider.</li>
        <li>You think your baby is not getting enough to eat.</li>
        <li>The process is more than you can carry. If you are in crisis, use <Link href="/need-help-now">Need Help Now</Link>.</li>
        <li>You want more strategies than this page.</li>
      </ul>
      <p>Every family is different. You can change the approach. This is general information, not medical advice.</p>
    </FamilyGuide>
  );
}
