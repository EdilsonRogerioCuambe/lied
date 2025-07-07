import { Calendar, MapPin, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Shows() {
  const shows = [
    {
      date: "15 JUL",
      title: "Festival de Verão Salvador",
      location: "Salvador, BA",
      venue: "Arena Fonte Nova",
      price: "A partir de R$ 80",
      status: "available",
    },
    {
      date: "22 JUL",
      title: "Pagode na Praia",
      location: "Rio de Janeiro, RJ",
      venue: "Praia de Copacabana",
      price: "A partir de R$ 60",
      status: "available",
    },
    {
      date: "05 AGO",
      title: "Festa do Peão",
      location: "São Paulo, SP",
      venue: "Parque do Anhembi",
      price: "A partir de R$ 100",
      status: "soldout",
    },
    {
      date: "12 AGO",
      title: "Pagode no Parque",
      location: "Belo Horizonte, MG",
      venue: "Parque Municipal",
      price: "A partir de R$ 70",
      status: "available",
    },
  ]

  return (
    <section id="shows" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Próximos <span className="text-red-500">Shows</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Não perca a oportunidade de curtir o melhor do pagode ao vivo. Garante já o seu ingresso!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {shows.map((show, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-600/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-red-500 font-bold text-lg mb-2">{show.date}</div>
                    <CardTitle className="text-white text-xl mb-2">{show.title}</CardTitle>
                    <div className="flex items-center text-gray-400 mb-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {show.location}
                    </div>
                    <div className="text-gray-500 text-sm">{show.venue}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold mb-2">{show.price}</div>
                    {show.status === "soldout" && <span className="text-red-500 text-sm font-medium">ESGOTADO</span>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className={`w-full ${
                    show.status === "soldout"
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 text-white"
                  }`}
                  disabled={show.status === "soldout"}
                >
                  <Ticket className="mr-2 h-4 w-4" />
                  {show.status === "soldout" ? "Esgotado" : "Comprar Ingresso"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-transparent"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Ver Todos os Shows
          </Button>
        </div>
      </div>
    </section>
  )
}
