import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Merchandise() {
  const products = [
    {
      name: "Camiseta Oficial LIED",
      price: "R$ 49,90",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
    },
    {
      name: "Boné Snapback LIED",
      price: "R$ 39,90",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
    },
    {
      name: "Moletom Grupo LIED",
      price: "R$ 89,90",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
    },
    {
      name: "Caneca Personalizada",
      price: "R$ 24,90",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 67,
    },
  ]

  return (
    <section id="merchandise" className="py-20 bg-gradient-to-b from-red-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Loja <span className="text-red-500">Oficial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vista a camisa do seu grupo favorito! Produtos oficiais com qualidade e estilo para você mostrar seu amor
            pelo pagode.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-red-600/50 transition-all hover:scale-105"
            >
              <CardHeader className="p-0">
                <div className="aspect-square bg-gray-800 rounded-t-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-white text-lg mb-2">{product.name}</CardTitle>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-gray-300 text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-500 font-bold text-xl">{product.price}</span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Ver Toda a Loja
          </Button>
        </div>
      </div>
    </section>
  )
}
