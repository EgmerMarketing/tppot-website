"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/nav";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-1">
      {mainNav.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className="relative inline-flex min-h-11 items-center rounded-full px-3 font-sans text-[0.92rem] text-ink transition-colors duration-300 hover:bg-tint hover:text-heading aria-[current=page]:font-bold aria-[current=page]:text-heading"
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
