import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Rocket, TrendingUp, Users } from "lucide-react";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services | The Postpartum OT",
  description:
    "Find your path forward with mentorship from The Postpartum OT. Programs for new practitioners, growing practices, and a free community of 600+ OTs.",
  robots: { index: false, follow: false },
};

function TealCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M3 8L6.5 11.5L13 4.5" stroke="#469695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const tiers = [
  {
    slug: "new-practitioners",
    icon: Rocket,
    label: "Getting Started",
    title: "New Practitioners",
    description: "Start your postpartum practice with 1:1 mentorship from someone who has built one from scratch.",
    inclusions: [
      "Personal mentorship calls with Melissa",
      "Practice launch roadmap tailored to your market",
      "Clinical confidence building and case consultation",
      "Marketing foundations for your first clients",
      "Direct access for questions between sessions",
    ],
    cta: "Learn More",
    featured: false,
  },
  {
    slug: "growing-practices",
    icon: TrendingUp,
    label: "Most Popular",
    title: "Growing Practices",
    description: "Scale what is working with strategic guidance on revenue, marketing, and systems.",
    inclusions: [
      "Advanced strategy sessions with Melissa",
      "Revenue growth and pricing optimization",
      "Marketing systems that bring clients consistently",
      "Operational systems and workflow design",
      "Referral network development",
      "Priority access and ongoing support",
    ],
    cta: "Learn More",
    featured: true,
  },
  {
    slug: "community",
    icon: Users,
    label: "Free",
    title: "Community",
    description: "Join 600+ occupational therapists in a supportive community focused on postpartum care.",
    inclusions: [
      "Access to the private Facebook group",
      "Peer support from fellow postpartum OTs",
      "Shared resources and clinical discussions",
      "Community events and live Q&A sessions",
      "A network of clinicians who understand your work",
    ],
    cta: "Join Free",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Services", url: "https://thepostpartumot.com/services" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("New Practitioners Mentorship", "Personal mentorship for occupational therapists starting a postpartum practice", "https://thepostpartumot.com/services/new-practitioners")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Growing Practices Mentorship", "Strategic guidance for OTs scaling an existing postpartum practice", "https://thepostpartumot.com/services/growing-practices")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Community Membership", "Free community of 600+ occupational therapists building postpartum practices", "https://thepostpartumot.com/services/community")) }} />
      {/* Hero */}
      <section className="bg-[#E6F0F0]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 text-center">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] text-[#0A3660] mb-6 font-serif">
            Find Your Path Forward
          </h1>
          <p className="text-[17px] text-[#6B6560] leading-relaxed max-w-xl mx-auto font-serif">
            Whether you are just starting out, ready to scale, or looking for a community of fellow postpartum OTs,
            there is a path here for you.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="grid md:grid-cols-[30fr_40fr_30fr] gap-6 md:gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.slug}
                className={`bg-white rounded-2xl shadow-md shadow-[#0A3660]/6 p-8 md:p-10 relative ${
                  tier.featured
                    ? "border-t-[3px] border-[#469695] md:-translate-y-4 shadow-xl shadow-[#0A3660]/12"
                    : ""
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#469695] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider font-sans">
                    Most Popular
                  </span>
                )}

                <div className="w-12 h-12 rounded-2xl bg-[#469695]/10 flex items-center justify-center mb-6">
                  <tier.icon className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                </div>

                <p className="text-[11px] font-bold text-[#469695] uppercase tracking-wider mb-2 font-sans">
                  {tier.label}
                </p>
                <h2 className="text-2xl font-bold text-[#0A3660] mb-3 font-serif">{tier.title}</h2>
                <p className="text-[15px] text-[#6B6560] leading-relaxed mb-6 font-serif">{tier.description}</p>

                {/* Pricing Placeholder */}
                <div className="bg-[#E6F0F0] rounded-xl p-4 mb-6 text-center">
                  <p className="text-sm text-[#6B6560] font-serif">[PLACEHOLDER: Pricing details]</p>
                </div>

                {/* Inclusions */}
                <ul className="space-y-3 mb-8">
                  {tier.inclusions.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <TealCheck />
                      <span className="text-sm text-[#6B6560] leading-relaxed font-serif">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${tier.slug}`}
                  className={`block text-center px-6 py-3.5 rounded-xl font-bold text-[15px] transition-all font-sans ${
                    tier.featured
                      ? "bg-[#357574] text-white hover:bg-[#0A3660] hover:shadow-lg"
                      : "bg-[#061D37] text-white hover:bg-[#0A3660]"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#E6F0F0]">
        <div className="max-w-[700px] mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-6 font-serif">
            Not sure which is right?
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-10 font-serif">
            Book a free strategy call. Melissa will help you figure out exactly where you are and which
            path makes sense for your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#469695] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#357574] transition-all hover:shadow-lg hover:shadow-[#469695]/25 font-sans"
          >
            <Calendar className="w-5 h-5" strokeWidth={2} />
            Book a Free Call
          </Link>
        </div>
      </section>
    </main>
  );
}
