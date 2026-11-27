"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import Logo from "@/components/site/Logo";
import { footerNav, helpHref, mainNav } from "@/lib/nav";

/**
 * Small-screen menu on the native dialog element (focus trap, Escape to close
 * and inert page content for free). Sits on brand navy in both themes.
 */
export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="grid size-11 place-items-center text-heading"
      >
        <span className="sr-only">Open menu</span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
          <span className="h-[1.5px] w-full rounded-full bg-current" />
          <span className="h-[1.5px] w-3/4 self-end rounded-full bg-current" />
        </span>
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Menu"
        onClose={close}
        className="mobile-menu band-navy m-0 h-dvh max-h-none w-full max-w-none p-0 text-on-navy"
      >
        <div className="mx-auto flex min-h-full max-w-xl flex-col px-6 pb-10 pt-4">
          <div className="flex items-center justify-between">
            <Logo variant="on-dark" className="[--logo-h:36px]" />
            <button
              type="button"
              onClick={close}
              className="relative grid size-11 place-items-center text-on-navy"
            >
              <span className="sr-only">Close menu</span>
              <span aria-hidden="true" className="absolute h-[1.5px] w-5 rotate-45 rounded-full bg-current" />
              <span aria-hidden="true" className="absolute h-[1.5px] w-5 -rotate-45 rounded-full bg-current" />
            </button>
          </div>

          <nav aria-label="Main" className="mt-8">
            <ul className="flex flex-col">
              {mainNav.map((item, i) => (
                <li
                  key={item.href}
                  className="menu-item border-b border-white/12 first:border-t"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block py-3.5 font-sans text-[1.75rem] font-bold leading-[1.2] text-on-navy aria-[current=page]:underline aria-[current=page]:decoration-on-navy-accent aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href={helpHref} onClick={close} className="btn btn-on-navy mt-8 w-full">
            <Phone aria-hidden="true" strokeWidth={1.75} className="size-[18px]" />
            Need help now?
          </Link>

          <ul className="mt-auto grid grid-cols-2 gap-x-4 gap-y-1 pt-10">
            {footerNav.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="inline-flex min-h-11 items-center font-sans text-[0.9375rem] text-on-navy-muted hover:text-on-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </div>
  );
}
