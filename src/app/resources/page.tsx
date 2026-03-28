import type { Metadata } from "next";
import { Download, BookOpen, Headphones, Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Resources | The Postpartum OT",
  description:
    "Download the Postpartum Practice Building Starter Kit and explore free resources for OTs entering the postpartum space.",
};

export default function ResourcesPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Free Resources
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-lg mx-auto">
            Tools and guides to help you start building your postpartum OT practice today
          </p>
        </div>

        {/* Featured Resource */}
        <div className="bg-[#061D37] rounded-2xl p-8 md:p-12 lg:p-16 mb-12">
          <div className="grid md:grid-cols-[55fr_45fr] gap-10 items-center">
            <div>
              <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-6 font-sans">
                Featured Download
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-white mb-6 font-serif">
                Postpartum Practice Building Starter Kit
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed mb-8 font-serif">
                Everything you need to take your first real steps toward a postpartum OT practice.
                Built from 10+ years of clinical experience and refined through hundreds of conversations
                with OTs just like you.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "A clear roadmap for your first 90 days in postpartum OT",
                  "Scripts and templates for reaching out to referral sources",
                  "A checklist of essential assessments and clinical tools",
                  "Common mistakes new postpartum OTs make (and how to avoid them)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#469695] flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-[15px] text-white/70 font-serif">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-[#469695] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#357574] transition-all hover:shadow-lg hover:shadow-[#469695]/25 font-sans"
              >
                <Download className="w-4 h-4" strokeWidth={2} />
                Download the Starter Kit
              </a>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-80 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                <Download className="w-16 h-16 text-[#469695]/40" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Resources */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a
            href="/blog"
            className="group bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md hover:shadow-[#0A3660]/8 transition-shadow p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center mb-6 group-hover:bg-[#469695]/20 transition-colors">
              <BookOpen className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#0A3660] mb-3 font-serif">
              The Blog
            </h3>
            <p className="text-[15px] text-[#6B6560] leading-relaxed font-serif">
              In depth articles on clinical practice, business building, and the
              realities of working with postpartum families. Written from
              experience, not theory.
            </p>
          </a>

          <a
            href="/podcast"
            className="group bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md hover:shadow-[#0A3660]/8 transition-shadow p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center mb-6 group-hover:bg-[#469695]/20 transition-colors">
              <Headphones className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#0A3660] mb-3 font-serif">
              The Functional Fourth Trimester Podcast
            </h3>
            <p className="text-[15px] text-[#6B6560] leading-relaxed font-serif">
              Weekly conversations about building a postpartum practice that makes
              a real difference. Clinical insights, business strategy, and honest talk.
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="bg-[#E6F0F0] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A3660] mb-4 font-serif">
            Want personalized guidance?
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-8 max-w-lg mx-auto font-serif">
            Resources are a great start. But if you want someone to look at your
            specific situation and help you build a plan, let&apos;s talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#357574] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A3660] transition-colors font-sans"
          >
            <Calendar className="w-4 h-4" strokeWidth={2} />
            Book a Free Call
          </a>
        </div>
      </section>
    </main>
  );
}
