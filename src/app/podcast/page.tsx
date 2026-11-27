import type { Metadata } from "next";
import Image from "next/image";
import { Nunito, Playfair_Display } from "next/font/google";
import Byline from "@/components/site/Byline";
import EmailSignup from "@/components/site/EmailSignup";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema, podcastSeriesSchema } from "@/lib/schema";
import {
  APPLE_PODCAST_URL,
  FFT_SITE_URL,
  FFT_YOUTUBE_URL,
  SPOTIFY_PODCAST_URL,
} from "@/lib/podcast";
import { DISCLAIMER_SHORT, SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fft-display",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fft-body",
});

const SHOW_NAME = "Functional Fourth Trimester";
const ONE_LINE =
  "Functional Fourth Trimester is the podcast hosted by occupational therapist Melissa O'Neal, OTR/L, helping new parents figure out how daily life actually works after a baby arrives.";

export const metadata: Metadata = {
  title: SHOW_NAME,
  description: ONE_LINE,
};

const recent = [
  {
    number: 25,
    title: "You Have Choices: Feeding Goals That Fit Real Family Life",
    guest: "Kelly McLeod",
    duration: "30 min",
    href: `${FFT_SITE_URL}/episodes/you-have-choices-feeding-goals-that-fit-real-family-life`,
    summary:
      "Occupational therapist and lactation consultant Kelly McLeod joins host Melissa O'Neal for a full-circle conversation about what helps families with infant feeding, at home and after the NICU.",
  },
  {
    number: 24,
    title: "Paula's Story: Preeclampsia, HELLP Syndrome, and Two Christmas C-Sections",
    guest: "Paula",
    duration: "36 min",
    href: `${FFT_SITE_URL}/episodes/paulas-story-preeclampsia-hellp-and-two-christmas-c-sections`,
    summary:
      "Paula describes preeclampsia and HELLP syndrome, two Christmas C-sections, and what helped afterward, including her husband's support and counseling.",
  },
  {
    number: 23,
    title: "Coming Home Empty-Handed: Two NICU Stays in One Year",
    guest: "Audrianna",
    duration: "28 min",
    href: `${FFT_SITE_URL}/episodes/coming-home-empty-handed-two-nicu-stays`,
    summary:
      "Audrianna talks about two different NICU stays in one year, coming home without the baby, and the support that helped the second time.",
  },
];

