'use client';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { company } from '@/lib/company';

export default function Footer() {
  return (
    <footer className="bg-[#0A3660] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-bold text-lg mb-2">The Postpartum OT</p>
            <p className="text-sm text-gray-300 font-lora italic">Empowering clinicians. Supporting families.</p>
            <div className="flex gap-4 mt-4">
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#469695] transition-colors">
                <Instagram size={20} />
              </a>
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#469695] transition-colors">
                <Facebook size={20} />
              </a>
              <a href={company.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#469695] transition-colors">
                <Youtube size={20} />
              </a>
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#469695] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* For Clinicians */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-3 text-[#469695]">For Clinicians</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/for-clinicians" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/for-clinicians/mentorship" className="hover:text-white transition-colors">Mentorship</Link></li>
              <li><Link href="/for-clinicians/collective" className="hover:text-white transition-colors">The Collective</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Free Resources</Link></li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-3 text-[#469695]">Learn More</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Melissa</Link></li>
              <li><Link href="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
              <li><Link href="/speaking" className="hover:text-white transition-colors">Speaking</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/for-moms" className="hover:text-white transition-colors">For Moms</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-3 text-[#469695]">Stay Connected</p>
            <p className="text-sm text-gray-300 mb-3">Weekly insights for clinicians building postpartum practices.</p>
            <form className="flex flex-col gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg text-[#0A3660] text-sm focus:outline-none focus:ring-2 focus:ring-[#469695]"
                aria-label="Email address"
              />
              <button type="submit" className="bg-[#469695] text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-[#3a7e7d] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Postpartum OT LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/earning-disclaimer" className="hover:text-white transition-colors">Earnings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
