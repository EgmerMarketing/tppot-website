import type { Metadata } from "next";
import Link from "next/link";
import { Headphones, Play, ChevronRight } from "lucide-react";
import { breadcrumbSchema, podcastSeriesSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Functional Fourth Trimester Podcast | The Postpartum OT",
  description:
    "Weekly conversations about building a postpartum OT practice. Clinical insights, business strategy, and honest talk with Melissa O'Neal.",
};

const episodes = [
  {
    number: 7,
    title: "Tummy Time and Milestones: What to Expect in the Early Months",
    date: "Mar 19, 2026",
    duration: "27 min",
    blog: "/blog/tummy-time-and-milestones",
  },
  {
    number: 6,
    title: "Beyond Outnumbered: Practical Survival Strategies for Parents of Multiples",
    date: "Mar 15, 2026",
    duration: "29 min",
    blog: "/blog/beyond-outnumbered",
  },
  {
    number: 5,
    title: "The Power of Touch: How Infant Massage Supports Regulation and Bonding",
    date: "Mar 8, 2026",
    duration: "24 min",
    blog: "/blog/the-power-of-touch",
  },
  {
    number: 4,
    title: "From Chaos to Calm: Simple Sleep Strategies for New Parents",
    date: "Feb 28, 2026",
    duration: "19 min",
    blog: "/blog/how-the-nervous-system-impacts-infant-sleep",
  },
  {
    number: 3,
    title: "Wired and Tired: How the Nervous System Shapes Infant Sleep",
    date: "Feb 28, 2026",
    duration: "18 min",
    blog: "/blog/how-the-nervous-system-impacts-infant-sleep",
  },
  {
    number: 2,
    title: "More Than Baby Blues: Understanding Postpartum Mood and Anxiety Disorders",
    date: "Feb 28, 2026",
    duration: "28 min",
    blog: "/blog/more-than-baby-blues",
  },
  {
    number: 1,
    title: "Welcome to Functional Fourth Trimester: Rethinking Daily Life After Birth",
    date: "Feb 28, 2026",
    duration: "6 min",
    blog: "/blog/welcome-to-functional-fourth-trimester",
  },
];

export default function PodcastPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Podcast", url: "https://thepostpartumot.com/podcast" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSeriesSchema()) }} />
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
            href="https://podcasts.apple.com/us/podcast/functional-fourth-trimester/id1881077069"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#061D37] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0A3660] transition-colors font-sans"
          >
            <Headphones className="w-4 h-4" strokeWidth={2} />
            Apple Podcasts
          </a>
          <a
            href="https://open.spotify.com/show/0yuF6uerJGVWdhgysa7Ug3"
            target="_blank"
            rel="noopener noreferrer"
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
              className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md hover:shadow-[#0A3660]/8 transition-shadow p-6 flex items-center gap-5"
            >
              <a
                href="https://podcasts.apple.com/us/podcast/functional-fourth-trimester/id1881077069"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen to Episode ${ep.number} on Apple Podcasts`}
                className="group w-14 h-14 rounded-xl bg-[#469695]/10 flex items-center justify-center flex-shrink-0 hover:bg-[#469695] transition-colors"
              >
                <Play
                  className="w-6 h-6 text-[#469695] group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </a>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-[11px] text-[#469695] font-bold tracking-wider uppercase font-sans">
                    Episode {ep.number}
                  </p>
                  <span className="text-[11px] text-[#6B6560] font-sans">{ep.date}</span>
                  <span className="text-[11px] text-[#6B6560] font-sans">{ep.duration}</span>
                </div>
                <Link href={ep.blog} className="text-[15px] font-bold text-[#0A3660] font-sans hover:text-[#469695] transition-colors">
                  {ep.title}
                </Link>
              </div>
              <Link href={ep.blog} aria-label="Read show notes" className="text-[11px] text-[#469695] font-sans font-bold hover:text-[#357574] transition-colors flex-shrink-0 hidden md:block">
                Show Notes
              </Link>
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
