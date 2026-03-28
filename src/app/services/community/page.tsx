import type { Metadata } from "next";
import Link from "next/link";
import { Heart, MessageCircle, BookOpen, Users, CalendarDays, Share2 } from "lucide-react";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Postpartum OT Community | Free for OTs",
  description:
    "Join 600+ occupational therapists in The Postpartum OT community. Free peer support, shared resources, clinical discussions, and live events.",
  robots: { index: false, follow: false },
};

const offerings = [
  {
    icon: MessageCircle,
    title: "Peer Support",
    description: "Connect with fellow OTs who understand the unique challenges and rewards of postpartum work. Ask questions, share wins, and get honest feedback.",
  },
  {
    icon: BookOpen,
    title: "Shared Resources",
    description: "Access a growing library of resources, templates, and clinical tools contributed by community members and curated by Melissa.",
  },
  {
    icon: Heart,
    title: "Clinical Discussions",
    description: "Real conversations about real cases. Talk through clinical challenges with other practitioners who are doing this work every day.",
  },
  {
    icon: CalendarDays,
    title: "Live Events",
    description: "Community Q&A sessions, guest speakers, and live discussions on topics that matter to postpartum OTs.",
  },
  {
    icon: Share2,
    title: "Referral Network",
    description: "Build relationships with OTs across the country. When families need care outside your area, you have a network to refer to.",
  },
  {
    icon: Users,
    title: "A Place to Belong",
    description: "Postpartum OT can feel isolating. This community exists so you never have to figure things out alone.",
  },
];

export default function CommunityPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Services", url: "https://thepostpartumot.com/services" }, { name: "Community", url: "https://thepostpartumot.com/services/community" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("The Postpartum OT Community", "Free community of 600+ occupational therapists sharing resources and support", "https://thepostpartumot.com/services/community")) }} />
      {/* Hero */}
      <section className="relative bg-[#061D37] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#469695]" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-[#469695]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#FAF7F2]" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }} />

        <div className="relative max-w-[800px] mx-auto px-6 pt-20 pb-40 md:pt-28 md:pb-48 text-center">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-8 font-sans">
            Free to Join
          </p>
          <p className="text-[100px] md:text-[160px] font-bold text-white leading-none tracking-tight font-serif">
            600<span className="text-[#469695]">+</span>
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-[#FAF7F2]/80 mt-2 mb-6 font-sans">
            occupational therapists building postpartum practices together
          </h1>
          <p className="text-base md:text-lg text-white/40 leading-relaxed max-w-md mx-auto font-serif">
            The Postpartum OT Community is a free space for clinicians who are passionate about serving
            new families. Whether you are just exploring or years into your practice, you belong here.
          </p>
        </div>
      </section>

      {/* What the Community Offers */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-4 font-sans">
              What You Get
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] font-serif">
              A community built for postpartum OTs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md shadow-[#0A3660]/6 p-8 hover:shadow-lg hover:shadow-[#0A3660]/10 transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#469695]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[#0A3660] mb-3 font-serif">{item.title}</h3>
                <p className="text-[15px] text-[#6B6560] leading-relaxed font-serif">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free to Join Section */}
      <section className="bg-[#E6F0F0]">
        <div className="max-w-[800px] mx-auto px-6 py-24 md:py-32">
          <div className="bg-white rounded-2xl shadow-lg shadow-[#0A3660]/8 p-10 md:p-14 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#469695]/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6 text-[#469695]" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-[#0A3660] mb-4 font-serif">
              Completely free. No catch.
            </h2>
            <p className="text-[17px] text-[#6B6560] leading-relaxed mb-4 max-w-lg mx-auto font-serif">
              The community exists because Melissa believes every OT who wants to help postpartum families
              deserves a support system. There is no paywall, no upsell gate, no trial period.
            </p>
            <p className="text-[17px] text-[#6B6560] leading-relaxed max-w-lg mx-auto font-serif">
              Join the private Facebook group and introduce yourself. You will find hundreds of clinicians who are
              on the same path you are.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7F2]">
        <div className="max-w-[700px] mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-[#0A3660] mb-6 font-serif">
            Join the community today
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-10 font-serif">
            Click below to request access to the private Facebook group. Once you are in, introduce yourself
            and let the community know where you are on your postpartum OT journey.
          </p>
          <Link
            href="https://www.facebook.com/groups/1967522367025806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#469695] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#357574] transition-all hover:shadow-lg hover:shadow-[#469695]/25 font-sans"
          >
            <Users className="w-5 h-5" strokeWidth={2} />
            Join the Community
          </Link>
        </div>
      </section>
    </main>
  );
}
