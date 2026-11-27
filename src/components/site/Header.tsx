import Link from "next/link";
import { LifeBuoy } from "lucide-react";
import Wordmark from "@/components/site/Wordmark";
import ThemeToggle from "@/components/site/ThemeToggle";
import MobileMenu from "@/components/site/MobileMenu";
import NavLinks from "@/components/site/NavLinks";
import { helpHref } from "@/lib/nav";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex h-[4.5rem] max-w-[84rem] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:px-10">
        <Wordmark />

        <nav aria-label="Main" className="hidden xl:block">
          <NavLinks />
        </nav>

        <div className="flex items-center sm:gap-1">
          <Link
            href={helpHref}
            aria-label="Need help now?"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-2.5 sm:mr-1 sm:gap-2 sm:px-3 font-sans text-[0.9rem] font-bold text-heading underline-offset-4 transition-colors duration-300 hover:bg-tint hover:underline"
          >
            <LifeBuoy aria-hidden="true" strokeWidth={1.5} className="size-[1.1rem] text-accent" />
            <span className="sm:hidden">Help now</span>
            <span className="hidden sm:inline">Need help now?</span>
          </Link>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
