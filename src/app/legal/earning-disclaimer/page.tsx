import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Earning Disclaimer | The Postpartum OT",
  description:
    "Important information about income claims and expected results from The Postpartum OT services.",
};

export default function EarningDisclaimerPage() {
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
                name: "Earning Disclaimer",
                url: "https://thepostpartumot.com/legal/earning-disclaimer",
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
            <li aria-current="page">Earning Disclaimer</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
          Earning Disclaimer
        </h1>
        <p className="text-[#6B6560] font-serif mb-12">
          Effective Date: January 1, 2025
        </p>

        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The information provided by The Postpartum OT (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on our website at thepostpartumot.com and through our services, including coaching, consulting, courses, digital products, and community memberships, is for general informational and educational purposes only.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          1. No Guarantee of Results or Earnings
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We make no guarantees regarding the level of success you may experience by using our information, services, products, or strategies. The testimonials and examples used on our website are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual&apos;s success depends on a variety of factors, including but not limited to background, experience, dedication, effort, market conditions, and desire.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          There is no assurance that any prior successes, examples, or testimonials shared by us or our clients will apply to your situation or produce similar results. Any earnings, income, or revenue statements or examples are only estimates of what you could potentially earn. There is no guarantee you will earn any specific amount using our services.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          2. No &quot;Automated&quot; or Effortless Success
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Building a practice, growing a business, or achieving professional success requires hard work, consistent effort, and a commitment to learning and implementation. Nothing on our Site or in our Services should be interpreted as a promise or guarantee of earnings, passive income, or results without effort. Any references to income, revenue, or business growth are intended to demonstrate what is possible when strategies are applied with dedication and persistence.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          3. Individual Results May Vary
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Your results will vary and depend on many factors, including but not limited to your individual capacity, business experience, expertise, level of desire, and the time, energy, and effort you invest. Since these factors differ for each individual, we cannot guarantee your success, income level, or ability to earn revenue.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          4. No Professional Financial or Legal Advice
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The information on our Site and in our Services is not intended to serve as professional financial, legal, tax, or accounting advice. We are not licensed financial advisors, attorneys, or accountants. You should consult with the appropriate licensed professional before making any business, financial, legal, or tax decisions. We disclaim any liability or responsibility for actions taken based on the information provided by The Postpartum OT.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          5. Assumption of Risk
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          You acknowledge and agree that your use of our Services is at your own risk. Any investment of time, money, or effort you make based on information you receive from us is made at your own risk and judgment. You are solely responsible for your own decisions, actions, and results in life, and by your use of our Site and Services, you agree not to hold us liable for any such decisions, actions, or results at any time and under any circumstance.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          6. Average Results
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          When figures, projections, or testimonials are shared on our Site, they should not be considered as &quot;average&quot; or &quot;typical&quot; results. Most people who purchase educational or coaching services do not implement what they learn. We are not implying that you will duplicate any results shown. The average person who follows any &quot;how to&quot; information achieves varying results depending on effort, skill, and other factors.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          7. Your Success Is Your Responsibility
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We believe in providing high quality education, mentorship, and support. However, your ultimate success is determined by you. We provide tools, strategies, and encouragement, but you are responsible for implementing what you learn, adapting it to your unique situation, and putting in the work required to achieve your goals.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          8. Contact Us
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you have any questions about this Earning Disclaimer, please contact us:
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
