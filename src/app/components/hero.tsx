"use client";

import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleOpenSpotify = () => {
    window.open("https://open.spotify.com/search/Grupo%20LIED", "_blank");
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative bg-black w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Dispositivos Grandes (md+) */}
      <div
        className="absolute opacity-50 hidden md:block"
        style={{
          width: "120vw", // 20% maior que a largura da tela
          height: "160vh", // 20% maior que a altura da tela
          top: "-10vh", // centraliza verticalmente
          left: "-10vw", // centraliza horizontalmente
        }}
      >
        <Image
          src="/images/Lied_01.png"
          alt="Background"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          className="pointer-events-none select-none"
          priority
          quality={100}
        />
      </div>

      {/* Background Image - Dispositivos Pequenos (mobile) */}
      <div className="absolute opacity-70 inset-0 w-full h-full block md:hidden">
        <Image
          src="/images/Lied_01.png"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
          className="pointer-events-none select-none"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Image
          src="/images/Logo_Vermelho.png"
          alt="Grupo Lied Logo"
          width={300}
          height={100}
          className="mx-auto animate-fade-in-up select-none pointer-events-none md:w-[300px] w-[250px]"
          style={{ animationDelay: "0.1s" }}
          priority
        />

        <p
          className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up px-2 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          A poesia que emociona, ligada à felicidade que uma boa música nos
          traz.
        </p>

        <div
          className="flex flex-col gap-3 md:gap-4 md:flex-row justify-center items-center animate-fade-in-up px-2"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-6 py-3 md:px-8 bg-black/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 w-full md:w-auto text-base md:text-lg"
            onClick={handleOpenSpotify}
          >
            <Music className="w-5 h-5 mr-2" />
            Ouça no Spotify
          </Button>
        </div>
      </div>
    </section>
  );
}