const catalog: { number: number; title: string; href: string }[] = [
  { number: 25, title: recent[0].title, href: recent[0].href },
  { number: 24, title: recent[1].title, href: recent[1].href },
  { number: 23, title: recent[2].title, href: recent[2].href },
  { number: 22, title: "The Pediatric Pelvic Floor: What Every Parent Should Know About Peeing and Pooping", href: `${FFT_SITE_URL}/episodes/pediatric-pelvic-floor-what-parents-should-know` },
  { number: 21, title: "You Can't Pour From an Empty Cup: The Power of Postpartum Self-Care", href: `${FFT_SITE_URL}/episodes/postpartum-self-care-cant-pour-from-empty-cup` },
  { number: 20, title: "The Return to Work Transition: Creating a Sustainable Pumping Plan", href: `${FFT_SITE_URL}/episodes/return-to-work-sustainable-pumping-plan` },
  { number: 19, title: "When Birth Doesn't Go As Planned: Grieving the Vision and Trusting Your Body", href: `${FFT_SITE_URL}/episodes/grieving-the-birth-you-planned-trusting-your-body` },
  { number: 18, title: "Navigating the NICU: A Nurse's Guide for Parents", href: `${FFT_SITE_URL}/episodes/navigating-the-nicu-nurses-guide-for-parents` },
  { number: 17, title: "The Postpartum Gap: Building Support and Connection for New Parents", href: `${FFT_SITE_URL}/episodes/postpartum-gap-building-support-connection-new-parents` },
  { number: 16, title: "The Best Toy Is You: Simple Ways to Support Infant Development", href: `${FFT_SITE_URL}/episodes/best-toy-is-you-simple-ways-support-infant-development` },
  { number: 15, title: "When Birth Doesn't Go as Planned: Navigating Trauma and Healing After the Unexpected", href: `${FFT_SITE_URL}/episodes/when-birth-doesnt-go-as-planned-navigating-trauma-healing` },
  { number: 14, title: "Exclusively Pumping: The Reality, the Challenges, and the Wins", href: `${FFT_SITE_URL}/episodes/exclusively-pumping-reality-challenges-wins` },
  { number: 13, title: "Postpartum and Beyond: The Hormonal Link to Longevity and Future Wellness", href: `${FFT_SITE_URL}/episodes/postpartum-hormonal-link-longevity-wellness` },
  { number: 12, title: "Movement Over Exercise: Small, Daily Shifts for Postpartum Mental Wellness", href: `${FFT_SITE_URL}/episodes/movement-over-exercise-postpartum-mental-wellness` },
  { number: 11, title: "C-Section Recovery: What to Expect Beyond the Hospital", href: `${FFT_SITE_URL}/episodes/c-section-recovery-what-to-expect-beyond-the-hospital` },
  { number: 10, title: "Pelvic Floor Recovery: Why 'Just Rest' Isn't Enough", href: `${FFT_SITE_URL}/episodes/pelvic-floor-recovery-why-just-rest-isnt-enough` },
  { number: 9, title: "Breastfeeding and Food Intolerances: How Mom's Diet Affects Baby", href: `${FFT_SITE_URL}/episodes/breastfeeding-food-intolerances-map-my-milk` },
  { number: 8, title: "Breastfeeding Challenges: Normalizing the Struggle", href: `${FFT_SITE_URL}/episodes/breastfeeding-challenges-support-amy-wise` },
  { number: 7, title: "Tummy Time and Milestones: What to Expect in the Early Months", href: `${FFT_SITE_URL}/episodes/tummy-time-milestones-early-months` },
  { number: 6, title: "Beyond Outnumbered: Practical Survival Strategies for Parents of Multiples", href: `${FFT_SITE_URL}/episodes/beyond-outnumbered-survival-strategies-parents-multiples` },
  { number: 5, title: "The Power of Touch: How Infant Massage Supports Regulation and Bonding", href: `${FFT_SITE_URL}/episodes/power-of-touch-infant-massage-regulation-bonding` },
  { number: 4, title: "From Chaos to Calm: Simple Sleep Strategies for New Parents", href: `${FFT_SITE_URL}/episodes/from-chaos-to-calm-sleep-strategies-new-parents` },
  { number: 3, title: "Wired and Tired: How the Nervous System Shapes Infant Sleep", href: `${FFT_SITE_URL}/episodes/wired-and-tired-nervous-system-infant-sleep` },
  { number: 2, title: "More Than Baby Blues: Understanding Postpartum Mood and Anxiety Disorders", href: `${FFT_SITE_URL}/episodes/more-than-baby-blues-postpartum-mood-anxiety` },
  { number: 1, title: "Welcome to Functional Fourth Trimester: Rethinking Daily Life After Birth", href: `${FFT_SITE_URL}/episodes/welcome-to-functional-fourth-trimester` },
];

const listen = [
  ["Apple Podcasts", APPLE_PODCAST_URL],
  ["Spotify", SPOTIFY_PODCAST_URL],
  ["YouTube", FFT_YOUTUBE_URL],
] as const;

