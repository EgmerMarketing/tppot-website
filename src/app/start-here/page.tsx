import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import EmailSignup from "@/components/site/EmailSignup";
import EpisodeList from "@/components/site/EpisodeList";
import { LearnMore } from "@/components/site/Scan";
import { StepTrail, Wave } from "@/components/site/Character";
import JsonLd from "@/components/site/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { episodes } from "@/lib/podcast";
import Section from "@/components/ui/Section";
import { SITE_URL, UPDATED } from "@/lib/site";

const title = "The Fourth Trimester, Week by Week: What to Expect and What Helps";
const description =
  "A plain-language guide to the fourth trimester for moms, dads, and caregivers. Weeks 0 to 6, weeks 6 to 12, and months 3 to 12. Not medical advice.";

export const metadata: Metadata = { title, description };

export default function StartHerePage() {
  const url = `${SITE_URL}/start-here`;
  return (
    <article className="bg-cream">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Start Here", url }])} />
      <JsonLd data={articleSchema({ headline: title, description, datePublished: UPDATED, url })} />
      <PageHeader
        title={title}
        lede="People often use “fourth trimester” for about the first 12 weeks after birth. It is a map, not a test."
      />
      <Wave from="#2f6b6a" to="#FAF7F2" />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <StepTrail
          steps={[
            "Weeks 0 to 6: short sleeps, frequent feeding, a smaller list.",
            "Weeks 6 to 12: easier is not a date you missed.",
            "Months 3 to 12: change the routine when it stops fitting.",
            "Partners: take a block of time where you are the one who is on.",
            "Safe sleep comes from your baby’s clinician, not this page.",
          ]}
        />
        <CtaRow primary="podcast" />

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">What is the fourth trimester?</h2>
          <p className="mt-2 font-serif text-base text-black">About twelve weeks when you and the baby are both learning the day.</p>
          <LearnMore>
            <p>
              Occupational therapy looks at that day: rest, feeding, and the jobs of home. It does not
              replace your provider, and it does not decide what is medically normal for your body.
            </p>
          </LearnMore>
        </section>

        <section className="mt-8">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Weeks 0 to 6: what helps?
          </h2>
          <p className="mt-2 font-serif text-base text-black">Food for the adults, a plan for who is awake, and one person you can text.</p>
          <LearnMore>
            <p>
              These weeks are often short sleeps and a home that does not run the way it did. Follow
              your baby&apos;s clinician and the{" "}
              <a href="https://safetosleep.nichd.nih.gov/">Safe to Sleep campaign</a> for where the baby
              sleeps. This page does not set medical milestones.
            </p>
          </LearnMore>
        </section>

        <section className="mt-8">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Weeks 6 to 12: when does it get easier?
          </h2>
          <p className="mt-2 font-serif text-base text-black">Some families feel a rhythm here. Some do not. That is not a failure.</p>
          <LearnMore>
            <p>
              If you have a postpartum visit, use it to say how you are doing, not only how the baby is
              growing. If sadness, fear, or exhaustion is past what you can carry, go to{" "}
              <Link href="/need-help-now">Need Help Now</Link>.
            </p>
          </LearnMore>
        </section>

        <section className="mt-8">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Months 3 to 12: what is the new normal?
          </h2>
          <p className="mt-2 font-serif text-base text-black">Work and other plans come back at different times. Change the routine when it stops fitting.</p>
          <LearnMore>
            <p>
              Returning to work is on the{" "}
              <Link href="/topics/newborn-daily-routine">newborn daily routine</Link> page.
            </p>
          </LearnMore>
        </section>

        <section className="mt-8">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            How can dads and partners help in the fourth trimester?
          </h2>
          <p className="mt-2 font-serif text-base text-black">Take a shift. Grandparents help most by asking which one job would lighten today.</p>
          <LearnMore>
            <p>
              More is on the <Link href="/topics/dads-and-partners">dads and partners</Link> page.
            </p>
          </LearnMore>
        </section>

        <EpisodeList
          heading="Which episodes match these weeks?"
          episodes={[episodes[6], episodes[3], episodes[5]].filter(Boolean)}
        />
        <Byline />
      </div>
      <Section variant="navy" width="prose">
        <div className="surface-card rounded-2xl bg-white p-6 text-black">
          <EmailSignup idPrefix="start-here" />
        </div>
      </Section>
    </article>
  );
}
