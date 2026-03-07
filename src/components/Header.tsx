'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const transparent = pathname === '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  const isSolid = !transparent || scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#469695] text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`font-black text-lg tracking-tight transition-colors duration-300 ${
              isSolid ? 'text-[#0A3660]' : 'text-white'
            }`}
          >
            The Postpartum OT
          </Link>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex items-center gap-6 text-sm font-semibold transition-colors duration-300 ${
              isSolid ? 'text-[#0A3660]' : 'text-white'
            }`}
          >
            <Link href="/about" className="hover:text-[#469695] transition-colors">About</Link>
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#469695] transition-colors"
                aria-expanded={false}
              >
                For Clinicians <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all text-[#0A3660]">
                <Link href="/for-clinicians" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#469695]">Overview</Link>
                <Link href="/for-clinicians/mentorship" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#469695]">Mentorship</Link>
                <Link href="/for-clinicians/collective" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#469695]">The Collective</Link>
              </div>
            </div>
            <Link href="/for-moms" className="hover:text-[#469695] transition-colors">For Moms</Link>
            <Link href="/podcast" className="hover:text-[#469695] transition-colors">Podcast</Link>
            <Link href="/speaking" className="hover:text-[#469695] transition-colors">Speaking</Link>
            <Link href="/blog" className="hover:text-[#469695] transition-colors">Blog</Link>
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full font-bold transition-all duration-200 ${
                isSolid
                  ? 'bg-[#469695] text-white hover:bg-[#357878]'
                  : 'bg-white/20 text-white border border-white/40 hover:bg-white hover:text-[#0A3660]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${isSolid ? 'text-[#0A3660]' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4 text-sm font-semibold text-[#0A3660]">
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#469695]">About</Link>
            <Link href="/for-clinicians" onClick={() => setOpen(false)} className="hover:text-[#469695]">For Clinicians</Link>
            <Link href="/for-clinicians/mentorship" onClick={() => setOpen(false)} className="pl-4 hover:text-[#469695]">— Mentorship</Link>
            <Link href="/for-clinicians/collective" onClick={() => setOpen(false)} className="pl-4 hover:text-[#469695]">— The Collective</Link>
            <Link href="/for-moms" onClick={() => setOpen(false)} className="hover:text-[#469695]">For Moms</Link>
            <Link href="/podcast" onClick={() => setOpen(false)} className="hover:text-[#469695]">Podcast</Link>
            <Link href="/speaking" onClick={() => setOpen(false)} className="hover:text-[#469695]">Speaking</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="hover:text-[#469695]">Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="bg-[#469695] text-white px-4 py-2 rounded-full text-center">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
