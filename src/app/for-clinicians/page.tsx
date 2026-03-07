import type { Metadata } from 'next';
import { BookOpen, Users, Gift, CheckCircle, XCircle } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'For Healthcare Professionals | Postpartum OT Training & Mentorship',
  description: 'Ready to build a postpartum practice? Get mentorship, training, and community support from The Postpartum OT. For OTs, PTs, and allied health professionals.',
  alternates: { canonical: `${company.url}/for-clinicians` },
};

export default function ForCliniciansPage() {
  return (
    <>
      <ReaderContent title="For Healthcare Professionals" />

      {/* Hero */}
      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            You Already Have What It Takes.<br />
            <span className="text-[#469695]">Let&apos;s Build On It.</span>
          </h2>
          <p className="text-lg font-lora italic text-gray-200">
            Whether you&apos;re an OT curious about postpartum care or a seasoned clinician ready to specialize — you&apos;re in the right place.
          </p>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-6">The Training You Needed But Never Got</h2>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            OT school taught you activity analysis, sensory processing, role adaptation, and therapeutic use of self. What it didn&apos;t teach you: how to apply those skills to one of the most critical transitions a family will ever face.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            Postpartum care isn&apos;t a side specialty. It&apos;s a massive, underserved need — and your OT training already makes you uniquely qualified to fill it.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed font-semibold">
            You just need someone to show you how.
          </p>
        </div>
      </section>

      {/* 3 Ways */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] text-center mb-12">Three Ways to Work With Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={32} className="text-[#469695]" />,
                title: '1:1 & Group Mentorship',
                body: 'The comprehensive program for clinicians who are serious about building a postpartum practice. Clinical skills, business strategy, and ongoing support — all in one place.',
                points: ['Clinical skills for postpartum OT', 'Practice-building guidance (billing, marketing, referrals)', 'Business model development', 'Ongoing mentor support'],
                cta: 'Learn More About Mentorship',
                href: '/for-clinicians/mentorship',
              },
              {
                icon: <Users size={32} className="text-[#469695]" />,
                title: 'Join 600+ Clinicians',
                body: 'Our free Facebook community where healthcare professionals passionate about postpartum care connect, share, and grow together.',
                points: ['Weekly discussions and Q&A', 'Resource sharing', 'Peer support and accountability', 'Direct access to Melissa'],
                cta: 'Join the Collective (Free)',
                href: '/for-clinicians/collective',
              },
              {
                icon: <Gift size={32} className="text-[#469695]" />,
                title: 'Start Here — Free Resources',
                body: 'Not ready to commit? Start with our free tools and see if this path is right for you.',
                points: ['Mom & Baby Class Training Replay', 'Find Your Niche (Interactive GPT Tool)', 'Conversation Starter Guide', 'Postpartum Income & Rate Calculator'],
                cta: 'Browse Free Resources',
                href: '/resources',
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#FEFDF8] rounded-2xl p-8 border border-gray-100 flex flex-col">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#0A3660] mb-3">{card.title}</h3>
                <p className="text-gray-600 font-lora mb-4 text-sm leading-relaxed">{card.body}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#469695] mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button href={card.href}>{card.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it&apos;s for */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black text-[#0A3660] mb-6">This Is For You If...</h2>
            <ul className="space-y-3">
              {[
                "You're an OT, PT, SLP, nurse, midwife, or allied health professional",
                "You feel drawn to postpartum care but don't know where to start",
                "You want to transition from your current setting into something more meaningful",
                "You're already doing postpartum work but want to level up",
                "You want to build a private practice serving families",
                "You need mentorship, not just another CEU course",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#469695] mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#0A3660] mb-6">This Is NOT For You If...</h2>
            <ul className="space-y-3">
              {[
                "You're looking for a quick certification to add to your resume",
                "You want someone to do the work for you",
                "You're not willing to invest in your growth",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#0A3660] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">From Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="font-lora italic text-gray-200 mb-4">[PLACEHOLDER — awaiting client testimonials]</p>
                <p className="font-bold text-[#469695] text-sm">— Name, OTR/L</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-8">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need to be an OT to work with you?', a: 'No. While my background is in OT, our community includes PTs, SLPs, nurses, midwives, doulas, and other allied health professionals. If you\'re passionate about postpartum care, you belong here.' },
              { q: 'I have zero postpartum experience. Is this still for me?', a: 'Absolutely. Many of our community members started with no postpartum experience. Your clinical training is a stronger foundation than you realize.' },
              { q: 'What if I\'m not ready to start a private practice?', a: 'You don\'t have to be. Many clinicians in the Collective work in hospitals, clinics, or home health. The skills and knowledge apply everywhere.' },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-[#0A3660] mb-2">{item.q}</h3>
                <p className="text-gray-600 font-lora">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#469695] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Start?</h2>
          <p className="font-lora italic mb-8 text-white/90">The families who need your support are already out there. Let&apos;s make sure you&apos;re ready for them.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/for-clinicians/mentorship" variant="secondary">Explore Mentorship</Button>
            <Button href="/for-clinicians/collective" variant="ghost" className="border-white text-white hover:bg-white hover:text-[#469695]">
              Join the Collective (Free)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
