import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Growing Practices Mentorship | The Postpartum OT",
  description:
    "Scale your postpartum OT practice with strategic mentorship from Melissa O'Neal. Revenue growth, marketing systems, and operational guidance.",
};

function TealCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
      <path d="M3 8L6.5 11.5L13 4.5" stroke="#469695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const accomplishItems = [
  "Revenue growth strategies tailored to your current practice size and goals",
  "Marketing systems that consistently bring in your ideal clients without burning you out",
  "Operational workflows and systems so your practice runs smoothly as it grows",
  "Pricing optimization to make sure your expertise is valued at the level it deserves",
  "Referral network development that creates a steady pipeline of new families",
  "Strategic guidance on when and how to expand your offerings or team",
];

const steps = [
  {
    number: "01",
    title: "Practice Assessment",
    description:
      "We start by looking at what is working, what is not, and where the biggest opportunities are in your current practice. Melissa identifies the specific levers that will drive growth.",
  },
  {
    number: "02",
    title: "Growth Strategy",
    description:
      "Together, you build a strategic plan focused on the areas that will have the highest impact. This is not a generic framework. It is built around your numbers, your market, and your capacity.",
  },
  {
    number: "03",
    title: "Implementation Support",
    description:
      "Regular sessions where you work through execution together. Melissa helps you navigate the challenges that come with growth and keeps you accountable to the plan.",
  },
];

export default function GrowingPracticesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#061D37] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#061D37] via-[#0A3660] to-[#0d4a82]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#FAF7F2]" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }} />

        <div className="relative max-w-[800px] mx-auto px-6 pt-20 pb-40 md:pt-28 md:pb-48 text-center">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
            For Established Practices
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-white mb-8 font-serif">
            Growing Practices
            <br />Mentorship
          </h1>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto font-serif">
            You have built something real. Clients trust you. The work matters. But you have hit a plateau and you
            know there is more potential here. This mentorship helps you scale strategically.
          </p>
        </div>
      </section>

      {/* What You'll Accomplish */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
              What You Will Accomplish
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-10 font-serif">
              Scale what is working with strategic guidance
            </h2>
            <div className="space-y-5">
              {accomplishItems.map((item) => (
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
              From plateau to momentum
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
              [PLACEHOLDER: Pricing details for the Growing Practices mentorship tier. Final pricing and package
              structure to be confirmed.]
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E6F0F0]">
        <div className="max-w-[700px] mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-6 font-serif">
            Ready to break through the plateau?
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-10 font-serif">
            Book a free strategy call with Melissa. She will look at where your practice is today and map out
            exactly what it will take to reach the next level.
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
