import { Music, Guitar, Mic, Drum } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MembrosPage() {
  const members = [
    {
      name: "Rafael Santos",
      role: "Vocalista Principal",
      instrument: "Voz",
      bio: "Com mais de 15 anos de experiência no pagode, Rafael é a voz marcante do Grupo LIED. Sua paixão pela música começou ainda na adolescência, cantando em rodas de samba da família.",
      specialties: ["Composição", "Interpretação", "Harmonia Vocal"],
      icon: Mic,
      image: "/placeholder.svg?height=400&width=400",
      joinedYear: "2016",
    },
    {
      name: "Carlos Oliveira",
      role: "Cavaquinista",
      instrument: "Cavaquinho",
      bio: "Carlos é o responsável pelos arranjos harmônicos únicos do grupo. Formado em música popular, traz técnica e criatividade para cada composição.",
      specialties: ["Arranjos", "Harmonia", "Improvisação"],
      icon: Guitar,
      image: "/placeholder.svg?height=400&width=400",
      joinedYear: "2016",
    },
    {
      name: "Bruno Lima",
      role: "Percussionista",
      instrument: "Pandeiro e Percussão",
      bio: "O coração rítmico do LIED. Bruno domina diversos instrumentos de percussão e é responsável pela pegada única que caracteriza o som da banda.",
      specialties: ["Pandeiro", "Surdo", "Repique"],
      icon: Drum,
      image: "/placeholder.svg?height=400&width=400",
      joinedYear: "2016",
    },
    {
      name: "Diego Ferreira",
      role: "Baixista",
      instrument: "Baixo Acústico",
      bio: "A base sólida do grupo. Diego combina técnica apurada com groove contagiante, criando a fundação perfeita para o som do LIED.",
      specialties: ["Baixo Acústico", "Groove", "Arranjos de Base"],
      icon: Music,
      image: "/placeholder.svg?height=400&width=400",
      joinedYear: "2017",
    },
    {
      name: "Lucas Rodrigues",
      role: "Violonista",
      instrument: "Violão 7 Cordas",
      bio: "Mestre do violão de 7 cordas, Lucas adiciona sofisticação harmônica e melódica às composições, sendo também um dos principais compositores do grupo.",
      specialties: ["Violão 7 Cordas", "Composição", "Arranjos"],
      icon: Guitar,
      image: "/placeholder.svg?height=400&width=400",
      joinedYear: "2016",
    },
  ]

  const bandStats = [
    { label: "Integrantes", value: "5" },
    { label: "Anos Juntos", value: "8+" },
    { label: "Instrumentos", value: "12+" },
    { label: "Composições", value: "15+" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-black via-red-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Nossos Membros
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Conheça os talentos que fazem a magia do Grupo LIED acontecer
            </p>
          </div>
        </div>
      </section>

      {/* Band Stats */}
      <section className="py-16 bg-gradient-to-b from-red-950/10 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {bandStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Conheça Cada <span className="text-red-500">Integrante</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cada membro traz sua personalidade única para criar o som inconfundível do LIED
            </p>
          </div>

          <div className="space-y-16">
            {members.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-square bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-1">
                    <div className="w-full h-full bg-gray-800 rounded-xl overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Floating icon */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <CardTitle className="text-white text-3xl mb-2">{member.name}</CardTitle>
                          <p className="text-red-500 font-semibold text-lg">{member.role}</p>
                          <p className="text-gray-400">Instrumento: {member.instrument}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 text-sm">No grupo desde</p>
                          <p className="text-white font-bold text-xl">{member.joinedYear}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Especialidades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm border border-red-600/30"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Spirit Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Mais que uma Banda, uma <span className="text-red-500">Família</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              O que torna o Grupo LIED especial não é apenas o talento individual de cada membro, mas a química única
              que surge quando tocamos juntos. Somos amigos antes de sermos músicos, e essa amizade genuína transparece
              em cada nota, em cada show, em cada momento que compartilhamos com nosso público.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Nossa diversidade musical e pessoal é nossa força. Cada integrante contribui com sua experiência única,
              criando um som que é verdadeiramente nosso - autêntico, emocionante e sempre surpreendente.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
