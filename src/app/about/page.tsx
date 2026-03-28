import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Calendar, GraduationCap, Heart, Lightbulb, Shield } from "lucide-react";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Melissa O'Neal | The Postpartum OT",
  description:
    "Meet Melissa O'Neal, OTR/L, PCES. 10+ years of clinical experience helping occupational therapists build thriving postpartum practices through personal mentorship.",
};

function TealCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
      <path d="M3 8L6.5 11.5L13 4.5" stroke="#469695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "About", url: "https://thepostpartumot.com/about" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      {/* Hero */}
      <section className="relative bg-[#061D37] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#061D37] via-[#0A3660] to-[#0d4a82]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#FAF7F2]" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-40 md:pt-28 md:pb-48">
          <div className="grid md:grid-cols-[50fr_50fr] gap-12 md:gap-16 items-center">
            <div>
              <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
                About
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-white mb-8 font-serif">
                Meet Melissa
              </h1>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-6 max-w-lg font-serif">
                Melissa O&apos;Neal is an occupational therapist, postpartum specialist, and mentor who has spent
                over a decade working directly with new families. She knows what it takes to build a postpartum
                practice because she has done it herself, from scratch, in a market that didn&apos;t know it needed her yet.
              </p>
              <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg font-serif">
                Now she helps other OTs do the same thing, with personal mentorship instead of prerecorded modules.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[400px]">
                <div className="aspect-[3/4] rounded-[2rem_2rem_6rem_2rem] overflow-hidden shadow-2xl shadow-black/30">
                  <Image
                    src="/images/melissa-headshot.jpg"
                    alt="Melissa O'Neal, OTR/L, PCES, founder of The Postpartum OT"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#FAF7F2] relative -mt-8 z-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg shadow-[#0A3660]/8 p-8 md:p-10">
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-8 font-sans text-center">
              Credentials
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "OTR/L",
                  desc: "Licensed Occupational Therapist with full clinical credentials and a deep foundation in evidence based practice.",
                },
                {
                  icon: Shield,
                  title: "PCES Certified",
                  desc: "Perinatal Clinical Education Specialist certification, demonstrating advanced expertise in postpartum care.",
                },
                {
                  icon: GraduationCap,
                  title: "10+ Years Clinical",
                  desc: "More than a decade of hands on experience working with postpartum families across multiple settings.",
                },
              ].map((cred) => (
                <div key={cred.title} className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#469695]/10 flex items-center justify-center mx-auto mb-4">
                    <cred.icon className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A3660] mb-2 font-serif">{cred.title}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed font-serif">{cred.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="grid md:grid-cols-[55fr_45fr] gap-16 items-center">
            <div>
              <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
                Philosophy
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-8 font-serif">
                Mentorship over
                <br />modules. Always.
              </h2>
              <div className="space-y-5 font-serif">
                <p className="text-[17px] text-[#6B6560] leading-relaxed">
                  Melissa believes that the best way to learn how to build a postpartum practice is to learn from
                  someone who has already done it. Not from a course library. Not from a certification that gives you
                  knowledge but no direction. From a real person who knows your name, your market, and your goals.
                </p>
                <p className="text-[17px] text-[#6B6560] leading-relaxed">
                  Her approach is direct, personal, and built around where you actually are right now. Whether
                  you are just exploring postpartum OT or scaling an established practice, Melissa meets you there and
                  walks with you through the specific steps that will move the needle.
                </p>
                <div className="space-y-4 mt-8">
                  {[
                    "Every clinician gets a plan tailored to their specific situation",
                    "Real time answers instead of waiting for the next module to unlock",
                    "Clinical expertise paired with real business strategy",
                    "A mentor who has built what you are trying to build",
                  ].map((item) => (
                    <div key={item} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#469695]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TealCheck />
                      </div>
                      <p className="text-[15px] text-[#6B6560] leading-relaxed font-serif">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-[#469695]/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-[#469695]" strokeWidth={1.5} />
              </div>
              <div className="bg-white rounded-2xl shadow-lg shadow-[#0A3660]/8 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                  <p className="text-sm font-bold text-[#469695] uppercase tracking-wider font-sans">Guiding Principle</p>
                </div>
                <blockquote className="text-[17px] text-[#0A3660] leading-relaxed font-serif font-medium border-l-2 border-[#469695] pl-5">
                  &ldquo;Moms deserve more than a six week checkup. And the OTs who want to serve them deserve more
                  than a video library. They deserve someone in their corner.&rdquo;
                </blockquote>
                <p className="text-sm text-[#6B6560] mt-4 font-sans">Melissa O&apos;Neal, OTR/L, PCES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-[#E6F0F0]">
        <div className="max-w-[900px] mx-auto px-6 py-24 md:py-32">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans text-center">
            The Story
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-12 font-serif text-center">
            Why I built this
          </h2>

          <div className="space-y-16">
            {/* The Moment */}
            <div className="bg-white rounded-2xl shadow-md shadow-[#0A3660]/6 p-8 md:p-12">
              <h3 className="text-xl font-bold text-[#0A3660] mb-6 font-serif">The moment it clicked</h3>
              <div className="space-y-5 font-serif text-[17px] text-[#6B6560] leading-relaxed">
                <p>
                  It wasn&apos;t one big dramatic moment. It was more like a pattern I couldn&apos;t unsee anymore.
                </p>
                <p>
                  I kept working with moms who were struggling in ways that weren&apos;t being addressed.
                  Physically, emotionally, functionally inside their own homes. And it felt like the system
                  just moved on after birth, while they were left trying to figure everything out on their own.
                </p>
                <p className="text-[#0A3660] font-medium border-l-2 border-[#469695] pl-5">
                  I remember thinking, we&apos;re missing such a huge part of care here. Not just rehab.
                  Not just mental health. But real, day to day support for how a mom actually lives after
                  bringing a baby home.
                </p>
                <p>
                  That&apos;s when it shifted from &ldquo;this is part of what I do&rdquo; to
                  &ldquo;this is what I need to build.&rdquo;
                </p>
              </div>
            </div>

            {/* What 10+ Years Taught */}
            <div className="bg-white rounded-2xl shadow-md shadow-[#0A3660]/6 p-8 md:p-12">
              <h3 className="text-xl font-bold text-[#0A3660] mb-6 font-serif">What a decade of postpartum care taught me</h3>
              <div className="space-y-5 font-serif text-[17px] text-[#6B6560] leading-relaxed">
                <p>
                  Postpartum care isn&apos;t something you can learn from a checklist or certification.
                  You can&apos;t fully understand it until you&apos;ve been in someone&apos;s home.
                  Seeing the dynamics, the overwhelm, the exhaustion, the identity shift happening in real time.
                </p>
                <p>
                  I&apos;ve learned that what moms say they need and what they actually need are often
                  very different. And I&apos;ve learned how to bridge that gap in a way that feels
                  supportive, not clinical or overwhelming.
                </p>
                <p>
                  Building a postpartum practice is completely different than just knowing postpartum care.
                  There&apos;s a whole layer of trust building, communication, boundaries, and real world
                  problem solving that no course really prepares you for.
                </p>
              </div>
            </div>

            {/* Why Mentorship */}
            <div className="bg-white rounded-2xl shadow-md shadow-[#0A3660]/6 p-8 md:p-12">
              <h3 className="text-xl font-bold text-[#0A3660] mb-6 font-serif">Why mentorship, not courses</h3>
              <div className="space-y-5 font-serif text-[17px] text-[#6B6560] leading-relaxed">
                <p>
                  Because this work is personal.
                </p>
                <p>
                  When I was figuring it out, what I needed wasn&apos;t more information.
                  I needed someone to say, &ldquo;you&apos;re on the right track&rdquo; or
                  &ldquo;try it this way instead.&rdquo;
                </p>
                <p>
                  There are so many nuances in postpartum care and in building a business around it
                  that don&apos;t fit into modules. Every clinician comes in with different experiences,
                  different confidence levels, different life situations.
                </p>
                <p className="text-[#0A3660] font-medium border-l-2 border-[#469695] pl-5">
                  Mentorship lets me meet them where they are and help them move forward in a way
                  that actually works for their life. Not just what looks good on paper.
                </p>
              </div>
            </div>

            {/* What Surprises Her */}
            <div className="bg-white rounded-2xl shadow-md shadow-[#0A3660]/6 p-8 md:p-12">
              <h3 className="text-xl font-bold text-[#0A3660] mb-6 font-serif">What surprises me about what mentees value</h3>
              <div className="space-y-5 font-serif text-[17px] text-[#6B6560] leading-relaxed">
                <p>
                  Honestly, it&apos;s how much they value the reassurance.
                </p>
                <p>
                  I expected people to come for strategies or frameworks. But what they really hold onto
                  is having someone in their corner who understands both the clinical side and the
                  emotional side of building something new.
                </p>
                <p className="text-[#0A3660] font-medium border-l-2 border-[#469695] pl-5">
                  A lot of them just haven&apos;t had someone say, &ldquo;you can do this,
                  and here&apos;s how.&rdquo; And that part ends up being just as important
                  as anything I teach.
                </p>
              </div>
            </div>

            {/* The One Liner */}
            <div className="bg-[#061D37] rounded-2xl p-8 md:p-12 text-center">
              <blockquote className="text-xl md:text-2xl font-serif font-medium text-white leading-relaxed max-w-2xl mx-auto">
                &ldquo;I didn&apos;t just study postpartum care. I&apos;ve spent years inside it.
                Inside homes, inside conversations, inside the real life moments that don&apos;t make it
                into textbooks. And now I help other professionals step into that work with clarity and
                confidence, so they don&apos;t have to figure it out alone.&rdquo;
              </blockquote>
              <p className="text-[#469695] font-sans font-bold text-sm mt-6">Melissa O&apos;Neal, OTR/L, PCES</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[700px] mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
            Take the next step
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-6 font-serif">
            Ready to work with Melissa?
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-10 font-serif">
            Book a free strategy call. No pressure, no pitch. Just a conversation about where you are
            and where you want to go.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#469695] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#357574] transition-all hover:shadow-lg hover:shadow-[#469695]/25 font-sans"
          >
            <Calendar className="w-5 h-5" strokeWidth={2} />
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
