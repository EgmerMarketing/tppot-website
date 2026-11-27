"use client";

import { useLayoutEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Moon, Pause, Play, Sun, X } from "lucide-react";
import { mainNav } from "@/lib/site";

function subscribeClass(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function useHtmlClass(name: string) {
  return useSyncExternalStore(
    subscribeClass,
    () => document.documentElement.classList.contains(name),
    () => false,
  );
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  try {
    localStorage.setItem("tppot-theme", dark ? "dark" : "light");
  } catch {
    /* private browsing */
  }
}

function applyMotion(on: boolean) {
  document.documentElement.classList.toggle("no-motion", !on);
  try {
    localStorage.setItem("tppot-motion", on ? "on" : "off");
  } catch {
    /* private browsing */
  }
  window.dispatchEvent(new Event("tppot-motion"));
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState("");
  const dark = useHtmlClass("dark");
  const paused = useHtmlClass("no-motion");

  useLayoutEffect(() => {
    let theme: string | null = null;
    let motion: string | null = null;
    try {
      theme = localStorage.getItem("tppot-theme");
      motion = localStorage.getItem("tppot-motion");
    } catch {
      /* private browsing */
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = theme === "dark" || (theme !== "light" && prefersDark);
    const isPaused = motion === "off" || (motion !== "on" && reduce);
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.classList.toggle("no-motion", isPaused);
    root.style.colorScheme = isDark ? "dark" : "light";
    root.classList.add("js");
  }, []);

  return (
    <header className="no-print sticky top-0 z-50 border-b-4 border-teal-deep bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="light-chip inline-flex shrink-0 items-center rounded-xl bg-[#FAF7F2] p-1">
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

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/need-help-now"
            className="inline-flex min-h-11 items-center font-sans text-base font-bold text-[#0A3660] underline underline-offset-4"
          >
            Need help now
          </Link>
          <button
            type="button"
            className="theme-toggle"
            aria-label="Dark mode"
            aria-pressed={dark}
            onClick={() => {
              const next = !document.documentElement.classList.contains("dark");
              applyTheme(next);
              setStatus(next ? "Dark mode on" : "Dark mode off");
            }}
          >
            <Moon className="theme-icon theme-icon-moon h-5 w-5" aria-hidden="true" />
            <Sun className="theme-icon theme-icon-sun h-5 w-5" aria-hidden="true" />
            <span className="theme-toggle-label">Dark mode</span>
          </button>
          <button
            type="button"
            className="motion-toggle"
            aria-label="Motion"
            aria-pressed={!paused}
            onClick={() => {
              const next = document.documentElement.classList.contains("no-motion");
              applyMotion(next);
              setStatus(next ? "Motion on" : "Motion off");
            }}
          >
            <Pause className="motion-icon motion-icon-pause h-5 w-5" aria-hidden="true" />
            <Play className="motion-icon motion-icon-play h-5 w-5" aria-hidden="true" />
            <span className="motion-toggle-label">Motion</span>
          </button>
          <p className="sr-only" aria-live="polite">{status}</p>
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
