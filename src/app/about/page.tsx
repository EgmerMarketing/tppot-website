import type { Metadata } from 'next';
import Image from 'next/image';
import { GraduationCap, Users, Mic, Heart } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'About Melissa O\'Neal, OTR/L',
  description: 'Meet Melissa O\'Neal — occupational therapist, postpartum care specialist, and founder of The Postpartum OT. 10+ years helping families and training clinicians.',
  alternates: { canonical: `${company.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <ReaderContent title="About Melissa O'Neal, OTR/L" />

      {/* Hero */}
      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">About Melissa</h2>
            <p className="text-xl font-lora italic text-gray-200">
              Occupational Therapist. Postpartum Care Specialist. Mentor to 600+ Clinicians.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/melissa-about-page.jpg"
              alt="Melissa O'Neal, OTR/L — founder of The Postpartum OT"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-8">Why I Do This Work</h2>
          <div className="prose prose-lg font-lora text-gray-700 space-y-6">
            <p>There&apos;s a moment I&apos;ll never forget.</p>
            <p>
              I was sitting in a dimly lit nursery with a new mother who hadn&apos;t slept in four days. Her baby was crying. She was crying. And between sobs, she whispered something that changed the trajectory of my career:
            </p>
            <blockquote className="border-l-4 border-[#469695] pl-6 italic text-[#0A3660] text-xl">
              &quot;Why didn&apos;t anyone prepare me for this?&quot;
            </blockquote>
            <p>
              That question haunted me — because she was right. Our healthcare system does an incredible job of supporting pregnancy and birth. But the moment that baby arrives? Most families are left to figure it out alone.
            </p>
            <p>
              After more than a decade of working with families in their homes during the postpartum period — as both an occupational therapist and an overnight postpartum doula — I&apos;ve seen what happens when support is there. And I&apos;ve seen what happens when it isn&apos;t.
            </p>
            <p>
              The difference is staggering. I&apos;ve watched mothers go from feeling broken to feeling capable. I&apos;ve seen couples on the verge of collapse find their footing. I&apos;ve held space for the moments when a parent finally says, &quot;I think I&apos;ve got this.&quot;
            </p>
            <p>
              But I also realized something: I couldn&apos;t reach every family myself. The need was simply too great.
            </p>
            <p>
              So I made a decision. Instead of trying to do it all alone, I would share everything I&apos;ve learned — the clinical skills, the business strategies, the hard-won wisdom — with clinicians who feel that same pull toward postpartum care.
            </p>
            <p className="font-bold text-[#0A3660]">
              That&apos;s why The Postpartum OT exists. Not just to help families, but to multiply the helpers.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black text-[#0A3660] mb-8">Background &amp; Credentials</h2>
            <ul className="space-y-4">
              {[
                { icon: <GraduationCap size={20} className="text-[#469695]" />, text: 'OTR/L — Licensed Occupational Therapist' },
                { icon: <Heart size={20} className="text-[#469695]" />, text: '10+ years of hands-on postpartum care experience' },
                { icon: <Heart size={20} className="text-[#469695]" />, text: 'Overnight postpartum doula — hundreds of families supported in-home' },
                { icon: <Users size={20} className="text-[#469695]" />, text: 'Founder of The Postpartum Collective (600+ members)' },
                { icon: <Mic size={20} className="text-[#469695]" />, text: 'Host of the Functional Fourth Trimester podcast' },
                { icon: <GraduationCap size={20} className="text-[#469695]" />, text: 'Mentor to healthcare professionals nationwide' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/credential-seal-img9110.png"
              alt="Melissa O'Neal professional credentials"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] text-center mb-12">My Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Holistic', body: 'We don\'t just treat symptoms. We look at the whole person: physical recovery, mental health, daily routines, relationships, identity, and the baby\'s development. That\'s the OT difference.' },
              { title: 'Accessible', body: 'Every family deserves support, and every clinician who wants to provide it deserves the training to do so confidently.' },
              { title: 'Evidence-Based', body: 'Compassion guided by science. Everything I teach is grounded in current research and refined through years of real-world practice.' },
              { title: 'Community-Driven', body: 'This work is too important and too complex to do alone. We\'re stronger together.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#469695] mb-3">{item.title}</h3>
                <p className="text-gray-600 font-lora text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#0A3660] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">The Mission</h2>
          <p className="text-lg font-lora italic text-gray-200 mb-6">
            To revolutionize postpartum care by empowering healthcare professionals with the knowledge, confidence, and community to support families during the most transformative period of their lives.
          </p>
          <p className="text-gray-300 mb-10">
            I decided I could try to support every mom on my own — or I could share my skills and knowledge to expand the world of postpartum care, so more lives can be touched. I chose the latter. And now, I&apos;m inviting you to join me.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/for-clinicians/mentorship">Explore Mentorship</Button>
            <Button href="/for-clinicians/collective" variant="ghost" className="border-white text-white hover:bg-white hover:text-[#0A3660]">
              Join the Collective
            </Button>
            <Button href="/speaking" variant="ghost" className="border-white text-white hover:bg-white hover:text-[#0A3660]">
              Book Melissa to Speak
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
