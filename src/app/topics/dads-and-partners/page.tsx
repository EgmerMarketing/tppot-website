import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";

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
      capsule="Partners and dads are part of postpartum, not visitors to it. Help looks like taking a real shift, doing a task without being asked for every step, and checking your own sleep and mood. You do not have to wait until she asks. Grandparents and other caregivers can use the same idea: ask what would actually lighten today, then do that one thing."
      episodes={[]}
    >
      <h2>How do I support my partner postpartum?</h2>
      <p>
        Take a block of the day or the night and be the person who is on. Feed the baby the way
        you were shown, or hold the baby so she can shower and eat. Learn one job completely,
        such as bottles or laundry, so she does not have to manage you while you do it. More on
        nights is on the <Link href="/topics/postpartum-sleep">sleep</Link> page.
      </p>
      <h2>How do partners look after themselves?</h2>
      <p>
        Your sleep and mood matter too. Trade a rest. Eat. If you feel angry, numb, or scared,
        tell someone. Partners and family can use the National Maternal Mental Health Hotline,
        1-833-852-6262. That is a support line, not a crisis line. In a crisis, call or text 988.
        HRSA says family members are encouraged to contact the hotline.
      </p>
      <h2>Grandparents and caregivers</h2>
      <p>
        The most useful sentence is “What one job should I take today?” Then do it their way.
        Holding the baby so a parent can sleep is often worth more than advice. If you are unsure
        where the baby should sleep, ask the parents and follow the plan they made with their
        clinician. Do not introduce a different sleep setup.
      </p>
      <h2>Parents and caregivers with disabilities</h2>
      <NeedsMelissa>
        [NEEDS MELISSA: what you want to say to parents and caregivers with disabilities. No services, accommodations, or partnership claims are published here.]
      </NeedsMelissa>
      <p>
        Daily routines can take extra planning when someone in the family has a disability. This
        site does not yet describe specific supports. Your provider and the people who already
        know your access needs are the right place for a plan.
      </p>
      <h2>When to call your provider</h2>
      <p>
        Call your own clinician about your mood, injury, or exhaustion. If someone in the home may
        be in danger, call 911. Lines for parents and partners are listed together on{" "}
        <Link href="/need-help-now">Need Help Now</Link>.
      </p>
      <h2>Episodes for dads and partners</h2>
      <p>
        None of the episodes currently listed on this website is specifically for dads.
      </p>
      <NeedsMelissa>
        [NEEDS MELISSA: add a dads-and-partners episode if one exists. Do not invent one.]
      </NeedsMelissa>
    </TopicLayout>
  );
}
