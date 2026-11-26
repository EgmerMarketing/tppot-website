import {
  APPLE_PODCAST_URL,
  type Episode,
  formatEpisodeDate,
} from "@/lib/podcast";

export default function EpisodeList({
  episodes,
  heading = "Related Functional Fourth Trimester episodes",
}: {
  episodes: Episode[];
  heading?: string;
}) {
  if (episodes.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="font-sans text-2xl font-bold text-[#0A3660]">{heading}</h2>
      <ul className="mt-4 space-y-3">
        {episodes.map((episode) => (
          <li key={episode.number} className="rounded-2xl border border-[#0A3660]/15 bg-white p-4">
            <p className="font-sans text-sm font-bold text-[#2f6b6a]">
              Episode {episode.number} · {formatEpisodeDate(episode.date)} · {episode.duration}
            </p>
            <p className="mt-1 font-sans text-lg font-bold text-[#0A3660]">{episode.title}</p>
            <p className="mt-2 flex flex-wrap gap-4 font-sans text-sm font-bold">
              <a className="text-[#0A3660] underline" href={APPLE_PODCAST_URL}>
                Listen on Apple Podcasts
              </a>
              <a className="text-[#0A3660] underline" href={episode.notesUrl}>
                Show notes
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
