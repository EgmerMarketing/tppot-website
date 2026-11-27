import type { Metadata } from "next";
import AudienceGuide from "@/components/site/AudienceGuide";
import { FFT_SITE_URL } from "@/lib/podcast";

const title = "Postpartum Support for Moms: Recovery, Feeding, Sleep and Daily Life";
const description =
  "A path through this site for moms: recovery, feeding, sleep, mood, daily life, the podcast, and the Circle. Educational information, not medical advice.";

export const metadata: Metadata = { title, description };

export default function ForMomsPage() {
  return (
    <AudienceGuide
      path="/for-moms"
      title={title}
      lede="Pages already on this site about recovery, feeding, sleep, mood, and getting through the day after birth."
      emphasis="Moms"
      groups={[
        {
          heading: "Daily life after birth",
          items: [
            { href: "/topics/postpartum-recovery", label: "Postpartum recovery", note: "There is no single clock. C-section rules stay with your own clinician." },
            { href: "/topics/feeding-routines", label: "Feeding routines and pumping", note: "Who does which part of feeding. Latch questions go to a lactation consultant." },
            { href: "/topics/postpartum-sleep", label: "Postpartum sleep", note: "Night shifts and what this site does not decide about safe sleep." },
            { href: "/topics/postpartum-mental-load-identity", label: "Mental load and identity", note: "The invisible list, and where to go if mood help is urgent." },
            { href: "/topics/newborn-daily-routine", label: "Newborn daily routine", note: "A short list for the day, including going back to work." },
            { href: "/start-here", label: "Start here", note: "Weeks 0 to 6, weeks 6 to 12, and months 3 to 12." },
          ],
        },
        {
          heading: "Guides and the podcast",
          items: [
            { href: "/resources/your-top-postpartum-questions", label: "Your top postpartum questions", note: "A family page about daily life, sleep, feeding posture, and mood." },
            { href: "/resources/night-weaning", label: "Night weaning", note: "When the handout says a family might consider it, and when to talk with a provider." },
            { href: "/resources/adhd-and-new-parenthood", label: "ADHD and new parenthood", note: "Routines, room setup, fatigue, and getting a task started." },
            { href: "/blog/tips-to-travel-postpartum", label: "Traveling postpartum", note: "A blog post from the travel handout, including feeding on an airplane." },
            { href: `${FFT_SITE_URL}/episodes/you-have-choices-feeding-goals-that-fit-real-family-life`, label: "Podcast: feeding goals", note: "Episode 25 on the Functional Fourth Trimester site." },
            { href: `${FFT_SITE_URL}/episodes/return-to-work-sustainable-pumping-plan`, label: "Podcast: return to work and pumping", note: "Episode 20 on the Functional Fourth Trimester site." },
            { href: `${FFT_SITE_URL}/episodes/c-section-recovery-what-to-expect-beyond-the-hospital`, label: "Podcast: C-section recovery", note: "Episode 11 on the Functional Fourth Trimester site." },
            { href: `${FFT_SITE_URL}/episodes/more-than-baby-blues-postpartum-mood-anxiety`, label: "Podcast: more than baby blues", note: "Episode 2 on the Functional Fourth Trimester site." },
          ],
        },
        {
          heading: "People, if you want them",
          items: [
            { href: "/community", label: "The Circle", note: "A private Facebook group. The email waitlist is how you hear from Melissa. Requesting to join asks three questions." },
            { href: "/need-help-now", label: "Need Help Now", note: "Call or text 988. In an emergency, call 911. A group is not a crisis line." },
            { href: "/for-dads", label: "For dads and partners", note: "A separate path for the person supporting you, and for his own adjustment." },
          ],
        },
      ]}
      faqs={[
        {
          question: "What is this page?",
          answer: "A list of pages already on this site about recovery, feeding, sleep, mood, and daily life after birth. It is education, not medical advice.",
        },
        {
          question: "Where do I go if I need someone now?",
          answer: "Open Need Help Now. Call or text 988. In an emergency, call 911.",
        },
      ]}
      other={{ href: "/for-dads", label: "For Dads" }}
    />
  );
}
