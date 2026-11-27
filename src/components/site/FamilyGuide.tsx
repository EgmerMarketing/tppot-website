import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import DraftBadge from "@/components/site/DraftBadge";
import PrintButton from "@/components/site/PrintButton";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export default function FamilyGuide({
  title,
  path,
  lede,
  children,
}: {
  title: string;
  path: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <article className="family-guide bg-cream pb-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Resources", url: `${SITE_URL}/resources` },
          { name: title, url: `${SITE_URL}${path}` },
        ])}
      />
      <PageHeader
        title={title}
        lede={lede}
        crumbs={[{ name: "Resources", href: "/resources" }]}
      />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <DraftBadge />
        <div className="no-print mt-4">
          <PrintButton />
        </div>
        <div className="family-copy print-body">{children}</div>
        <p className="mt-8 font-serif text-base text-black">
          Educational information, not medical advice. If you need someone now, open{" "}
          <Link href="/need-help-now" className="font-bold text-[#0A3660] underline">
            Need Help Now
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
