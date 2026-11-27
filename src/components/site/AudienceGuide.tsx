import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import DraftBadge from "@/components/site/DraftBadge";
import { WhereNext } from "@/components/site/Character";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export type GuideLink = { href: string; label: string; note: string };

export default function AudienceGuide({
  path,
  title,
  lede,
  emphasis,
  groups,
  faqs,
  other,
}: {
  path: "/for-moms" | "/for-dads";
  title: string;
  lede: string;
  emphasis?: string;
  groups: { heading: string; items: GuideLink[] }[];
  faqs: { question: string; answer: string }[];
  other: { href: string; label: string };
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: title, url }])} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader title={title} lede={lede} emphasis={emphasis} />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <DraftBadge />
        <p className="mt-4 font-serif text-base leading-relaxed text-black">
          Educational information, not medical or professional advice. In crisis, call or text 988.
        </p>
      </div>
      {groups.map((group) => (
        <section key={group.heading} className="mx-auto max-w-[1120px] px-6 py-8 md:px-8">
          <h2 className="font-serif text-3xl font-semibold text-[#0A3660]">{group.heading}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="surface-card block h-full rounded-[1.5rem] bg-white p-5">
                  <p className="font-sans text-lg font-bold text-[#0A3660]">{item.label}</p>
                  <p className="mt-2 font-serif text-base leading-[1.6] text-black">{item.note}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section className="mint-surface mx-auto max-w-[760px] px-6 py-8 md:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#0A3660]">Questions</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-sans text-xl font-bold text-[#0A3660]">{faq.question}</h3>
              <p className="mt-2 font-serif text-lg leading-[1.6] text-black">{faq.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-8">
          <Link href={other.href} className="font-sans text-base font-bold text-[#0A3660] underline">
            {other.label}
          </Link>
        </p>
      </section>
      <WhereNext links={[{ href: other.href, label: other.label }, { href: "/need-help-now", label: "Need Help Now" }]} />
    </article>
  );
}