export default function PodcastPage() {
  return (
    <article className={`${playfair.variable} ${nunito.variable} fft-page bg-[#A8B8A2]`}>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Podcast", url: `${SITE_URL}/podcast` }])} />
      <JsonLd data={podcastSeriesSchema()} />
      <header className="fft-banner relative overflow-hidden bg-[#18355D] text-white">
        <svg aria-hidden="true" className="pointer-events-none absolute -right-16 top-6 h-64 w-64 opacity-30" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="28" fill="none" stroke="#A8B8A2" strokeWidth="3" />
          <circle cx="100" cy="100" r="48" fill="none" stroke="#469695" strokeWidth="2" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#F5F0E8" strokeWidth="1.5" />
        </svg>
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 px-6 py-12 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:px-8 md:py-16">
          <Image
            src="/images/fft/fft-cover-1600.webp"
            alt="Functional Fourth Trimester cover. Navy field, cream FFT badge, sound-wave marks, and the line New episodes every Thursday."
            width={1600}
            height={1600}
            priority
            sizes="(max-width: 768px) 100vw, 320px"
            className="mx-auto aspect-square w-full max-w-[320px] rounded-[2rem]"
          />
          <div>
            <div className="inline-block max-w-full rounded-2xl bg-[#F5F0E8] px-4 py-3">
              <img
                src="/images/fft/fft-horizontal-no-descriptor.svg"
                alt=""
                className="h-12 w-auto max-w-full md:h-14"
              />
            </div>
            <h1 className="fft-display mt-5 max-w-[70ch] text-white">{SHOW_NAME}</h1>
            <p className="mt-4 text-lg font-normal leading-[1.6] text-white">{ONE_LINE}</p>
            <p className="fft-label mt-4 inline-flex min-h-11 items-center rounded-full bg-[#F5F0E8] px-4 text-[#18355D]">
              New episodes every Thursday
            </p>
            <p className="mt-4 text-lg font-normal leading-[1.6] text-white">{DISCLAIMER_SHORT}</p>
            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {listen.map(([label, href]) => (
                <li key={href}>
                  <a className="fft-label inline-flex min-h-11 items-center justify-center rounded-full bg-[#F5F0E8] px-5 text-[#18355D]" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lg leading-[1.6]">
              <a className="font-bold text-white underline" href={FFT_SITE_URL}>
                Visit the podcast site
              </a>
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[760px] px-6 py-12 md:px-8">
        <h2 className="fft-display text-[#18355D]">Recent episodes</h2>
        <p className="mt-3 text-lg leading-[1.6] text-[#2C3A47]">
          Three recent conversations from the podcast site. Each link opens the episode there.
        </p>
        <ul className="mt-6 space-y-4">
          {recent.map((episode) => (
            <li key={episode.number} className="rounded-[1.75rem] bg-[#F5F0E8] p-5 text-[#2C3A47]">
              <p className="fft-label text-[#3F6A83]">
                Episode {episode.number} · {episode.guest} · {episode.duration}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-[1.6] text-[#18355D]">{episode.title}</h3>
              <p className="mt-2 text-lg leading-[1.6]">{episode.summary}</p>
              <p className="mt-3">
                <a className="fft-label text-[#18355D] underline" href={episode.href}>
                  Listen on the podcast site
                </a>
              </p>
            </li>
          ))}
        </ul>

        <h2 className="fft-display mt-12 text-[#18355D]">All episodes on the podcast site</h2>
        <ol className="mt-4 space-y-3">
          {catalog.map((episode) => (
            <li key={episode.number} className="rounded-2xl bg-[#F5F0E8] px-4 py-3">
              <a className="text-lg font-bold leading-[1.6] text-[#18355D] underline" href={episode.href}>
                {episode.number}. {episode.title}
              </a>
            </li>
          ))}
        </ol>

        <h2 className="fft-display mt-12 text-[#18355D]">Meet Your Host</h2>
        <div className="mt-4 max-w-[70ch] space-y-4 text-lg font-normal leading-[1.6] text-[#2C3A47]">
          <p>
            Melissa O&apos;Neal is an occupational therapist and the founder of The Postpartum OT. For more than 15 years, she has supported families in the weeks and months after birth, work that began with her own journey as a new mom.
          </p>
          <p>
            On <strong className="font-bold">The Functional Fourth Trimester</strong>, Melissa talks with experts, clinicians, and parents about what the postpartum season really looks like and what actually helps. Each episode focuses on practical ways to build routines around sleep, feeding, mental health, and connection, so moms and the professionals who support them leave with something they can use right away.
          </p>
          <p>
            Melissa is also the Director of the Women&apos;s Health and Postpartum Hub on Ability Village and is building the Functional Fourth Trimester Circle, a community where new moms get real support. As a Certified Disability Rights and Accessibility Consultant, she makes sure every conversation keeps all families in mind.
          </p>
        </div>
        <Byline />
        <div className="mt-10 rounded-[1.75rem] bg-[#F5F0E8] p-6 text-[#2C3A47]">
          <EmailSignup idPrefix="podcast" heading="Get new episodes in your inbox" />
        </div>
      </div>
    </article>
  );
}
