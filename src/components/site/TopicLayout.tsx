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

export default function TopicLayout({
  title,
  description,
  path,
  crumb,
  capsule,
  primary,
  help,
  episodes,
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
  children: React.ReactNode;
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <article className="bg-[#FAF7F2] pb-16">
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
      />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <CtaRow primary={primary} />
        {help}
        <div className="family-copy">{children}</div>
        {episodes && episodes.length > 0 && <EpisodeList episodes={episodes} />}
        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">Where are the free handouts?</h2>
          <p className="mt-2 font-serif text-base text-black">
            Files are not uploaded yet.{" "}
            <Link href="/resources" className="font-bold text-[#0A3660] underline">
              Open the library
            </Link>
            . Safety pages are never behind a signup.
          </p>
        </section>
        <Byline />
        <div className="mt-10 rounded-2xl bg-[#eef6f6] p-6" id="signup">
          <EmailSignup idPrefix={`topic-${path.replace(/\W+/g, "-")}`} />
        </div>
      </div>
    </article>
  );
}
