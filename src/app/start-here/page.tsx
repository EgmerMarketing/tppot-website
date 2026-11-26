import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import EmailSignup from "@/components/site/EmailSignup";
import EpisodeList from "@/components/site/EpisodeList";
import JsonLd from "@/components/site/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { episodes } from "@/lib/podcast";
import { SITE_URL, UPDATED } from "@/lib/site";

const title = "The Fourth Trimester, Week by Week: What to Expect and What Helps";
const description =
  "A plain-language guide to the fourth trimester for moms, dads, and caregivers. Weeks 0 to 6, weeks 6 to 12, and months 3 to 12. Not medical advice.";

export const metadata: Metadata = { title, description };

export default function StartHerePage() {
  const url = `${SITE_URL}/start-here`;
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Start Here", url }])} />
      <JsonLd data={articleSchema({ headline: title, description, datePublished: UPDATED, url })} />
      <PageHeader
        title={title}
        lede="Many people use “fourth trimester” for about the first 12 weeks after birth, when sleep, feeding, and your sense of yourself are all in motion. It is a map for the weeks, not a test you pass."
      />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <CtaRow primary="podcast" />

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">What is the fourth trimester?</h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            The fourth trimester is a name for the early weeks after birth, often counted as about
            twelve weeks. You and the baby are both learning the day. Occupational therapy looks at
            that day: rest, feeding, and the jobs of home. It does not replace your provider, and it
            does not decide what is medically normal for your body.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Weeks 0 to 6 postpartum: what to expect and what helps
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            These weeks are often short sleeps, frequent feeding, and a home that does not run the
            way it did. What helps is a smaller list: food for the adults, a plan for who is awake,
            and one person you can text. Follow your baby&apos;s clinician and the{" "}
            <a className="font-bold text-[#0A3660] underline" href="https://safetosleep.nichd.nih.gov/">
              Safe to Sleep campaign
            </a>{" "}
            for where the baby sleeps. This page does not set medical milestones.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Weeks 6 to 12: when does it get easier with a newborn?
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            Some families feel a bit of rhythm here. Some do not, and that is not a failure. Easier
            is not a morning on the calendar. If you have a postpartum visit, use it to say how you
            are doing, not only how the baby is growing. If sadness, fear, or exhaustion is past
            what you can carry, go to{" "}
            <Link href="/need-help-now" className="font-bold text-[#0A3660] underline">Need Help Now</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Months 3 to 12: finding your new normal
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            Work, other children, and your own plans come back into the day at different times.
            Change the routine when it stops fitting. Returning to work, as a set of practical
            questions, is on the{" "}
            <Link href="/topics/newborn-daily-routine" className="font-bold text-[#0A3660] underline">
              newborn daily routine
            </Link>{" "}
            page.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Fourth trimester help for dads and partners
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            Partners are in the fourth trimester too. A useful shift is a block of time where you
            are the one who is on, not a helper waiting for instructions. Grandparents help most
            when they ask which single job would lighten today. More is on the{" "}
            <Link href="/topics/dads-and-partners" className="font-bold text-[#0A3660] underline">
              dads and partners
            </Link>{" "}
            page.
          </p>
        </section>

        <EpisodeList
          heading="Episodes by stage"
          episodes={[episodes[6], episodes[3], episodes[5]].filter(Boolean)}
        />
        <Byline />
        <div className="mt-10 rounded-2xl bg-white p-6">
          <EmailSignup idPrefix="start-here" />
        </div>
      </div>
    </article>
  );
}
