import {
  APPLE_PODCAST_URL,
  type Episode,
  formatEpisodeDate,
} from "@/lib/podcast";
import SoundWave from "@/components/site/SoundWave";

export default function EpisodeList({
  episodes,
  heading = "Related Functional Fourth Trimester episodes",
  wave = false,
  onDark = false,
}: {
  episodes: Episode[];
  heading?: string;
  wave?: boolean;
  onDark?: boolean;
}) {
  if (episodes.length === 0) return null;

  return (
    <section className={wave ? "" : "mt-10"}>
      <div className="podcast-heading">
        <h2 className={`font-sans text-2xl font-bold ${onDark ? "text-white" : "text-[#0A3660]"}`}>{heading}</h2>
        {wave ? <SoundWave className="sound-wave-slot mb-3 h-16 w-auto max-w-full" /> : null}
      </div>
      <ul className="mt-4 space-y-3">
        {episodes.map((episode) => (
          <li key={episode.number} className="podcast-card rounded-2xl border border-[#0A3660]/15 bg-white p-4">
            <p className="font-sans text-base font-bold text-[#2f6b6a]">
              Episode {episode.number} · {formatEpisodeDate(episode.date)} · {episode.duration}
            </p>
            <p className="mt-1 font-sans text-lg font-bold text-[#0A3660]">{episode.title}</p>
            <p className="mt-2 flex flex-wrap gap-4 font-sans text-base font-bold">
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
