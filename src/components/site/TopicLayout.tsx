import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import Byline from "@/components/site/Byline";
import EmailSignup from "@/components/site/EmailSignup";
import JsonLd from "@/components/site/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL, UPDATED } from "@/lib/site";
import type { Episode } from "@/lib/podcast";
import EpisodeList from "@/components/site/EpisodeList";
import Section from "@/components/ui/Section";
import { TopicIcon, WhereNext, topicIconFor } from "@/components/site/Character";

function nextTopic(path: string): { href: string; label: string } {
  const order = [
    { href: "/topics/postpartum-recovery", label: "Next: recovery" },
    { href: "/topics/postpartum-sleep", label: "Next: sleep" },
    { href: "/topics/feeding-routines", label: "Next: feeding routines" },
    { href: "/topics/newborn-daily-routine", label: "Next: the daily routine" },
    { href: "/topics/postpartum-mental-load-identity", label: "Next: mental load" },
    { href: "/topics/dads-and-partners", label: "Next: dads and partners" },
  ];
  const index = order.findIndex((item) => item.href === path);
  if (index === -1) return { href: "/topics", label: "Next: all topics" };
  if (index === order.length - 1) return { href: "/community", label: "Next: the Circle" };
  return order[index + 1];
}

export default function TopicLayout({
  title,
  description,
  path,
  crumb,
  capsule,
  primary,
  help,
  episodes,
  guides,
  children,
}: {
  title: string;
  description: string;
  path: string;
  crumb: string;
  capsule: React.ReactNode;
  primary: "podcast" | "waitlist";
  help?: React.ReactNode;
  episodes?: Episode[];
  guides?: { href: string; label: string }[];
  children: React.ReactNode;
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <article className="bg-cream">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Postpartum Topics", url: `${SITE_URL}/topics` },
          { name: crumb, url },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: title,
          description,
          datePublished: UPDATED,
          url,
        })}
      />
      <PageHeader
        title={title}
        crumbs={[{ name: "Postpartum Topics", href: "/topics" }]}
        lede={capsule}
        emphasis={crumb.split(" ")[0]}
        icon={topicIconFor(path)}
      />
      <div className="mx-auto grid max-w-[1120px] gap-8 px-6 py-10 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 flex items-center gap-3">
            <TopicIcon name={topicIconFor(path)} />
            <span className="font-sans text-base font-bold text-[#2f6b6a]">What you might be feeling</span>
          </p>
          <blockquote className="rounded-[1.75rem] bg-[#eef6f6] px-6 py-6">
            <div className="max-w-[70ch] font-serif text-2xl font-semibold leading-snug text-[#0A3660]">{capsule}</div>
          </blockquote>
          <CtaRow primary={primary} />
        </div>
        <div>
          <p className="font-sans text-base font-bold text-[#2f6b6a]">When to reach out</p>
          {help ?? (
            <p className="mt-3 max-w-[70ch] font-serif text-lg leading-[1.6] text-black">
              If you need someone now, use Need Help Now. Call or text 988. Call 911 in an emergency.
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <p className="font-sans text-base font-bold text-[#2f6b6a]">Small things that help</p>
        <div className="family-copy">{children}</div>
        {episodes && episodes.length > 0 && <EpisodeList episodes={episodes} />}
        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">Where are the free handouts?</h2>
          <p className="mt-2 font-serif text-base text-black">
            Family guides on this site are free to read. One travel handout is a direct download. Other files are still placeholders. Safety pages are never behind a signup.
          </p>
          {guides && guides.length > 0 && (
            <ul className="mt-3 space-y-2 font-sans text-base font-bold">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="text-[#0A3660] underline">
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3">
            <Link href="/resources" className="font-sans text-base font-bold text-[#0A3660] underline">
              Open the library
            </Link>
          </p>
        </section>
        <Byline />
      </div>
      <WhereNext
        links={[
          { href: nextTopic(path).href, label: nextTopic(path).label.replace(/^Next: /, "") },
          ...(guides ?? []).slice(0, 2),
        ]}
      />
      <Section variant="navy" width="prose" id="signup">
        <div className="surface-card rounded-2xl bg-white p-6 text-black">
          <EmailSignup idPrefix={`topic-${path.replace(/\W+/g, "-")}`} />
        </div>
      </Section>
    </article>
  );
}
