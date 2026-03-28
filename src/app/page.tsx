import Image from "next/image";
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Download,
  Headphones,
  Mic,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative bg-[#061D37] overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061D37] via-[#0A3660] to-[#0d4a82]" />
      {/* Decorative arc into cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#FAF7F2]" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-40 md:pt-16 md:pb-48 w-full">
        <div className="grid md:grid-cols-[45fr_55fr] gap-8 md:gap-12 items-end">
          <div className="relative z-10 pb-8">
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
              Mentorship for Postpartum OTs
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-white mb-8 font-serif">
              Build Your
              <br />Postpartum Practice
              <br /><span className="text-[#469695]">With Someone Who
              <br />Has Done It</span>
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-md font-serif">
              Moms deserve more than a six week checkup. You know that. Personal mentorship from a clinician with 10+ years in the trenches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0A3660] px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#E6F0F0] transition-all shadow-lg shadow-black/20 font-sans">
                <Calendar className="w-4 h-4" strokeWidth={2} />
                Book Your Free Strategy Call
              </a>
              <a href="/resources" className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-white/10 hover:border-white/50 transition-all font-sans">
                <Download className="w-4 h-4" strokeWidth={2} />
                Get the Starter Kit
              </a>
            </div>
          </div>

          {/* Melissa's photo with organic shape */}
          <div className="relative z-10 flex justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="aspect-[3/4] rounded-[2rem_2rem_6rem_2rem] overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/images/melissa-portrait-1.jpg"
                  alt="Melissa O'Neal, OTR/L, PCES, founder of The Postpartum OT"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-[#0A3660]/10 p-4 pr-6 flex items-center gap-3">
                <Image src="/images/pces-seal.png" alt="PCES Certification Seal" width={44} height={44} />
                <div>
                  <p className="text-[13px] font-bold text-[#0A3660] font-sans">Melissa O&apos;Neal</p>
                  <p className="text-[11px] text-[#469695] font-bold font-sans">OTR/L, PCES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof ─── */
function SocialProof() {
  return (
    <section className="bg-[#FAF7F2] relative -mt-8 z-20">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg shadow-[#0A3660]/8 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Years Experience", icon: Star },
            { value: "600+", label: "OTs in Community", icon: Users },
            { value: "PCES", label: "Certified Specialist", icon: Award },
            { value: "Live", label: "Weekly Podcast", icon: Mic },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="w-5 h-5 text-[#469695] mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-2xl font-bold text-[#0A3660] font-sans">{s.value}</p>
              <p className="text-xs text-[#6B6560] mt-0.5 font-serif">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Problem Statement ─── */
function ProblemStatement() {
  return (
    <section className="bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="grid md:grid-cols-[55fr_45fr] gap-16 items-center">
          <div>
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">The Challenge</p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-8 font-serif">
              You want to help
              <br />postpartum families.
            </h2>
            <div className="space-y-5 font-serif">
              <p className="text-[17px] text-[#6B6560] leading-relaxed">
                OT school didn&apos;t prepare you for this. You know you could make a
                difference for new moms, but every time you try to figure out how
                to build a postpartum practice, you hit the same wall.
              </p>
              <p className="text-[17px] text-[#6B6560] leading-relaxed">
                You&apos;ve Googled at midnight. You&apos;ve considered certifications
                that cost thousands. You&apos;ve scrolled through courses that promise
                everything and deliver a login to a video library.
              </p>
              <p className="text-[17px] text-[#0A3660] font-medium leading-relaxed border-l-2 border-[#469695] pl-5">
                What you actually need is someone who has built the practice you
                want to build, who can look at your specific situation and say:
                &ldquo;Here&apos;s what I&apos;d do.&rdquo;
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2rem_6rem_2rem_6rem] overflow-hidden">
              <Image src="/images/homepage-hero-2.jpg" alt="Mother and baby receiving postpartum OT care" fill className="object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#469695]/10" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[#0A3660]/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Journey ─── */
function Journey() {
  const stages = [
    { number: "01", title: "Curious Clinician", desc: "You're exploring postpartum OT. Questions, maybe some doubt, and a growing sense that this is where you belong.", icon: Sparkles, color: "bg-[#469695]/8" },
    { number: "02", title: "Confident Launcher", desc: "You're ready to formalize your practice. You need a clear plan and someone who has done this before.", icon: BookOpen, color: "bg-[#061D37]" },
    { number: "03", title: "Growing Practitioner", desc: "You've started but hit a plateau. You need strategic guidance to scale, not just clinical knowledge.", icon: Star, color: "bg-[#469695]/8" },
  ];
  return (
    <section className="bg-[#E6F0F0]" id="journey">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-xl mb-16">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-4 font-sans">Your Path</p>
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-4 font-serif">The mentorship journey</h2>
          <p className="text-[17px] text-[#6B6560] font-serif">Wherever you are, there&apos;s a clear next step.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:gap-0">
          {stages.map((s, i) => (
            <div key={s.number} className={`relative p-10 md:p-12 ${i === 1 ? "bg-[#061D37] text-white md:rounded-3xl md:shadow-2xl md:shadow-[#0A3660]/30 md:-my-4 md:z-10" : ""} ${i === 0 ? "md:rounded-l-3xl" : ""} ${i === 2 ? "md:rounded-r-3xl" : ""} ${i !== 1 ? "bg-white" : ""}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${i === 1 ? "bg-[#469695]" : "bg-[#469695]/10"}`}>
                <s.icon className={`w-5 h-5 ${i === 1 ? "text-white" : "text-[#469695]"}`} strokeWidth={1.5} />
              </div>
              <p className="text-xs font-bold tracking-wider uppercase mb-3 text-[#469695] font-sans">{s.number}</p>
              <h3 className={`text-2xl font-bold mb-4 font-serif ${i === 1 ? "text-white" : "text-[#0A3660]"}`}>{s.title}</h3>
              <p className={`text-[15px] leading-relaxed mb-8 font-serif ${i === 1 ? "text-white/60" : "text-[#6B6560]"}`}>{s.desc}</p>
              <a href="/contact" className="inline-flex items-center gap-1 text-sm font-bold text-[#469695] hover:gap-2 transition-all font-sans">
                Learn more <ChevronRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mentor vs Module ─── */
function MentorVsModule() {
  return (
    <section className="bg-[#FAF7F2]" id="about">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="grid md:grid-cols-[45fr_55fr] gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[6rem_2rem_2rem_2rem] overflow-hidden">
                <Image src="/images/melissa-portrait-2.jpg" alt="Melissa O'Neal mentoring OT practitioners" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">The Difference</p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-10 font-serif">
              A mentor,
              <br />not a module.
            </h2>

            <div className="space-y-5 mb-10">
              {[
                "Direct access to someone who has built this practice",
                "Guidance tailored to your market, your skills, your goals",
                "Real answers when you need them, not next semester",
                "A mentor who knows your name and your situation",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#469695]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4.5" stroke="#469695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p className="text-[15px] text-[#6B6560] leading-relaxed font-serif">{item}</p>
                </div>
              ))}
            </div>

            <a href="/contact" className="inline-flex items-center gap-2.5 bg-[#061D37] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A3660] transition-colors font-sans">
              <Calendar className="w-4 h-4" strokeWidth={2} />
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const testimonials = [
    { quote: "Melissa helped me see the path I couldn't find on my own. Within three months, I had my first postpartum clients and a plan I actually believed in.", name: "Sarah K.", credential: "OTR/L" },
    { quote: "I'd taken two certifications before finding Melissa. They gave me knowledge. She gave me direction. There's a huge difference.", name: "Jennifer M.", credential: "OTR/L, PCES" },
    { quote: "Not another course. Not another module. An actual person who answers my actual questions. That's what I needed.", name: "Rachel T.", credential: "OTD, OTR/L" },
  ];
  return (
    <section className="bg-[#E6F0F0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-4 font-sans">Real Stories</p>
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] font-serif">From clinicians who took the step</h2>
          <p className="text-sm text-[#6B6560] mt-3 font-serif">[Placeholder quotes. Real testimonials coming soon.]</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`rounded-2xl p-8 md:p-10 ${i === 1 ? "bg-[#469695] md:-translate-y-4 shadow-xl shadow-[#469695]/20" : "bg-white shadow-md shadow-[#0A3660]/6"}`}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (<Star key={j} className={`w-3.5 h-3.5 ${i === 1 ? "text-white fill-white" : "text-[#469695] fill-[#469695]"}`} strokeWidth={0} />))}
              </div>
              <blockquote className={`text-[15px] leading-relaxed mb-8 font-serif ${i === 1 ? "text-white" : "text-[#6B6560]"}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className={`text-sm font-bold font-sans ${i === 1 ? "text-white" : "text-[#0A3660]"}`}>{t.name}</p>
                <p className={`text-xs font-sans ${i === 1 ? "text-white/60" : "text-[#6B6560]"}`}>{t.credential}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Podcast Preview ─── */
function PodcastSection() {
  const episodes = [
    "Building Confidence in Your First Postpartum Cases",
    "What OT School Didn't Teach You About Maternal Mental Health",
    "The Business Side: Pricing, Insurance, and Getting Paid",
  ];
  return (
    <section className="bg-[#FAF7F2]" id="podcast">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="grid md:grid-cols-[55fr_45fr] gap-16 items-center">
          <div>
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">The Podcast</p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-6 font-serif">
              The Functional
              <br />Fourth Trimester
            </h2>
            <p className="text-[17px] text-[#6B6560] leading-relaxed mb-10 max-w-md font-serif">
              Weekly conversations about building a postpartum practice that
              makes a real difference. Clinical insights, business strategy,
              and honest talk.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://podcasts.apple.com/us/podcast/functional-fourth-trimester/id1881077069" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#061D37] text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-[#0A3660] transition-colors font-sans">
                <Headphones className="w-4 h-4" strokeWidth={2} />Apple Podcasts
              </a>
              <a href="https://open.spotify.com/show/0yuF6uerJGVWdhgysa7Ug3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-[#0A3660]/15 text-[#0A3660] px-5 py-3 rounded-xl text-sm font-bold hover:border-[#0A3660]/30 transition-colors font-sans">
                <Headphones className="w-4 h-4" strokeWidth={2} />Spotify
              </a>
            </div>
          </div>
          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <div key={ep} className="group rounded-2xl p-6 bg-white shadow-sm shadow-[#0A3660]/4 hover:shadow-md hover:shadow-[#0A3660]/8 transition-shadow cursor-pointer flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#061D37] flex items-center justify-center flex-shrink-0 group-hover:bg-[#469695] transition-colors">
                  <Mic className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-[#469695] font-bold tracking-wider uppercase mb-1 font-sans">Episode {i + 1}</p>
                  <p className="text-[15px] font-bold text-[#0A3660] font-sans">{ep}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#0A3660]/20 group-hover:text-[#469695] transition-colors flex-shrink-0" strokeWidth={2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Community (Dark Navy Section) ─── */
function Community() {
  return (
    <section className="relative bg-[#061D37] overflow-hidden" id="community">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#469695]" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-[#469695]" />
      </div>
      <div className="relative max-w-[800px] mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-8 font-sans">You&apos;re not alone in this</p>
        <p className="text-[100px] md:text-[160px] font-bold text-white leading-none tracking-tight font-serif">600<span className="text-[#469695]">+</span></p>
        <h2 className="text-xl md:text-2xl font-bold text-[#FAF7F2]/80 mt-2 mb-6 font-sans">
          occupational therapists building postpartum practices together
        </h2>
        <p className="text-[15px] text-[#FAF7F2]/40 max-w-md mx-auto mb-10 font-serif">
          A community of clinicians who share resources, ask real questions,
          celebrate wins, and support each other through the hard parts.
        </p>
        <a href="https://www.facebook.com/groups/1967522367025806" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-white text-[#0A3660] px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#E6F0F0] transition-all shadow-lg shadow-black/20 font-sans">
          <Users className="w-4 h-4" strokeWidth={2} />Join the Community
        </a>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section className="bg-[#E6F0F0]" id="contact">
      <div className="max-w-[700px] mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">Take the first step</p>
        <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-6 font-serif">
          Ready to build your postpartum practice?
        </h2>
        <p className="text-[17px] text-[#6B6560] leading-relaxed mb-10 font-serif">
          Book a free 15 minute strategy call. No pressure, no pitch. Just a conversation about where you are and where you want to go.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2.5 bg-[#357574] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#0A3660] transition-all shadow-lg shadow-[#0A3660]/15 font-sans">
          <Calendar className="w-5 h-5" strokeWidth={2} />Book Your Free Strategy Call
        </a>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }])) }} />
      <Hero />
      <SocialProof />
      <ProblemStatement />
      <Journey />
      <MentorVsModule />
      <Testimonials />
      <PodcastSection />
      <Community />
      <FinalCTA />
    </>
  );
}
