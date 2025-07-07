import { Button } from "@/components/ui/button"
import { Play, Music } from "lucide-react"


export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-red-950/20 to-black overflow-hidden"
    >
            {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&h=1080&q=80)`,
          opacity: 0.3,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-red-500/30 animate-pulse">
            <Music className="h-16 w-16 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-fade-in-up">
          GRUPO LIED
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          O melhor do pagode brasileiro com muito swing e energia. Venha viver momentos únicos com a gente!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30">
            <Music className="mr-2 h-5 w-5" />
            Próximos Shows
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Ouça Agora
          </Button>
        </div>
      </div>
    </section>
  )
}
