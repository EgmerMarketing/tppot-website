import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | The Postpartum OT",
  description:
    "Learn how The Postpartum OT collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
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
                name: "Privacy Policy",
                url: "https://thepostpartumot.com/legal/privacy-policy",
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
            <li aria-current="page">Privacy Policy</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
          Privacy Policy
        </h1>
        <p className="text-[#6B6560] font-serif mb-12">
          Last Updated: March 14, 2025
        </p>

        <div className="space-y-4">
          <p className="font-serif text-[#6B6560] leading-relaxed">
            The Postpartum OT (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at thepostpartumot.com (the &quot;Site&quot;) and use our services, including coaching, consulting, digital products, and community access.
          </p>
          <p className="font-serif text-[#6B6560] leading-relaxed">
            By using our Site and services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please discontinue use of our Site.
          </p>
        </div>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          1. Definitions
        </h2>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>
            <strong className="text-[#0A3660]">&quot;Personal Data&quot;</strong> means any information that identifies or can be used to identify you, such as your name, email address, phone number, or payment information.
          </li>
          <li>
            <strong className="text-[#0A3660]">&quot;Usage Data&quot;</strong> means information collected automatically, such as pages visited, time spent on pages, device identifiers, and IP addresses.
          </li>
          <li>
            <strong className="text-[#0A3660]">&quot;Cookies&quot;</strong> are small data files stored on your device that help us improve your experience and understand how our Site is used.
          </li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          2. Scope
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          This Privacy Policy applies to all information collected through our Site and any related services, sales, marketing, or events (collectively, the &quot;Services&quot;). It does not apply to information collected by third parties, including any third party applications or content that may link to or be accessible from our Services.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          3. Information We Collect
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We may collect information about you in the following ways:
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-2">
          <strong className="text-[#0A3660]">Personal Data You Provide:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment and billing information (processed securely through third party payment processors)</li>
          <li>Any information you voluntarily submit through forms, surveys, or direct communication</li>
        </ul>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-2">
          <strong className="text-[#0A3660]">Usage Data Collected Automatically:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on those pages</li>
          <li>Referring website or source</li>
          <li>Device type and operating system</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          4. How We Use Your Data
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>To provide, operate, and maintain our Site and Services</li>
          <li>To process transactions and send related information, including purchase confirmations and invoices</li>
          <li>To communicate with you, including responding to inquiries, providing customer service, and sending administrative updates</li>
          <li>To send marketing and promotional communications (you can opt out at any time)</li>
          <li>To personalize your experience and improve our Site</li>
          <li>To monitor and analyze usage and trends to improve functionality</li>
          <li>To protect against fraud, unauthorized transactions, and other liability</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          5. Legal Basis for Data Processing (GDPR)
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you are located in the European Economic Area (EEA), our legal basis for collecting and using your personal data depends on the data concerned and the specific context in which we collect it. We may process your personal data because:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>We need to perform a contract with you (such as when you purchase a service)</li>
          <li>You have given us consent to do so</li>
          <li>The processing is in our legitimate interests and is not overridden by your rights</li>
          <li>We need to comply with the law</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          6. Data Security
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>SSL encryption on all pages of our Site</li>
          <li>Secure storage of personal data</li>
          <li>Restricted access to personal data to authorized personnel only</li>
          <li>Regular review of our data collection, storage, and processing practices</li>
        </ul>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          While we take reasonable precautions, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          7. Sharing Your Data
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We do not sell your personal information. We may share your data with the following types of third parties:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>
            <strong className="text-[#0A3660]">Payment Processors:</strong> We use third party payment processors to handle transactions securely. We do not store your credit card information.
          </li>
          <li>
            <strong className="text-[#0A3660]">Email Marketing Platforms:</strong> We use email service providers to send newsletters, updates, and promotional content. Your email address may be shared with these providers for this purpose.
          </li>
          <li>
            <strong className="text-[#0A3660]">Analytics Providers:</strong> We use tools like Google Analytics to understand how visitors interact with our Site. These providers may collect Usage Data on our behalf.
          </li>
          <li>
            <strong className="text-[#0A3660]">Service Providers:</strong> We may share data with vendors who assist us in operating our Site, conducting business, or providing services to you, so long as those parties agree to keep this information confidential.
          </li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          8. Cookies
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Our Site uses cookies to enhance your experience. Cookies allow us to recognize your browser and capture certain information, such as your preferences and browsing history. You can choose to disable cookies through your browser settings, but doing so may affect your ability to use certain features of our Site.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We may use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted). Third party services used on our Site may also set their own cookies.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          9. Data Retention
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. Usage Data is generally retained for a shorter period unless it is used to strengthen security or improve the functionality of our Services.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          10. Your Rights
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Depending on your location, you may have certain rights regarding your personal data, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>
            <strong className="text-[#0A3660]">Access:</strong> You have the right to request a copy of the personal data we hold about you.
          </li>
          <li>
            <strong className="text-[#0A3660]">Correction:</strong> You have the right to request that we correct any inaccurate or incomplete data.
          </li>
          <li>
            <strong className="text-[#0A3660]">Deletion:</strong> You have the right to request that we delete your personal data, subject to certain exceptions.
          </li>
          <li>
            <strong className="text-[#0A3660]">Objection:</strong> You have the right to object to our processing of your personal data.
          </li>
          <li>
            <strong className="text-[#0A3660]">Data Portability:</strong> You have the right to request a copy of your data in a structured, commonly used, and machine readable format.
          </li>
          <li>
            <strong className="text-[#0A3660]">Withdraw Consent:</strong> If we rely on your consent to process your personal data, you have the right to withdraw that consent at any time.
          </li>
        </ul>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          To exercise any of these rights, please contact us at the information provided below.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          11. Third Party Links
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Our Site may contain links to third party websites or services that are not operated by us. If you click a third party link, you will be directed to that party&apos;s site. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third party sites or services.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          12. Business Transfers
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          In the event that The Postpartum OT is involved in a merger, acquisition, or asset sale, your personal data may be transferred as part of that transaction. We will provide notice before your data is transferred and becomes subject to a different privacy policy.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          13. Children&apos;s Privacy
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Our Services are not directed to individuals under the age of 13. We do not knowingly collect personal data from children under 13. If we become aware that a child under 13 has provided us with personal data, we will take steps to delete such information. If you believe a child has provided us with personal data, please contact us immediately.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          14. Changes to This Privacy Policy
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes are effective when they are posted on this page.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          15. Contact Us
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you have any questions about this Privacy Policy, please contact us:
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
