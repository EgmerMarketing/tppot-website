"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import EmailSignup from "@/components/site/EmailSignup";
import { DISCLAIMER_FULL, footerNav } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();
  const showSignup = pathname !== "/need-help-now";

  return (
    <footer className="site-footer bg-[#061D37] text-white" role="contentinfo">
      <div className="border-b border-white/15">
        <p className="mx-auto max-w-[1280px] px-6 py-4 font-serif text-base text-white md:px-8">
          Healthcare professional?{" "}
          <Link href="/for-professionals" className="font-sans font-bold text-white underline">
            Find postpartum OT resources
          </Link>
          .
        </p>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-12 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          {showSignup ? (
            <div className="rounded-2xl bg-white p-6 text-black">
              <EmailSignup idPrefix="footer" />
            </div>
          ) : (
            <p className="font-serif text-base leading-relaxed text-white">
              This page does not include a signup. If you need someone now, use the numbers above.
            </p>
          )}
          <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-white">
            {DISCLAIMER_FULL}
          </p>
        </div>

        <div>
          <p className="font-sans text-sm font-bold uppercase tracking-wide text-white">On this site</p>
          <ul className="mt-4 space-y-1">
            <li>
              <Link href="/need-help-now" className="inline-flex min-h-11 items-center font-sans text-base font-bold text-white underline">
                Need help now
              </Link>
            </li>
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center font-serif text-base text-white underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif text-base text-white">
            <a className="underline" href="mailto:hello@thepostpartumot.com">
              hello@thepostpartumot.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-[1280px] px-6 py-6 font-sans text-sm text-white md:px-8">
          © {new Date().getFullYear()} Postpartum OT LLC.
        </p>
      </div>
    </footer>
  );
}
