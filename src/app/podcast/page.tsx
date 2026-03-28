import type { Metadata } from "next";
import { Headphones, Play, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Functional Fourth Trimester Podcast | The Postpartum OT",
  description:
    "Weekly conversations about building a postpartum OT practice. Clinical insights, business strategy, and honest talk with Melissa O'Neal.",
};

const episodes = [
  {
    number: 6,
    title: "Building Confidence in Your First Postpartum Cases",
  },
  {
    number: 5,
    title: "What OT School Didn't Teach You About Maternal Mental Health",
  },
  {
    number: 4,
    title: "The Business Side: Pricing, Insurance, and Getting Paid",
  },
  {
    number: 3,
    title: "Understanding the Fourth Trimester Through an OT Lens",
  },
  {
    number: 2,
    title: "From Peds to Postpartum: Making the Transition",
  },
  {
    number: 1,
    title: "Why Postpartum OT Matters More Than Ever",
  },
];

export default function PodcastPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
            The Podcast
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-6 font-serif">
            The Functional Fourth Trimester
          </h1>
          <p className="text-[17px] text-[#6B6560] leading-relaxed font-serif">
            Weekly conversations about building a postpartum practice that makes
            a real difference. Clinical insights, business strategy, and honest
            talk from someone who has been in the trenches for over a decade.
            New episodes every week.
          </p>
        </div>

        {/* Platform Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#"
            className="inline-flex items-center gap-2.5 bg-[#061D37] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0A3660] transition-colors font-sans"
          >
            <Headphones className="w-4 h-4" strokeWidth={2} />
            Apple Podcasts
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 border-2 border-[#0A3660]/15 text-[#0A3660] px-6 py-3.5 rounded-xl font-bold text-sm hover:border-[#0A3660]/30 transition-colors font-sans"
          >
            <Headphones className="w-4 h-4" strokeWidth={2} />
            Spotify
          </a>
        </div>

        {/* Episode List */}
        <div className="space-y-4 mb-16">
          {episodes.map((ep) => (
            <div
              key={ep.number}
              className="group bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md hover:shadow-[#0A3660]/8 transition-shadow p-6 flex items-center gap-5 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-[#469695]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#469695] transition-colors">
                <Play
                  className="w-6 h-6 text-[#469695] group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#469695] font-bold tracking-wider uppercase mb-1 font-sans">
                  Episode {ep.number}
                </p>
                <p className="text-[15px] font-bold text-[#0A3660] font-sans">
                  {ep.title}
                </p>
              </div>
              <ChevronRight
                className="w-5 h-5 text-[#0A3660]/20 group-hover:text-[#469695] transition-colors flex-shrink-0"
                strokeWidth={2}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#E6F0F0] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A3660] mb-4 font-serif">
            Have a topic suggestion?
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-8 max-w-lg mx-auto font-serif">
            The best episodes come from real questions. If there&apos;s something
            you want to hear about, let us know.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#357574] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A3660] transition-colors font-sans"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
