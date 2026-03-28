import type { Metadata } from "next";
import Script from "next/script";
import { Mail } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 15 minute strategy call or send a message. Get in touch with Melissa O'Neal about postpartum OT mentorship.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Contact", url: "https://thepostpartumot.com/contact" }])) }} />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-lg mx-auto">
            Book a free 15 minute strategy call or send a message
          </p>
        </div>
      </section>

      {/* Calendar Booking */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-16 pb-16">
        <div className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-[#0A3660] mb-2 font-serif text-center">
            Book Your Free Strategy Call
          </h2>
          <p className="text-[15px] text-[#6B6560] font-serif text-center mb-8">
            15 minutes with Melissa. No pressure, no pitch. Just a real conversation about where you are and where you want to go.
          </p>

          {/* Kartra Calendar Embed */}
          <div
            className="js_kt_asset_embed js_kartra_trackable_object"
            data-kt-type="calendar"
            data-kt-embed="inline"
            data-kt-value="dXxQLb3reMCp"
            data-kt-owner="BrWMNBXg"
          />
          <Script
            src="https://app.kartra.com/js/build/front/embed/calendar.js"
            strategy="afterInteractive"
          />
        </div>
      </section>

      {/* Form + Info */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <ContactForm />

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
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#0A3660] uppercase tracking-wider mb-5 font-sans">
                Follow Along
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/groups/1967522367025806"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Community"
                  className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center hover:bg-[#469695]/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#469695]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/thepostpartumot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center hover:bg-[#469695]/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#469695]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/raising-bundle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl bg-[#469695]/10 flex items-center justify-center hover:bg-[#469695]/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-[#469695]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
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
