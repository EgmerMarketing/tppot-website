"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer: IntersectionObserver | null = null;
    const paused = () => document.documentElement.classList.contains("no-motion");
    const start = () => {
      if (paused()) {
        node.classList.add("reveal-in");
        observer?.disconnect();
        return;
      }
      if (node.classList.contains("reveal-in")) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            node.classList.add("reveal-in");
            observer?.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      observer.observe(node);
    };
    start();
    window.addEventListener("tppot-motion", start);
    return () => {
      observer?.disconnect();
      window.removeEventListener("tppot-motion", start);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
