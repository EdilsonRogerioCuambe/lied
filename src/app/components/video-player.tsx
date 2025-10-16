"use client";

import { useRef } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

export function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900 via-black to-stone-950 border border-stone-800 shadow-2xl">
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-500/10" />

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

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Title badge */}
      {title && (
        <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/90 text-white shadow">
          <span className="truncate max-w-[60vw]">{title}</span>
        </div>
      )}
    </div>
  );
}
