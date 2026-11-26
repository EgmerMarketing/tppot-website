import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { episodesFor } from "@/lib/podcast";

const title = "Newborn Daily Routine: How to Get Anything Done with a Baby at Home";
const description =
  "A smaller daily routine for life with a newborn, including a practical look at going back to work. Not a perfect schedule, and not medical advice.";

export const metadata: Metadata = { title, description };

export default function DailyRoutinePage() {
  return (
    <TopicLayout
      title={title}
      description={description}
      path="/topics/newborn-daily-routine"
      crumb="Daily life"
      primary="waitlist"
      capsule="A newborn day rarely matches the schedule you pictured. Occupational therapy looks at the real sequence: feeding, diapers, your own food, a shower, and one thing that is not baby care. You do not need a perfect routine. You need a short one you can repeat on a hard day, and a clear idea of who does what."
      episodes={episodesFor("daily")}
    >
      <h2>How do I get anything done with a newborn?</h2>
      <p>
        Pick three things that count as “done” today. For a lot of families that is: the baby is
        fed, an adult has eaten, and someone has rested. Everything else can wait or be handed to
        another person as one named task. “Help” is vague. “Please wash the bottles at 2” is a job.
      </p>
      <h2>What does a repeatable routine look like?</h2>
      <p>
        A useful routine is a short loop, not an hour-by-hour chart. Feed, change, settle the baby
        in the place your clinician recommended, then one adult task. When the loop breaks, start
        the loop again. You are not behind.
      </p>
      <h2>Back to work, as part of the day</h2>
      <p>
        Going back to work is a logistics problem as much as a feelings problem: who has the baby,
        how feeding will work that day, and when you will sleep. Write those three down before the
        first day back. This site does not give workplace legal rules or pumping-rights advice.
      </p>
      <NeedsMelissa>
        [NEEDS MELISSA: the back-to-work handout, and any workplace guidance you want to teach. A separate toolkit page was folded into this one.]
      </NeedsMelissa>
      <h2>When to call your provider</h2>
      <p>
        If the day feels impossible because of pain, bleeding, panic, or a mood you do not
        recognize, call your provider. If you might be in danger, call 911 or 988. Daily-routine
        tips are not a treatment. See <Link href="/need-help-now">Need Help Now</Link>.
      </p>
    </TopicLayout>
  );
}
