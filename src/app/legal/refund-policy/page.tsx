import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | The Postpartum OT",
  description:
    "Our policies on refunds, cancellations, and service adjustments at The Postpartum OT.",
};

export default function RefundPolicyPage() {
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
                name: "Refund & Cancellation Policy",
                url: "https://thepostpartumot.com/legal/refund-policy",
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
            <li aria-current="page">Refund & Cancellation Policy</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
          Refund & Cancellation Policy
        </h1>
        <p className="text-[#6B6560] font-serif mb-12">
          Effective Date: January 1, 2025
        </p>

        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          At The Postpartum OT, we are committed to delivering high quality services and experiences. We understand that circumstances change, and we want to ensure our refund and cancellation policies are clear and fair. Please review the following policies carefully before making a purchase.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          1. General Refund Policy
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          All purchases of services and digital products are generally considered final. However, we offer a <strong className="text-[#0A3660]">3 day grace period</strong> from the date of purchase during which you may request a full refund, provided that you have not accessed, downloaded, or consumed a significant portion of the purchased content or service.
        </p>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          Refund requests made after the 3 day grace period will be evaluated on a case by case basis at our sole discretion.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          2. Coaching and Consulting Services
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          For one on one coaching or consulting sessions:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>Sessions must be cancelled or rescheduled at least <strong className="text-[#0A3660]">24 hours</strong> in advance. Cancellations made less than 24 hours before a scheduled session will not be refunded.</li>
          <li>No shows (failure to attend a scheduled session without prior notice) are not eligible for a refund or reschedule.</li>
          <li>Unused sessions within a coaching package expire <strong className="text-[#0A3660]">90 days</strong> after the date of purchase unless otherwise stated in your agreement.</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          3. Workshops, Webinars, and Online Events
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          For live or recorded workshops, webinars, and online events:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>Refund requests must be submitted at least <strong className="text-[#0A3660]">48 hours</strong> before the event start time.</li>
          <li>No refunds will be issued once the event has begun or after access to the recording has been provided.</li>
          <li>If we cancel an event for any reason, registered participants will receive a full refund.</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          4. In Person Events
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          For in person workshops, retreats, or conferences:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>Refund requests must be submitted at least <strong className="text-[#0A3660]">14 days</strong> before the event date for a full refund.</li>
          <li>Cancellations made between 7 and 14 days before the event may receive a 50% refund.</li>
          <li>No refunds will be issued for cancellations made less than 7 days before the event or for no shows.</li>
          <li>Transferring your registration to another individual may be permitted with prior written approval.</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          5. Website Design and Development Services
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          For website design and development services:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>Once work has commenced on your project, deposits and payments for completed milestones are nonrefundable.</li>
          <li>If you wish to cancel a project in progress, you are responsible for payment of all work completed up to the date of cancellation, as outlined in your project agreement.</li>
          <li>Custom design and development work is provided as described in your signed agreement and is subject to the terms of that agreement.</li>
        </ul>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          6. Exceptions and Special Circumstances
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We understand that unexpected situations arise. If you are experiencing an extraordinary circumstance (such as a medical emergency or family crisis), please reach out to us directly. We will do our best to work with you on a fair resolution, which may include a credit toward future services, a partial refund, or an extension of access.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          7. How to Request a Refund
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          To request a refund, please contact us with the following information:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-[#6B6560] leading-relaxed mb-4">
          <li>Your full name</li>
          <li>The email address used at the time of purchase</li>
          <li>The product or service purchased</li>
          <li>Date of purchase</li>
          <li>Reason for requesting a refund</li>
        </ul>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          We aim to respond to all refund requests within <strong className="text-[#0A3660]">5 business days</strong>. Approved refunds will be processed to the original payment method within 7 to 10 business days.
        </p>

        <h2 className="font-serif text-[#0A3660] text-xl font-bold mt-10 mb-4">
          8. Contact Us
        </h2>
        <p className="font-serif text-[#6B6560] leading-relaxed mb-4">
          If you have any questions about this Refund & Cancellation Policy, please contact us:
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
