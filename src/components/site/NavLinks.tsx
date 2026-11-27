"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/nav";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-7">
      {mainNav.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className="nav-link inline-flex min-h-11 items-center font-sans text-[0.9375rem] tracking-[0.005em] text-ink transition-colors duration-200 hover:text-heading aria-[current=page]:font-bold aria-[current=page]:text-heading"
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
