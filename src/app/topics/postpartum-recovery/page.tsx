import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";
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
      capsule="Postpartum recovery does not follow one clock. Some tasks feel easier in a few weeks. Others take longer, and that does not mean you are behind. An occupational therapist looks at the daily work of healing: moving, feeding, resting, and caring for a baby. Your provider is the person who can say what is typical for your body."
      episodes={episodesFor("recovery")}
    >
      <h2>How long does postpartum recovery take?</h2>
      <p>
        There is no honest single number. Skin, sleep, mood, stairs, and a return to work can each
        move on a different schedule. A checkup is a chance to ask, not a graduation. If someone
        tells you that you should be “back” by a certain week, you can still ask your own clinician
        what they expect for you.
      </p>
      <h2>What helps in ordinary days while you heal?</h2>
      <p>
        Keep the day smaller than it was. Sit to feed if that is more comfortable. Ask one person
        to own one job, such as food or the laundry. Occupational therapy is interested in those
        setups. It is not a promise that a routine will speed healing.
      </p>
      <h2>C-section recovery at home</h2>
      <p>
        A full page on C-section daily life is planned for later and is not published. Your surgeon
        or midwife&apos;s instructions outrank a general article. Do not take lifting limits or
        exercise ideas from this website.
      </p>
      <NeedsMelissa>
        [NEEDS MELISSA: is C-section daily-life recovery a topic you teach, or referral only? Phase 2 page is not built.]
      </NeedsMelissa>
      <h2>Pelvic floor care is a different profession</h2>
      <p>
        Pelvic floor physical therapy focuses on the pelvic floor. Occupational therapy, as this
        site uses it, looks at how you get through the activities of the day. This page does not
        teach pelvic floor exercises.
      </p>
      <NeedsMelissa>
        [NEEDS MELISSA: confirm whether pelvic floor, diastasis, wrist pain, and C-section recovery are your topics or referral only.]
      </NeedsMelissa>
      <h2>Wrist and thumb pain</h2>
      <p>
        A page on wrist and thumb pain, sometimes called mommy thumb, is phase 2 and is not
        published. Do not start a brace or exercise from a general article without your provider.
      </p>
      <h2>When to call your provider</h2>
      <p>
        Call your provider about pain, bleeding, a fever, a mood you cannot carry, or anything that
        feels wrong. If you think it is an emergency, call{" "}
        <a href="tel:911">911</a>. If you are in crisis, call or text{" "}
        <a href="tel:988">988</a>. More lines are on{" "}
        <Link href="/need-help-now">Need Help Now</Link>. This page does not list diagnosis rules.
      </p>
    </TopicLayout>
  );
}
