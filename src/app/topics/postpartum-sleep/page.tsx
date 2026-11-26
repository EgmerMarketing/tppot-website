import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import { ClinicianReview } from "@/components/site/NeedsMelissa";
import { episodesFor } from "@/lib/podcast";

const title = "Postpartum Sleep Deprivation: Getting Through the Newborn Nights";
const description =
  "Practical help for tired parents sharing newborn nights. Safe sleep rules stay with your pediatrician and Safe to Sleep. Not medical advice.";

export const metadata: Metadata = { title, description };

export default function SleepPage() {
  return (
    <TopicLayout
      title={title}
      description={description}
      path="/topics/postpartum-sleep"
      crumb="Sleep"
      primary="podcast"
      capsule="Newborn nights are broken sleep for almost every household. The practical problem is how the adults get enough rest to think and feed the next day. Families often do better when they trade shifts and protect one longer stretch of rest. If you cannot function, tell your provider. Where the baby sleeps is a question for your pediatrician, not for this page."
      episodes={episodesFor("sleep")}
      help={
        <aside className="mt-8 rounded-2xl border-2 border-[#0A3660] bg-white p-5" aria-label="Sleep safety">
          <p className="font-sans text-lg font-bold text-[#0A3660]">Before you change how the baby sleeps</p>
          <p className="mt-2 font-serif text-base leading-relaxed text-black">
            Read the{" "}
            <a className="font-bold text-[#0A3660] underline" href="https://safetosleep.nichd.nih.gov/">
              Safe to Sleep campaign
            </a>{" "}
            and ask your baby&apos;s clinician. If you are so tired you might fall asleep in an unsafe
            place, wake another adult or call for help. In a crisis, call or text{" "}
            <a className="font-bold text-[#0A3660] underline" href="tel:988">988</a>.
          </p>
          <ClinicianReview>
            [CLINICIAN REVIEW: C4, sleeping with a baby on your chest. Do not publish an answer until a clinician reviews it. This box is a placeholder, not guidance.]
          </ClinicianReview>
        </aside>
      }
    >
      <h2>My baby only sleeps when held: what can I do?</h2>
      <p>
        Wanting to be held is common, and it can make the night feel impossible. What you can plan
        tonight is which adult is resting and which adult is on duty. This page does not teach a
        sleep-training method, and it does not tell you to put the baby down in a certain way.
        Ask your pediatrician before you change the sleep plan. For the baby&apos;s sleep surface,
        use{" "}
        <a href="https://safetosleep.nichd.nih.gov/">Safe to Sleep</a>.
      </p>
      <h2>How do we split night shifts with a newborn?</h2>
      <p>
        Pick a block, even three or four hours, when one adult is off duty and lying down. The
        other adult handles that stretch. Trade the next block. If you are parenting alone, ask
        one person to cover one named stretch so you can lie down. If you cannot stay awake, tell
        your provider. Do not use this page as safe-sleep rules.
      </p>
      <h2>Can I sleep with my baby on my chest?</h2>
      <ClinicianReview>
        [CLINICIAN REVIEW: C4, sleeping with a baby on your chest. Quote Safe to Sleep and the AAP only after a clinician approves the wording. Nothing is published in this answer yet.]
      </ClinicianReview>
      <h2>When to call your provider</h2>
      <p>
        Call if you cannot stay awake to care for the baby, if your mood is frightening, or if the
        baby&apos;s clinician has asked you to report a sleep or feeding problem. Crisis support is
        on <Link href="/need-help-now">Need Help Now</Link>. Call or text 988. Call 911 in an emergency.
      </p>
    </TopicLayout>
  );
}
