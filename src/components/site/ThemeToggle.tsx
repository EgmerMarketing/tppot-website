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

  function toggle() {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative grid size-11 place-items-center rounded-full text-heading transition-colors duration-300 ease-(--ease-out-soft) hover:bg-tint"
    >
      <Sun
        aria-hidden="true"
        strokeWidth={1.5}
        className="absolute size-[1.15rem] transition-all duration-500 ease-(--ease-out-soft) [[data-theme=dark]_&]:rotate-90 [[data-theme=dark]_&]:scale-50 [[data-theme=dark]_&]:opacity-0"
      />
      <Moon
        aria-hidden="true"
        strokeWidth={1.5}
        className="absolute size-[1.05rem] -rotate-90 scale-50 opacity-0 transition-all duration-500 ease-(--ease-out-soft) [[data-theme=dark]_&]:rotate-0 [[data-theme=dark]_&]:scale-100 [[data-theme=dark]_&]:opacity-100"
      />
    </button>
  );
}
