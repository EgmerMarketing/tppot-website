import type { Metadata } from 'next';
import { Download, BookOpen, Calculator, MessageSquare } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import EmailCapture from '@/components/EmailCapture';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Free Resources for Postpartum Clinicians',
  description: 'Free guides, tools, and resources for healthcare professionals entering postpartum care. From The Postpartum OT with Melissa O\'Neal, OTR/L.',
  alternates: { canonical: `${company.url}/resources` },
};

export default function ResourcesPage() {
  return (
    <>
      <ReaderContent title="Free Resources for Postpartum Clinicians" />

      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Free Resources to Get You Started</h2>
          <p className="text-lg font-lora italic text-gray-200">
            Tools, guides, and training to help you explore postpartum care — no commitment required.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] text-center mb-12">For Clinicians</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <BookOpen size={28} className="text-[#469695]" />, title: 'Mom & Baby Class Training Replay', desc: 'Watch a complete replay of Melissa\'s mom & baby class training session. See exactly how she structures a class, what topics she covers, and how she engages participants.', cta: 'Watch Now' },
              { icon: <MessageSquare size={28} className="text-[#469695]" />, title: 'Find Your Niche (Interactive GPT Tool)', desc: 'Not sure which area of postpartum care is right for you? This interactive tool helps you identify your niche based on your clinical background, interests, and goals.', cta: 'Use the Tool' },
              { icon: <Download size={28} className="text-[#469695]" />, title: 'Conversation Starter Guide', desc: 'A practical guide for having meaningful conversations with new parents — including questions that open the door to deeper support and assessment.', cta: 'Download Free' },
              { icon: <Calculator size={28} className="text-[#469695]" />, title: 'Postpartum Income & Rate Calculator', desc: 'Figure out what to charge for your postpartum services — with a simple calculator that factors in your experience, location, and service model.', cta: 'Calculate Now' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A3660] mb-3">{item.title}</h3>
                <p className="text-gray-600 font-lora text-sm leading-relaxed mb-6">{item.desc}</p>
                {/* KARTRA_EMBED: Resource access/opt-in for each tool */}
                <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-400 italic">[Resource embed coming soon — Kartra link]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#469695] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black mb-4">Get All Resources in Your Inbox</h2>
          <p className="font-lora italic mb-6 text-white/90">
            Subscribe for weekly insights, new tools, and updates on postpartum care.
          </p>
          <EmailCapture buttonText="Subscribe" note="" />
        </div>
      </section>
    </>
  );
}
