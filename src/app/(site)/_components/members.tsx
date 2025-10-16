import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Drum, Guitar, Mic } from "lucide-react";
import Image from "next/image";

export default function Members() {
  const members = [
    {
      name: "Tony",
      role: "Cavaquinista e Administração",
      instrument: "Cavaquinho",
      bio: "Sou o Tony. Participei da formação do grupo e estou desde o início. Toco cavaquinho e cuido da administração. Comecei na música ainda criança, influenciado pelo meu padrinho (que me deu o primeiro pandeiro) e, logo depois, pelo meu pai, que me presenteou com um cavaquinho que guardo até hoje. Aos 13/14 anos passei por grupos da cidade, dei uma pausa para estudar outra área e retornei como free‑lancer até me juntar ao LIED.",
      specialties: ["Cavaquinho", "Administração", "Arranjos"],
      icon: Guitar,
      image: "/images/TONY_5.png",
      joinedYear: "2016",
    },
    {
      name: "PET (REC)",
      role: "MC e Vocal",
      instrument: "Voz",
      bio: "Sou o PET (REC). Cresci no ambiente do samba com meus tios, que tinham um grupo e me levaram para as rodas desde cedo. Tentei cavaco e pandeiro no começo, ouvi que faltava ritmo, mas insisti. Mais tarde me apaixonei pelo rap: passei a escrever, rimar e cantar. Hoje trago essa mistura do rap com o samba para o LIED.",
      specialties: ["Rap", "Composição", "Performance"],
      icon: Mic,
      image: "/gallery/galeria_20.jpg",
      joinedYear: "2016",
    },
    {
      name: "Augusto Cícero (WK)",
      role: "Percussão Geral",
      instrument: "Percussão Geral",
      bio: "Sou o Augusto Cícero da Silva, o WK. Comecei aos 9 anos tocando reco com meu pai e os amigos dele. Tive vários professores (e meu pai) que me passaram base e linguagem de percussão. De tatazinho a pandeiro, fui ampliando para percussão geral. Toquei em vários grupos da cidade, fiz freelas, conheci o LIED, já fui da banda e hoje sou da capa, assinando a percussão geral.",
      specialties: ["Percussão Geral", "Pandeiro", "Groove"],
      icon: Drum,
      image: "/gallery/galeria_dez.jpg",
      joinedYear: "2016",
    },
    {
      name: "Tiago",
      role: "Vocalista",
      instrument: "Voz",
      bio: "Meu nome artístico é Tiago Fizan. Tive contato com a música ainda pequeno, aos seis anos, e cantei no coral da escola. Na igreja, com minha mãe, fortalecei a voz e a presença. Passei por dois grupos, iniciei carreira solo e hoje, há cerca de nove meses no LIED, trago a voz como meu principal instrumento.",
      specialties: ["Voz", "Interpretação", "Coral"],
      icon: Mic,
      image: "/gallery/galeria_um.jpg",
      joinedYear: "2024",
    },
  ];

  const bandStats = [
    { label: "Integrantes", value: "5" },
    { label: "Anos Juntos", value: "6" },
    { label: "Instrumentos", value: "12+" },
    { label: "Composições", value: "15+" },
  ];

  return (
    <section className="min-h-screen bg-black text-white" id="membros">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-600">
              Nossos Membros
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Conheça os talentos que fazem a magia do Grupo LIED acontecer
            </p>
          </div>
        </div>
      </section>

      {/* Band Stats */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {bandStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">
                  {stat.value}
                </div>
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
              Cada membro traz sua personalidade única para criar o som
              inconfundível do LIED
            </p>
          </div>

          <div className="space-y-16">
            {members.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-square border-2 border-red-600 bg-stone-900 rounded-2xl p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden selection:none pointer-events-none">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover selection:none pointer-events-none"
                        width={400}
                        height={400}
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
                  <Card className="bg-stone-900/50 border border-stone-700 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <CardTitle className="text-white text-3xl mb-2">
                            {member.name}
                          </CardTitle>
                          <p className="text-red-500 font-semibold text-lg">
                            {member.role}
                          </p>
                          <p className="text-stone-400">
                            Instrumento: {member.instrument}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-stone-400 text-sm">
                            No grupo desde
                          </p>
                          <p className="text-white font-bold text-xl">
                            {member.joinedYear}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-stone-300 mb-6 leading-relaxed">
                        {member.bio}
                      </p>

                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          Especialidades:
                        </h4>
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
              Mais que uma Banda, uma{" "}
              <span className="text-red-500">Família</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              O que torna o Grupo LIED especial não é apenas o talento
              individual de cada membro, mas a química única que surge quando
              tocamos juntos. Somos amigos antes de sermos músicos, e essa
              amizade genuína transparece em cada nota, em cada show, em cada
              momento que compartilhamos com nosso público.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Nossa diversidade musical e pessoal é nossa força. Cada integrante
              contribui com sua experiência única, criando um som que é
              verdadeiramente nosso - autêntico, emocionante e sempre
              surpreendente.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
