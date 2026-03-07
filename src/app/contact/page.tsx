'use client';
import { Mail, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import { company } from '@/lib/company';

export default function ContactPage() {
  return (
    <>
      <ReaderContent title="Contact The Postpartum OT" />

      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Reach Out — You Don&apos;t Have to Do This Alone</h2>
          <p className="text-lg font-lora italic text-gray-200">
            Whether you&apos;re exploring ways to start your postpartum practice or refining your existing approach, I&apos;m here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-black text-[#0A3660] mb-2">Send a Message</h2>
            <p className="text-gray-600 font-lora mb-6 text-sm">I&apos;ll be in touch within 1–2 business days.</p>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#0A3660] mb-1">Name <span className="text-red-500">*</span></label>
                <input id="name" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#469695]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#0A3660] mb-1">Email <span className="text-red-500">*</span></label>
                <input id="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#469695]" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-[#0A3660] mb-1">Subject</label>
                <select id="subject" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#469695] bg-white">
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="speaking">Speaking / Media</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#0A3660] mb-1">Message <span className="text-red-500">*</span></label>
                <textarea id="message" required rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#469695] resize-none" />
              </div>
              <button type="submit" className="bg-[#469695] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#3a7e7d] transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Booking + Social */}
          <div>
            <h2 className="text-2xl font-black text-[#0A3660] mb-2">Schedule a Free Consultation</h2>
            <p className="text-gray-600 font-lora mb-4 text-sm">Ready to talk about mentorship or speaking? Book a time directly.</p>
            {/* KARTRA_EMBED: Booking calendar widget */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center text-gray-400 italic text-sm mb-10">
              [Booking calendar — Kartra embed coming soon]
            </div>

            <h2 className="text-2xl font-black text-[#0A3660] mb-4">Find Me Online</h2>
            <ul className="space-y-3">
              {[
                { icon: <Mail size={18} />, label: 'hello@thepostpartumot.com', href: 'mailto:hello@thepostpartumot.com' },
                { icon: <Instagram size={18} />, label: '@thepostpartumot', href: company.social.instagram },
                { icon: <Facebook size={18} />, label: 'The Postpartum OT Community', href: company.social.facebook },
                { icon: <Youtube size={18} />, label: 'The Postpartum OT YouTube', href: company.social.youtube },
                { icon: <Linkedin size={18} />, label: 'Melissa O\'Neal', href: company.social.linkedin },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#469695] hover:text-[#3a7e7d] font-semibold text-sm transition-colors">
                    {item.icon} {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
