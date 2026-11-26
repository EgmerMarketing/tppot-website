"use client";

import { useState } from "react";
import Image from "next/image";

export default function YoutubeFacade({
  videoId,
  title,
  thumbnailUrl,
}: {
  videoId: string;
  title: string;
  thumbnailUrl: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-[#0A3660]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="relative block aspect-video w-full overflow-hidden rounded-xl bg-[#0A3660] text-left"
    >
      <Image
        src={thumbnailUrl}
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, 760px"
        className="object-cover"
      />
      <span className="sr-only">Play video: {title}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-[#0A3660]/20"
      >
        <span className="inline-flex min-h-11 items-center rounded-full bg-white px-5 font-sans text-sm font-bold text-[#0A3660]">
          Play
        </span>
      </span>
    </button>
  );
}
