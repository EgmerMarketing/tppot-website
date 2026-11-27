import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "@/components/site/Logo";
import ThemeToggle from "@/components/site/ThemeToggle";
import MobileMenu from "@/components/site/MobileMenu";
import NavLinks from "@/components/site/NavLinks";
import { helpHref } from "@/lib/nav";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex h-16 max-w-[84rem] items-center justify-between gap-4 px-4 sm:h-[68px] sm:px-6 lg:px-10 xl:h-20">
        <Logo className="[--logo-h:32px] sm:[--logo-h:36px] xl:[--logo-h:40px]" />

        <div className="flex items-center">
          <nav aria-label="Main" className="hidden xl:block">
            <NavLinks />
          </nav>
          <span aria-hidden="true" className="mx-5 hidden h-6 w-px bg-line xl:block" />
          <Link
            href={helpHref}
            aria-label="Need help now?"
            className="nav-link inline-flex min-h-11 items-center gap-2 px-1 font-sans text-[0.9375rem] font-bold text-heading"
          >
            <Phone aria-hidden="true" strokeWidth={1.75} className="size-4" />
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
