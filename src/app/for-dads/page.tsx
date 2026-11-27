import type { Metadata } from "next";
import AudienceGuide from "@/components/site/AudienceGuide";
import { FFT_SITE_URL } from "@/lib/podcast";

const title = "Postpartum Support for Dads and Partners: How to Help and Look After Yourself";
const description =
  "A path through this site for dads and partners: practical help, sleep, mood, the podcast, and the Circle. Educational information, not medical advice.";

export const metadata: Metadata = { title, description };

export default function ForDadsPage() {
  return (
    <AudienceGuide
      path="/for-dads"
      title={title}
      lede="For dads, and partners are welcome too. These are pages already on this site about helping at home and looking after yourself."
      emphasis="Dads and Partners"
      groups={[
        {
          heading: "How to help, and your own day",
          items: [
            { href: "/topics/dads-and-partners", label: "Dads and partners", note: "Take a real shift. Grandparents can ask which one job helps." },
            { href: "/topics/postpartum-sleep", label: "Sleep", note: "Night shifts are part of the work. Safe sleep stays with the baby's own clinician." },
            { href: "/topics/postpartum-mental-load-identity", label: "Mental load", note: "The invisible list. Urgent mood help is on Need Help Now." },
            { href: "/topics/newborn-daily-routine", label: "A short daily list", note: "Feed, diaper, and one rest. A routine is a list you can repeat." },
            { href: "/resources/better-questions", label: "Better questions", note: "Questions partners, family, and friends can ask a new mom." },
            { href: "/start-here", label: "Start here", note: "The fourth trimester, week by week, including a line for partners." },
          ],
        },
        {
          heading: "Podcast episodes",
          items: [
            { href: `${FFT_SITE_URL}/episodes/from-chaos-to-calm-sleep-strategies-new-parents`, label: "Simple sleep strategies for new parents", note: "Episode 4 on the Functional Fourth Trimester site." },
            { href: `${FFT_SITE_URL}/episodes/more-than-baby-blues-postpartum-mood-anxiety`, label: "More than baby blues", note: "Episode 2 on mood and anxiety after birth." },
            { href: `${FFT_SITE_URL}/episodes/postpartum-gap-building-support-connection-new-parents`, label: "The postpartum gap", note: "Episode 17 on support and connection for new parents." },
            { href: `${FFT_SITE_URL}/episodes/postpartum-self-care-cant-pour-from-empty-cup`, label: "You can't pour from an empty cup", note: "Episode 21 on postpartum self-care." },
            { href: `${FFT_SITE_URL}/episodes/paulas-story-preeclampsia-hellp-and-two-christmas-c-sections`, label: "Paula's story", note: "The notes on this site say what helped afterward included her husband's support and counseling." },
          ],
        },
        {
          heading: "If you need a person",
          items: [
            { href: "/community", label: "The Circle", note: "Parents, caregivers, and healthcare and birth professionals can request to join. Three questions are required." },
            { href: "/need-help-now", label: "Need Help Now", note: "Partners can call or text 988. In an emergency, call 911." },
            { href: "/for-moms", label: "For moms", note: "Recovery, feeding, sleep, and daily life pages gathered for her." },
          ],
        },
      ]}
      faqs={[
        {
          question: "Are partners welcome on this page?",
          answer: "Yes. This page is for dads, and partners are welcome too.",
        },
        {
          question: "Where is the longer page about helping at home?",
          answer: "The dads and partners topic page stays at its own address and is linked above.",
        },
        {
          question: "Where do I go if someone needs help now?",
          answer: "Open Need Help Now. Call or text 988. In an emergency, call 911.",
        },
      ]}
      other={{ href: "/for-moms", label: "For Moms" }}
    />
  );
}
