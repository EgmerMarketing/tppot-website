import type { Metadata } from 'next';
import { AlertCircle, Heart } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Postpartum Support for Moms & Caregivers',
  description: "You're not alone in this. Find resources, support, and guidance for your postpartum journey from The Postpartum OT. Evidence-based help for new parents.",
  alternates: { canonical: `${company.url}/for-moms` },
};

export default function ForMomsPage() {
  return (
    <>
      <ReaderContent title="Postpartum Support for Moms and Caregivers" />

      <section className="bg-[#469695] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">You&apos;re Not Alone in This</h2>
          <p className="text-lg font-lora italic text-white/90">
            The postpartum period is one of the biggest transitions you&apos;ll ever face. You deserve support, answers, and someone who understands.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-6">It&apos;s Okay to Not Be Okay</h2>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            If you&apos;re reading this at 2 AM with a baby who won&apos;t sleep and a body that doesn&apos;t feel like yours — you&apos;re not failing. You&apos;re navigating one of the most profound transitions a human being can experience.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            The exhaustion is real. The overwhelm is real. The feeling that everyone else has it figured out? That&apos;s not real. Most new parents feel exactly like you do — they&apos;re just not talking about it.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-8">What Nobody Tells You About the Fourth Trimester</h2>
          <ul className="space-y-5">
            {[
              { title: 'Your recovery matters too.', body: "The focus shifts to baby the moment they arrive, but your body just did something extraordinary. Give yourself grace." },
              { title: "The 6-week checkup isn't enough.", body: "If you still don't feel like yourself after your doctor says you're 'cleared' — trust your instincts. Seek more support." },
              { title: 'Occupational therapy can help.', body: "OTs are trained to help you manage daily routines, feeding challenges, sleep strategies, identity changes, and the mental load of new parenthood." },
              { title: 'Asking for help is strength, not weakness.', body: "You were never meant to do this alone." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <Heart size={20} className="text-[#469695] mt-1 shrink-0" />
                <div>
                  <strong className="text-[#0A3660]">{item.title}</strong>{' '}
                  <span className="text-gray-700 font-lora">{item.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-red-50 border-l-4 border-red-400">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle size={24} className="text-red-500 mt-1 shrink-0" />
            <h2 className="text-2xl font-black text-[#0A3660]">When to Reach Out</h2>
          </div>
          <p className="text-gray-700 font-lora mb-4">It&apos;s worth talking to a professional if you&apos;re experiencing:</p>
          <ul className="space-y-2 text-gray-700 font-lora mb-6">
            {[
              'Persistent sadness, anxiety, or feelings of emptiness',
              'Difficulty bonding with your baby',
              'Intrusive or frightening thoughts',
              'Inability to sleep even when baby is sleeping',
              "Feeling like you're going through the motions but not really present",
              'Loss of interest in things you used to enjoy',
              'Feeling overwhelmed by daily tasks that used to feel manageable',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span> {item}
              </li>
            ))}
          </ul>
          <p className="font-bold text-[#0A3660] mb-4">These feelings are common. They are not your fault. And they are treatable.</p>
          <p className="text-gray-700 font-lora">
            <strong>If you&apos;re in crisis:</strong> Contact the Maternal Mental Health Hotline at{' '}
            <a href="tel:18339435746" className="text-[#469695] font-bold hover:underline">1-833-943-5746</a>{' '}
            (1-833-9-HELP4MOMS) — free, confidential, 24/7.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-6">Free Resources for You</h2>
          <p className="text-gray-600 font-lora mb-8">[PLACEHOLDER — lead magnet and resource links coming soon]</p>
          <Button href="/resources">Browse All Resources</Button>
        </div>
      </section>

      <section className="py-16 bg-[#0A3660] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black mb-4">Looking for a Postpartum OT?</h2>
          <p className="font-lora italic text-gray-200 mb-6">Contact us and we can help connect you with a clinician in our network.</p>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
