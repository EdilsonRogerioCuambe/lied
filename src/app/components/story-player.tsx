"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import type { Story } from "@/types/story"
import { StoryControls } from "./story-controls"
import { StoryOverlay } from "./story-overlay"
import { StoryProgressBar } from "./story-progress-bar"

interface StoryPlayerProps {
  stories: Story[]
  activeStory: number
  onStoryChange: (index: number) => void
}

export function StoryPlayer({ stories, activeStory, onStoryChange }: StoryPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [liked, setLiked] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>(null)

  const currentStory = stories[activeStory]

  // Auto-hide controls
  useEffect(() => {
    if (showControls) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
      controlsTimeoutRef.current = setTimeout(() => {
        if (playing) setShowControls(false)
      }, 3000)
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [showControls, playing])

  // Reset when story changes
  useEffect(() => {
    setPlaying(false)
    setProgress(0)
    setShowControls(true)
  }, [activeStory])

  const handleStoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const clickZone = bounds.width / 3

    if (x < clickZone) {
      prevStory()
    } else if (x > bounds.width - clickZone) {
      nextStory()
    } else {
      handlePlayPause()
    }
    setShowControls(true)
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setPlaying(!playing)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const handleLike = () => {
    const newLiked = new Set(liked)
    if (newLiked.has(currentStory.id)) {
      newLiked.delete(currentStory.id)
    } else {
      newLiked.add(currentStory.id)
    }
    setLiked(newLiked)
  }

  const nextStory = () => {
    if (activeStory < stories.length - 1) {
      setLoading(true)
      setTimeout(() => {
        onStoryChange(activeStory + 1)
        setLoading(false)
      }, 300)
    }
  }

  const prevStory = () => {
    if (activeStory > 0) {
      setLoading(true)
      setTimeout(() => {
        onStoryChange(activeStory - 1)
        setLoading(false)
      }, 300)
    }
  }

  const handleVideoEnd = () => {
    setPlaying(false)
    setProgress(0)
    if (activeStory < stories.length - 1) {
      setTimeout(() => nextStory(), 1000)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Mobile-first story container */}
        <div
          className="relative w-[320px] h-[570px] md:w-[360px] md:h-[640px] bg-black border-4 border-red-600 rounded-3xl overflow-hidden shadow-2xl select-none cursor-pointer transition-all duration-300 hover:shadow-red-500/25 hover:shadow-2xl"
          onClick={handleStoryClick}
          onMouseMove={() => setShowControls(true)}
        >
          {/* Loading animation */}
          {loading && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Progress Bar */}
          <StoryProgressBar stories={stories} activeStory={activeStory} progress={progress} visible={showControls} />

          {/* Video Player */}
          <video
            ref={videoRef}
            key={currentStory.id}
            src={currentStory.videoUrl}
            poster={currentStory.thumbnail}
            className="w-full h-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={handleVideoEnd}
            onTimeUpdate={handleTimeUpdate}
            onLoadStart={() => setLoading(true)}
            onCanPlay={() => setLoading(false)}
            muted={muted}
            playsInline
            preload="metadata"
          />

          {/* Story Overlay */}
          <StoryOverlay story={currentStory} visible={showControls} />

          {/* Controls */}
          <StoryControls
            playing={playing}
            muted={muted}
            liked={liked.has(currentStory.id)}
            story={currentStory}
            canGoPrev={activeStory > 0}
            canGoNext={activeStory < stories.length - 1}
            visible={showControls}
            onPlayPause={handlePlayPause}
            onMute={handleMute}
            onLike={handleLike}
            onPrev={prevStory}
            onNext={nextStory}
          />

          {/* Click zones indicators (only visible on hover) */}
          <div className="absolute inset-0 flex opacity-0 hover:opacity-20 transition-opacity pointer-events-none">
            <div className="flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            <div className="flex-1" />
            <div className="flex-1 bg-gradient-to-l from-white/20 to-transparent" />
          </div>
        </div>

        {/* Story counter */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
          {activeStory + 1} de {stories.length}
        </div>
      </div>
    </div>
  )
}
