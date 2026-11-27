import { PODCAST } from "@/lib/schema";

export type Episode = {
  id: string;
  title: string;
  /** Episode number from the feed. The newest episode can ship without one. */
  number: number | null;
  date: string;
  /** Duration in whole minutes. */
  minutes: number | null;
  summary: string;
  audio: string | null;
};

function tag(item: string, name: string): string {
  const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`);
  const match = item.match(re);
  if (!match) return "";
  return match[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function decode(text: string): string {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function firstParagraph(description: string): string {
  const plain = description.replace(/<\/p>/g, "\n\n").replace(/<br\s*\/?>/g, "\n");
  const para = plain.split(/\n\s*\n/).find((p) => decode(p).length > 0) ?? "";
  return decode(para);
}

function toMinutes(duration: string): number | null {
  if (!duration) return null;
  const parts = duration.split(":").map(Number);
  if (parts.some(Number.isNaN)) return null;
  const seconds = parts.reduce((total, part) => total * 60 + part, 0);
  return Math.max(1, Math.round(seconds / 60));
}

/**
 * Reads the live Functional Fourth Trimester feed. Cached for an hour so a new
 * episode shows up on the site without a redeploy.
 */
export async function getEpisodes(): Promise<Episode[]> {
  try {
    const res = await fetch(PODCAST.feed, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.split("<item>").slice(1).map((chunk) => chunk.split("</item>")[0]);
    const episodes = items.map((item): Episode => {
      const episode = tag(item, "itunes:episode");
      const audio = item.match(/<enclosure[^>]*url="([^"]+)"/);
      return {
        id: tag(item, "guid"),
        title: decode(tag(item, "title")),
        number: episode ? Number(episode) : null,
        date: new Date(tag(item, "pubDate")).toISOString(),
        minutes: toMinutes(tag(item, "itunes:duration")),
        summary: firstParagraph(tag(item, "description")),
        audio: audio ? audio[1] : null,
      };
    });
    return episodes.sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [];
  }
}

export function formatEpisodeDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Denver",
  });
}
