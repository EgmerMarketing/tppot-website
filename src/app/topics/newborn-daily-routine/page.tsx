import type { Metadata } from "next";
import Link from "next/link";
import TopicLayout from "@/components/site/TopicLayout";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
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
      capsule="You need a short list you can repeat, and a clear idea of who does what."
      episodes={episodesFor("daily")}
      guides={[
        { href: "/resources/adhd-and-new-parenthood", label: "ADHD and new parenthood: practical support" },
      ]}
    >
      <KeyPoints
        items={[
          "Done today can mean: baby fed, adult ate, someone rested.",
          "Name the job. “Help” is too vague.",
          "A routine is a short loop, not an hour-by-hour chart.",
          "Back to work: who has the baby, how feeding works, when you sleep.",
        ]}
      />
      <h2>How do I get anything done with a newborn?</h2>
      <p>Pick three things that count as done. Hand the rest off as one named task.</p>
      <LearnMore>
        <p>
          For a lot of families that is: the baby is fed, an adult has eaten, and someone has rested.
          “Please wash the bottles at 2” is a job.
        </p>
      </LearnMore>
      <h2>What does a repeatable routine look like?</h2>
      <p>Feed, change, settle the baby where your clinician recommended, then one adult task.</p>
      <LearnMore>
        <p>When the loop breaks, start the loop again. You are not behind.</p>
      </LearnMore>
      <h2>How do I plan going back to work?</h2>
      <p>Write who has the baby, how feeding will work, and when you will sleep.</p>
      <LearnMore>
        <p>
          Write those three down before the first day back. This site does not give workplace legal
          rules or pumping-rights advice.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: the back-to-work handout, and any workplace guidance you want to teach. A separate toolkit page was folded into this one.]
        </NeedsMelissa>
      </LearnMore>
      <h2>When should I call my provider?</h2>
      <p>
        Call for pain, bleeding, panic, or a mood you do not recognize. If you might be in danger, call 911 or 988.{" "}
        <Link href="/need-help-now">Need Help Now</Link>.
      </p>
    </TopicLayout>
  );
}
