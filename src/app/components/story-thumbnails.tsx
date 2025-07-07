"use client"

import { Story } from "@/types/story"

interface StoryThumbnailsProps {
  stories: Story[]
  activeStory: number
  onStorySelect: (index: number) => void
}

export function StoryThumbnails({ stories, activeStory, onStorySelect }: StoryThumbnailsProps) {
  return (
    <div className="flex justify-center gap-3 overflow-x-auto pb-8 mb-8 px-4">
      <div className="flex gap-3 min-w-max">
        {stories.map((story, idx) => (
          <button
            key={story.id}
            className={`relative rounded-2xl border-3 ${activeStory === idx
              ? "border-red-500 scale-110 shadow-lg shadow-red-500/25"
              : "border-gray-600 hover:border-red-400 hover:scale-105"
              } overflow-hidden w-20 h-32 md:w-24 md:h-36 flex-shrink-0 transition-all duration-300 group`}
            onClick={() => onStorySelect(idx)}
            aria-label={`Ver story: ${story.title}`}
          >
            <img
              src={story.thumbnail || "/placeholder.svg"}
              alt={story.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Story info */}
            <div className="absolute bottom-1 left-1 right-1">
              <p className="text-white text-xs font-medium truncate drop-shadow-lg">{story.title}</p>
              <p className="text-gray-300 text-xs opacity-75">{story.date}</p>
            </div>

            {/* Active indicator */}
            {activeStory === idx && (
              <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg" />
            )}

            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-red-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
