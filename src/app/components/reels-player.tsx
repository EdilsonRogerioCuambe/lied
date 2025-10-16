"use client";

import { useRef } from "react";

interface ReelsPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

export function ReelsPlayer({ src, poster, title }: ReelsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-stone-900 via-black to-stone-950 border border-stone-800 shadow-2xl">
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-red-500/10" />

      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Top badge */}
      {title && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/90 text-white shadow">
          <span className="truncate max-w-[70%]">{title}</span>
        </div>
      )}

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </div>
  );
}
