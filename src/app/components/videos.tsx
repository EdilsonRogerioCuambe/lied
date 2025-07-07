"use client"

import { useState } from "react"
import { Play, Heart, Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"


interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  date: string
  url: string
  likes: number
}

export function Videos() {
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set())

  const videos: Video[] = [
    {
      id: 1,
      title: "LIED - Nosso Amor (Clipe Oficial)",
      description: "Clipe oficial da nossa música mais romântica, gravado em locações especiais da cidade.",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&h=300&q=80",
      duration: "3:45",
      views: "125K",
      date: "15/12/2024",
      url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      likes: 2340
    },
    {
      id: 2,
      title: "LIED - Saudade (Ao Vivo)",
      description: "Performance emocionante ao vivo no nosso show mais recente.",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=300&q=80",
      duration: "4:12",
      views: "89K",
      date: "10/12/2024",
      url: "https://youtube.com/watch?v=9bZkp7q19f0",
      likes: 1567
    },
    {
      id: 3,
      title: "LIED - Pagode na Quebrada",
      description: "Música que representa nossa origem e conexão com a comunidade.",
      thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&h=300&q=80",
      duration: "3:28",
      views: "203K",
      date: "05/12/2024",
      url: "https://youtube.com/watch?v=kJQP7kiw5Fk",
      likes: 3421
    },
    {
      id: 4,
      title: "LIED - Backstage do Show",
      description: "Momentos especiais nos bastidores antes de subir ao palco.",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&h=300&q=80",
      duration: "2:15",
      views: "67K",
      date: "01/12/2024",
      url: "https://youtube.com/watch?v=ZZ5LpwO-An4",
      likes: 892
    },
    {
      id: 5,
      title: "LIED - Entrevista Exclusiva",
      description: "Conversa franca sobre nossa jornada na música e próximos projetos.",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=400&h=300&q=80",
      duration: "8:32",
      views: "45K",
      date: "28/11/2024",
      url: "https://youtube.com/watch?v=oHg5SJYRHA0",
      likes: 1234
    },
    {
      id: 6,
      title: "LIED - Ensaio Acústico",
      description: "Versão intimista das nossas músicas em formato acústico.",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&h=300&q=80",
      duration: "5:18",
      views: "78K",
      date: "25/11/2024",
      url: "https://youtube.com/watch?v=jNQXAC9IVRw",
      likes: 1890
    }
  ]

  const handleLike = (videoId: number) => {
    const newLikedVideos = new Set(likedVideos)
    if (newLikedVideos.has(videoId)) {
      newLikedVideos.delete(videoId)
    } else {
      newLikedVideos.add(videoId)
    }
    setLikedVideos(newLikedVideos)
  }

  const handleWatchVideo = (video: Video) => {
    window.open(video.url, '_blank')
  }

  return (
    <section id="videos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-red-500">Vídeos</span> & Clipes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Assista aos nossos clipes oficiais, performances ao vivo e momentos especiais nos bastidores.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 rounded-full w-16 h-16"
                    onClick={() => handleWatchVideo(video)}
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{video.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{video.views} visualizações</span>
                  <span>{video.date}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => handleLike(video.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 mr-1 ${likedVideos.has(video.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                      {video.likes + (likedVideos.has(video.id) ? 1 : 0)}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => handleWatchVideo(video)}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Assistir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Não perca nenhum vídeo novo! Inscreva-se no nosso canal.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <ExternalLink className="h-5 w-5 mr-2" />
            Ver Canal Completo
          </Button>
        </div>
      </div>
    </section>
  )
} 