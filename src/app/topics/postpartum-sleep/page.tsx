import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import { ClinicianReview } from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
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
      capsule="Newborn nights are broken sleep. The plan is which adult is resting, not a sleep-training method."
      episodes={episodesFor("sleep")}
      help={
        <aside className="mt-6 rounded-2xl border-2 border-[#0A3660] bg-white p-5" aria-label="Sleep safety">
          <p className="font-sans text-lg font-bold text-[#0A3660]">Before you change how the baby sleeps</p>
          <ul className="mt-3 space-y-2 font-serif text-base text-black">
            <li>
              Read <a className="font-bold text-[#0A3660] underline" href="https://safetosleep.nichd.nih.gov/">Safe to Sleep</a> and ask your baby&apos;s clinician.
            </li>
            <li>If you might fall asleep in an unsafe place, wake another adult.</li>
            <li>
              In a crisis, call or text <a className="font-bold text-[#0A3660] underline" href="tel:988">988</a>.
            </li>
          </ul>
          <p className="mt-3 font-serif text-base text-black">Chest-sleeping guidance is not published. A clinician still has to review it.</p>
          <LearnMore summary="Clinician review: sleeping with a baby on your chest">
            <ClinicianReview>
              [CLINICIAN REVIEW: C4, sleeping with a baby on your chest. Do not publish an answer until a clinician reviews it. This box is a placeholder, not guidance. Quote Safe to Sleep and the AAP only after a clinician approves the wording.]
            </ClinicianReview>
          </LearnMore>
        </aside>
      }
    >
      <KeyPoints
        items={[
          "Trade shifts so one adult is off duty.",
          "Protect one longer block of rest.",
          "This page does not teach sleep training.",
          "Where the baby sleeps is your pediatrician's call.",
        ]}
      />
      <h2>My baby only sleeps when held: what can I do?</h2>
      <p>Plan which adult is resting and which adult is on duty tonight.</p>
      <LearnMore>
        <p>
          Wanting to be held is common, and it can make the night feel impossible. This page does not
          tell you to put the baby down in a certain way. Ask your pediatrician before you change the
          sleep plan. For the baby&apos;s sleep surface, use{" "}
          <a href="https://safetosleep.nichd.nih.gov/">Safe to Sleep</a>.
        </p>
      </LearnMore>
      <h2>How do we split night shifts with a newborn?</h2>
      <p>One adult lies down for a block. The other covers that stretch. Then you trade.</p>
      <LearnMore>
        <p>
          Pick a block, even three or four hours, when one adult is off duty and lying down. If you are
          parenting alone, ask one person to cover one named stretch so you can lie down. If you cannot
          stay awake, tell your provider. Do not use this page as safe-sleep rules.
        </p>
      </LearnMore>
      <h2>Can I sleep with my baby on my chest?</h2>
      <p>No answer is published here until a clinician reviews it. Use the box above.</p>
      <h2>When should I call my provider?</h2>
      <p>
        Call if you cannot stay awake to care for the baby, or if your mood is frightening.{" "}
        <Link href="/need-help-now">Need Help Now</Link>. Call or text 988. Call 911 in an emergency.
      </p>
    </TopicLayout>
  );
}
