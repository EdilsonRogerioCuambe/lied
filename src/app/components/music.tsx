"use client"

import { useState } from "react"
import { Play, Pause, Heart, Share2, ExternalLink, Music, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Track {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  plays: string
  isPlaying: boolean
  isLiked: boolean
}

export function MusicSection() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set())

  const tracks: Track[] = [
    {
      id: 1,
      title: "Nosso Amor",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "3:45",
      plays: "125K",
      isPlaying: false,
      isLiked: false
    },
    {
      id: 2,
      title: "Saudade",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "4:12",
      plays: "89K",
      isPlaying: false,
      isLiked: false
    },
    {
      id: 3,
      title: "Pagode na Quebrada",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "3:28",
      plays: "203K",
      isPlaying: false,
      isLiked: false
    },
    {
      id: 4,
      title: "Vida de Artista",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "3:55",
      plays: "67K",
      isPlaying: false,
      isLiked: false
    },
    {
      id: 5,
      title: "Amor Eterno",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "4:20",
      plays: "145K",
      isPlaying: false,
      isLiked: false
    },
    {
      id: 6,
      title: "Noite de Festa",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "3:15",
      plays: "178K",
      isPlaying: false,
      isLiked: false
    },
    {
      id: 7,
      title: "Coração Partido",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "4:08",
      plays: "92K",
      isPlaying: false,
      isLiked: false
    },
    {
      id: 8,
      title: "Samba da Vida",
      artist: "Grupo Lied",
      album: "Primeiro Álbum",
      duration: "3:42",
      plays: "156K",
      isPlaying: false,
      isLiked: false
    }
  ]

  const handlePlayPause = (trackId: number) => {
    if (currentTrack === trackId) {
      setCurrentTrack(null)
    } else {
      setCurrentTrack(trackId)
    }
  }

  const handleLike = (trackId: number) => {
    const newLikedTracks = new Set(likedTracks)
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId)
    } else {
      newLikedTracks.add(trackId)
    }
    setLikedTracks(newLikedTracks)
  }

  const handleOpenSpotify = () => {
    // Substitua pelo link real da playlist do Spotify
    window.open("https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M", '_blank')
  }

  return (
    <section id="music" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-red-500">Música</span> & Playlist
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ouça nossa playlist completa no Spotify e descubra todas as nossas músicas.
          </p>
        </div>

        {/* Spotify Player Embed */}
        <div className="mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Music className="h-8 w-8 text-red-500" />
                <div>
                  <h3 className="text-white font-bold text-lg">Playlist Oficial - Grupo Lied</h3>
                  <p className="text-gray-400 text-sm">8 músicas • 30 min</p>
                </div>
              </div>
              <Button 
                onClick={handleOpenSpotify}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ouvir no Spotify
              </Button>
            </div>
            
            {/* Spotify Embed */}
            <div className="bg-gray-900 rounded-lg p-4">
              <iframe 
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-white font-bold text-xl mb-2">Todas as Músicas</h3>
            <p className="text-gray-400">Nossa discografia completa</p>
          </div>
          
          <div className="divide-y divide-gray-700">
            {tracks.map((track, index) => (
              <div 
                key={track.id} 
                className={`p-4 hover:bg-gray-700 transition-colors duration-200 ${
                  currentTrack === track.id ? 'bg-gray-700' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Track Number */}
                  <div className="w-8 h-8 flex items-center justify-center text-gray-400 font-medium">
                    {index + 1}
                  </div>
                  
                  {/* Play/Pause Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 text-white hover:text-red-500"
                    onClick={() => handlePlayPause(track.id)}
                  >
                    {currentTrack === track.id ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>
                  
                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className={`font-medium truncate ${
                        currentTrack === track.id ? 'text-red-500' : 'text-white'
                      }`}>
                        {track.title}
                      </h4>
                      {currentTrack === track.id && (
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm truncate">{track.artist} • {track.album}</p>
                  </div>
                  
                  {/* Duration */}
                  <div className="text-gray-400 text-sm w-12 text-right">
                    {track.duration}
                  </div>
                  
                  {/* Plays */}
                  <div className="text-gray-400 text-sm w-16 text-right hidden md:block">
                    {track.plays}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-8 h-8 p-0 text-gray-400 hover:text-red-500"
                      onClick={() => handleLike(track.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${likedTracks.has(track.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-8 h-8 p-0 text-gray-400 hover:text-red-500"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8">
            <Headphones className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-white font-bold text-2xl mb-2">Siga-nos no Spotify</h3>
            <p className="text-red-100 mb-6">
              Receba notificações quando lançarmos novas músicas e playlists exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100"
                onClick={handleOpenSpotify}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Seguir no Spotify
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Music className="h-5 w-5 mr-2" />
                Ver Discografia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 