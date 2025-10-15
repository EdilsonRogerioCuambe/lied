import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Ticket, Users } from "lucide-react";

export function Shows() {
  const shows = [
    {
      date: "15 JUL",
      title: "Festival de Verão Salvador",
      location: "Salvador, BA",
      venue: "Arena Fonte Nova",
      price: "A partir de R$ 80",
      status: "available",
      time: "20:00",
      capacity: "Limited",
    },
    {
      date: "22 JUL",
      title: "Pagode na Praia",
      location: "Rio de Janeiro, RJ",
      venue: "Praia de Copacabana",
      price: "A partir de R$ 60",
      status: "available",
      time: "19:30",
      capacity: "Available",
    },
    {
      date: "05 AGO",
      title: "Festa do Peão",
      location: "São Paulo, SP",
      venue: "Parque do Anhembi",
      price: "A partir de R$ 100",
      status: "soldout",
      time: "21:00",
      capacity: "Sold Out",
    },
    {
      date: "12 AGO",
      title: "Pagode no Parque",
      location: "Belo Horizonte, MG",
      venue: "Parque Municipal",
      price: "A partir de R$ 70",
      status: "available",
      time: "20:30",
      capacity: "Available",
    },
  ];

  return (
    <section id="shows" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Próximos{" "}
            <span className="text-red-500 relative">
              Shows
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2">
            Não perca a oportunidade de curtir o melhor do pagode ao vivo.
            Garante já o seu ingresso!
          </p>
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {shows.map((show, index) => (
            <Card
              key={index}
              className="group bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    {/* Date Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
                      <Calendar className="h-4 w-4 mr-2" />
                      {show.date}
                    </div>

                    <CardTitle className="text-white text-xl sm:text-2xl mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {show.title}
                    </CardTitle>

                    {/* Location & Venue */}
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-3 text-red-500" />
                        <span className="font-medium">{show.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm ml-7">
                        {show.venue}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-3 text-red-500" />
                        <span>{show.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Status */}
                  <div className="text-left sm:text-right">
                    <div className="text-white font-bold text-lg sm:text-xl mb-2">
                      {show.price}
                    </div>
                    <div className="flex items-center sm:justify-end">
                      <Users className="h-4 w-4 mr-2" />
                      {show.status === "soldout" ? (
                        <span className="text-red-400 text-sm font-semibold bg-red-400/10 px-3 py-1 rounded-full">
                          ESGOTADO
                        </span>
                      ) : (
                        <span className="text-green-400 text-sm font-semibold bg-green-400/10 px-3 py-1 rounded-full">
                          {show.capacity}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-2">
                <Button
                  size="lg"
                  className={`w-full font-semibold transition-all duration-300 ${
                    show.status === "soldout"
                      ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:scale-105"
                  }`}
                  disabled={show.status === "soldout"}
                >
                  <Ticket className="mr-2 h-5 w-5" />
                  {show.status === "soldout"
                    ? "Ingressos Esgotados"
                    : "Garantir Ingresso"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 bg-gradient-to-r from-stone-900/50 to-red-950/20 backdrop-blur-sm rounded-2xl border border-stone-800 mb-8">
            <div className="text-center sm:text-left">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                Não encontrou sua cidade?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Cadastre-se para receber atualizações sobre novos shows
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 bg-transparent backdrop-blur-sm font-semibold px-6 sm:px-8 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Agenda Completa
            </Button>
          </div>

          {/* Newsletter Signup - Optional */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu email para novidades..."
                className="flex-1 px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 whitespace-nowrap">
                Cadastrar
              </Button>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Receba primeiro as novidades sobre shows e lançamentos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
