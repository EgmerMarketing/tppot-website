import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Postpartum OT",
  description:
    "Terms and conditions governing your use of The Postpartum OT website and services.",
};

export default function TermsAndConditionsPage() {
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
                name: "Terms & Conditions",
                url: "https://thepostpartumot.com/legal/terms-and-conditions",
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
            <li aria-current="page">Terms & Conditions</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
          Terms & Conditions
        </h1>
        <p className="text-[#6B6560] font-serif mb-12">
          Effective Date: January 1, 2025
        </p>

        <div className="space-y-4">
          <p className="font-serif text-[#6B6560] leading-relaxed">
            Welcome to The Postpartum OT (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website located at thepostpartumot.com (the &quot;Site&quot;) and any related services, including but not limited to coaching, consulting, digital products, online courses, memberships, and events (collectively, the &quot;Services&quot;).
          </p>
          <p className="font-serif text-[#6B6560] leading-relaxed">
            By accessing or using our Site and Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Site or Services.
          </p>
        </div>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          1. Privacy
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Your use of our Site and Services is also governed by our{" "}
          <Link href="/legal/privacy-policy" className="text-[#469695] hover:underline">
            Privacy Policy
          </Link>
          , which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          2. Electronic Communications
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          When you visit the Site or send us emails, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by email or by posting notices on the Site. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          3. Your Account
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you create an account on our Site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password. We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          4. Children Under Thirteen
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Our Site and Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are under 13, you may not use our Site or Services.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          5. Cancellation and Refund Policy
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Our cancellation and refund terms are detailed in our{" "}
          <Link href="/legal/refund-policy" className="text-[#469695] hover:underline">
            Refund & Cancellation Policy
          </Link>
          . By purchasing any of our Services, you agree to the terms outlined in that policy. Please review it before making a purchase.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          6. Links to Third Party Sites
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Our Site may contain links to other websites (&quot;Linked Sites&quot;). The Linked Sites are not under our control and we are not responsible for the contents of any Linked Site, including any link contained in a Linked Site or any changes or updates to a Linked Site. We are providing these links to you only as a convenience, and the inclusion of any link does not imply our endorsement of the site or any association with its operators.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          7. Intellectual Property
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          All content on the Site, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of The Postpartum OT or its content suppliers and is protected by United States and international copyright laws. The compilation of all content on this Site is the exclusive property of The Postpartum OT.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent, except for your own personal, noncommercial use.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          8. Use of Communication Services
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The Site may contain forums, communities, calendars, or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, &quot;Communication Services&quot;). You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          By way of example, and not as a limitation, you agree that when using a Communication Service, you will not: defame, abuse, harass, stalk, threaten, or otherwise violate the legal rights of others; publish, post, upload, distribute, or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful topic, name, material, or information; upload files that contain software or other material protected by intellectual property laws unless you own or control the rights thereto or have received all necessary consents; advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages; or conduct or forward surveys, contests, pyramid schemes, or chain letters.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          9. Submissions
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Any material, information, or idea you transmit to or post on the Site by any means will be treated as nonconfidential and nonproprietary, and may be disseminated or used by The Postpartum OT or its affiliates for any purpose, including but not limited to developing, manufacturing, and marketing products using such information. You are prohibited from posting or transmitting to or from the Site any material that is unlawful, threatening, libelous, defamatory, obscene, pornographic, or that would violate any law.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          10. International Users
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          The Site is controlled, operated, and administered by The Postpartum OT from our offices within the United States. If you access the Site from a location outside the United States, you are responsible for compliance with all local laws. You agree that you will not use the content accessed through the Site in any country or in any manner prohibited by any applicable laws, restrictions, or regulations.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          11. Indemnification
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          You agree to indemnify, defend, and hold harmless The Postpartum OT, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys&apos; fees, resulting from any violation of these Terms or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the Site using your account.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          12. Limitation of Liability
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          In no event shall The Postpartum OT, its officers, directors, employees, or agents be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from: (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage of any nature whatsoever resulting from your access to and use of our Services; (iii) any unauthorized access to or use of our secure servers and/or any personal information stored therein; (iv) any interruption or cessation of transmission to or from our Services; (v) any bugs, viruses, trojan horses, or the like which may be transmitted to or through our Services by any third party; and/or (vi) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the Services, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          13. Arbitration and Dispute Resolution
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Any dispute or claim arising out of or relating to these Terms, or the breach thereof, shall be settled by binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in the state of Texas. The arbitrator&apos;s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction. Each party shall bear its own costs and expenses related to the arbitration.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          14. Class Action Waiver
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          You agree that any arbitration or proceeding shall be limited to the dispute between us and you individually. To the full extent permitted by law, (a) no arbitration or proceeding shall be joined with any other; (b) there is no right or authority for any dispute to be arbitrated or resolved on a class action basis or to utilize class action procedures; and (c) there is no right or authority for any dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          15. Termination
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We may terminate or suspend your access to our Site and Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. All provisions of these Terms which by their nature should survive termination shall survive termination, including without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          16. Changes to Terms
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site and Services after any revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          17. Contact Us
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you have any questions about these Terms, please contact us:
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
