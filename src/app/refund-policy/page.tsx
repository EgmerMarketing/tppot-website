import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | The Postpartum OT',
  robots: { index: false, follow: false },
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black text-[#0A3660] mb-8">Refund Policy</h1>
      <p className="text-gray-600 font-lora leading-relaxed mb-4">Last updated: 2026</p>
      <p className="text-gray-700 font-lora leading-relaxed">[Full refund policy to be provided by client]</p>
    </div>
  );
}
