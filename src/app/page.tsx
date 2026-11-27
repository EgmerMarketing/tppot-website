import type { Metadata } from "next";
import Link from "next/link";
import { ACTIVE_HERO_OPTION, HERO_OPTIONS } from "@/lib/hero";
import { episodes } from "@/lib/podcast";
import { DISCLAIMER_CRISIS, HOME_H1, SITE_URL, topicLinks } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/site/JsonLd";
import Section from "@/components/ui/Section";
import CrisisLines from "@/components/site/CrisisLines";
import EmailSignup from "@/components/site/EmailSignup";
import CircleJoinLink from "@/components/site/CircleJoinLink";
import EpisodeList from "@/components/site/EpisodeList";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { LearnMore } from "@/components/site/Scan";
import { Eyebrow, NextStep, Squiggle, TopicIcon, Wave, topicIconFor } from "@/components/site/Character";
import Portrait from "@/components/site/Portrait";
import Reveal from "@/components/site/Reveal";
export const metadata: Metadata = {
  title: {
    absolute: `${HOME_H1} | The Postpartum OT`,
  },
  description:
    "Postpartum support for new moms and dads from occupational therapist Melissa O'Neal, OTR/L. Sleep, feeding, recovery, and daily life. Educational information, not medical advice.",
};

const homeFaqs = [
  {
    question: "How long does postpartum recovery take?",
    short: "There is no single clock.",
    answer:
      "There is no single clock. Some daily tasks ease in a few weeks, and some take longer. A checkup is a visit, not a finish line. Your own provider can say what fits your body.",
  },
  {
    question: "When does it get easier with a newborn?",
    short: "In pieces, not on one date.",
    answer:
      "Easier usually shows up in pieces: a longer sleep stretch, a feeding rhythm, or a day that feels familiar. It is not a date you can miss. If you are suffering, not just tired, use Need Help Now.",
  },
  {
    question: "How do I get anything done with a newborn?",
    short: "Feed, diaper, eat, and one rest.",
    answer:
      "Shrink the day to feeding, diapers, your own food, and one rest. A routine is a short list you can repeat, not a perfect schedule.",
  },
  {
    question: "How can a partner help postpartum?",
    short: "Take a real shift, including at night.",
    answer:
      "Take a real shift, including at night, and handle a task without waiting to be assigned every step. Partners can call or text 988, and family members can use 1-833-TLC-MAMA.",
  },
  {
    question: "What is postpartum occupational therapy?",
    short: "Help with the daily jobs after birth.",
    answer:
      "Occupational therapy helps people do the daily activities that matter to them. After birth, that can include sleep, feeding routines, and getting through the day. It is not a substitute for your own medical provider.",
  },
];

const cards = [
  { href: "/podcast", title: "Podcast", text: "Functional Fourth Trimester" },
  { href: "/community", title: "Community", text: "Waitlist first. Three questions to join." },
  { href: "/resources", title: "Resources", text: "Family guides and one travel handout are ready." },
];

