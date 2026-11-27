/**
 * Family-first site facts. Unconfirmed offers and credentials stay out.
 * Melissa approved the Ability Village director title and the official emblem.
 */
export const ABILITY_VILLAGE_URL = "https://abilityvillage.com/";

export const SITE_URL = "https://thepostpartumot.com";

/** Private parent group. Membership questions are part of joining. Not the professional group. */
export const CIRCLE_FACEBOOK_URL =
  "https://www.facebook.com/share/g/1FN3qz8DcJ/?mibextid=wwXIfr";

export const UPDATED = "2026-11-26";

export const DISCLAIMER_SHORT =
  "Educational information, not medical or professional advice.";

export const DISCLAIMER_CRISIS =
  "Educational information, not medical or professional advice. In crisis? Call or text 988.";

export const DISCLAIMER_FULL =
  "The Postpartum OT shares educational information. It isn't medical or professional advice. Talk with your own provider about your care. In crisis, call or text 988; in an emergency, call 911.";

/** Swap the homepage subhead in src/lib/hero.ts. The H1 stays fixed. */
export const HOME_H1 =
  "Postpartum Support for New Moms and Dads from an Occupational Therapist";

export const mainNav = [
  { label: "For Moms", href: "/for-moms" },
  { label: "For Dads", href: "/for-dads" },
  { label: "Start Here", href: "/start-here" },
  { label: "Topics", href: "/topics" },
  { label: "Podcast", href: "/podcast" },
  { label: "Community", href: "/community" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = [
  { label: "What is postpartum OT?", href: "/what-is-postpartum-occupational-therapy" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy", href: "/legal/privacy-policy" },
  { label: "Terms", href: "/legal/terms-and-conditions" },
] as const;

export const topicLinks = [
  {
    href: "/topics/postpartum-sleep",
    title: "Postpartum sleep deprivation",
    text: "Trade night shifts. Safe sleep stays with your pediatrician.",
  },
  {
    href: "/topics/feeding-routines",
    title: "Feeding routines and pumping",
    text: "Who does which part. Latch questions go to a lactation consultant.",
  },
  {
    href: "/topics/newborn-daily-routine",
    title: "Newborn daily routine",
    text: "A short list for the day, including going back to work.",
  },
  {
    href: "/topics/postpartum-recovery",
    title: "Postpartum recovery",
    text: "No single clock. C-section rules stay with your clinician.",
  },
  {
    href: "/topics/postpartum-mental-load-identity",
    title: "Postpartum mental load and identity",
    text: "The invisible list. Urgent mood help is on Need Help Now.",
  },
  {
    href: "/topics/dads-and-partners",
    title: "Help for dads and partners",
    text: "Take a real shift. Grandparents can ask which one job helps.",
  },
] as const;
