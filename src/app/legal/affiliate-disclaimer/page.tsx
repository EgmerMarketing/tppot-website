import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Affiliate Marketing Disclaimer | The Postpartum OT",
  description:
    "How affiliate links work on The Postpartum OT website and what that means for you.",
};

export default function AffiliateDisclaimerPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://thepostpartumot.com" },
              { name: "Legal", url: "https://thepostpartumot.com/legal" },
              {
                name: "Affiliate Marketing Disclaimer",
                url: "https://thepostpartumot.com/legal/affiliate-disclaimer",
              },
            ])
          ),
        }}
      />
      <article className="max-w-[720px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm font-sans text-[#6B6560]">
            <li>
              <Link href="/" className="text-[#469695] hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/legal" className="text-[#469695] hover:underline">
                Legal
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Affiliate Marketing Disclaimer</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
          Affiliate Marketing Disclaimer
        </h1>
        <p className="text-[#6B6560] font-serif mb-12">
          Effective Date: January 1, 2025
        </p>

        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The Postpartum OT (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) may participate in affiliate marketing programs. This means that some of the links on our website at thepostpartumot.com (the &quot;Site&quot;), in our emails, social media posts, or other content may be affiliate links.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          1. What Are Affiliate Links
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          An affiliate link is a special URL that contains a unique tracking identifier. When you click on an affiliate link and make a purchase or complete a qualifying action, we may earn a small commission from the merchant or service provider at no additional cost to you. The price you pay for the product or service is the same regardless of whether you use our affiliate link.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          These affiliate relationships may include, but are not limited to, partnerships with companies that provide tools, software, courses, books, products, or services that we genuinely use, recommend, or believe may benefit our audience.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          2. Our Commitment to You
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We value your trust above all else. We will only recommend products, services, and resources that we have personally used, thoroughly researched, or genuinely believe will add value to your professional growth and practice.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The presence of affiliate links does not influence our editorial content, opinions, or recommendations. Our goal is always to provide honest, accurate, and helpful information. If we recommend a product or service, it is because we believe in it, not because of the compensation we may receive.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We are committed to full transparency. When a link is an affiliate link, we will make reasonable efforts to disclose this to you. This disclosure may be made in the content itself, on the page where the link appears, or through a general disclosure like this one.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          3. Your Support Matters
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          When you use our affiliate links, you are supporting The Postpartum OT at no extra cost to yourself. The commissions we earn help us continue creating free content, resources, and community support for occupational therapists who are building postpartum practices.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          You are never obligated to use our affiliate links. If you prefer to navigate directly to a website or find a product on your own, we fully support that decision.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          4. Contact Us
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you have any questions about our affiliate relationships or this disclaimer, please contact us:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>
            <strong className="text-[#0A3660]">Email:</strong>{" "}
            <a
              href="mailto:melissa@thepostpartumot.com"
              className="text-[#469695] hover:underline"
            >
              melissa@thepostpartumot.com
            </a>
          </li>
          <li>
            <strong className="text-[#0A3660]">Phone:</strong> (816) 365-0874
          </li>
        </ul>
      </article>
    </main>
  );
}
