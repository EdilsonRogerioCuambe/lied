import { Heart, Music, Star, Users } from "lucide-react";
import Image from "next/image";

export function About() {
  const stats = [
    { icon: Users, label: "Seguidores", value: "40K+" },
    { icon: Music, label: "Shows", value: "200+" },
    { icon: Heart, label: "Anos", value: "5+" },
    { icon: Star, label: "Sucessos", value: "15+" },
  ];

  return (
    <section id="about" className="md:py-20 py-14 bg-black">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sobre o{" "}
            <span className="text-red-500 relative">
              Grupo LIED
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desde 2019, o Grupo LIED se conecta com seu público através da
            alegria e emoção. É como uma poesia que emociona, ligada à
            felicidade que uma boa música nos traz.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 relative">
                Nossa História
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Com um público jovem de 20 a 30 anos na Grande São Paulo, o
                  grupo interage de forma constante e inteligente em suas mídias
                  sociais, somando mais de 40 mil seguidores.
                </p>

                <p>
                  Seu single de maior sucesso,{" "}
                  <span className="text-red-400 font-semibold">
                    &quot;Maloqueiro Apaixonado&quot;
                  </span>
                  , com participação de Mc Balbuena (compositor da série
                  Sintonia da Netflix), é o mais cantado nos shows. Músicas como{" "}
                  <span className="text-red-400 font-semibold">
                    &quot;Zero Vontade&quot;
                  </span>{" "}
                  e{" "}
                  <span className="text-red-400 font-semibold">
                    &quot;Que Bom Seria&quot;
                  </span>{" "}
                  também se destacam nas plataformas digitais.
                </p>

                <p>
                  Com um repertório que mescla autorais e sucessos consagrados,
                  o show do Grupo LIED é sempre de grande aceitação, repleto de
                  profissionalismo, respeito ao público e dedicação à música.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-red-950/30 to-stone-900/30 backdrop-blur-sm rounded-xl p-6 border border-red-900/20">
              <h4 className="text-xl font-bold text-white mb-4">Destaques</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Mais de 200 shows realizados
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Participação em série da Netflix
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Forte presença nas redes sociais
                </li>
              </ul>
            </div>
          </div>

          {/* Image Section - Melhorada com mais largura */}
          <div className="lg:col-span-3 relative">
            {/* Background decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-red-800/20 rounded-3xl blur-xl"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-1 shadow-2xl">
              <div className="relative w-full aspect-[16/10] bg-stone-900 rounded-xl overflow-hidden">
                <Image
                  src="/images/FOTO4.png"
                  alt="Foto da banda Grupo Lied"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                  priority
                />

                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Optional: Band name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="text-white font-bold text-lg">Grupo LIED</h4>
                    <p className="text-gray-300 text-sm">
                      Conectando através da música
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
