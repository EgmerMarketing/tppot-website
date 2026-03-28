"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Podcast", href: "/podcast" },
  { label: "Community", href: "https://www.facebook.com/groups/1967522367025806" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <Link href="/" aria-label="The Postpartum OT home">
          <Image
            src="/images/logo-primary.png"
            alt="The Postpartum OT"
            width={180}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#0A3660] transition hover:text-[#357574]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-[44px] items-center rounded-xl bg-[#357574] px-6 py-3 font-sans text-[15px] font-bold text-white transition hover:bg-[#0A3660]"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-[#0A3660]" />
          ) : (
            <Menu className="h-6 w-6 text-[#0A3660]" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#0A3660]/10 bg-[#FAF7F2] px-6 pb-6 pt-4 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#0A3660] transition hover:text-[#357574]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-[44px] items-center rounded-xl bg-[#357574] px-6 py-3 font-sans text-[15px] font-bold text-white transition hover:bg-[#0A3660]"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
