"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b-4 border-teal-deep bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Image
            src="/images/logo-long.png"
            alt="The Postpartum OT"
            width={1933}
            height={471}
            priority
            sizes="(max-width: 768px) 148px, 197px"
            className="h-9 w-[148px] md:h-12 md:w-[197px]"
          />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/need-help-now"
            className="inline-flex min-h-11 items-center font-sans text-base font-bold text-[#0A3660] underline underline-offset-4"
          >
            Need help now
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center xl:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6 text-[#0A3660]" /> : <Menu className="h-6 w-6 text-[#0A3660]" />}
          </button>
        </div>
      </div>

      <nav aria-label="Main" className="mx-auto hidden max-w-[1280px] flex-wrap gap-x-5 gap-y-2 px-8 pb-3 xl:flex">
        {mainNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center font-sans text-base font-bold text-[#0A3660] underline-offset-4 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-[#0A3660]/10 px-4 py-2 xl:hidden">
          <ul>
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center font-sans text-base font-bold text-[#0A3660]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
