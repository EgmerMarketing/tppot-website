'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Mic } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import EmailCapture from '@/components/EmailCapture';
import { company } from '@/lib/company';

/* ─── Framer Motion helpers ─── */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Pillars data ─── */
const pillars = [
  {
    num: '01',
    tag: 'Mentorship',
    icon: <BookOpen size={20} className="text-[#469695]" aria-hidden />,
    title: 'Evidence-Based Training',
    body: 'Comprehensive mentorship designed for healthcare professionals entering postpartum care. Clinical skills, business building, and every step in between.',
    cta: 'Explore Mentorship',
    href: '/for-clinicians/mentorship',
    featured: true,
  },
  {
    num: '02',
    tag: 'Community',
    icon: <Users size={20} className="text-[#469695]" aria-hidden />,
    title: 'The Postpartum Collective',
    body: 'Join 600+ clinicians transforming postpartum care. Share insights, ask questions, and grow alongside people who get it.',
    cta: 'Join the Collective',
    href: '/for-clinicians/collective',
    featured: false,
  },
  {
    num: '03',
    tag: 'Podcast',
    icon: <Mic size={20} className="text-[#469695]" aria-hidden />,
    title: 'Functional Fourth Trimester',
    body: 'Real conversations about postpartum care, practice building, and the moments that change everything.',
    cta: 'Listen Now',
    href: '/podcast',
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────────
          HERO — Full-screen Melissa, text overlaid at bottom
      ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden" aria-label="Hero">
        {/* Background photo — full bleed, no box */}
        <Image
          src="/images/melissa-hero-1.jpg"
          alt="Melissa O'Neal, OTR/L — founder of The Postpartum OT"
          fill
          className="object-cover object-center photo-warm"
          priority
        />

        {/* Gradient: transparent at top → navy at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,54,96,0) 0%, rgba(10,54,96,0.15) 40%, rgba(10,54,96,0.75) 75%, rgba(10,54,96,0.92) 100%)',
          }}
          aria-hidden
        />

        {/* Content — bottom-anchored */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-20 pt-32">
          <motion.p
            className="section-label text-[#7ecfce] mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            [ The Postpartum OT ]
          </motion.p>

          <motion.h1
            className="font-black text-white leading-[0.93] mb-6"
            style={{ fontSize: 'clamp(44px, 7vw, 110px)', letterSpacing: '-0.025em' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            Transforming<br />
            Postpartum Care —<br />
            <em className="font-normal not-italic" style={{ color: '#7ecfce' }}>
              One Clinician at a Time
            </em>
          </motion.h1>

          <motion.p
            className="lora-lede text-white/80 mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            You became a clinician to make a difference. The Postpartum OT gives you the skills, mentorship, and community to do it — for the families who need you most.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link
              href="/for-clinicians"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#469695] text-white font-bold text-base hover:bg-[#357878] transition-colors duration-200"
            >
              I&apos;m a Healthcare Professional
            </Link>
            <Link
              href="/for-moms"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-bold text-base hover:bg-white hover:text-[#0A3660] transition-all duration-200"
            >
              I&apos;m a Mom or Caregiver
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-7 right-8 text-white/40 section-label" aria-hidden>
          Scroll ↓
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          STATS — Numbers as typography / layout elements
      ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#FEFDF8] overflow-hidden" aria-label="The problem">
        <div className="max-w-7xl mx-auto px-6">

          {/* "1 in 7" — escapes left, dominates */}
          <Reveal>
            <div className="relative">
              <span
                className="stat-display block text-[#469695]"
                style={{ fontSize: 'clamp(80px, 13vw, 196px)' }}
                aria-hidden
              >
                1 in 7
              </span>
              <p className="text-base text-gray-600 max-w-xs ml-1 -mt-3 relative z-10 font-lora italic">
                mothers experiences postpartum depression.
              </p>
            </div>
          </Reveal>

          {/* "50%" — offset right, staggered lower */}
          <Reveal delay={0.1}>
            <div className="relative mt-6 flex justify-end">
              <div className="text-right">
                <span
                  className="stat-display block text-[#0A3660]"
                  style={{ fontSize: 'clamp(64px, 10vw, 160px)' }}
                  aria-hidden
                >
                  50%
                </span>
                <p className="text-base text-gray-600 max-w-xs ml-auto -mt-2 font-lora italic">
                  go undiagnosed.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Closing emotional line */}
          <Reveal delay={0.15}>
            <div className="mt-20 text-center">
              <p
                className="pull-quote text-[#0A3660] max-w-2xl mx-auto"
              >
                "And after a single 6-week checkup, most families are left to figure it out alone."
              </p>
              <div className="w-10 h-0.5 bg-[#469695] mx-auto mt-8" aria-hidden />
            </div>
          </Reveal>

          {/* Screen-reader accessible version of the stats */}
          <p className="sr-only">
            1 in 7 mothers experiences postpartum depression. 50% go undiagnosed. And after a single 6-week checkup, most families are left to figure it out alone.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          PILLARS — Magazine-spread numbered rows
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-label="What we offer">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal className="mb-16">
            <p className="section-label text-[#469695] mb-3">[ The Work ]</p>
            <h2
              className="font-black text-[#0A3660] max-w-xl leading-tight"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
            >
              Everything You Need to Build a Postpartum Practice
            </h2>
          </Reveal>

          {/* Row for each pillar */}
          <div>
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.num} delay={i * 0.08}>
                <div className="group border-t border-gray-200 py-10 grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr_1fr] gap-6 md:gap-10 items-start hover:bg-gray-50/60 transition-colors duration-300 px-2 -mx-2 rounded-xl">

                  {/* Large ghost number */}
                  <span
                    className="font-black text-gray-100 leading-none select-none transition-colors duration-300 group-hover:text-[#469695]/15"
                    style={{ fontSize: 'clamp(48px, 6vw, 88px)', letterSpacing: '-0.04em' }}
                    aria-hidden
                  >
                    {pillar.num}
                  </span>

                  {/* Title + tag */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      {pillar.icon}
                      <p className="section-label text-[#469695]">{pillar.tag}</p>
                    </div>
                    <h3
                      className="font-black text-[#0A3660] leading-tight mb-2"
                      style={{ fontSize: 'clamp(22px, 3vw, 38px)' }}
                    >
                      {pillar.title}
                    </h3>
                    {pillar.featured && (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#469695] text-white">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Description + CTA — hidden on mobile, shown at md */}
                  <div className="hidden md:flex flex-col justify-between">
                    <p className="text-gray-500 leading-relaxed text-base mb-8 font-lora">
                      {pillar.body}
                    </p>
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-[#469695] font-bold text-sm hover:gap-4 transition-all duration-200 w-fit"
                    >
                      {pillar.cta} <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Mobile: description below */}
                  <div className="col-span-2 md:hidden">
                    <p className="text-gray-500 leading-relaxed text-base mb-4 font-lora">
                      {pillar.body}
                    </p>
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-[#469695] font-bold text-sm"
                    >
                      {pillar.cta} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-gray-200" aria-hidden />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          WOVEN TESTIMONIAL — appears after pillars, before about
          (proof arrives while trust is being built, not at the end)
      ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FEFDF8]" aria-label="What clinicians say">
        <Reveal>
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-l-4 border-[#469695] pl-8">
              <p className="pull-quote text-[#0A3660] mb-6">
                "Working with Melissa completely changed how I approach postpartum care. I went from feeling uncertain to building a practice I&apos;m proud of — in less than a year."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-[#469695]" aria-hidden />
                <p className="section-label text-[#469695]">
                  Name, OTR/L &nbsp;·&nbsp; Collective Member
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ──────────────────────────────────────────────
          ABOUT MELISSA — Teal full-bleed, sticky portrait
      ────────────────────────────────────────────── */}
      <section className="bg-[#469695] overflow-hidden" aria-label="About Melissa">
        <div
          className="max-w-[1600px] mx-auto grid md:grid-cols-[55%_45%]"
          style={{ minHeight: '100vh' }}
        >
          {/* Text — scrolls normally */}
          <div className="py-24 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
            <Reveal>
              <p className="section-label text-white/50 mb-6">[ Meet Melissa ]</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                className="font-black text-white leading-[0.92] mb-8"
                style={{ fontSize: 'clamp(48px, 6vw, 96px)', letterSpacing: '-0.03em' }}
              >
                Meet<br />Melissa
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="lora-lede text-white/85 mb-8">
                "I couldn&apos;t reach every family myself. The need was simply too great."
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="font-lora text-white/75 leading-relaxed mb-5 text-base">
                After more than a decade of supporting families through the postpartum period — in their homes, at their most vulnerable — I realized I had to make a choice.
              </p>
              <p className="font-lora text-white/75 leading-relaxed mb-10 text-base">
                Instead of trying to reach every family myself, I&apos;d share everything I&apos;ve learned with clinicians like you — so together, we could reach thousands. That&apos;s The Postpartum OT.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-[#469695] px-7 py-3.5 rounded-full font-bold hover:bg-[#FEFDF8] transition-colors duration-200 w-fit"
              >
                Learn More About My Story <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          {/* Photo — sticky CSS, bleeds to the right edge */}
          <div className="relative hidden md:block">
            <div className="sticky top-0 h-screen">
              <Image
                src="/images/melissa-oneal-portrait.jpg"
                alt="Melissa O'Neal, OTR/L — founder of The Postpartum OT"
                fill
                className="object-cover object-top photo-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          TESTIMONIALS — Editorial hierarchy, not card grid
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#FEFDF8]" aria-label="What clinicians are saying">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal className="mb-16">
            <p className="section-label text-[#469695] mb-3">[ What Clinicians Are Saying ]</p>
          </Reveal>

          {/* Featured pull quote — full editorial weight */}
          <Reveal delay={0.05}>
            <div className="mb-16 max-w-3xl">
              <div className="border-l-[5px] border-[#469695] pl-10">
                <p className="pull-quote text-[#0A3660] mb-6">
                  "I had no idea where to start when it came to building a postpartum specialty. Melissa&apos;s mentorship gave me a roadmap — and the confidence to actually walk it."
                </p>
                <p className="section-label text-[#469695]">
                  Name, PT &nbsp;·&nbsp; Mentorship Graduate
                </p>
              </div>
            </div>
          </Reveal>

          {/* Two supporting testimonials — varied width */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                quote: 'The Collective is unlike any professional community I&apos;ve been part of. Everyone is genuinely invested in each other&apos;s growth.',
                name: 'Name, OTR/L',
                role: 'Collective Member',
              },
              {
                quote: 'Melissa doesn&apos;t just teach you the clinical side — she teaches you how to build something that lasts.',
                name: 'Name, OTR/L',
                role: 'Mentorship Graduate',
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-l-[3px] border-[#469695]/40 pl-6">
                  <p className="font-lora italic text-gray-700 leading-relaxed mb-4 text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="section-label text-[#469695]">
                    {t.name} &nbsp;·&nbsp; {t.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          EMAIL CAPTURE — Navy, authoritative close, personal
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A3660]" aria-label="Get started">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[40%_60%] gap-16 items-center">

            {/* Personal element */}
            <Reveal>
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#469695]">
                  <Image
                    src="/images/melissa-oneal-headshot.jpg"
                    alt="Melissa O'Neal"
                    fill
                    className="object-cover photo-warm"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Melissa O&apos;Neal, OTR/L</p>
                  <p className="text-white/50 text-xs">Founder, The Postpartum OT</p>
                </div>
              </div>
              <h2
                className="font-black text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                Ready to Take<br />the First Step?
              </h2>
              <p className="lora-lede text-white/70">
                A free guide to starting your postpartum practice — plus weekly insights from Melissa.
              </p>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <EmailCapture
                buttonText="Send Me the Guide"
                note="Join 600+ clinicians. Unsubscribe anytime."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          PODCAST — Two-column, artwork-forward
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-label="Podcast">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Podcast artwork — square, left */}
            <Reveal>
              <div className="relative aspect-square rounded-2xl overflow-hidden max-w-sm mx-auto md:mx-0 shadow-xl">
                <Image
                  src="/images/melissa-hero-2.jpg"
                  alt="Functional Fourth Trimester podcast"
                  fill
                  className="object-cover photo-warm"
                />
                {/* Podcast badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="section-label text-[#469695] mb-1">New Episodes Weekly</p>
                  <p className="font-black text-[#0A3660] text-sm leading-tight">Functional Fourth Trimester</p>
                </div>
              </div>
            </Reveal>

            {/* Content — right */}
            <Reveal delay={0.1}>
              <p className="section-label text-[#469695] mb-4">[ Functional Fourth Trimester ]</p>
              <h2
                className="font-black text-[#0A3660] leading-tight mb-4"
                style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
              >
                Real Conversations<br />About Postpartum Care
              </h2>
              <p className="lora-lede text-gray-500 mb-8">
                Honest conversations about postpartum care, practice building, and showing up for families when it matters most.
              </p>
              <iframe
                src={`https://open.spotify.com/embed/show/${company.spotifyShowId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl mb-8"
                title="Functional Fourth Trimester podcast on Spotify"
              />
              <div className="flex gap-4 flex-wrap">
                <Link
                  href={company.social.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#469695] text-white font-bold hover:bg-[#357878] transition-colors duration-200"
                >
                  Listen on Spotify
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#469695] text-[#469695] font-bold hover:bg-[#469695] hover:text-white transition-all duration-200"
                >
                  See All Episodes
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
