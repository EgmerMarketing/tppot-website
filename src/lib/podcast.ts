/** Episodes already linked from this site. Not a claim that the catalog ends here. */
const FFT = "https://functionalfourthtrimester.com";

export const APPLE_PODCAST_URL =
  "https://podcasts.apple.com/us/podcast/functional-fourth-trimester/id1881077069";
export const SPOTIFY_PODCAST_URL = "https://open.spotify.com/show/0yuF6uerJGVWdhgysa7Ug3";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@thepostpartumot";
export const FFT_SITE_URL = "https://www.functionalfourthtrimester.com";
export const FFT_YOUTUBE_URL = "https://www.youtube.com/@FunctionalFourthTrimester";

export type Episode = {
  number: number;
  title: string;
  date: string;
  duration: string;
  notesUrl: string;
  topics: Array<"sleep" | "feeding" | "recovery" | "daily" | "mood" | "development" | "family">;
};

export const episodes: Episode[] = [
  {
    number: 7,
    title: "Tummy Time and Milestones: What to Expect in the Early Months",
    date: "2026-03-19",
    duration: "27 min",
    notesUrl: `${FFT}/episodes/tummy-time-milestones-early-months`,
    topics: ["development", "daily"],
  },
  {
    number: 6,
    title: "Beyond Outnumbered: Practical Survival Strategies for Parents of Multiples",
    date: "2026-03-15",
    duration: "29 min",
    notesUrl: `${FFT}/episodes/beyond-outnumbered-survival-strategies-parents-multiples`,
    topics: ["family", "daily"],
  },
  {
    number: 5,
    title: "The Power of Touch: How Infant Massage Supports Regulation and Bonding",
    date: "2026-03-08",
    duration: "24 min",
    notesUrl: `${FFT}/episodes/power-of-touch-infant-massage-regulation-bonding`,
    topics: ["development"],
  },
  {
    number: 4,
    title: "From Chaos to Calm: Simple Sleep Strategies for New Parents",
    date: "2026-02-28",
    duration: "19 min",
    notesUrl: `${FFT}/episodes/from-chaos-to-calm-sleep-strategies-new-parents`,
    topics: ["sleep"],
  },
  {
    number: 3,
    title: "Wired and Tired: How the Nervous System Shapes Infant Sleep",
    date: "2026-02-28",
    duration: "18 min",
    notesUrl: `${FFT}/episodes/wired-and-tired-nervous-system-infant-sleep`,
    topics: ["sleep"],
  },
  {
    number: 2,
    title: "More Than Baby Blues: Understanding Postpartum Mood and Anxiety Disorders",
    date: "2026-02-28",
    duration: "28 min",
    notesUrl: `${FFT}/episodes/more-than-baby-blues-postpartum-mood-anxiety`,
    topics: ["mood"],
  },
  {
    number: 1,
    title: "Welcome to Functional Fourth Trimester: Rethinking Daily Life After Birth",
    date: "2026-02-28",
    duration: "20 min",
    notesUrl: `${FFT}/episodes/welcome-to-functional-fourth-trimester`,
    topics: ["daily", "recovery"],
  },
];

export function episodesFor(topic: Episode["topics"][number], limit = 3): Episode[] {
  return episodes.filter((episode) => episode.topics.includes(topic)).slice(0, limit);
}

export function formatEpisodeDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
