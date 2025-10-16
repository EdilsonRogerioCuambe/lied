"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  event: string;
  date: string;
  height: "small" | "medium" | "large" | "xlarge";
}

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      src: "./gallery/galeria_um.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "large",
    },
    {
      id: 2,
      src: "./gallery/galeria_dois.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "medium",
    },
    {
      id: 3,
      src: "./gallery/galeria_tres.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "xlarge",
    },
    {
      id: 4,
      src: "./gallery/galeria_quatro.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "small",
    },
    {
      id: 5,
      src: "./gallery/galeria_17.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "large",
    },
    {
      id: 6,
      src: "./gallery/galeria_18.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "medium",
    },
    {
      id: 7,
      src: "./gallery/galeria_sete.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "large",
    },
    {
      id: 8,
      src: "./gallery/galeria_oito.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "small",
    },
    {
      id: 9,
      src: "./gallery/galeria_nove.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "large",
    },
    {
      id: 10,
      src: "./gallery/galeria_dez.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "medium",
    },
    {
      id: 11,
      src: "./gallery/galeria_onze.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "xlarge",
    },
    {
      id: 12,
      src: "./gallery/galeria_doze.jpg",
      alt: "",
      title: "",
      description: "",
      event: "",
      date: "",
      height: "small",
    },
  ];

  const getHeightClass = (height: Photo["height"]) => {
    switch (height) {
      case "small":
        return "h-64";
      case "medium":
        return "h-80";
      case "large":
        return "h-96";
      case "xlarge":
        return "h-[28rem]";
      default:
        return "h-80";
    }
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-red-500">Galeria</span> de Momentos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada foto conta uma história. Reviva os momentos mais especiais do
            Grupo Lied através dos nossos eventos e shows.
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
              <div
                className={`relative bg-gray-800 rounded-lg overflow-hidden ${getHeightClass(
                  photo.height
                )}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Simple hover overlay only for visual depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                {/* No metadata or actions; image-only modal */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
