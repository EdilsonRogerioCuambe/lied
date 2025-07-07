"use client"

import { useState, useEffect } from "react"
import { StoryPlayer } from "./story-player"
import { StoryThumbnails } from "./story-thumbnails"
import type { Story } from "@/types/story"

const storiesData: Story[] = [
  {
    id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    title: "Bastidores do Show",
    description: "Momentos especiais nos bastidores antes de subir ao palco",
    duration: 15,
    likes: 234,
    views: 1200,
    date: "2h atrás",
    author: "Grupo LIED",
  },
  {
    id: "2",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Ensaio no Estúdio",
    description: "Preparando o próximo hit no nosso estúdio",
    duration: 12,
    likes: 189,
    views: 890,
    date: "5h atrás",
    author: "Grupo LIED",
  },
  {
    id: "3",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Meet & Greet",
    description: "Encontro especial com nossos fãs mais dedicados",
    duration: 18,
    likes: 456,
    views: 2100,
    date: "1d atrás",
    author: "Grupo LIED",
  },
  {
    id: "4",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
    title: "Gravação do Clipe",
    description: "Nos bastidores da gravação do nosso novo clipe",
    duration: 20,
    likes: 567,
    views: 3400,
    date: "2d atrás",
    author: "Grupo LIED",
  },
  {
    id: "5",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=400&q=80",
    title: "Show na Praça",
    description: "Energia contagiante no show ao ar livre",
    duration: 14,
    likes: 789,
    views: 4500,
    date: "3d atrás",
    author: "Grupo LIED",
  },
]

export function Stories() {
  const [activeStory, setActiveStory] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stories do Grupo <span className="text-red-500">LIED</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Viva os bastidores e momentos únicos da banda através dos nossos stories exclusivos
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <StoryThumbnails stories={storiesData} activeStory={activeStory} onStorySelect={setActiveStory} />
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <StoryPlayer stories={storiesData} activeStory={activeStory} onStoryChange={setActiveStory} />
        </div>
      </div>
    </section>
  )
}
