import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import Section from "@/components/ui/Section";
import CtaRow from "@/components/site/CtaRow";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL, topicLinks } from "@/lib/site";

const title = "Postpartum Topics for New Parents: Recovery, Sleep, Feeding and Daily Life";

export const metadata: Metadata = {
  title,
  description:
    "Postpartum help for new parents: recovery, sleep deprivation, feeding routines, daily life, mental load, and support for dads and partners.",
};

export default function TopicsPage() {
  return (
    <div className="bg-cream">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Postpartum Topics", url: `${SITE_URL}/topics` },
        ])}
      />
      <PageHeader
        title={title}
        lede="Six pages, one subject each. Your provider still answers what is going on in your body."
      />
      <div className="mx-auto max-w-[1120px] px-6 py-8 md:px-8">
        <CtaRow primary="waitlist" />
      </div>
      <Section variant="navy">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicLinks.map((topic) => (
            <li key={topic.href}>
              <Link href={topic.href} className="surface-card flex h-full flex-col rounded-2xl bg-white p-5">
                <p className="font-sans text-lg font-bold text-[#0A3660]">{topic.title}</p>
                <p className="mt-2 font-serif text-base leading-relaxed text-black">{topic.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
