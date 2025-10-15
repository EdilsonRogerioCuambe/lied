"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Headphones,
  Heart,
  Loader2,
  Music,
  Pause,
  Play,
  RefreshCcw,
  RotateCcw,
  Share2,
  TrendingUp,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{
    name: string;
    id: string;
  }>;
  album: {
    name: string;
    release_date: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
  };
  duration_ms: number;
  popularity: number;
  external_urls: {
    spotify: string;
  };
  preview_url: string | null;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  popularity: number;
  isPlaying: boolean;
  isLiked: boolean;
  spotifyUrl: string;
  releaseDate: string;
  imageUrl?: string;
  previewUrl?: string | null;
  isHit?: boolean;
}

export function MusicSection() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showAllTracks, setShowAllTracks] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [artistInfo, setArtistInfo] = useState<any>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function fetchSpotifyApi(endpoint: string, method = "GET", body?: any) {
    try {
      const res = await fetch(
        `/api/spotify/playlist?endpoint=${encodeURIComponent(endpoint)}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method,
          body: body ? JSON.stringify(body) : undefined,
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `Erro da API: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error("Erro ao fazer requisição para Spotify:", error);
      throw error;
    }
  }

  async function searchArtistAndTracks() {
    try {
      setLoading(true);
      setError(null);

      // Buscar o artista "Grupo LIED"
      const searchResults = await fetchSpotifyApi(
        "search?q=Grupo%20LIED&type=artist&limit=1"
      );

      if (!searchResults.artists?.items?.length) {
        throw new Error("Artista não encontrado no Spotify");
      }

      const artist = searchResults.artists.items[0];
      setArtistInfo(artist);

      // Buscar os álbuns do artista
      const albumsResult = await fetchSpotifyApi(
        `artists/${artist.id}/albums?include_groups=album,single&market=BR&limit=50`
      );

      // Buscar as músicas de todos os álbuns
      let allTracks: SpotifyTrack[] = [];

      for (const album of albumsResult.items) {
        const albumTracks = await fetchSpotifyApi(
          `albums/${album.id}/tracks?market=BR`
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const tracksWithAlbumInfo = albumTracks.items.map((track: any) => ({
          ...track,
          album: {
            name: album.name,
            release_date: album.release_date,
            images: album.images,
          },
        }));
        allTracks = [...allTracks, ...tracksWithAlbumInfo];
      }

      // Buscar também os top tracks do artista
      const topTracksResult = await fetchSpotifyApi(
        `artists/${artist.id}/top-tracks?market=BR`
      );

      // Combinar e remover duplicatas
      const combinedTracks = [...topTracksResult.tracks, ...allTracks];
      const uniqueTracks = combinedTracks.filter(
        (track, index, self) =>
          index === self.findIndex((t) => t.id === track.id)
      );

      // Converter para o formato do componente
      const formattedTracks: Track[] = uniqueTracks
        .map((track: SpotifyTrack) => ({
          id: track.id,
          title: track.name,
          artist: track.artists.map((a) => a.name).join(", "),
          album: track.album.name,
          duration: formatDuration(track.duration_ms),
          popularity: track.popularity,
          isPlaying: false,
          isLiked: false,
          spotifyUrl: track.external_urls.spotify,
          releaseDate: new Date(track.album.release_date)
            .getFullYear()
            .toString(),
          imageUrl: track.album.images?.[0]?.url,
          previewUrl: track.preview_url,
          isHit: track.popularity > 50,
        }))
        .sort((a, b) => b.popularity - a.popularity);

      setTracks(formattedTracks);
    } catch (err) {
      console.error("Erro ao buscar dados do Spotify:", err);
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  function formatDuration(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    searchArtistAndTracks();
  }, []);

  const handlePlayPause = (trackId: string) => {
    const track = tracks.find((t) => t.id === trackId);

    if (!track?.previewUrl) {
      handleTrackSpotify(track?.spotifyUrl || "");
      return;
    }

    if (currentTrack === trackId && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (currentTrack === trackId && !isPlaying) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      audioRef.current = new Audio(track.previewUrl);
      audioRef.current.volume = isMuted ? 0 : 0.5;

      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setCurrentTrack(null);
      });

      audioRef.current.addEventListener("error", () => {
        console.error("Erro ao reproduzir áudio");
        handleTrackSpotify(track.spotifyUrl);
      });

      audioRef.current
        .play()
        .then(() => {
          setCurrentTrack(trackId);
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Erro ao reproduzir:", error);
          handleTrackSpotify(track.spotifyUrl);
        });
    }
  };

  const handleLike = (trackId: string) => {
    const newLikedTracks = new Set(likedTracks);
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId);
    } else {
      newLikedTracks.add(trackId);
    }
    setLikedTracks(newLikedTracks);
  };

  const handleOpenSpotify = () => {
    if (artistInfo) {
      window.open(artistInfo.external_urls.spotify, "_blank");
    } else {
      window.open("https://open.spotify.com/search/Grupo%20LIED", "_blank");
    }
  };

  const handleTrackSpotify = (url: string) => {
    window.open(url, "_blank");
  };

  const handleShare = async (track: Track) => {
    const shareData = {
      title: `${track.title} - ${track.artist}`,
      text: `Ouça "${track.title}" do ${track.artist} no Spotify!`,
      url: track.spotifyUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `${shareData.text}\n${shareData.url}`
        );
        const button = document.activeElement as HTMLButtonElement;
        const originalText = button.textContent;
        button.textContent = "Copiado!";
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
      try {
        await navigator.clipboard.writeText(track.spotifyUrl);
        alert("Link copiado para a área de transferência!");
      } catch (clipboardError) {
        console.error("Erro ao copiar para clipboard:", clipboardError);
        alert(`Compartilhe este link: ${track.spotifyUrl}`);
      }
    }
  };

  const handleRefresh = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTrack(null);
    searchArtistAndTracks();
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0.5 : 0;
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-stone-950 to-red-950/10 px-4">
        <div className="text-center max-w-xs">
          <Loader2 className="h-12 w-12 animate-spin text-red-500 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-white mb-2">
            Carregando Músicas
          </h2>
          <p className="text-gray-400 text-sm">
            Buscando as músicas do Grupo LIED...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-stone-950 to-red-950/10 px-4">
        <div className="text-center max-w-xs">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-white mb-2">
            Erro ao Carregar
          </h2>
          <p className="text-gray-400 mb-6 text-sm">{error}</p>
          <Button
            onClick={handleRefresh}
            className="bg-red-600 hover:bg-red-700 w-full"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Tentar Novamente
          </Button>
        </div>
      </section>
    );
  }

  const topTracks = tracks.filter((track) => track.isHit).slice(0, 3);
  const totalListeners = artistInfo?.followers?.total || 0;
  const displayTracks = showAllTracks ? tracks : tracks.slice(0, 5);

  return (
    <section id="music" className="py-8 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header - Otimizado para mobile */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-red-500 relative">
              Músicas
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-red-600 rounded-full"></div>
            </span>{" "}
            & Playlist
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Ouça nossa discografia no Spotify
          </p>

          {/* Stats - Layout mobile-first */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm mb-6">
            <div className="flex items-center gap-2 bg-stone-900/50 px-3 py-1 rounded-full">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <span>
                {tracks.reduce((sum, track) => sum + track.popularity, 0)}{" "}
                Pontos
              </span>
            </div>
            <div className="flex items-center gap-2 bg-stone-900/50 px-3 py-1 rounded-full">
              <Users className="h-4 w-4 text-red-500" />
              <span>
                {totalListeners > 0
                  ? `${Math.round(totalListeners / 1000)}K`
                  : "40K+"}{" "}
                Seguidores
              </span>
            </div>
            <div className="flex items-center gap-2 bg-stone-900/50 px-3 py-1 rounded-full">
              <Music className="h-4 w-4 text-red-500" />
              <span>{tracks.length} Faixas</span>
            </div>
          </div>

          {/* Player Controls */}
          {currentTrack && (
            <div className="inline-flex items-center gap-3 p-3 bg-stone-900/80 rounded-full backdrop-blur-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="text-gray-400 hover:text-white w-8 h-8"
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
              <div className="text-white text-sm">
                {isPlaying ? "🎵 Tocando" : "⏸️ Pausado"}
              </div>
            </div>
          )}
        </div>

        {/* Top Hits - Layout adaptativo */}
        {topTracks.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
              Nossos Maiores Sucessos
            </h3>
            <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
              {topTracks.map((track, index) => (
                <Card
                  key={track.id}
                  className="group bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <CardContent className="p-4 md:p-6">
                    {/* Layout horizontal no mobile, vertical no desktop */}
                    <div className="flex gap-4 md:block">
                      {track.imageUrl && (
                        <div className="relative flex-shrink-0 md:mb-4">
                          <Image
                            src={track.imageUrl}
                            alt={track.title}
                            className="w-16 h-16 md:w-full md:h-32 rounded-lg object-cover group-hover:scale-110 transition-transform duration-500"
                            width={400}
                            height={400}
                          />
                          <div className="absolute -top-1 -left-1 md:top-2 md:left-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">
                            {index + 1}
                          </div>
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm md:text-lg truncate mb-1 group-hover:text-red-400 transition-colors">
                          {track.title}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm truncate mb-2 md:mb-3">
                          {track.artist}
                        </p>

                        <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{track.popularity}%</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{track.duration}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold hover:scale-105 transition-all duration-300 text-xs md:text-sm py-1 md:py-2"
                            onClick={() => handleTrackSpotify(track.spotifyUrl)}
                          >
                            <Play className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                            Spotify
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-stone-600 text-gray-300 hover:bg-stone-800 hover:text-white w-8 h-8 md:w-10 md:h-10 p-0"
                            onClick={() => handleLike(track.id)}
                          >
                            <Heart
                              className={`h-3 w-3 md:h-4 md:w-4 ${
                                likedTracks.has(track.id)
                                  ? "fill-red-500 text-red-500"
                                  : ""
                              }`}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Artist Info - Layout responsivo */}
        {artistInfo && (
          <div className="mb-8">
            <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    {artistInfo.images?.[0] && (
                      <Image
                        src={artistInfo.images[0].url}
                        alt={artistInfo.name}
                        className="w-12 h-12 rounded-xl object-cover"
                        width={48}
                        height={48}
                      />
                    )}
                    <div className="text-center sm:text-left">
                      <h3 className="text-white font-bold text-lg">
                        {artistInfo.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {tracks.length} músicas •{" "}
                        {artistInfo.followers?.total.toLocaleString()}{" "}
                        seguidores
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleOpenSpotify}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver no Spotify
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Track List - Ultra otimizado para mobile */}
        {tracks.length > 0 && (
          <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800">
            <div className="p-4 md:p-6 border-b border-stone-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                    Discografia Completa
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {displayTracks.length} de {tracks.length} músicas
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  className="border-stone-600 text-gray-300 hover:bg-stone-800"
                >
                  <RefreshCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="divide-y divide-stone-700/50">
              {displayTracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`p-3 md:p-4 hover:bg-stone-800/30 transition-colors ${
                    currentTrack === track.id
                      ? "bg-stone-800/50 border-l-4 border-red-500"
                      : ""
                  }`}
                >
                  {/* Layout compacto para mobile, completo para desktop */}
                  <div className="flex items-center gap-2 md:gap-4">
                    {/* Número */}
                    <div className="w-6 md:w-8 text-center text-gray-400 text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>

                    {/* Album Art - só no desktop */}
                    {track.imageUrl && (
                      <div className="hidden md:block w-12 h-12 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={track.imageUrl}
                          alt={track.title}
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                    )}

                    {/* Play Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-800/50 hover:bg-red-600 text-white transition-all duration-300 hover:scale-110 flex-shrink-0"
                      onClick={() => handlePlayPause(track.id)}
                      title={
                        track.previewUrl
                          ? "Tocar preview (30s)"
                          : "Abrir no Spotify"
                      }
                    >
                      {currentTrack === track.id && isPlaying ? (
                        <Pause className="h-3 w-3 md:h-4 md:w-4" />
                      ) : (
                        <Play className="h-3 w-3 md:h-4 md:w-4 ml-0.5" />
                      )}
                    </Button>

                    {/* Track Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4
                          className={`font-medium text-sm md:text-base truncate transition-colors ${
                            currentTrack === track.id
                              ? "text-red-500"
                              : "text-white group-hover:text-red-400"
                          }`}
                        >
                          {track.title}
                        </h4>
                        {track.isHit && (
                          <span className="px-1.5 py-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold rounded-full flex-shrink-0">
                            HIT
                          </span>
                        )}
                        {!track.previewUrl && (
                          <span className="hidden md:inline px-2 py-0.5 bg-green-600 text-white text-xs font-medium rounded-full flex-shrink-0">
                            Spotify
                          </span>
                        )}
                        {currentTrack === track.id && isPlaying && (
                          <div className="flex gap-0.5 flex-shrink-0">
                            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                            <div
                              className="w-1 h-1 bg-red-500 rounded-full animate-pulse"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-1 h-1 bg-red-500 rounded-full animate-pulse"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 text-gray-400 text-xs md:text-sm">
                        <span className="truncate">{track.artist}</span>
                        <span className="flex-shrink-0">•</span>
                        <span className="truncate">{track.album}</span>
                        <span className="hidden md:inline flex-shrink-0">
                          •
                        </span>
                        <span className="hidden md:inline flex-shrink-0">
                          {track.releaseDate}
                        </span>
                      </div>
                    </div>

                    {/* Stats - Hidden on mobile, visible on large screens */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs md:text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{track.popularity}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{track.duration}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                        onClick={() => handleShare(track)}
                        title="Compartilhar música"
                      >
                        <Share2 className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all duration-300 text-xs md:text-sm px-2 md:px-3"
                        onClick={() => handleTrackSpotify(track.spotifyUrl)}
                        title="Abrir no Spotify"
                      >
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        <span className="hidden sm:inline">Spotify</span>
                        <span className="sm:hidden">▶</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {tracks.length > 5 && (
              <div className="p-4 border-t border-stone-700">
                <Button
                  variant="default"
                  onClick={() => setShowAllTracks(!showAllTracks)}
                  className="w-full"
                >
                  {showAllTracks ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Mostrar Menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Ver Todas as {tracks.length} Músicas
                    </>
                  )}
                </Button>
              </div>
            )}
          </Card>
        )}

        {/* CTA - Mobile optimized */}
        <div className="text-center mt-8">
          <Card className="bg-red-600 border border-red-700 text-white max-w-md mx-auto">
            <CardContent className="p-6">
              <Headphones className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Siga-nos no Spotify</h3>
              <p className="text-red-100 mb-6 text-sm leading-relaxed">
                Seja o primeiro a ouvir nossos lançamentos!
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-100 font-semibold w-full"
                onClick={handleOpenSpotify}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Seguir no Spotify
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
