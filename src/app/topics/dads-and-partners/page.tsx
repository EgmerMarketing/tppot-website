import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";

const title = "Postpartum for Dads and Partners: How to Help Her and Look After Yourself";
const description =
  "How dads, partners, grandparents, and caregivers can take a real shift after birth, and where to get help for their own mood.";

export const metadata: Metadata = { title, description };

export default function PartnersPage() {
  return (
    <TopicLayout
      title={title}
      description={description}
      path="/topics/dads-and-partners"
      crumb="Dads and partners"
      primary="podcast"
      capsule="Take a real shift. Do not wait to be asked for every step. Check your own sleep and mood too."
      episodes={[]}
      guides={[
        { href: "/resources/better-questions", label: "Better questions than how are you?" },
      ]}
    >
      <KeyPoints
        items={[
          "Be the person who is on for a block of day or night.",
          "Learn one job completely, such as bottles or laundry.",
          "Your mood matters. Crisis line: 988. Support line: 1-833-852-6262.",
          "Grandparents: ask “What one job should I take today?”",
          "None of the listed episodes is specifically for dads.",
        ]}
      />
      <h2>How do I support my partner postpartum?</h2>
      <p>Hold the baby so she can shower and eat, or feed the baby the way you were shown.</p>
      <LearnMore>
        <p>
          Take a block of the day or the night and be the person who is on. Learn one job completely
          so she does not have to manage you while you do it. More on nights is on the{" "}
          <Link href="/topics/postpartum-sleep">sleep</Link> page.
        </p>
      </LearnMore>
      <h2>How do partners look after themselves?</h2>
      <p>Trade a rest. Eat. If you feel angry, numb, or scared, tell someone.</p>
      <LearnMore>
        <p>
          Partners and family can use the National Maternal Mental Health Hotline, 1-833-852-6262.
          That is a support line, not a crisis line. In a crisis, call or text 988. HRSA says family
          members are encouraged to contact the hotline.
        </p>
      </LearnMore>
      <h2>How can grandparents and caregivers help?</h2>
      <p>Do one job their way. Do not change the baby&apos;s sleep setup.</p>
      <LearnMore>
        <p>
          Holding the baby so a parent can sleep is often worth more than advice. If you are unsure
          where the baby should sleep, ask the parents and follow the plan they made with their clinician.
        </p>
      </LearnMore>
      <h2>What if a parent or caregiver has a disability?</h2>
      <p>Extra planning may be needed. This site does not describe specific supports yet.</p>
      <LearnMore>
        <NeedsMelissa>
          [NEEDS MELISSA: what you want to say to parents and caregivers with disabilities. No services, accommodations, or partnership claims are published here.]
        </NeedsMelissa>
        <p>Your provider and the people who already know your access needs are the right place for a plan.</p>
      </LearnMore>
      <h2>When should I call a provider?</h2>
      <p>
        Call your own clinician about mood, injury, or exhaustion. If someone may be in danger, call 911.{" "}
        <Link href="/need-help-now">Need Help Now</Link> lists lines for parents and partners together.
      </p>
      <h2>Is there a podcast episode for dads?</h2>
      <p>Not among the episodes listed on this website.</p>
      <LearnMore>
        <NeedsMelissa>
          [NEEDS MELISSA: add a dads-and-partners episode if one exists. Do not invent one.]
        </NeedsMelissa>
      </LearnMore>
    </TopicLayout>
  );
}
