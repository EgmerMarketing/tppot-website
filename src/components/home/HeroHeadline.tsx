"use client";

import { motion, useReducedMotion } from "motion/react";

/*
  Word-by-word blur reveal for the H1. Spaces stay real text nodes between
  words: no stray indent when a line wraps, and screen readers hear normal
  spacing. Lines 1 and 3 are Lato Bold; the audience line is Lora Italic.
*/
const lines: { text: string; className?: string }[] = [
  { text: "Postpartum Support for" },
  { text: "New Moms and Dads", className: "t-h1-audience" },
  { text: "from an Occupational Therapist" },
];

export default function HeroHeadline() {
  const reduce = useReducedMotion();
  let index = 0;
  return (
    <h1 id="hero-title" className="t-h1">
      {lines.map((line, li) => (
        <span key={line.text} className={`block ${line.className ?? ""}`}>
          {line.text.split(" ").map((word, wi, words) => {
            const delay = 0.04 * index++;
            return (
              <span key={`${li}-${wi}`}>
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
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
