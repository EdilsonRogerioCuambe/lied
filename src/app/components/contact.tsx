"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  ExternalLink,
  Instagram,
  Mail,
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
      followers: "45K",
      description: "Fotos e stories dos nossos shows",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@grupolied",
      followers: "12K",
      description: "Vídeos completos e clipes musicais",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Music,
      label: "Spotify",
      href: "https://open.spotify.com/artist/grupolied",
      followers: "8K",
      description: "Nossa discografia completa",
      color: "from-green-500 to-green-600",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(11) 99999-9999",
      href: "https://wa.me/5511999999999",
      description: "Contratações e informações",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@grupolied.com.br",
      href: "mailto:contato@grupolied.com.br",
      description: "Contato comercial",
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
            <Card className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800">
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
                    className="group p-3 md:p-4 lg:p-6 bg-stone-800/50 rounded-xl hover:bg-stone-800/70 transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] cursor-pointer active:scale-[0.99]"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                          <social.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-white font-semibold text-sm md:text-lg group-hover:text-red-400 transition-colors">
                              {social.label}
                            </h4>
                            <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-gray-500 group-hover:text-red-400 transition-colors" />
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs md:text-sm">
                            <span className="text-red-400 font-medium">
                              {social.followers} seguidores
                            </span>
                            <span className="hidden sm:inline text-gray-500">
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
                        className={`bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg flex-shrink-0 text-xs md:text-sm px-2 md:px-3`}
                      >
                        Seguir
                      </Button>
                    </div>
                  </div>
                ))}
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
                      window.open("https://wa.me/5511999999999", "_blank")
                    }
                  >
                    <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:text-black font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm md:text-base"
                    onClick={() =>
                      window.open("mailto:contato@grupolied.com.br", "_blank")
                    }
                  >
                    <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    E-mail
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
