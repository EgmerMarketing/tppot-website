"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, footerNav } from "@/lib/nav";

/**
 * Small-screen menu built on the native dialog element, which brings focus
 * trapping, Escape to close and inert page content for free.
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

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="grid size-11 place-items-center rounded-full text-heading transition-colors duration-300 hover:bg-tint"
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
        onClose={() => setOpen(false)}
        className="mobile-menu m-0 h-dvh max-h-none w-full max-w-none bg-bg p-0 text-ink"
      >
        <div className="mx-auto flex min-h-full max-w-xl flex-col px-6 pb-10 pt-5">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="relative grid size-11 place-items-center rounded-full text-heading transition-colors hover:bg-tint"
            >
              <span className="sr-only">Close menu</span>
              <span aria-hidden="true" className="absolute h-[1.5px] w-5 rotate-45 rounded-full bg-current" />
              <span aria-hidden="true" className="absolute h-[1.5px] w-5 -rotate-45 rounded-full bg-current" />
            </button>
          </div>

          <nav aria-label="Main" className="mt-6">
            <ul className="flex flex-col">
              {mainNav.map((item, i) => (
                <li key={item.href} className="menu-item" style={{ "--i": i } as React.CSSProperties}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block py-3 font-serif text-[1.85rem] leading-tight text-heading"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-auto grid grid-cols-2 gap-x-4 gap-y-1 border-t border-line pt-6">
            {footerNav.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center font-sans text-[0.95rem] text-muted hover:text-heading">
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
