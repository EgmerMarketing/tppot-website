"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

function clock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Plays one episode in place. Audio loads only after the first press. */
export default function EpisodePlayer({
  src,
  title,
  size = "md",
  tone = "canvas",
  className,
}: {
  src: string;
  title: string;
  size?: "md" | "lg";
  tone?: "canvas" | "navy";
  className?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    // Only one episode plays at a time across the page.
    document.querySelectorAll("audio").forEach((other) => {
      if (other !== audio) other.pause();
    });
    if (audio.paused) void audio.play();
    else audio.pause();
  }

  const progress = duration ? time / duration : 0;
  const big = size === "lg";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <button
        type="button"
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} episode: ${title}`}
        className={cn(
          "relative grid shrink-0 place-items-center rounded-full transition-transform duration-300 ease-(--ease-out-soft) hover:scale-[1.04] active:scale-[0.96]",
          tone === "navy" ? "bg-white text-navy" : "bg-btn text-btn-fg",
          big ? "size-[60px]" : "size-[52px]",
        )}
      >
        <svg aria-hidden="true" viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="22.5"
            fill="none"
            stroke={tone === "navy" ? "#8fd0ce" : "currentColor"}
            strokeOpacity={0.9}
            strokeWidth={1.5}
            strokeDasharray={141.4}
            strokeDashoffset={141.4 * (1 - progress)}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-300"
          />
        </svg>
        {playing ? (
          <Pause aria-hidden="true" strokeWidth={1.75} className="size-5" />
        ) : (
          <Play aria-hidden="true" strokeWidth={1.75} className="size-5 translate-x-[1px]" />
        )}
      </button>
      <p className={cn("font-sans text-[0.875rem] tabular-nums", tone === "navy" ? "text-on-navy-muted" : "text-muted")} aria-live="off">
        {playing || time > 0 ? (
          <>
            {clock(time)} <span aria-hidden="true">/</span> {clock(duration)}
          </>
        ) : (
          "Play here"
        )}
      </p>
      <audio ref={audioRef} src={src} preload="none" />
    </div>
  );
}
