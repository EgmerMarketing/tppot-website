import type { Metadata } from 'next';
import { CheckCircle, Users } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Postpartum OT Mentorship | Build Your Practice with Confidence',
  description: 'Get personalized mentorship from Melissa O\'Neal, OTR/L. Learn postpartum clinical skills, business strategy, and practice building. For OTs and healthcare professionals.',
  alternates: { canonical: `${company.url}/for-clinicians/mentorship` },
};

export default function MentorshipPage() {
  return (
    <>
      <ReaderContent title="Postpartum OT Mentorship — Build Your Practice with Confidence" />

      {/* Hero */}
      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Build a Postpartum Practice You&apos;re Proud Of</h2>
          <p className="text-lg font-lora italic text-gray-200">
            Personalized mentorship that takes you from curious clinician to confident postpartum specialist.
          </p>
        </div>
      </section>

      {/* The problem with CEUs */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-6">A 1-Hour CEU Won&apos;t Get You There</h2>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            You&apos;ve taken the courses. Read the articles. Maybe even attended a conference or two. And you still don&apos;t feel ready to actually serve postpartum families.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed font-semibold text-[#0A3660]">
            That&apos;s because courses teach you what to know. Mentorship teaches you what to do — and gives you someone in your corner while you do it.
          </p>
        </div>
      </section>

      {/* What&apos;s included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] text-center mb-12">What You&apos;ll Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Clinical Skills',
                items: ['Postpartum assessment and intervention strategies', 'Infant development, feeding, and sleep support', 'Maternal mental health screening and support', 'Sensory processing in the postpartum context', 'Role and routine adaptation for new families'],
              },
              {
                title: 'Practice Building',
                items: ['Choosing your business model (private pay, hybrid, insurance)', 'Setting rates and creating service packages', 'Getting referrals from OBs, midwives, pediatricians', 'Marketing your postpartum practice', 'Telehealth setup and best practices'],
              },
              {
                title: 'Ongoing Support',
                items: ['Direct access to Melissa for questions and guidance', 'Community of fellow mentees', 'Accountability and milestone tracking', 'Resource library and templates'],
              },
            ].map((col) => (
              <div key={col.title} className="bg-[#FEFDF8] rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#469695] mb-4">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#469695] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kartra embed */}
      <section className="py-16 bg-[#469695] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Get Started?</h2>
          {/* KARTRA_EMBED: Mentorship program enrollment/booking */}
          <div className="bg-white/20 border-2 border-dashed border-white/50 rounded-2xl p-12">
            <p className="text-white/80 italic text-sm">[Mentorship enrollment widget — Kartra embed coming soon]</p>
          </div>
        </div>
      </section>

      {/* Who it&apos;s for */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-8">This Is For You If...</h2>
          <ul className="space-y-4">
            {[
              "You're a clinician who wants to specialize in postpartum care",
              "You want more than a course — you want a mentor",
              "You're ready to invest in building something meaningful",
              "You want both clinical skills AND business guidance",
              "You value community and accountability",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#469695] mt-0.5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] text-center mb-12">What Mentees Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-[#FEFDF8] rounded-2xl p-8 border border-gray-100">
                <p className="font-lora italic text-gray-600 mb-4">[PLACEHOLDER — awaiting client testimonials]</p>
                <p className="font-bold text-[#469695] text-sm">— Name, OTR/L</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-8">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long is the mentorship program?', a: '[PLACEHOLDER — Melissa to provide program length]' },
              { q: 'How much does it cost?', a: '[PLACEHOLDER — Kartra will handle pricing display]' },
              { q: 'Can I do this while working full-time?', a: 'Yes. The program is designed for working clinicians. [PLACEHOLDER — details on time commitment]' },
              { q: "What if I'm not an OT?", a: 'This mentorship is open to all healthcare professionals passionate about postpartum care, including PTs, SLPs, nurses, and midwives.' },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-[#0A3660] mb-2">{item.q}</h3>
                <p className="text-gray-600 font-lora">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0A3660] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">The Families Are Waiting. Are You Ready?</h2>
          <p className="font-lora italic text-gray-200 mb-8">
            Every day you wait is another day a family goes without the support you could provide. Let&apos;s get you started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Apply for Mentorship</Button>
            <Button href="/for-clinicians/collective" variant="ghost" className="border-white text-white hover:bg-white hover:text-[#0A3660] flex items-center gap-2">
              <Users size={16} /> Not Sure? Join the Collective First (Free)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
