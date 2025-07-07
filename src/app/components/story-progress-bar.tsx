"use client"

import type { Story } from "@/types/story"

interface StoryProgressBarProps {
  stories: Story[]
  activeStory: number
  progress: number
  visible: boolean
}

export function StoryProgressBar({ stories, activeStory, progress, visible }: StoryProgressBarProps) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 z-30 p-4 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div className="flex gap-1">
        {stories.map((_, idx) => (
          <div key={idx} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                idx < activeStory ? "bg-white w-full" : idx === activeStory ? "bg-red-500" : "bg-white/30 w-0"
              }`}
              style={{
                width: idx === activeStory ? `${progress}%` : undefined,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
