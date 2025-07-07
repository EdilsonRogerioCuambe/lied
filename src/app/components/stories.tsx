"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Heart, Share2, MessageCircle } from "lucide-react"

interface Story {
  id: string
  videoUrl: string
  thumbnail: string
  title: string
  description: string
  duration: number
  likes: number
  views: number
  date: string
}

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
    date: "2h atrás"
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
    date: "5h atrás"
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
    date: "1d atrás"
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
    date: "2d atrás"
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
    date: "3d atrás"
  }
]

export function Stories() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [liked, setLiked] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentStory = storiesData[active]

  // Avançar/voltar tocando nas laterais (mobile UX)
  const handleStoryClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    if (x < bounds.width / 2) {
      prevStory();
    } else {
      nextStory();
    }
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
    if (active < storiesData.length - 1) {
      setLoading(true);
      setTimeout(() => {
        setActive(active + 1)
        setPlaying(false)
        setProgress(0)
        setLoading(false);
      }, 400);
    }
  }

  const prevStory = () => {
    if (active > 0) {
      setLoading(true);
      setTimeout(() => {
        setActive(active - 1)
        setPlaying(false)
        setProgress(0)
        setLoading(false);
      }, 400);
    }
  }

  const handleVideoEnd = () => {
    setPlaying(false)
    setProgress(0)
    // Auto advance to next story
    if (active < storiesData.length - 1) {
      setTimeout(() => {
        nextStory();
      }, 1000)
    }
  }

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stories do Grupo <span className="text-red-500">Lied</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Veja momentos rápidos e bastidores em formato vertical, igual aos stories do Instagram!
          </p>
        </div>

        {/* Stories Thumbnails */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-8 mb-8 stories-scroll">
          {storiesData.map((story, idx) => (
            <button
              key={story.id}
              className={`relative rounded-2xl border-2 ${active === idx ? 'border-red-500 scale-110' : 'border-gray-700 hover:border-gray-500'} overflow-hidden w-20 h-32 flex-shrink-0 transition-all duration-300 group`}
              onClick={() => { 
                setActive(idx); 
                setPlaying(false); 
                setProgress(0);
              }}
            >
              <img 
                src={story.thumbnail} 
                alt={story.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-medium truncate">{story.title}</p>
              </div>
              {active === idx && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Main Story Player */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[570px] bg-black border-4 border-red-600 rounded-3xl overflow-hidden shadow-2xl select-none" onClick={handleStoryClick}>
            {/* Loading animation */}
            {loading && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-30">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 z-20 p-4">
              <div className="flex gap-1">
                {storiesData.map((_, idx) => (
                  <div key={idx} className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        idx < active ? 'bg-white' : 
                        idx === active ? 'bg-red-500' : 'bg-gray-600'
                      }`}
                      style={{
                        width: idx === active ? `${progress}%` : '0%'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
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
              onTimeUpdate={() => {
                if (videoRef.current) {
                  const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
                  setProgress(progress)
                }
              }}
              muted={muted}
              autoPlay={playing}
            />
            {/* Overlay de stats e feedback de like */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button onClick={handleLike} className={`rounded-full p-2 bg-black/60 hover:bg-red-600 transition-colors ${liked.has(currentStory.id) ? 'text-red-500' : 'text-white'}`}> <Heart className="h-5 w-5" /> </button>
                  <span className="text-white text-sm">{currentStory.likes + (liked.has(currentStory.id) ? 1 : 0)} curtidas</span>
                  <span className="text-gray-300 text-sm flex items-center gap-1"><MessageCircle className="h-4 w-4" /> {currentStory.views} views</span>
                </div>
                <button onClick={handleMute} className="rounded-full p-2 bg-black/60 hover:bg-red-600 transition-colors text-white">{muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}</button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={prevStory} disabled={active === 0} className="bg-black/60 hover:bg-red-600 text-white rounded-full p-2 disabled:opacity-40"><ChevronLeft className="h-5 w-5" /></button>
                <button onClick={handlePlayPause} className="bg-black/60 hover:bg-red-600 text-white rounded-full p-2 mx-2">{playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}</button>
                <button onClick={nextStory} disabled={active === storiesData.length - 1} className="bg-black/60 hover:bg-red-600 text-white rounded-full p-2 disabled:opacity-40"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
            {/* Descrição do story */}
            <div className="absolute top-20 left-0 right-0 px-6 z-10">
              <div className="bg-black/60 rounded-lg p-3 text-white text-center text-sm shadow">
                <div className="font-bold text-lg mb-1">{currentStory.title}</div>
                <div>{currentStory.description}</div>
                <div className="text-xs text-gray-300 mt-1">{currentStory.date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 