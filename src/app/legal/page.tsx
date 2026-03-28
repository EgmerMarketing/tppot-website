import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Legal | The Postpartum OT",
  description:
    "Review our policies, terms, and legal agreements for The Postpartum OT.",
};

const legalPages = [
  {
    title: "Terms & Conditions",
    href: "/legal/terms-and-conditions",
    description: "The rules and guidelines governing your use of our website and services.",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy-policy",
    description: "How we collect, use, and protect your personal information.",
  },
  {
    title: "Refund & Cancellation Policy",
    href: "/legal/refund-policy",
    description: "Our policies on refunds, cancellations, and service adjustments.",
  },
  {
    title: "Earning Disclaimer",
    href: "/legal/earning-disclaimer",
    description: "Important information about income claims and expected results.",
  },
  {
    title: "Affiliate Marketing Disclaimer",
    href: "/legal/affiliate-disclaimer",
    description: "How affiliate links work on our website and what that means for you.",
  },
  {
    title: "Consulting Agreement",
    href: "/legal/consulting-agreement",
    description: "The formal agreement governing our consulting and mentorship services.",
  },
];

export default function LegalPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://thepostpartumot.com" },
              { name: "Legal", url: "https://thepostpartumot.com/legal" },
            ])
          ),
        }}
      />
      <section className="max-w-[900px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Legal
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-lg mx-auto">
            Review our policies, terms, and legal agreements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="bg-white rounded-2xl shadow-sm p-8 block hover:shadow-md transition-shadow"
            >
              <h2 className="font-serif font-bold text-[#0A3660] text-xl mb-2">
                {page.title}
              </h2>
              <p className="font-serif text-[#6B6560] text-sm mb-4">
                {page.description}
              </p>
              <span className="text-[#469695] font-sans font-bold text-sm">
                Read more
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
