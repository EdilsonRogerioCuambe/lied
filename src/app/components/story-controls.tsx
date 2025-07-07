"use client"

import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Heart, Share, Eye } from "lucide-react"
import type { Story } from "@/types/story"

interface StoryControlsProps {
  playing: boolean
  muted: boolean
  liked: boolean
  story: Story
  canGoPrev: boolean
  canGoNext: boolean
  visible: boolean
  onPlayPause: () => void
  onMute: () => void
  onLike: () => void
  onPrev: () => void
  onNext: () => void
}

export function StoryControls({
  playing,
  muted,
  liked,
  story,
  canGoPrev,
  canGoNext,
  visible,
  onPlayPause,
  onMute,
  onLike,
  onPrev,
  onNext,
}: StoryControlsProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: story.title,
          text: story.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 p-4 z-20 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {/* Stats */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onLike}
            className={`flex items-center gap-2 rounded-full px-3 py-2 bg-black/60 backdrop-blur-sm hover:bg-red-600/80 transition-all duration-300 ${liked ? "text-red-400 bg-red-600/20" : "text-white"}`}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
            <span className="text-sm font-medium">{story.likes + (liked ? 1 : 0)}</span>
          </button>

          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Eye className="h-4 w-4" />
            <span>{story.views.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="rounded-full p-2 bg-black/60 backdrop-blur-sm hover:bg-red-600/80 transition-colors text-white"
            aria-label="Compartilhar story"
          >
            <Share className="h-5 w-5" />
          </button>

          <button
            onClick={onMute}
            className="rounded-full p-2 bg-black/60 backdrop-blur-sm hover:bg-red-600/80 transition-colors text-white"
            aria-label={muted ? "Ativar som" : "Silenciar"}
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className="bg-black/60 backdrop-blur-sm hover:bg-red-600/80 text-white rounded-full p-3 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
          aria-label="Story anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={onPlayPause}
          className="bg-black/60 backdrop-blur-sm hover:bg-red-600/80 text-white rounded-full p-4 transition-all duration-300 hover:scale-110"
          aria-label={playing ? "Pausar" : "Reproduzir"}
        >
          {playing ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
        </button>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="bg-black/60 backdrop-blur-sm hover:bg-red-600/80 text-white rounded-full p-3 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
          aria-label="Próximo story"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
