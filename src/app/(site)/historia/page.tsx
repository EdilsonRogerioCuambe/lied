import { Calendar, Award, Music, Users, Star, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HistoriaPage() {
  const timeline = [
    {
      year: "2016",
      title: "Formação do Grupo",
      description:
        "O Grupo LIED nasce da paixão de cinco amigos pelo pagode autêntico, com o sonho de levar alegria através da música.",
      icon: Users,
      color: "bg-red-600",
    },
    {
      year: "2017",
      title: "Primeiro Show",
      description:
        "Estreia oficial em um bar na zona sul de São Paulo, conquistando o público com interpretações únicas dos clássicos do pagode.",
      icon: Music,
      color: "bg-orange-600",
    },
    {
      year: "2018",
      title: "Primeira Composição",
      description:
        "Lançamento da primeira música autoral 'Nosso Amor', que rapidamente se tornou um sucesso nas rádios locais.",
      icon: Heart,
      color: "bg-pink-600",
    },
    {
      year: "2019",
      title: "Reconhecimento Regional",
      description:
        "Participação em festivais importantes de São Paulo e interior, consolidando a presença no cenário paulista.",
      icon: Star,
      color: "bg-yellow-600",
    },
    {
      year: "2020",
      title: "Era Digital",
      description:
        "Adaptação ao formato digital durante a pandemia, com lives que alcançaram milhares de visualizações.",
      icon: Calendar,
      color: "bg-blue-600",
    },
    {
      year: "2021",
      title: "Primeiro Álbum",
      description:
        "Lançamento do álbum 'Raízes do Pagode' com 12 faixas autorais, marcando a maturidade artística do grupo.",
      icon: Award,
      color: "bg-green-600",
    },
    {
      year: "2022",
      title: "Expansão Nacional",
      description: "Turnê nacional com shows em mais de 15 estados, levando o pagode LIED para todo o Brasil.",
      icon: Music,
      color: "bg-purple-600",
    },
    {
      year: "2023",
      title: "Grandes Festivais",
      description: "Participação em festivais de grande porte como Rock in Rio e Festival de Inverno de Bonito.",
      icon: Star,
      color: "bg-indigo-600",
    },
    {
      year: "2024",
      title: "Consolidação",
      description:
        "Mais de 200 shows realizados, 50 mil seguidores nas redes sociais e reconhecimento como uma das principais bandas de pagode do país.",
      icon: Award,
      color: "bg-red-600",
    },
  ]

  const achievements = [
    {
      title: "200+ Shows Realizados",
      description: "Mais de 200 apresentações em todo o Brasil",
      icon: Music,
    },
    {
      title: "50K+ Seguidores",
      description: "Comunidade fiel nas redes sociais",
      icon: Users,
    },
    {
      title: "15+ Composições Autorais",
      description: "Repertório próprio consolidado",
      icon: Heart,
    },
    {
      title: "8 Anos de Estrada",
      description: "Experiência e maturidade artística",
      icon: Calendar,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-black via-red-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Nossa História
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Uma jornada de 8 anos levando o melhor do pagode brasileiro para todo o país
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Linha do <span className="text-red-500">Tempo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Acompanhe os principais marcos da trajetória do Grupo LIED
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                {/* Timeline line */}
                {index !== timeline.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-700" />}

                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-full flex items-center justify-center mr-6 z-10`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <Card className="flex-1 bg-gray-900 border-gray-800 hover:border-red-600/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                      <span className="text-red-500 font-bold text-lg">{item.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nossas <span className="text-red-500">Conquistas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Números que representam nossa dedicação e o carinho do público
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 text-center hover:border-red-600/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
              A <span className="text-red-500">Essência</span> do LIED
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Nossas Raízes</h3>
                <p className="text-gray-300 mb-4">
                  O Grupo LIED nasceu da união de cinco amigos apaixonados pelo pagode tradicional. Cada integrante
                  trouxe sua experiência musical única, criando uma sonoridade que respeita as raízes do gênero enquanto
                  adiciona elementos contemporâneos.
                </p>
                <p className="text-gray-300 mb-4">
                  Nosso nome &quot;LIED&quot; representa a união e a harmonia que buscamos não apenas na música, mas também na
                  vida. É essa filosofia que nos guia desde o primeiro acorde até os grandes palcos que pisamos hoje.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-1">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <Music className="h-24 w-24 text-red-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-square bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-1">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <Heart className="h-24 w-24 text-red-500" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-white mb-6">Nossa Missão</h3>
                <p className="text-gray-300 mb-4">
                  Acreditamos que o pagode é mais que música - é cultura, é história, é emoção. Nossa missão é manter
                  viva essa tradição, levando alegria e união para onde quer que vamos.
                </p>
                <p className="text-gray-300 mb-4">
                  Cada show é uma celebração da vida, do amor e da amizade. Queremos que nosso público sinta a mesma
                  paixão que sentimos ao subir no palco, criando momentos inesquecíveis juntos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
