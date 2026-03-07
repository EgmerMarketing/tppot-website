import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earning Disclaimer | The Postpartum OT',
  robots: { index: false, follow: false },
};

export default function EarningDisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-black text-[#0A3660] mb-8">Earning Disclaimer</h1>
      <p className="text-gray-700 font-lora leading-relaxed mb-4">
        Any income or earnings statements or examples shown on this website are only estimates of what is possible. There is no assurance you will do as well. Results will vary.
      </p>
      <p className="text-gray-700 font-lora leading-relaxed">[Full earning disclaimer to be provided by client / legal counsel]</p>
    </div>
  );
}
