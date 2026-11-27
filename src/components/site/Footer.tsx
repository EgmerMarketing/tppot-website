import Link from "next/link";
import Logo from "@/components/site/Logo";
import SignupForm from "@/components/site/SignupForm";
import { footerNav, mainNav } from "@/lib/nav";
import { PODCAST } from "@/lib/schema";

const linkClass =
  "inline-flex min-h-11 items-center font-sans text-[0.9375rem] text-on-navy-muted decoration-on-navy-accent underline-offset-4 transition-colors hover:text-on-navy hover:underline sm:min-h-10";

/* Navy footer in both themes (#030D17 in dark). It slides 96px under the teal
   help band above it, so the band's curved corner shows navy beneath. */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="band-footer band-lower relative pb-10" style={{ paddingTop: "calc(var(--seam) + 96px)" }}>
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <section aria-labelledby="footer-signup">
            <h2 id="footer-signup" className="t-h2-band max-w-[22ch]">
              Get new episodes, free handouts and the community launch date.
            </h2>
            <div className="mt-8 max-w-xl">
              <SignupForm source="footer" submitLabel="Sign me up" tone="navy" />
            </div>
          </section>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Explore">
              <h2 className="font-sans text-[0.9375rem] font-bold">Explore</h2>
              <ul className="mt-4 grid gap-0.5">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="More">
              <h2 className="font-sans text-[0.9375rem] font-bold">More</h2>
              <ul className="mt-4 grid gap-0.5">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-sans text-[0.9375rem] font-bold">Listen</h2>
              <ul className="mt-4 grid gap-0.5">
                <li>
                  <a href={PODCAST.apple} className={linkClass}>
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href={PODCAST.spotify} className={linkClass}>
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/14 pt-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <Logo variant="on-dark" className="[--logo-h:52px]" />
          <p className="max-w-[70ch] font-sans text-[0.875rem] leading-relaxed text-on-navy-muted">
            The Postpartum OT shares educational information. It isn&apos;t medical or professional advice. Talk with your own provider about your care. In crisis, call or text{" "}
            <a href="tel:988" className="tlink text-on-navy">988</a>; in an emergency, call{" "}
            <a href="tel:911" className="tlink text-on-navy">911</a>.
            <span className="mt-3 block">&copy; {year} Postpartum OT LLC</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
