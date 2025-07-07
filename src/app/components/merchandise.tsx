"use client"

import { ShoppingCart, Star, BadgePercent, Flame, Heart, Eye, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { faker } from "@faker-js/faker"
import { useState } from "react"

export function Merchandise() {
  const [added, setAdded] = useState<number | null>(null)
  const [liked, setLiked] = useState<Set<number>>(new Set())
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const products = [
    {
      name: "Camiseta Oficial LIED",
      price: "R$ 49,90",
      oldPrice: "R$ 69,90",
      image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      hoverImage: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      rating: 4.8,
      reviews: 124,
      badge: "Mais Vendido",
      freeShipping: true,
      discount: 28,
      colors: ["#000000", "#FFFFFF", "#DC2626"],
      sizes: ["P", "M", "G", "GG"],
    },
    {
      name: "Boné Snapback LIED",
      price: "R$ 39,90",
      oldPrice: "R$ 49,90",
      image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      hoverImage: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      rating: 4.9,
      reviews: 89,
      badge: "Novo",
      freeShipping: false,
      discount: 20,
      colors: ["#000000", "#DC2626", "#1F2937"],
      sizes: ["Único"],
    },
    {
      name: "Moletom Grupo LIED",
      price: "R$ 89,90",
      oldPrice: "R$ 109,90",
      image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      hoverImage: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      rating: 4.7,
      reviews: 156,
      badge: "Limitado",
      freeShipping: true,
      discount: 18,
      colors: ["#000000", "#DC2626", "#374151"],
      sizes: ["P", "M", "G", "GG", "XG"],
    },
    {
      name: "Caneca Personalizada",
      price: "R$ 24,90",
      oldPrice: "R$ 34,90",
      image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      hoverImage: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      rating: 4.6,
      reviews: 67,
      badge: "Promoção",
      freeShipping: false,
      discount: 29,
      colors: ["#FFFFFF", "#000000", "#DC2626"],
      sizes: ["300ml"],
    },
    {
      name: "Regata Premium LIED",
      price: "R$ 35,90",
      oldPrice: "R$ 45,90",
      image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      hoverImage: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      rating: 4.5,
      reviews: 92,
      badge: "Verão",
      freeShipping: true,
      discount: 22,
      colors: ["#FFFFFF", "#000000", "#DC2626", "#1F2937"],
      sizes: ["P", "M", "G", "GG"],
    },
    {
      name: "Chaveiro Oficial",
      price: "R$ 12,90",
      oldPrice: "R$ 19,90",
      image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      hoverImage: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      rating: 4.4,
      reviews: 203,
      badge: "Acessório",
      freeShipping: false,
      discount: 35,
      colors: ["#DC2626", "#000000", "#FFD700"],
      sizes: ["Único"],
    },
  ]

  const handleLike = (index: number) => {
    const newLiked = new Set(liked)
    if (newLiked.has(index)) {
      newLiked.delete(index)
    } else {
      newLiked.add(index)
    }
    setLiked(newLiked)
  }

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "Novo":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white"
      case "Mais Vendido":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
      case "Limitado":
        return "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
      case "Promoção":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white"
      case "Verão":
        return "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
      case "Acessório":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
    }
  }

  return (
    <section id="merchandise" className="py-20 bg-gradient-to-b from-red-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Loja <span className="text-red-500">Oficial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vista a camisa do seu grupo favorito! Produtos oficiais com qualidade premium e estilo único para você
            mostrar seu amor pelo pagode.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                {/* Main Image */}
                <img
                  src={hoveredCard === index ? product.hoverImage : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 ${getBadgeStyle(product.badge)}`}
                  >
                    {product.badge === "Novo" && <Flame className="h-3 w-3" />}
                    {product.badge === "Mais Vendido" && <BadgePercent className="h-3 w-3" />}
                    {product.badge}
                  </span>
                  {product.discount > 0 && (
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-lg">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Free Shipping Badge */}
                {product.freeShipping && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-600 text-white shadow-lg flex items-center gap-1">
                      <Truck className="h-3 w-3" />
                      Frete Grátis
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                  <button
                    onClick={() => handleLike(index)}
                    className={`w-12 h-12 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${liked.has(index) ? "bg-red-500/80 text-white" : "bg-black/40 text-white hover:bg-red-500/60"
                      }`}
                  >
                    <Heart className={`h-5 w-5 ${liked.has(index) ? "fill-current" : ""}`} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>

                {/* Color Options */}
                <div className="absolute bottom-3 left-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                {/* Product Name */}
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-red-400 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                          }`}
                      />
                    ))}
                    <span className="text-gray-300 text-sm ml-2">{product.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews} avaliações)</span>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-2">Tamanhos disponíveis:</p>
                  <div className="flex gap-1 flex-wrap">
                    {product.sizes.map((size, sizeIndex) => (
                      <span
                        key={sizeIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700 hover:border-red-500 transition-colors cursor-pointer"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-bold text-xl">{product.price}</span>
                      <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
                    </div>
                    {product.freeShipping && <span className="text-green-400 text-xs font-medium">Frete grátis</span>}
                  </div>

                  <Button
                    size="sm"
                    className={`transition-all duration-300 ${added === index
                      ? "bg-green-600 hover:bg-green-700 pointer-events-none"
                      : "bg-red-600 hover:bg-red-700 hover:scale-105"
                      }`}
                    onClick={() => {
                      setAdded(index)
                      setTimeout(() => setAdded(null), 2000)
                    }}
                  >
                    {added === index ? (
                      <span className="flex items-center gap-2">✓ Adicionado!</span>
                    ) : (
                      <ShoppingCart className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 hover:scale-105 transition-all"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ver Toda a Loja
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-transparent px-8 py-3 hover:scale-105 transition-all"
            >
              Catálogo Completo
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Mais de 50 produtos oficiais • Entrega para todo o Brasil • Garantia de qualidade
          </p>
        </div>
      </div>
    </section>
  )
}
