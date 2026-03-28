import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle } from "lucide-react";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "New Practitioners Mentorship | The Postpartum OT",
  description:
    "Start your postpartum OT practice from scratch with 1:1 mentorship from Melissa O'Neal. Get a clear roadmap, clinical confidence, and your first clients.",
  robots: { index: false, follow: false },
};

function TealCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
      <path d="M3 8L6.5 11.5L13 4.5" stroke="#469695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const buildItems = [
  "A clear, step by step plan to launch your postpartum practice in your specific market",
  "Clinical confidence through real case consultation and hands on guidance",
  "Your niche positioning so you stand out from the start instead of blending in",
  "A marketing foundation that attracts your ideal clients without feeling salesy",
  "Pricing and business structure that supports a sustainable practice",
  "Direct access to Melissa for questions between sessions so you never feel stuck",
];

const steps = [
  {
    number: "01",
    title: "Strategy Call",
    description:
      "We start with a free call to understand where you are, where you want to go, and whether mentorship is the right fit. No pressure, no pitch.",
  },
  {
    number: "02",
    title: "Personalized Roadmap",
    description:
      "Melissa builds a launch plan tailored to your market, your skills, and your goals. This is not a template. It is your specific path forward.",
  },
  {
    number: "03",
    title: "Ongoing Mentorship",
    description:
      "Regular 1:1 sessions where you work through each step together. You bring the questions. Melissa brings the experience. You build the practice.",
  },
];

export default function NewPractitionersPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Services", url: "https://thepostpartumot.com/services" }, { name: "New Practitioners", url: "https://thepostpartumot.com/services/new-practitioners" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("New Practitioners Mentorship", "Personal mentorship for occupational therapists starting a postpartum practice from scratch", "https://thepostpartumot.com/services/new-practitioners")) }} />
      {/* Hero */}
      <section className="relative bg-[#061D37] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#061D37] via-[#0A3660] to-[#0d4a82]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#FAF7F2]" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }} />

        <div className="relative max-w-[800px] mx-auto px-6 pt-20 pb-40 md:pt-28 md:pb-48 text-center">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
            For New Practitioners
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-white mb-8 font-serif">
            New Practitioners
            <br />Mentorship
          </h1>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto font-serif">
            You want to help postpartum families, but OT school did not teach you how to build a practice around it.
            This mentorship gives you a clear path from where you are right now to your first clients.
          </p>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
              What You Will Build
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-10 font-serif">
              Everything you need to launch with confidence
            </h2>
            <div className="space-y-5">
              {buildItems.map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#469695]/10 flex items-center justify-center flex-shrink-0">
                    <TealCheck />
                  </div>
                  <p className="text-[17px] text-[#6B6560] leading-relaxed font-serif">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#E6F0F0]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-4 font-sans">
              How It Works
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] font-serif">
              Three steps to your practice
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative p-8 md:p-10 rounded-2xl ${
                  i === 1
                    ? "bg-[#061D37] text-white shadow-2xl shadow-[#0A3660]/30"
                    : "bg-white shadow-md shadow-[#0A3660]/6"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${
                  i === 1 ? "bg-[#469695]" : "bg-[#469695]/10"
                }`}>
                  <CheckCircle className={`w-5 h-5 ${i === 1 ? "text-white" : "text-[#469695]"}`} strokeWidth={1.5} />
                </div>
                <p className="text-xs font-bold tracking-wider uppercase mb-3 text-[#469695] font-sans">
                  Step {step.number}
                </p>
                <h3 className={`text-xl font-bold mb-4 font-serif ${i === 1 ? "text-white" : "text-[#0A3660]"}`}>
                  {step.title}
                </h3>
                <p className={`text-[15px] leading-relaxed font-serif ${i === 1 ? "text-white/60" : "text-[#6B6560]"}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Placeholder */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[600px] mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
            Investment
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-8 font-serif">
            Pricing
          </h2>
          <div className="bg-white rounded-2xl shadow-md shadow-[#0A3660]/6 p-10">
            <p className="text-[17px] text-[#6B6560] leading-relaxed font-serif">
              [PLACEHOLDER: Pricing details for the New Practitioners mentorship tier. Final pricing and package
              structure to be confirmed.]
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E6F0F0]">
        <div className="max-w-[700px] mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-6 font-serif">
            Ready to start building?
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-10 font-serif">
            Book a free strategy call with Melissa. She will help you understand exactly where to start
            and what your first steps should be.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#469695] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#357574] transition-all hover:shadow-lg hover:shadow-[#469695]/25 font-sans"
          >
            <Calendar className="w-5 h-5" strokeWidth={2} />
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
