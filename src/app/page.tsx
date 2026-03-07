import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, Mic, ArrowRight } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import EmailCapture from '@/components/EmailCapture';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'The Postpartum OT | Empowering Clinicians to Transform Postpartum Care',
  description: 'Join Melissa O\'Neal, OTR/L, and 600+ healthcare professionals transforming postpartum care. Mentorship, training, and community for clinicians ready to serve families.',
  alternates: { canonical: company.url },
};

export default function HomePage() {
  return (
    <>
      <ReaderContent title="Transforming Postpartum Care — One Clinician at a Time" />

      {/* Hero */}
      <section className="bg-[#0A3660] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Transforming Postpartum Care —<br />
              <span className="text-[#469695]">One Clinician at a Time</span>
            </h2>
            <p className="text-lg text-gray-200 font-lora italic mb-8">
              You became a clinician to make a difference. The Postpartum OT gives you the skills, mentorship, and community to do it — for the families who need you most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/for-clinicians" variant="primary">
                I&apos;m a Healthcare Professional
              </Button>
              <Button href="/for-moms" variant="ghost" className="border-white text-white hover:bg-white hover:text-[#0A3660]">
                I&apos;m a Mom or Caregiver
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/melissa-hero-1.jpg"
              alt="Melissa O'Neal, OTR/L — founder of The Postpartum OT"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A3660] mb-6">Postpartum Care is Broken. You Can Help Fix It.</h2>
          <p className="text-lg text-gray-700 font-lora leading-relaxed">
            1 in 7 mothers experiences postpartum depression. 50% go undiagnosed. And after a single 6-week checkup, most families are left to figure it out alone.
          </p>
          <p className="text-lg text-gray-700 font-lora leading-relaxed mt-4">
            Clinicians like you see the gap every day. You know families need more support. You just need the right training, tools, and community to step into this space with confidence.
          </p>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A3660] text-center mb-12">Everything You Need to Build a Postpartum Practice</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={32} className="text-[#469695]" />,
                title: 'Evidence-Based Training',
                body: 'Comprehensive mentorship and resources designed specifically for healthcare professionals entering postpartum care. From clinical skills to business building.',
                cta: 'Explore Mentorship',
                href: '/for-clinicians/mentorship',
              },
              {
                icon: <Users size={32} className="text-[#469695]" />,
                title: 'The Postpartum Collective',
                body: 'Join 600+ clinicians who are passionate about transforming postpartum care. Share insights, ask questions, and grow together in a supportive community.',
                cta: 'Join the Collective',
                href: '/for-clinicians/collective',
              },
              {
                icon: <Mic size={32} className="text-[#469695]" />,
                title: 'Functional Fourth Trimester Podcast',
                body: 'Real conversations about postpartum care, practice building, and the moments that change everything. New episodes weekly.',
                cta: 'Listen Now',
                href: '/podcast',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-[#FEFDF8] rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-[#0A3660] mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{pillar.body}</p>
                <Link href={pillar.href} className="inline-flex items-center gap-2 text-[#469695] font-bold hover:gap-3 transition-all">
                  {pillar.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Melissa */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/melissa-oneal-postpartum-ot-founder.jpg"
              alt="Melissa O'Neal, founder of The Postpartum OT"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A3660] mb-6">Meet Melissa</h2>
            <p className="text-gray-700 font-lora leading-relaxed mb-4">
              Hi, I&apos;m Melissa O&apos;Neal, OTR/L. After more than a decade of supporting families through the postpartum period — in their homes, at their most vulnerable — I realized something: I couldn&apos;t do this alone. Not because the work was too much, but because the need was too great.
            </p>
            <p className="text-gray-700 font-lora leading-relaxed mb-8">
              So I made a choice. Instead of trying to reach every family myself, I&apos;d share my knowledge with clinicians like you — so together, we could reach thousands. That&apos;s The Postpartum OT.
            </p>
            <Button href="/about">Learn More About My Story</Button>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-16 bg-[#0A3660] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">What Clinicians Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="font-lora italic text-gray-200 mb-4">
                  [PLACEHOLDER — awaiting client testimonials]
                </p>
                <p className="font-bold text-[#469695] text-sm">— Name, OTR/L</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-16 bg-[#469695] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Take the First Step?</h2>
          <p className="font-lora italic mb-8 text-white/90">
            Get our free guide to starting your postpartum practice — plus weekly insights on building a career you love in postpartum care.
          </p>
          <EmailCapture buttonText="Send Me the Guide" note="Join 600+ clinicians. Unsubscribe anytime." />
        </div>
      </section>

      {/* Podcast CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0A3660] mb-4">Listen to Functional Fourth Trimester</h2>
          <p className="text-gray-600 font-lora mb-8">
            Honest conversations about postpartum care, practice building, and showing up for families when it matters most.
          </p>
          <iframe
            src={`https://open.spotify.com/embed/show/${company.spotifyShowId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl mb-6"
            title="Functional Fourth Trimester podcast on Spotify"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={company.social.spotify} external variant="primary">Listen on Spotify</Button>
            <Button href="/podcast" variant="ghost">See All Episodes</Button>
          </div>
        </div>
      </section>
    </>
  );
}
