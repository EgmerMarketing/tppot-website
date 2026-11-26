import { HOME_H1 } from "@/lib/site";

export { HOME_H1 };

/**
 * Homepage subhead. The H1 in site.ts does not change between options.
 * Set ACTIVE_HERO_OPTION to "B" or "C" to swap the paragraph under the H1.
 */
export const HERO_OPTIONS = {
  A: {
    name: "The nobody-told-you moment",
    text: "The fourth trimester can turn every part of your day upside down, from showers to sleep to who you are. Melissa O'Neal, OTR/L, helps you find routines that fit the life you have right now.",
  },
  B: {
    name: "You're not failing",
    text: "If you're wondering how anyone gets anything done with a newborn, you're not failing. You're in the fourth trimester. Melissa O'Neal, OTR/L, shares real-life help with sleep, feeding, recovery and daily life, for moms, dads and everyone helping at home.",
  },
  C: {
    name: "More than a checkup",
    text: "Your care shouldn't stop at the six-week checkup. Get practical help for the months after birth from Melissa O'Neal, OTR/L, an occupational therapist who looks at the everyday tasks that feel hardest right now.",
  },
} as const;

export const ACTIVE_HERO_OPTION: keyof typeof HERO_OPTIONS = "A";
