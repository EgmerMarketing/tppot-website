import type { Metadata } from "next";
import Link from "next/link";
import { ACTIVE_HERO_OPTION, HERO_OPTIONS, HOME_H1 } from "@/lib/hero";
import { episodes } from "@/lib/podcast";
import { SITE_URL, topicLinks } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/site/JsonLd";
import CtaRow from "@/components/site/CtaRow";
import CrisisLines from "@/components/site/CrisisLines";
import EmailSignup from "@/components/site/EmailSignup";
import EpisodeList from "@/components/site/EpisodeList";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { DISCLAIMER_CRISIS } from "@/lib/site";

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
    answer:
      "There is no single clock. Some daily tasks ease in a few weeks, and some take longer. A checkup is a visit, not a finish line. Your own provider can say what fits your body.",
  },
  {
    question: "When does it get easier with a newborn?",
    answer:
      "Easier usually shows up in pieces: a longer sleep stretch, a feeding rhythm, or a day that feels familiar. It is not a date you can miss. If you are suffering, not just tired, use Need Help Now.",
  },
  {
    question: "How do I get anything done with a newborn?",
    answer:
      "Shrink the day to feeding, diapers, your own food, and one rest. A routine is a short list you can repeat, not a perfect schedule.",
  },
  {
    question: "How can a partner help postpartum?",
    answer:
      "Take a real shift, including at night, and handle a task without waiting to be assigned every step. Partners can call or text 988, and family members can use 1-833-TLC-MAMA.",
  },
  {
    question: "What is postpartum occupational therapy?",
    answer:
      "Occupational therapy helps people do the daily activities that matter to them. After birth, that can include sleep, feeding routines, and getting through the day. It is not a substitute for your own medical provider.",
  },
];

const cards = [
  { href: "/podcast", title: "Podcast", text: "Functional Fourth Trimester, for new parents." },
  { href: "/community", title: "Community, coming soon", text: "Join the waitlist. The public link is not posted yet." },
  { href: "/resources", title: "Free resources", text: "Plan and checklist slots. Files are not uploaded yet." },
];

export default function Home() {
  const hero = HERO_OPTIONS[ACTIVE_HERO_OPTION];

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }])} />
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="mx-auto grid max-w-[1120px] gap-10 px-6 py-12 md:px-8 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <h1 className="font-sans text-4xl font-bold leading-tight text-[#0A3660] md:text-5xl">
            {HOME_H1}
          </h1>
          <p className="mt-6 font-serif text-lg leading-relaxed text-black">{hero.text}</p>
          <CtaRow primary="waitlist" />
          <p className="mt-4 font-serif text-base leading-relaxed text-black">{DISCLAIMER_CRISIS}</p>
        </div>
        <div className="rounded-3xl bg-[#eef6f6] p-4 sm:p-6">
          <ul className="grid gap-3">
            {cards.map((card) => (
              <li key={card.href}>
                <Link href={card.href} className="block rounded-2xl bg-white p-5 hover:outline hover:outline-[#0A3660]">
                  <p className="font-sans text-lg font-bold text-[#0A3660]">{card.title}</p>
                  <p className="mt-1 font-serif text-base text-black">{card.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#FAF7F2]">
        <div className="mx-auto max-w-[1120px] px-6 py-14 md:px-8">
          <h2 className="max-w-3xl font-sans text-3xl font-bold leading-tight text-[#0A3660]">
            Postpartum help for the things that feel hardest right now
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topicLinks.map((topic) => (
              <li key={topic.href}>
                <Link href={topic.href} className="flex h-full flex-col rounded-2xl bg-white p-5">
                  <p className="font-sans text-lg font-bold text-[#0A3660]">{topic.title}</p>
                  <p className="mt-2 font-serif text-base leading-relaxed text-black">{topic.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-14 md:px-8">
        <EpisodeList
          heading="Listen to the Functional Fourth Trimester postpartum podcast"
          episodes={episodes.slice(0, 3)}
        />
        <p className="mt-4">
          <Link href="/podcast" className="font-sans text-sm font-bold text-[#0A3660] underline">
            All episodes on this site
          </Link>
        </p>
      </section>

      <section className="bg-[#eef6f6]" id="waitlist">
        <div className="mx-auto max-w-[760px] px-6 py-14 md:px-8">
          <p className="font-serif text-lg leading-relaxed text-black">
            The Functional Fourth Trimester Circle is a Facebook group that started November 18, 2026.
            Live sessions are listed for Wednesdays, 11:00 to 11:30 AM Mountain Time. The public link,
            platform, and cost are not confirmed, so the waitlist is the way to hear when it opens.
          </p>
          <NeedsMelissa>
            [NEEDS MELISSA: Circle link, whether the group is public, rules, and whether a member count may be shown. Live session platform, start date, price, sign-up, and replays.]
          </NeedsMelissa>
          <div className="mt-6 rounded-2xl bg-white p-6">
            <EmailSignup
              idPrefix="home"
              heading="Join the waitlist for the Functional Fourth Trimester community"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-14 md:px-8">
        <h2 className="font-sans text-3xl font-bold text-[#0A3660]">Free postpartum resources for new parents</h2>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-black">
          The library has slots for a postpartum plan, checklists, and notes for partners and grandparents.
          The files are not uploaded yet. Crisis information is open and does not ask for your email.
        </p>
        <p className="mt-4">
          <Link href="/resources" className="font-sans text-sm font-bold text-[#0A3660] underline">
            Open the resources library
          </Link>
        </p>
      </section>

      <section className="bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-6 py-14 md:px-8 md:grid-cols-[180px_1fr]">
          <div
            className="flex aspect-[4/5] w-full max-w-[180px] items-center justify-center rounded-2xl bg-[#eef6f6]"
            role="img"
            aria-label="Photo of Melissa O'Neal is not on the site yet"
          >
            <span className="font-sans text-4xl font-bold text-[#0A3660]" aria-hidden="true">MO</span>
          </div>
          <div>
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#0A3660]">
              Meet Melissa O&apos;Neal, OTR/L, postpartum occupational therapist
            </h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-black">
              Melissa O&apos;Neal, OTR/L, is the occupational therapist behind The Postpartum OT.
              She shares educational support for the ordinary, hard parts of life after birth.
            </p>
            <NeedsMelissa>
              [Melissa&apos;s story here. Third person, in her own words. Do not publish a years-of-experience number, her child&apos;s name, or an Ability Village role until she approves them.]
            </NeedsMelissa>
            <Link href="/about" className="font-sans text-sm font-bold text-[#0A3660] underline">
              About Melissa
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[760px] px-6 py-14 md:px-8">
        <h2 className="font-sans text-3xl font-bold text-[#0A3660]">Postpartum questions new parents ask</h2>
        <div className="mt-6 space-y-8">
          {homeFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-sans text-xl font-bold text-[#0A3660]">{faq.question}</h3>
              <p className="mt-2 font-serif text-lg leading-relaxed text-black">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/faq" className="font-sans text-sm font-bold text-[#0A3660] underline">
            More questions
          </Link>
        </p>
      </section>

      <section className="border-t-4 border-[#0A3660] bg-white" aria-labelledby="home-help">
        <div className="mx-auto max-w-[760px] px-6 py-10 md:px-8">
          <h2 id="home-help" className="font-sans text-3xl font-bold text-[#0A3660]">
            Need help now
          </h2>
          <CrisisLines compact />
          <p className="mt-4">
            <Link href="/need-help-now" className="font-sans text-sm font-bold text-[#0A3660] underline">
              All of the lines, including Postpartum Support International
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
