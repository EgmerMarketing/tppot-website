import type { Metadata } from "next";
import { Mail, Calendar, Send, ExternalLink } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact | The Postpartum OT",
  description:
    "Book a free 15 minute strategy call or send a message. Get in touch with Melissa O'Neal about postpartum OT mentorship.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Contact", url: "https://thepostpartumot.com/contact" }])) }} />
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-lg mx-auto">
            Book a free 15 minute strategy call or send a message
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 p-8 md:p-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="journey"
                  className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
                >
                  Where are you in your postpartum OT journey?
                </label>
                <select
                  id="journey"
                  name="journey"
                  className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors"
                >
                  <option value="">Select one</option>
                  <option value="exploring">Just Exploring</option>
                  <option value="ready">Ready to Start</option>
                  <option value="practicing">Already Practicing</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[#0A3660] mb-2 font-sans"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border border-[#D4D0CC] rounded-lg p-3 text-[#0A3660] font-sans text-sm bg-white focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 outline-none transition-colors resize-vertical"
                  placeholder="Tell me a little about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2.5 bg-[#357574] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A3660] transition-colors font-sans w-full justify-center"
              >
                <Send className="w-4 h-4" strokeWidth={2} />
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-[#0A3660] mb-6 font-serif">
                Other Ways to Connect
              </h2>

              <div className="space-y-6">
                <a
                  href="mailto:hello@thepostpartumot.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#469695]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A3660] font-sans">Email Directly</p>
                    <p className="text-sm text-[#6B6560] font-serif">
                      hello@thepostpartumot.com
                    </p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#469695]/20 transition-colors">
                    <Calendar className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A3660] font-sans">
                      Book a Free Strategy Call
                    </p>
                    <p className="text-sm text-[#6B6560] font-serif">
                      15 minutes, no pressure, no pitch
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#0A3660] uppercase tracking-wider mb-5 font-sans">
                Follow Along
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center hover:bg-[#469695]/20 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center hover:bg-[#469695]/20 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center hover:bg-[#469695]/20 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-[#469695]" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="bg-[#E6F0F0] rounded-2xl p-8">
              <p className="text-[15px] text-[#0A3660] font-medium leading-relaxed font-serif">
                &ldquo;I respond to every message personally. If you&apos;re
                thinking about postpartum OT, I&apos;d love to hear where you
                are and where you want to go.&rdquo;
              </p>
              <p className="text-sm font-bold text-[#469695] mt-4 font-sans">
                Melissa O&apos;Neal, OTR/L, PCES
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
