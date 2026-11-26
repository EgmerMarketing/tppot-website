import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import { ClinicianReview } from "@/components/site/NeedsMelissa";
import { episodesFor } from "@/lib/podcast";

const title = "Postpartum Mental Load and Identity: Feeling Like Yourself Again";
const description =
  "The invisible list after birth, and the shift in who you are. Anxiety versus depression is on Need Help Now. This page is education, not a diagnosis.";

export const metadata: Metadata = { title, description };

export default function MentalLoadPage() {
  return (
    <TopicLayout
      title={title}
      description={description}
      path="/topics/postpartum-mental-load-identity"
      crumb="Mental load and identity"
      primary="waitlist"
      capsule="The mental load is the list other people do not see: what the baby needs, what you need, and what still has to happen today. Many parents also feel unlike themselves after birth. That shift is not a grade. If worry, sadness, or thoughts that scare you are taking over, leave this page and use Need Help Now. This article is about the daily load, not a diagnosis."
      episodes={episodesFor("mood")}
      help={
        <aside className="mt-8 rounded-2xl border-2 border-[#0A3660] bg-white p-5">
          <p className="font-sans text-lg font-bold text-[#0A3660]">If this is more than a heavy day</p>
          <p className="mt-2 font-serif text-base leading-relaxed text-black">
            Call or text <a className="font-bold underline" href="tel:988">988</a> if you are in crisis.
            For support that is not a crisis line, call or text 1-833-852-6262. The comparison of
            anxiety and depression lives on{" "}
            <Link className="font-bold text-[#0A3660] underline" href="/need-help-now">Need Help Now</Link>,
            because it is outside a routines article.
          </p>
          <ClinicianReview>
            [CLINICIAN REVIEW: B3, intrusive thoughts. Do not publish this section until a clinician reviews the wording. This is a placeholder, not information for parents.]
          </ClinicianReview>
        </aside>
      }
    >
      <h2>What is the postpartum mental load?</h2>
      <p>
        It is the tracking: diapers, the next feed, the appointment, whether anyone has eaten.
        Occupational therapy treats that list as real work. One way to shrink it is to move a
        single item onto another adult, out loud, instead of hoping they notice.
      </p>
      <h2>Why don&apos;t I feel like myself?</h2>
      <p>
        Birth changes the day, the body, and the roles in a home. Some people use the word
        matrescence for the identity shift of becoming a mother. Feeling unfamiliar is not, by
        itself, a diagnosis. A short note on that word is on the{" "}
        <Link href="/matrescence">matrescence</Link> page. If the feeling includes hopelessness,
        panic, or thoughts of harm, use Need Help Now and your provider.
      </p>
      <h2>When to call your provider</h2>
      <p>
        Call your provider or a mental health clinician if you want help sorting out your mood,
        even if you are not sure it “counts.” Call or text 988 if you are in crisis. Call 911 if
        someone may be in danger. Do not wait for this website to tell you the difference.
      </p>
    </TopicLayout>
  );
}
