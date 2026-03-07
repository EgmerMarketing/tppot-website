import type { Metadata } from 'next';
import { Mic, CheckCircle } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Book Melissa O\'Neal | Postpartum Care Speaker & OT Expert',
  description: 'Book Melissa O\'Neal, OTR/L, for your next conference, podcast, or workshop. Expert speaker on postpartum OT, maternal health, and practice building for clinicians.',
  alternates: { canonical: `${company.url}/speaking` },
};

const topics = [
  { title: 'The OT Advantage in Postpartum Care', desc: 'Why occupational therapists are uniquely positioned to transform the postpartum experience — and how to step into this emerging practice area with confidence.' },
  { title: 'Beyond the 6-Week Checkup', desc: 'The critical gaps in postpartum care and what healthcare professionals can do to fill them. Evidence, stories, and a roadmap.' },
  { title: 'Building a Postpartum Practice from Scratch', desc: 'From clinical skills to business model — a practical workshop for clinicians who want to serve families and build a sustainable career.' },
  { title: 'The Confidence Gap', desc: "Why knowing what to do isn't enough — and how mentorship, community, and action bridge the gap between training and practice." },
  { title: 'Self-Settling vs. Self-Soothing', desc: 'Debunking infant sleep myths with neuroscience — and equipping clinicians to guide families with evidence-based confidence.' },
];

export default function SpeakingPage() {
  return (
    <>
      <ReaderContent title="Book Melissa O'Neal — Postpartum Care Speaker" />

      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Bring Postpartum OT to Your Stage</h2>
          <p className="text-lg font-lora italic text-gray-200 mb-8">
            Keynotes, workshops, and podcast appearances that inspire clinicians to transform postpartum care.
          </p>
          <Button href="/contact">Book Melissa</Button>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-6">More Than a Presentation — A Call to Action</h2>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            Melissa doesn&apos;t just talk about postpartum care. She makes audiences feel the urgency, see the opportunity, and leave ready to act.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed">
            With 10+ years of hands-on experience, a thriving community of 600+ clinicians, and a gift for making complex topics accessible and actionable, Melissa delivers presentations that stick.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] text-center mb-12">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-[#FEFDF8] rounded-2xl p-6 border border-gray-100">
                <Mic size={24} className="text-[#469695] mb-3" />
                <h3 className="font-bold text-[#0A3660] mb-2">{topic.title}</h3>
                <p className="text-gray-600 font-lora text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
            <div className="bg-[#469695]/10 rounded-2xl p-6 border border-[#469695]/30 flex items-center justify-center">
              <p className="text-[#0A3660] font-bold text-center">Custom topics available for your audience and event theme.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-6">About Melissa</h2>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            Melissa O&apos;Neal, OTR/L, is the founder of The Postpartum OT and host of the Functional Fourth Trimester podcast. With over a decade of experience supporting families through the postpartum period — as both an occupational therapist and overnight postpartum doula — Melissa now mentors healthcare professionals who want to enter this critical space.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed">
            She leads The Postpartum Collective, a 600+ member community of clinicians transforming postpartum care. Melissa&apos;s work sits at the intersection of clinical expertise, practice building, and the belief that every family deserves supported beginnings.
          </p>
          <div className="mt-8 p-4 bg-gray-100 rounded-xl text-sm text-gray-500 italic">[PLACEHOLDER — past speaking engagements and photos]</div>
        </div>
      </section>

      <section className="py-16 bg-[#0A3660] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Book?</h2>
          <p className="font-lora italic text-gray-200 mb-8">Email hello@thepostpartumot.com or use the form below with details about your event.</p>
          <Button href="/contact">Book Melissa to Speak</Button>
        </div>
      </section>
    </>
  );
}
