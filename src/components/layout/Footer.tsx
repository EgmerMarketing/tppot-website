import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Podcast", href: "/podcast" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  { label: "Facebook Community", href: "https://www.facebook.com/groups/1967522367025806" },
  { label: "Instagram", href: "https://www.instagram.com/thepostpartumot" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thepostpartumot" },
];

export default function Footer() {
  return (
    <footer className="bg-[#061D37]" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="grid gap-12 md:grid-cols-10">
          {/* Logo + Mission */}
          <div className="md:col-span-4">
            <Link href="/" aria-label="The Postpartum OT home">
              <Image
                src="/images/logo-primary.png"
                alt="The Postpartum OT"
                width={160}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 font-serif text-[15px] leading-relaxed text-[#FAF7F2]/70">
              Empowering occupational therapists to build confident, sustainable
              postpartum practices through mentorship, community, and
              evidence based resources.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#FAF7F2]">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-[15px] text-[#FAF7F2]/70 transition hover:text-[#FAF7F2]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#FAF7F2]">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@thepostpartumot.com"
                  className="font-serif text-[15px] text-[#FAF7F2]/70 transition hover:text-[#FAF7F2]"
                >
                  hello@thepostpartumot.com
                </a>
              </li>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-[15px] text-[#FAF7F2]/70 transition hover:text-[#FAF7F2]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF7F2]/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-12 lg:px-16">
          <p className="font-sans text-[13px] text-[#FAF7F2]/50">
            &copy; 2026 Postpartum OT LLC. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link
              href="/privacy"
              className="font-sans text-[13px] text-[#FAF7F2]/50 transition hover:text-[#FAF7F2]/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-[13px] text-[#FAF7F2]/50 transition hover:text-[#FAF7F2]/80"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="font-sans text-[13px] text-[#FAF7F2]/50 transition hover:text-[#FAF7F2]/80"
            >
              Accessibility
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
