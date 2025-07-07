"use client"

import type { Story } from "@/types/story"
import Image from "next/image"

interface StoryOverlayProps {
  story: Story
  visible: boolean
}

export function StoryOverlay({ story, visible }: StoryOverlayProps) {
  return (
    <div
      className={`absolute top-16 left-0 right-0 px-4 z-20 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 text-white shadow-lg border border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
            <Image
              src="/images/logo-lied.png"
              alt="Grupo LIED"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">{story.author}</p>
            <p className="text-xs text-gray-300">{story.date}</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">{story.title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{story.description}</p>
        </div>
      </div>
    </div>
  )
}
