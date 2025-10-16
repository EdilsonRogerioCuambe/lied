"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Film, Headphones, Music, Play, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// Removed local players; we now link to external platforms only

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  youtubeId: string;
}

export function Videos() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const videos: Video[] = [
    {
      id: 1,
      title:
        "Grupo Lied | Cindy | Emerson Rosa - Que Bom Seria (Clipe Oficial)",
      description:
        "Nosso mais recente clipe oficial, filmado em locações deslumbrantes.",
      thumbnail: "https://img.youtube.com/vi/bBCpxV2Ekag/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=bBCpxV2Ekag",
      youtubeId: "bBCpxV2Ekag",
    },
    {
      id: 2,
      title: "Grupo Lied - Ouvi Dizer",
      description:
        "Performance intimista de uma das nossas músicas mais queridas pelos fãs.",
      thumbnail: "https://img.youtube.com/vi/phf8QZAZmsM/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=phf8QZAZmsM",
      youtubeId: "phf8QZAZmsM",
    },
    {
      id: 3,
      title: "Grupo Lied - Tudo Bem (Clipe Oficial)",
      description:
        "Clipe oficial gravado em locações especiais da Grande São Paulo.",
      thumbnail: "https://img.youtube.com/vi/R51ZLDdXJsA/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=R51ZLDdXJsA",
      youtubeId: "R51ZLDdXJsA",
    },
    {
      id: 4,
      title: "Grupo Lied - Zero Vontade",
      description:
        "Momentos exclusivos dos bastidores da gravação do nosso mais novo trabalho.",
      thumbnail: "https://img.youtube.com/vi/3XHZLTXLFVs/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=3XHZLTXLFVs",
      youtubeId: "3XHZLTXLFVs",
    },
    {
      id: 6,
      title: "Grupo Lied - Conversa Fiada",
      description:
        "Versões íntimas e acústicas dos nossos maiores sucessos românticos.",
      thumbnail: "https://img.youtube.com/vi/spKyWq8Y4N4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=spKyWq8Y4N4",
      youtubeId: "spKyWq8Y4N4",
    },
  ];

  // Local videos removed due to repository size limits. Keep external links only.

  const categories = [
    { id: "all", label: "Todos", icon: Youtube },
    { id: "clipe", label: "Clipes", icon: Film },
    { id: "live", label: "Ao Vivo", icon: Music },
    { id: "acoustic", label: "Acústico", icon: Headphones },
    { id: "backstage", label: "Bastidores", icon: Eye },
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => {
          switch (selectedCategory) {
            case "clipe":
              return video.title.toLowerCase().includes("clipe");
            case "live":
              return video.title.toLowerCase().includes("live");
            case "acoustic":
              return video.title.toLowerCase().includes("acoustic");
            case "backstage":
              return video.title.toLowerCase().includes("backstage");
            default:
              return true;
          }
        });

  const handleWatchVideo = (video: Video) => {
    window.open(video.url, "_blank");
  };

  return (
    <section
      id="videos"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-stone-950 to-red-950/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            <span className="text-red-500 relative">
              Vídeos
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </span>{" "}
            & Clipes
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2">
            Assista aos nossos clipes oficiais, performances ao vivo e momentos
            especiais nos bastidores.
          </p>

          {/* Channel stats removed for a cleaner layout */}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30"
                    : "bg-stone-800/50 backdrop-blur-sm text-gray-300 hover:bg-stone-700/50 border border-stone-700"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm sm:text-base">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Featured clip section removed; the first card below already highlights a video */}

        {/* Featured Video - First YouTube larger */}
        {filteredVideos.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-semibold">
                  <Youtube className="h-4 w-4" />
                  Em Destaque
                </span>
              </div>

              <Card className="group p-0 bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800 hover:border-red-500/50 transition-all duration-500 overflow-hidden shadow-2xl">
                <div className="relative aspect-video">
                  <Image
                    src={filteredVideos[0].thumbnail}
                    alt={filteredVideos[0].title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="eager"
                    width={800}
                    height={450}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="lg"
                      className="bg-red-600/90 hover:bg-red-700 backdrop-blur-sm rounded-full w-20 h-20 border-4 border-white/20 shadow-2xl hover:scale-110 transition-all duration-300"
                      onClick={() => handleWatchVideo(filteredVideos[0])}
                    >
                      <Play
                        className="h-8 w-8 ml-1 text-white"
                        fill="currentColor"
                      />
                    </Button>
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-20">
                    <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                      {filteredVideos[0].title}
                    </h3>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredVideos.slice(1).map((video) => (
            <Card
              key={video.id}
              className="group p-0 bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden cursor-pointer"
              onClick={() => handleWatchVideo(video)}
              role="button"
              tabIndex={0}
            >
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={225}
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full w-16 h-16 border-2 border-white/20 bg-red-600/90 flex items-center justify-center shadow-xl">
                    <Play className="h-6 w-6 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>

                {/* Removed per-card action button; click the card to play */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reels Section - external */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-semibold">
              <Film className="h-4 w-4" />
              Reels
            </span>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 bg-transparent px-8 py-3 font-semibold hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/grupolied/reels/",
                  "_blank"
                )
              }
            >
              Ver Reels no Instagram
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex flex-col items-center gap-6 p-6 sm:p-8 bg-gradient-to-r from-stone-900/50 to-red-950/20 backdrop-blur-sm rounded-2xl border border-stone-800">
            <div className="text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                <Youtube className="h-6 w-6 text-red-500" />
                Canal do YouTube
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Inscreva-se para não perder nenhum vídeo novo! Conteúdo
                exclusivo toda semana.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30"
                onClick={() =>
                  window.open("https://www.youtube.com/@GrupoLied", "_blank")
                }
              >
                <Youtube className="h-5 w-5 mr-2" />
                Inscrever-se
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 bg-transparent px-8 py-3 font-semibold hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@GrupoLied/videos",
                    "_blank"
                  )
                }
              >
                <Film className="h-5 w-5 mr-2" />
                Todos os Vídeos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
