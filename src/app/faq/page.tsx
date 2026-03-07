import type { Metadata } from 'next';
import ReaderContent from '@/components/ReaderContent';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about postpartum OT, mentorship, The Postpartum Collective, and how to start a postpartum care practice. Answers from Melissa O\'Neal, OTR/L.',
  alternates: { canonical: `${company.url}/faq` },
};

const clinicianFAQs = [
  { q: 'What is a postpartum OT?', a: 'A postpartum occupational therapist supports families during the fourth trimester and beyond. We address daily routines, feeding, sleep, maternal mental health, infant development, role transitions, and environmental adaptations. It\'s applying core OT principles to one of life\'s most significant transitions.' },
  { q: 'Do I need to be an OT to join The Postpartum Collective or mentorship?', a: 'No. Our community includes OTs, PTs, SLPs, nurses, midwives, doulas, lactation consultants, and other allied health professionals. If you\'re passionate about postpartum care, you\'re welcome.' },
  { q: 'I have no postpartum experience. Can I still do this work?', a: "Yes. Your clinical training is a stronger foundation than you realize. Activity analysis, sensory processing, role adaptation, therapeutic use of self — these are all skills you already have that directly apply to postpartum care. Mentorship helps you bridge the gap." },
  { q: 'How is mentorship different from a CEU course?', a: "CEU courses teach you information. Mentorship teaches you application. You get personalized guidance, business strategy, clinical coaching, and someone in your corner as you build your practice. It's the difference between reading a recipe and having a chef by your side." },
  { q: 'Can I bill insurance for postpartum OT services?', a: 'Yes, in many cases. Postpartum OT services can be billed through traditional insurance, private pay, or a hybrid model. There are important considerations for each. Our mentorship covers billing strategies in depth.' },
  { q: 'How do I get started in postpartum care?', a: 'Start with our free resources and join The Postpartum Collective. When you\'re ready for structured guidance, explore our mentorship program.' },
  { q: 'Is The Postpartum Collective really free?', a: "Yes. It's a free Facebook community of 600+ clinicians. No strings attached." },
];

const momFAQs = [
  { q: 'What does a postpartum OT do for new parents?', a: "We help with the practical, everyday challenges of new parenthood: establishing routines, navigating feeding difficulties, understanding infant sleep, managing the mental load, supporting your physical recovery, and helping you find your footing during one of life's biggest transitions." },
  { q: 'How do I find a postpartum OT near me?', a: "Contact us and we can help connect you with a clinician in our network. You can also search the AOTA practitioner directory or ask your OB/midwife for a referral to an OT who specializes in postpartum care." },
  { q: 'When should I reach out for postpartum support?', a: "Anytime you feel you need it. There's no 'too early' or 'too late.' If you're struggling with daily routines, feeding, sleep, mood changes, or feeling overwhelmed, a postpartum OT can help." },
  { q: 'Is postpartum support covered by insurance?', a: 'In many cases, yes. OT services can be covered under most insurance plans with appropriate documentation and referral. Private pay and superbill options are also available.' },
];

const aboutFAQs = [
  { q: 'Who is Melissa O\'Neal?', a: "Melissa is a licensed occupational therapist (OTR/L) with over a decade of hands-on experience in postpartum care. She's the founder of The Postpartum OT, host of the Functional Fourth Trimester podcast, and mentor to 600+ healthcare professionals." },
  { q: 'How can I book Melissa to speak at my event?', a: 'Visit our speaking page or email hello@thepostpartumot.com with details about your event.' },
  { q: 'How can I be a guest on the Functional Fourth Trimester podcast?', a: "We'd love to hear from you. Reach out through our contact page with your story and topic idea." },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...clinicianFAQs, ...momFAQs, ...aboutFAQs].map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ReaderContent title="Frequently Asked Questions" />

      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-200 font-lora italic">Common questions from clinicians, moms, and anyone curious about postpartum OT.</p>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {[
            { title: 'For Clinicians', faqs: clinicianFAQs },
            { title: 'For Moms & Caregivers', faqs: momFAQs },
            { title: 'About The Postpartum OT', faqs: aboutFAQs },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-black text-[#469695] mb-6">{section.title}</h2>
              <div className="space-y-6">
                {section.faqs.map(({ q, a }) => (
                  <div key={q} className="border-b border-gray-200 pb-6">
                    <h3 className="font-bold text-[#0A3660] mb-2">{q}</h3>
                    <p className="text-gray-600 font-lora leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
