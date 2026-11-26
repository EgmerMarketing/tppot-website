import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import { ClinicianReview } from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
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
      capsule="The mental load is the list other people do not see. Feeling unlike yourself is not a grade, and it is not a diagnosis."
      episodes={episodesFor("mood")}
      guides={[
        { href: "/resources/adhd-and-new-parenthood", label: "ADHD and new parenthood: practical support" },
        { href: "/resources/adhd-postpartum-check-in", label: "ADHD postpartum check-in" },
      ]}
      help={
        <aside className="mt-6 rounded-2xl border-2 border-[#0A3660] bg-white p-5">
          <p className="font-sans text-lg font-bold text-[#0A3660]">If this is more than a heavy day</p>
          <ul className="mt-3 space-y-2 font-serif text-base text-black">
            <li>Crisis: call or text <a className="font-bold underline" href="tel:988">988</a>.</li>
            <li>Support line, not a crisis line: call or text 1-833-852-6262.</li>
            <li>
              Anxiety versus depression is on <Link className="font-bold text-[#0A3660] underline" href="/need-help-now">Need Help Now</Link>.
            </li>
          </ul>
          <p className="mt-3 font-serif text-base text-black">Intrusive-thought wording is not published until a clinician reviews it.</p>
          <LearnMore summary="Clinician review: intrusive thoughts">
            <ClinicianReview>
              [CLINICIAN REVIEW: B3, intrusive thoughts. Do not publish this section until a clinician reviews the wording. This is a placeholder, not information for parents.]
            </ClinicianReview>
          </LearnMore>
        </aside>
      }
    >
      <KeyPoints
        items={[
          "The list is real work: feeds, appointments, who has eaten.",
          "Move one item onto another adult, out loud.",
          "Feeling unfamiliar has a name some people use: matrescence.",
          "Hopelessness, panic, or thoughts of harm: use Need Help Now.",
        ]}
      />
      <h2>What is the postpartum mental load?</h2>
      <p>It is the tracking nobody else can see.</p>
      <LearnMore>
        <p>
          Diapers, the next feed, the appointment, whether anyone has eaten. Occupational therapy
          treats that list as real work. One way to shrink it is to move a single item onto another
          adult, out loud, instead of hoping they notice.
        </p>
      </LearnMore>
      <h2>Why don&apos;t I feel like myself?</h2>
      <p>Birth changes the day, the body, and the roles at home. That is not, by itself, a diagnosis.</p>
      <LearnMore>
        <p>
          Some people use the word matrescence for the identity shift of becoming a mother. A short
          note is on the <Link href="/matrescence">matrescence</Link> page. If the feeling includes
          hopelessness, panic, or thoughts of harm, use Need Help Now and your provider.
        </p>
      </LearnMore>
      <h2>When should I call my provider?</h2>
      <p>Call even if you are not sure it “counts.” Crisis: 988. Danger: 911.</p>
    </TopicLayout>
  );
}
