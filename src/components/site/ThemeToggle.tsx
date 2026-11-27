"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  // Re-read whenever the theme attribute changes.
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  // Follow the system setting until the visitor picks a theme themselves.
  const media = matchMedia("(prefers-color-scheme: dark)");
  const onSystem = (event: MediaQueryListEvent) => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {}
    if (!saved) document.documentElement.setAttribute("data-theme", event.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystem);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onSystem);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) {
      apply();
      return;
    }
    // Circular reveal from the toggle's center.
    const r = event.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 520, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative grid size-11 place-items-center text-heading"
    >
      <Sun
        aria-hidden="true"
        strokeWidth={1.5}
        className="absolute size-5 transition-all duration-500 group-hover:rotate-[15deg] ease-(--ease-out-soft) [[data-theme=dark]_&]:rotate-90 [[data-theme=dark]_&]:scale-50 [[data-theme=dark]_&]:opacity-0"
      />
      <Moon
        aria-hidden="true"
        strokeWidth={1.5}
        className="absolute size-5 -rotate-90 scale-50 opacity-0 transition-all duration-500 ease-(--ease-out-soft) [[data-theme=dark]_&]:rotate-0 [[data-theme=dark]_&]:scale-100 [[data-theme=dark]_&]:opacity-100"
      />
    </button>
  );
}
