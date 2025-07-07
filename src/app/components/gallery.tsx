"use client"

import { useState } from "react"
import { X, Heart, Share2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"


interface Photo {
  id: number
  src: string
  alt: string
  title: string
  description: string
  event: string
  date: string
  likes: number
  height: "small" | "medium" | "large" | "xlarge"
}

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set())

  const photos: Photo[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&h=600&q=80",
      alt: "Show no Parque da Cidade",
      title: "Show no Parque da Cidade",
      description: "Momento incrível durante nossa apresentação no Parque da Cidade",
      event: "Show ao Vivo",
      date: "15/12/2024",
      likes: 128,
      height: "large"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&h=400&q=80",
      alt: "Ensaio no Estúdio",
      title: "Ensaio no Estúdio",
      description: "Preparando o próximo hit no nosso estúdio",
      event: "Ensaio",
      date: "10/12/2024",
      likes: 89,
      height: "medium"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&h=700&q=80",
      alt: "Festival de Música",
      title: "Festival de Música",
      description: "Apresentação emocionante no maior festival da cidade",
      event: "Festival",
      date: "05/12/2024",
      likes: 256,
      height: "xlarge"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=280&h=350&q=80",
      alt: "Backstage",
      title: "Backstage",
      description: "Momentos especiais nos bastidores",
      event: "Backstage",
      date: "01/12/2024",
      likes: 67,
      height: "small"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=450&h=600&q=80",
      alt: "Show na Praça Central",
      title: "Show na Praça Central",
      description: "Conectando com o público na praça central",
      event: "Show ao Vivo",
      date: "28/11/2024",
      likes: 189,
      height: "large"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=320&h=400&q=80",
      alt: "Gravação do Clipe",
      title: "Gravação do Clipe",
      description: "Nos bastidores da gravação do nosso novo clipe",
      event: "Gravação",
      date: "25/11/2024",
      likes: 145,
      height: "medium"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=380&h=500&q=80",
      alt: "Encontro com Fãs",
      title: "Encontro com Fãs",
      description: "Momento especial com nossos fãs mais dedicados",
      event: "Meet & Greet",
      date: "20/11/2024",
      likes: 203,
      height: "large"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=260&h=320&q=80",
      alt: "Preparação do Show",
      title: "Preparação do Show",
      description: "Últimos ajustes antes de subir ao palco",
      event: "Preparação",
      date: "18/11/2024",
      likes: 78,
      height: "small"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=420&h=580&q=80",
      alt: "Show na Casa de Shows",
      title: "Show na Casa de Shows",
      description: "Noite inesquecível na principal casa de shows",
      event: "Show ao Vivo",
      date: "15/11/2024",
      likes: 167,
      height: "large"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=300&h=380&q=80",
      alt: "Entrevista",
      title: "Entrevista",
      description: "Compartilhando nossa história em entrevista",
      event: "Entrevista",
      date: "12/11/2024",
      likes: 92,
      height: "medium"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=480&h=650&q=80",
      alt: "Show na Universidade",
      title: "Show na Universidade",
      description: "Energia contagiante no show universitário",
      event: "Show ao Vivo",
      date: "08/11/2024",
      likes: 234,
      height: "xlarge"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=290&h=360&q=80",
      alt: "Ensaio Acústico",
      title: "Ensaio Acústico",
      description: "Versão intimista das nossas músicas em formato acústico",
      event: "Ensaio",
      date: "05/11/2024",
      likes: 113,
      height: "small"
    }
  ]

  const handleLike = (photoId: number) => {
    const newLikedPhotos = new Set(likedPhotos)
    if (newLikedPhotos.has(photoId)) {
      newLikedPhotos.delete(photoId)
    } else {
      newLikedPhotos.add(photoId)
    }
    setLikedPhotos(newLikedPhotos)
  }

  const getHeightClass = (height: Photo["height"]) => {
    switch (height) {
      case "small": return "h-64"
      case "medium": return "h-80"
      case "large": return "h-96"
      case "xlarge": return "h-[28rem]"
      default: return "h-80"
    }
  }

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-red-500">Galeria</span> de Momentos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada foto conta uma história. Reviva os momentos mais especiais do Grupo Lied através dos nossos eventos e shows.
          </p>
        </div>

        {/* Pinterest Style Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`break-inside-avoid mb-4 group cursor-pointer`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className={`relative bg-gray-800 rounded-lg overflow-hidden ${getHeightClass(photo.height)}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{photo.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 text-xs font-medium">{photo.event}</span>
                      <span className="text-gray-400 text-xs">{photo.date}</span>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(photo.id)
                      }}
                    >
                      <Heart 
                        className={`h-4 w-4 ${likedPhotos.has(photo.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 p-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged photo */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-red-500"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-w-full max-h-[70vh] object-contain"
                />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{selectedPhoto.title}</h3>
                      <p className="text-gray-300 mb-2">{selectedPhoto.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-red-400 font-medium">{selectedPhoto.event}</span>
                        <span className="text-gray-400">{selectedPhoto.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-red-500"
                        onClick={() => handleLike(selectedPhoto.id)}
                      >
                        <Heart 
                          className={`h-5 w-5 mr-1 ${likedPhotos.has(selectedPhoto.id) ? 'fill-red-500 text-red-500' : ''}`} 
                        />
                        {selectedPhoto.likes + (likedPhotos.has(selectedPhoto.id) ? 1 : 0)}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-red-500"
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-red-500"
                      >
                        <Download className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
