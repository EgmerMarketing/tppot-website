import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Consulting Agreement | The Postpartum OT",
  description:
    "The formal agreement governing consulting and mentorship services at The Postpartum OT.",
};

export default function ConsultingAgreementPage() {
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
                name: "Consulting Agreement",
                url: "https://thepostpartumot.com/legal/consulting-agreement",
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
            <li aria-current="page">Consulting Agreement</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
          Consulting Agreement
        </h1>
        <p className="text-[#6B6560] font-serif mb-12">
          Effective Date: January 1, 2025
        </p>

        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          This Consulting Agreement (&quot;Agreement&quot;) is entered into by and between The Postpartum OT, operated by Postpartum OT LLC (&quot;Consultant&quot;), and the individual or entity engaging consulting services (&quot;Client&quot;). By purchasing or engaging any consulting or mentorship service, the Client agrees to the terms set forth in this Agreement.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          1. Engagement & Services
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The Consultant agrees to provide the Client with consulting and/or mentorship services as described in the applicable service description, proposal, or Exhibit A attached hereto (the &quot;Services&quot;). The scope, deliverables, and timeline of the Services will be agreed upon in writing by both parties prior to commencement.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The Consultant will perform the Services in a professional and timely manner, consistent with industry standards. The Client acknowledges that results may vary and are not guaranteed. The Consultant does not guarantee any specific outcomes, business results, or financial performance as a result of the Services.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          2. Consultancy Period
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The term of this Agreement shall begin on the date the Client purchases or formally engages the Services and shall continue until the Services are completed, unless terminated earlier in accordance with this Agreement. For ongoing or recurring engagements, the term and renewal conditions will be specified in the applicable service description or Exhibit A.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          3. Consultancy Fee & Expenses
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The Client agrees to pay the Consultant the fees specified in the applicable service description, invoice, or Exhibit A. Payment terms are as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>All fees are due as specified at the time of purchase or as outlined in the payment schedule.</li>
          <li>Late payments may incur a fee of 1.5% per month on any outstanding balance.</li>
          <li>The Client is responsible for any applicable taxes associated with the Services.</li>
          <li>Unless otherwise agreed in writing, the Client shall reimburse the Consultant for reasonable, pre approved out of pocket expenses incurred in connection with the Services.</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          4. Work Product & Intellectual Property
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Unless otherwise agreed in writing:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>All templates, frameworks, methods, processes, tools, and materials developed or provided by the Consultant in connection with the Services (&quot;Consultant Materials&quot;) remain the sole intellectual property of the Consultant.</li>
          <li>The Client receives a limited, nonexclusive, nontransferable license to use the Consultant Materials for their own personal or business purposes.</li>
          <li>The Client may not reproduce, distribute, modify, sell, or sublicense the Consultant Materials without the prior written consent of the Consultant.</li>
          <li>Any work product specifically created for the Client and identified as &quot;Client Deliverables&quot; in Exhibit A shall become the property of the Client upon full payment.</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          5. Confidential Information
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Both parties acknowledge that during the course of this engagement, they may receive or have access to confidential information belonging to the other party (&quot;Confidential Information&quot;). Confidential Information includes, but is not limited to, business strategies, financial information, client lists, proprietary methods, and any information marked as confidential or that a reasonable person would understand to be confidential.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Each party agrees to: (a) hold the other party&apos;s Confidential Information in strict confidence; (b) not disclose it to any third party without prior written consent; and (c) use it only for the purposes of this Agreement. This obligation survives the termination of this Agreement for a period of two (2) years.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          6. Independent Contractor
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The Consultant is an independent contractor and is not an employee, agent, partner, or joint venturer of the Client. The Consultant shall have no authority to bind the Client or incur any obligation on behalf of the Client. The Consultant is solely responsible for all taxes, insurance, and benefits related to the Consultant&apos;s own business operations.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          7. Force Majeure
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Neither party shall be held liable for any failure or delay in performing their obligations under this Agreement due to causes beyond their reasonable control, including but not limited to natural disasters, acts of government, war, terrorism, pandemic, epidemic, power outages, internet disruptions, or other events of force majeure. The affected party shall promptly notify the other party and make reasonable efforts to resume performance as soon as practicable.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          8. Non Publicity
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Neither party shall use the other party&apos;s name, logo, or likeness in any marketing, advertising, or promotional materials without the prior written consent of the other party. Notwithstanding the foregoing, the Consultant may include a general description of the Services provided (without identifying the Client by name) in the Consultant&apos;s portfolio or case studies, unless the Client objects in writing.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          9. Assignment
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Neither party may assign or transfer this Agreement or any rights or obligations hereunder without the prior written consent of the other party, except that the Consultant may assign this Agreement to a successor entity in connection with a merger, acquisition, or sale of substantially all of its assets.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          10. Governing Law & Dispute Resolution
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          This Agreement shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of laws principles. Any dispute arising out of or relating to this Agreement shall first be submitted to good faith mediation. If mediation is unsuccessful, the dispute shall be resolved by binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in the State of Texas.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          11. General Provisions
        </h2>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>
            <strong className="text-[#0A3660]">Entire Agreement:</strong> This Agreement, together with any exhibits, schedules, or attachments, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior agreements, understandings, negotiations, and discussions, whether oral or written.
          </li>
          <li>
            <strong className="text-[#0A3660]">Amendments:</strong> This Agreement may only be amended or modified by a written document signed by both parties.
          </li>
          <li>
            <strong className="text-[#0A3660]">Severability:</strong> If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </li>
          <li>
            <strong className="text-[#0A3660]">Waiver:</strong> The failure of either party to enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision.
          </li>
          <li>
            <strong className="text-[#0A3660]">Notices:</strong> All notices under this Agreement shall be in writing and delivered to the addresses specified by the parties or by email to the addresses used during the engagement.
          </li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          Exhibit A: Services & Fees
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The specific services, deliverables, timeline, and fees for each engagement will be outlined in a separate Exhibit A document provided to the Client at the time of purchase or proposal. Exhibit A will be customized to reflect the agreed upon scope of work and will be incorporated into this Agreement by reference.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Exhibit A may include, but is not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>Description of Services to be performed</li>
          <li>Deliverables and milestones</li>
          <li>Project timeline and deadlines</li>
          <li>Fee structure (hourly, flat rate, retainer, or package pricing)</li>
          <li>Payment schedule and terms</li>
          <li>Any additional terms specific to the engagement</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          Contact Us
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you have any questions about this Consulting Agreement, please contact us:
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
