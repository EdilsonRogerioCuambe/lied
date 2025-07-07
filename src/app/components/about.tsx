import { Users, Music, Heart, Star } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, label: "Fãs", value: "50K+" },
    { icon: Music, label: "Shows", value: "200+" },
    { icon: Heart, label: "Anos", value: "8+" },
    { icon: Star, label: "Sucessos", value: "15+" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-red-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sobre o <span className="text-red-500">Grupo LIED</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nascido da paixão pelo pagode autêntico, o Grupo LIED conquistou o coração dos brasileiros com seu som único
            que mistura tradição e modernidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Nossa História</h3>
            <p className="text-gray-300 mb-4">
              Formado em 2016, o Grupo LIED rapidamente se destacou no cenário do pagode nacional com suas composições
              autorais e interpretações marcantes dos grandes clássicos.
            </p>
            <p className="text-gray-300 mb-4">
              Com mais de 8 anos de estrada, já realizamos centenas de shows por todo o Brasil, levando alegria e emoção
              para milhares de fãs que cantam nossas músicas de cor.
            </p>
            <p className="text-gray-300">
              Nossa missão é manter viva a essência do pagode, sempre com muito respeito às raízes e inovação para as
              novas gerações.
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
      </div>
    </section>
  )
}
