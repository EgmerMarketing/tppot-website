"use client";

import { motion, useReducedMotion } from "motion/react";

/*
  Word-by-word blur reveal for the H1 (the Magic UI text-animate idea, rebuilt
  so the spaces stay real text nodes between words: no stray indent when a
  line wraps, and screen readers hear normal spacing).
*/
const lines: { text: string; className?: string }[] = [
  { text: "Postpartum Support for" },
  { text: "New Moms and Dads", className: "italic text-accent pb-1" },
  { text: "from an Occupational Therapist" },
];

export default function HeroHeadline() {
  const reduce = useReducedMotion();
  let index = 0;
  return (
    <h1
      id="hero-title"
      className="text-[2.2rem] leading-[1.1] sm:text-[3.25rem] lg:text-[3.6rem] xl:text-[4rem]"
    >
      {lines.map((line, li) => (
        <span key={line.text} className={`block ${line.className ?? ""}`}>
          {line.text.split(" ").map((word, wi, words) => {
            const delay = 0.08 * index++;
            return (
              <span key={`${li}-${wi}`}>
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
                {wi < words.length - 1 ? " " : null}
              </span>
            );
          })}
          {li < lines.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}