export default function Home() {
  const hero = HERO_OPTIONS[ACTIVE_HERO_OPTION];

  return (
    <div>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }])} />
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="hero-home mint-surface relative bg-teal-50">
        <div className="mx-auto max-w-[1120px] px-6 pb-1 pt-5 md:px-8 md:pt-6">
          <Eyebrow>For new parents</Eyebrow>
          <h1 className="mt-1 font-serif text-[1.7rem] font-semibold leading-[1.15] text-[#0A3660] sm:text-4xl sm:leading-tight lg:text-5xl">
            Postpartum Support for New{" "}
            <span className="hero-accent">
              Moms and Dads
              <Squiggle className="text-[#2f6b6a]" />
            </span>{" "}
            from an Occupational Therapist
          </h1>
          <p className="mt-3 max-w-[68ch] font-serif text-base leading-snug text-black sm:text-lg sm:leading-relaxed">{hero.text}</p>
          <div className="mt-4 grid gap-3 sm:max-w-xl sm:grid-cols-2">
            <Link href="/for-moms" className="btn-solid inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-center font-sans text-lg font-bold">
              I&apos;m a mom
            </Link>
            <Link href="/for-dads" className="btn-solid inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-center font-sans text-lg font-bold">
              I&apos;m a dad or partner
            </Link>
          </div>
          <p className="mt-2 max-w-[68ch] font-serif text-base leading-snug text-black">{DISCLAIMER_CRISIS}</p>
        </div>
        <div className="hero-flow">
          <svg className="hero-flow-shape" viewBox="0 0 1440 280" preserveAspectRatio="none" aria-hidden="true">
            <path className="hero-flow-mint" d="M0,54 C260,8 520,78 780,36 C1040,0 1240,64 1440,28 L1440,78 C1220,112 1000,58 760,92 C500,124 240,70 0,104 Z" />
            <path className="hero-flow-teal" d="M0,88 C280,36 540,120 820,64 C1080,16 1280,96 1440,48 L1440,280 L0,280 Z" />
          </svg>
          <ul className="hero-cards">
            {cards.map((card) => (
              <li key={card.href}>
                <Link href={card.href} className="hero-card surface-card block h-full rounded-[1.25rem] bg-white p-4 shadow-[0_10px_24px_rgb(10_54_96/0.14)]">
                  <p className="font-sans text-lg font-bold text-[#0A3660]">{card.title}</p>
                  <p className="mt-1 font-serif text-base leading-snug text-black">{card.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Wave from="#469695" to="#0A3660" />

      <Section variant="navy" aria-labelledby="home-topics" className="relative overflow-hidden">
        <Eyebrow onDark>Start with one thing</Eyebrow>
        <h2 id="home-topics" className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white">
          Postpartum help for the things that feel hardest <span className="font-bold text-white">right now</span>
        </h2>
        <Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topicLinks.map((topic, index) => {
              const icon = topicIconFor(topic.href);
              return (
              <li key={topic.href} className={index % 2 === 1 ? "lg:mt-8" : ""}>
                <Link href={topic.href} className="surface-card flex h-full flex-col rounded-[1.75rem] bg-white p-5">
                  {icon ? <TopicIcon name={icon} /> : null}
                  <p className={`${icon ? "mt-3" : ""} font-serif text-xl font-semibold text-[#0A3660]`}>{topic.title}</p>
                  <p className="mt-2 font-serif text-base leading-relaxed text-black">{topic.text}</p>
                </Link>
              </li>
              );
            })}
          </ul>
        </Reveal>
        <NextStep onDark href="/start-here">Next: the fourth trimester, week by week</NextStep>
      </Section>
      <Wave from="#0A3660" to="#18355D" />

      <section className="bg-[#18355D] py-12 text-white md:py-16">
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <EpisodeList
            heading="The Functional Fourth Trimester postpartum podcast"
            episodes={episodes.slice(0, 3)}
            wave
            onDark
          />
          <p className="mt-4">
            <Link href="/podcast" className="font-sans text-base font-bold text-white underline">
              All episodes on this site
            </Link>
          </p>
          <NextStep onDark href="/podcast">Next: Functional Fourth Trimester</NextStep>
        </div>
      </section>
      <Wave from="#18355D" to="#eef6f6" />
      <section className="mint-surface bg-[#eef6f6]">
        <div className="mx-auto max-w-[760px] px-6 py-12 md:px-8">
          <h2 className="max-w-[70ch] font-serif text-3xl font-semibold leading-snug text-[#0A3660] md:text-4xl">
            You&apos;re <span className="font-bold text-[#2f6b6a]">not alone</span> in this.
          </h2>
          <p className="mt-3 font-serif text-lg text-black">
            If you need someone now, call or text 988. A group is not a crisis line.
          </p>
          <NextStep href="/need-help-now">Next: Need Help Now</NextStep>
        </div>
      </section>
      <Wave from="#eef6f6" to="#469695" />

      <Section variant="teal" id="waitlist" width="prose" aria-labelledby="home-circle">
        <h2 id="home-circle" className="font-sans text-3xl font-bold leading-tight text-white">
          The Functional Fourth Trimester Circle
        </h2>
        <div className="surface-card mt-6 rounded-2xl bg-white p-6 text-black">
          <p className="font-serif text-lg leading-relaxed text-black">
            The Circle is a private Facebook group that started November 18, 2026. The email waitlist is how you hear what is still unconfirmed.
          </p>
          <LearnMore summary="Live sessions and open details">
            <p>
              Live sessions are listed for Wednesdays, 11:00 to 11:30 AM Mountain Time. The platform and cost are not confirmed.
            </p>
            <NeedsMelissa>
              [NEEDS MELISSA: whether a member count may be shown. Live session platform, start date, price, sign-up, and replays.]
            </NeedsMelissa>
          </LearnMore>
          <div className="mt-6">
            <EmailSignup
              idPrefix="home"
              heading="Join the waitlist for the Functional Fourth Trimester community"
            />
            <CircleJoinLink />
          </div>
        </div>
      </Section>
      <Wave from="#469695" to="#FAF7F2" />

      <Section variant="cream">
        <h2 className="font-serif text-4xl font-semibold text-[#0A3660]">Where are the postpartum resources?</h2>
        <p className="mt-2 max-w-2xl font-serif text-base text-black">
          Family guides and a travel handout are ready. Other files are not. Crisis pages never ask for email.
        </p>
        <p className="mt-4">
          <Link href="/resources" className="font-sans text-base font-bold text-[#0A3660] underline">
            Open the resources library
          </Link>
        </p>
      </Section>

      <Section variant="navy">
        <div className="grid items-center gap-8 md:grid-cols-[300px_1fr]">
          <Link href="/about" className="block max-w-[280px]">
            <Portrait
              src="/images/melissa/melissa-autumn-creek.webp"
              alt="Melissa O'Neal, occupational therapist, smiling outdoors in an autumn creek setting"
              sizes="(max-width: 640px) 260px, 280px"
              frame="teal"
              position="center 12%"
            />
          </Link>
          <div>
            <h2 className="font-sans text-3xl font-bold leading-tight text-white">
              Meet Melissa O&apos;Neal, OTR/L, postpartum occupational therapist
            </h2>
            <p className="mt-2 font-serif text-lg leading-[1.6] text-white">
              Melissa O&apos;Neal, OTR/L, is an occupational therapist and the founder of The Postpartum OT. Her story is on the About page.
            </p>
            <Link href="/about" className="font-sans text-base font-bold text-white underline">
              About Melissa
            </Link>
          </div>
        </div>
      </Section>

      <Section variant="cream" width="prose">
        <h2 className="font-sans text-3xl font-bold text-[#0A3660]">Postpartum questions new parents ask</h2>
        <div className="mt-6 space-y-8">
          {homeFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-sans text-xl font-bold text-[#0A3660]">{faq.question}</h3>
              <p className="mt-2 font-serif text-base text-black">{faq.short}</p>
              <LearnMore>
                <p>{faq.answer}</p>
              </LearnMore>
            </div>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/faq" className="font-sans text-base font-bold text-[#0A3660] underline">
            More questions
          </Link>
        </p>
      </Section>

      <section className="band-white border-t-4 border-teal-deep bg-white" aria-labelledby="home-help">
        <div className="mx-auto max-w-[760px] px-6 py-10 md:px-8">
          <h2 id="home-help" className="font-sans text-3xl font-bold text-[#0A3660]">
            Need help now
          </h2>
          <CrisisLines compact />
          <p className="mt-4">
            <Link href="/need-help-now" className="font-sans text-base font-bold text-[#0A3660] underline">
              All of the lines, including Postpartum Support International
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
