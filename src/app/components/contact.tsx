"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  ExternalLink,
  Instagram,
  MapPin,
  Music,
  Phone,
  Star,
  Users,
  Youtube,
} from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/grupolied",
      followers: "18,5 mil",
      description: "Fotos e stories dos nossos shows",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@grupolied",
      followers: "1,03 mil",
      description: "Vídeos completos e clipes musicais",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Music,
      label: "Spotify",
      href: "https://open.spotify.com/artist/grupolied",
      followers: "160",
      description: "Nossa discografia completa",
      color: "from-green-500 to-green-600",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 11 98123-1025",
      href: "https://wa.me/5511981231025",
      description: "Contratações e informações",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "https://maps.google.com/?q=São+Paulo,SP",
      description: "Atendemos todo Brasil",
    },
  ];

  const driveInfo = {
    label: "Material Promocional",
    description: "Fotos, vídeos e informações para divulgação",
    href: "https://drive.google.com/drive/folders/LIED",
    icon: "📁",
  };

  // Spotify city insights for progress bars
  const spotifyCities = [
    { city: "São Paulo, BR", listeners: 49 },
    { city: "Rio de Janeiro, BR", listeners: 17 },
    { city: "Porto Alegre, BR", listeners: 12 },
    { city: "Salvador, BR", listeners: 11 },
    { city: "Belo Horizonte, BR", listeners: 11 },
  ];

  return (
    <section id="contact" className="py-8 md:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Entre em{" "}
            <span className="text-red-500 relative">
              Contato
              <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-red-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Quer contratar o Grupo LIED para seu evento? Aqui você encontra
            todas as informações necessárias para fazer uma festa inesquecível!
          </p>
        </div>

        {/* Stats Section - Mobile grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          <div className="text-center p-3 md:p-4 bg-stone-900/50 rounded-lg backdrop-blur-sm border border-stone-800">
            <Users className="h-6 w-6 md:h-8 md:w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg md:text-2xl font-bold text-white">65K+</div>
            <div className="text-gray-400 text-xs md:text-sm">Seguidores</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-stone-900/50 rounded-lg backdrop-blur-sm border border-stone-800">
            <Calendar className="h-6 w-6 md:h-8 md:w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg md:text-2xl font-bold text-white">500+</div>
            <div className="text-gray-400 text-xs md:text-sm">Eventos</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-stone-900/50 rounded-lg backdrop-blur-sm border border-stone-800">
            <Star className="h-6 w-6 md:h-8 md:w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg md:text-2xl font-bold text-white">15+</div>
            <div className="text-gray-400 text-xs md:text-sm">Anos</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-stone-900/50 rounded-lg backdrop-blur-sm border border-stone-800">
            <Music className="h-6 w-6 md:h-8 md:w-8 text-red-500 mx-auto mb-2" />
            <div className="text-lg md:text-2xl font-bold text-white">50+</div>
            <div className="text-gray-400 text-xs md:text-sm">Músicas</div>
          </div>
        </div>

        {/* Main Content - Stacked on mobile, side by side on desktop */}
        <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="text-white text-lg md:text-2xl font-bold flex items-center gap-2 md:gap-3">
                  <Phone className="h-5 w-5 md:h-7 md:w-7 text-red-500" />
                  Informações de Contato
                </CardTitle>
                <p className="text-gray-400 text-sm md:text-base">
                  Entre em contato conosco para contratações e informações
                </p>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group p-3 md:p-4 lg:p-6 bg-stone-800/50 rounded-xl hover:bg-stone-800/70 transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] cursor-pointer active:scale-[0.99]"
                    onClick={() => window.open(contact.href, "_blank")}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <contact.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-semibold text-sm md:text-lg group-hover:text-red-400 transition-colors">
                            {contact.label}
                          </h4>
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-gray-500 group-hover:text-red-400 transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-red-400 font-medium text-sm md:text-base mb-1 break-all md:break-normal">
                          {contact.value}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Google Drive Section */}
            <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="text-white text-lg md:text-2xl font-bold flex items-center gap-2 md:gap-3">
                  <span className="text-lg md:text-2xl">📁</span>
                  Material Promocional
                </CardTitle>
                <p className="text-gray-400 text-sm md:text-base">
                  Acesse nosso Drive com fotos, vídeos e informações
                </p>
              </CardHeader>
              <CardContent>
                <div
                  className="group p-3 md:p-4 lg:p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] cursor-pointer active:scale-[0.99]"
                  onClick={() => window.open(driveInfo.href, "_blank")}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <span className="text-lg md:text-2xl">📁</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-semibold text-sm md:text-lg group-hover:text-blue-400 transition-colors">
                          {driveInfo.label}
                        </h4>
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {driveInfo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-500/5 via-transparent to-red-600/5" />
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="text-white text-lg md:text-2xl font-bold flex items-center gap-2 md:gap-3">
                  <Instagram className="h-5 w-5 md:h-7 md:w-7 text-red-500" />
                  Redes Sociais
                </CardTitle>
                <p className="text-gray-400 text-sm md:text-base">
                  Siga-nos nas redes sociais e fique por dentro de tudo
                </p>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    className="group p-3 md:p-4 lg:p-6 bg-stone-900/60 rounded-2xl border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] cursor-pointer active:scale-[0.99] shadow-sm hover:shadow-red-500/10"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                        <div
                          className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ring-1 ring-white/10`}
                        >
                          <social.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-white font-semibold text-base md:text-lg group-hover:text-red-400 transition-colors">
                              {social.label}
                            </h4>
                            <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-gray-500 group-hover:text-red-400 transition-colors" />
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-600/15 text-red-400 border border-red-600/30 font-medium">
                              {social.followers} seguidores
                            </span>
                            <span className="text-gray-400 hidden sm:inline">
                              •
                            </span>
                            <span className="text-gray-400 text-xs sm:text-sm">
                              {social.description}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg flex-shrink-0 text-xs md:text-sm px-3 md:px-4 rounded-full`}
                      >
                        Seguir
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Spotify Insights */}
            <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-green-600/5" />
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="text-white text-lg md:text-2xl font-bold flex items-center gap-2 md:gap-3">
                  <Music className="h-5 w-5 md:h-7 md:w-7 text-green-500" />
                  Spotify – Insights
                </CardTitle>
                <p className="text-gray-400 text-sm md:text-base">
                  Audiência atual e cidades que mais escutam
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-2xl bg-stone-900/60 border border-stone-700">
                    <p className="text-gray-400 text-xs md:text-sm">
                      Seguidores
                    </p>
                    <p className="text-white text-lg md:text-2xl font-bold">
                      160
                    </p>
                  </div>
                  <div className="p-3 md:p-4 rounded-2xl bg-stone-900/60 border border-stone-700">
                    <p className="text-gray-400 text-xs md:text-sm">
                      Ouvintes mensais
                    </p>
                    <p className="text-white text-lg md:text-2xl font-bold">
                      275
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {spotifyCities.map(({ city, listeners }) => {
                    const max = 49; // maior valor para normalizar
                    const width = Math.max(
                      8,
                      Math.round((listeners / max) * 100)
                    );
                    return (
                      <div key={city} className="">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-white text-sm md:text-base font-medium">
                            {city}
                          </p>
                          <p className="text-gray-400 text-xs md:text-sm">
                            {listeners} ouvintes
                          </p>
                        </div>
                        <div className="h-2.5 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-green-600"
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                  Pronto para Contratar?
                </h3>
                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Entre em contato agora mesmo e vamos transformar seu evento em
                  uma experiência inesquecível!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto text-sm md:text-base"
                    onClick={() =>
                      window.open("https://wa.me/5511981231025", "_blank")
                    }
                  >
                    <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
