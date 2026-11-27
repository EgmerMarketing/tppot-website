import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import { WhereNext } from "@/components/site/Character";
import Portrait from "@/components/site/Portrait";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { ABILITY_VILLAGE_URL, SITE_URL } from "@/lib/site";
import Image from "next/image";

const title = "Melissa O'Neal, OTR/L: Postpartum Occupational Therapist Behind The Postpartum OT";

export const metadata: Metadata = {
  title,
  description:
    "Melissa O'Neal is an occupational therapist and the founder of The Postpartum OT. For more than 15 years she has helped parents after birth.",
};

export default function AboutPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "About", url: `${SITE_URL}/about` }])} />
      <JsonLd data={personSchema()} />
      <PageHeader
        title={title}
        lede="Occupational therapist and founder of The Postpartum OT."
        emphasis="Melissa"
      />
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:px-8 lg:grid-cols-[300px_1fr]">
        <Portrait
          src="/images/melissa/melissa-teal-field-headshot.webp"
          alt="Melissa O'Neal, occupational therapist, smiling outdoors in a teal shirt in a green field"
          sizes="(max-width: 1024px) 80vw, 280px"
          priority
          frame="teal"
          position="center 20%"
        />
        <div className="family-copy">
          <p>Hi, I&apos;m Melissa O&apos;Neal, an occupational therapist and the founder of The Postpartum OT. My work with new families started the way a lot of good things do: with my own experience as a new mom. I learned firsthand that the weeks and months after birth change everything. Your days, your body, your relationships, and your sense of who you are all shift at once, and nobody hands you a plan for that.</p>
          <p>For more than 15 years, I&apos;ve helped parents through that season. As an OT, I don&apos;t just look at one piece of the puzzle. I look at your whole day and help you build roles and routines that fit the life you have now, not the one you had before. That includes sleep, feeding, mental health, and staying connected to yourself and the people you love.</p>
          <p>I&apos;m also a Certified Disability Rights and Accessibility Consultant, so I care deeply that support works for every family, including parents with disabilities and families whose needs don&apos;t fit the usual mold.</p>
          <p>You don&apos;t have to figure out this season alone. Let&apos;s build a fourth trimester that works for you.</p>
          <p className="flex flex-wrap items-center gap-4">
            <a href={ABILITY_VILLAGE_URL} className="light-chip inline-flex rounded-xl bg-white p-2">
              <Image
                src="/images/ability-village-emblem.webp"
                alt="Ability Village"
                width={1200}
                height={800}
                className="h-16 w-auto"
              />
            </a>
            <span className="font-sans text-lg font-bold leading-snug text-[#0A3660]">Director, Women&apos;s Health and Postpartum Hub on Ability Village</span>
          </p>
          <h2>Where can I hear her?</h2>
          <p>
            She hosts Functional Fourth Trimester. Listen on the <Link href="/podcast">podcast page</Link>.
          </p>
          <CtaRow primary="podcast" />
          <Byline />
        </div>
      </div>
      <WhereNext links={[{ href: "/podcast", label: "Functional Fourth Trimester" }, { href: "/what-is-postpartum-occupational-therapy", label: "What is postpartum OT?" }]} />
    </article>
  );
}
