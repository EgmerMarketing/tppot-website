import Link from "next/link";
import Wordmark from "@/components/site/Wordmark";
import SignupForm from "@/components/site/SignupForm";
import { footerNav, mainNav } from "@/lib/nav";
import { PODCAST } from "@/lib/schema";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-surface/60">
      <div className="mx-auto max-w-[84rem] px-4 pb-10 pt-16 sm:px-6 lg:px-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <section aria-labelledby="footer-signup">
            <h2 id="footer-signup" className="max-w-[22ch] text-[1.75rem] leading-[1.2] sm:text-[2.1rem]">
              Get new episodes, free handouts and the community launch date.
            </h2>
            <div className="mt-8 max-w-xl">
              <SignupForm source="footer" submitLabel="Sign me up" />
            </div>
          </section>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Explore" className="col-span-1">
              <h2 className="font-sans text-[0.95rem] font-bold text-heading">Explore</h2>
              <ul className="mt-4 grid gap-1">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-10 items-center font-sans text-[0.95rem] text-muted transition-colors hover:text-heading">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="More" className="col-span-1">
              <h2 className="font-sans text-[0.95rem] font-bold text-heading">More</h2>
              <ul className="mt-4 grid gap-1">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-10 items-center font-sans text-[0.95rem] text-muted transition-colors hover:text-heading">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-sans text-[0.95rem] font-bold text-heading">Listen</h2>
              <ul className="mt-4 grid gap-1">
                <li>
                  <a href={PODCAST.apple} className="inline-flex min-h-10 items-center font-sans text-[0.95rem] text-muted transition-colors hover:text-heading">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href={PODCAST.spotify} className="inline-flex min-h-10 items-center font-sans text-[0.95rem] text-muted transition-colors hover:text-heading">
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <Wordmark />
          <p className="max-w-[70ch] font-sans text-[0.9rem] leading-relaxed text-muted">
            The Postpartum OT shares educational information. It isn&apos;t medical or professional advice. Talk with your own provider about your care. In crisis, call or text{" "}
            <a href="tel:988" className="font-bold text-heading underline underline-offset-4">988</a>; in an emergency, call{" "}
            <a href="tel:911" className="font-bold text-heading underline underline-offset-4">911</a>.
            <span className="mt-3 block">&copy; {year} Postpartum OT LLC</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
