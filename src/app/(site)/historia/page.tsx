import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, Heart, Music, Star, Users } from "lucide-react";

export default function HistoriaPage() {
  const timeline = [
    {
      year: "2016",
      title: "Formação e Primeiros Ensaios",
      description:
        "Início do LIED com ensaios entre amigos em São Paulo. Tony assume o cavaquinho e a administração; WK na percussão geral; PET traz a influência do rap e do samba; formação ganha corpo.",
      icon: Users,
      color: "bg-red-600",
    },
    {
      year: "2017-2019",
      title: "Palcos da Cidade",
      description:
        "Série de apresentações em casas de show e eventos da região metropolitana de São Paulo, consolidando repertório e presença de palco.",
      icon: Music,
      color: "bg-orange-600",
    },
    {
      year: "2020-2021",
      title: "Expansão e Conteúdo",
      description:
        "Produção de conteúdos digitais e crescimento nas redes, com vídeos e clipes que aumentam o alcance do grupo.",
      icon: Heart,
      color: "bg-pink-600",
    },
    {
      year: "2022-2023",
      title: "Reconhecimento Regional",
      description:
        "Participações em festivais e eventos no estado de São Paulo e interior, ampliando a base de fãs e agenda.",
      icon: Star,
      color: "bg-yellow-600",
    },
    {
      year: "2024",
      title: "Novas Vozes",
      description:
        "Entrada do vocalista Tiago Fizan, agregando potência vocal e novas possibilidades de arranjos.",
      icon: Calendar,
      color: "bg-blue-600",
    },
    {
      year: "2024",
      title: "Clipe e Reels",
      description:
        "Lançamento de materiais audiovisuais, incluindo clipe oficial e conteúdos em formato vertical (reels).",
      icon: Award,
      color: "bg-green-600",
    },
    {
      year: "2025",
      title: "Presente",
      description:
        "Agenda ativa, presença digital e fortalecimento da base de fãs. Próximos passos incluem novas músicas e parcerias.",
      icon: Music,
      color: "bg-purple-600",
    },
  ];

  const achievements = [
    {
      title: "Agenda Ativa",
      description: "Apresentações frequentes na Grande São Paulo",
      icon: Music,
    },
    {
      title: "19,5K+ Seguidores",
      description: "Instagram + YouTube",
      icon: Users,
    },
    {
      title: "Conteúdo em Vídeo",
      description: "Clipe oficial e reels publicados",
      icon: Heart,
    },
    {
      title: "Desde 2016",
      description: "Experiência e evolução contínua",
      icon: Calendar,
    },
  ];

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
              Uma jornada de mais de 5 anos levando o melhor do pagode
              brasileiro para todo o país
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
              <div
                key={index}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-700" />
                )}

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
                      <CardTitle className="text-white text-xl">
                        {item.title}
                      </CardTitle>
                      <span className="text-red-500 font-bold text-lg">
                        {item.year}
                      </span>
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
                  <h3 className="text-white font-bold text-xl mb-2">
                    {achievement.title}
                  </h3>
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
                <h3 className="text-3xl font-bold text-white mb-6">
                  Nossas Raízes
                </h3>
                <p className="text-gray-300 mb-4">
                  O Grupo LIED nasceu da união de cinco amigos apaixonados pelo
                  pagode tradicional. Cada integrante trouxe sua experiência
                  musical única, criando uma sonoridade que respeita as raízes
                  do gênero enquanto adiciona elementos contemporâneos.
                </p>
                <p className="text-gray-300 mb-4">
                  Nosso nome &quot;LIED&quot; representa a união e a harmonia
                  que buscamos não apenas na música, mas também na vida. É essa
                  filosofia que nos guia desde o primeiro acorde até os grandes
                  palcos que pisamos hoje.
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
                <h3 className="text-3xl font-bold text-white mb-6">
                  Nossa Missão
                </h3>
                <p className="text-gray-300 mb-4">
                  Acreditamos que o pagode é mais que música - é cultura, é
                  história, é emoção. Nossa missão é manter viva essa tradição,
                  levando alegria e união para onde quer que vamos.
                </p>
                <p className="text-gray-300 mb-4">
                  Cada show é uma celebração da vida, do amor e da amizade.
                  Queremos que nosso público sinta a mesma paixão que sentimos
                  ao subir no palco, criando momentos inesquecíveis juntos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
