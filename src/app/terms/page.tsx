import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Postpartum OT',
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black text-[#0A3660] mb-8">Terms &amp; Conditions</h1>
      <p className="text-gray-600 font-lora leading-relaxed mb-4">Last updated: 2026</p>
      <p className="text-gray-700 font-lora leading-relaxed">
        By accessing or using thepostpartumot.com, you agree to be bound by these Terms &amp; Conditions.
      </p>
      <p className="text-gray-700 font-lora leading-relaxed mt-4">[Full terms to be provided by client / legal counsel]</p>
    </div>
  );
}
