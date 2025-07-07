"use client"

import { ShoppingCart, Star, BadgePercent, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { faker } from '@faker-js/faker';
import { useState } from 'react';

export function Merchandise() {
  const [added, setAdded] = useState<number | null>(null);
  const products = [
    {
      name: "Camiseta Oficial LIED",
      price: "R$ 49,90",
      oldPrice: "R$ 69,90",
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      thumbs: [faker.image.urlPicsumPhotos({ width: 60, height: 60 }), faker.image.urlPicsumPhotos({ width: 60, height: 60 })],
      rating: 4.8,
      reviews: 124,
      badge: Math.random() > 0.5 ? "Novo" : "Mais Vendido",
      freeShipping: Math.random() > 0.7,
    },
    {
      name: "Boné Snapback LIED",
      price: "R$ 39,90",
      oldPrice: "R$ 49,90",
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      thumbs: [faker.image.urlPicsumPhotos({ width: 60, height: 60 }), faker.image.urlPicsumPhotos({ width: 60, height: 60 })],
      rating: 4.9,
      reviews: 89,
      badge: Math.random() > 0.5 ? "Novo" : "Mais Vendido",
      freeShipping: Math.random() > 0.7,
    },
    {
      name: "Moletom Grupo LIED",
      price: "R$ 89,90",
      oldPrice: "R$ 109,90",
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      thumbs: [faker.image.urlPicsumPhotos({ width: 60, height: 60 }), faker.image.urlPicsumPhotos({ width: 60, height: 60 })],
      rating: 4.7,
      reviews: 156,
      badge: Math.random() > 0.5 ? "Novo" : "Mais Vendido",
      freeShipping: Math.random() > 0.7,
    },
    {
      name: "Caneca Personalizada",
      price: "R$ 24,90",
      oldPrice: "R$ 34,90",
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      thumbs: [faker.image.urlPicsumPhotos({ width: 60, height: 60 }), faker.image.urlPicsumPhotos({ width: 60, height: 60 })],
      rating: 4.6,
      reviews: 67,
      badge: Math.random() > 0.5 ? "Novo" : "Mais Vendido",
      freeShipping: Math.random() > 0.7,
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
              className="bg-gray-900 border-gray-800 hover:border-red-600/50 transition-all hover:scale-105 shadow-xl relative"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.badge === 'Novo' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-black'} shadow-md flex items-center gap-1`}>
                  {product.badge === 'Novo' ? <Flame className="h-3 w-3" /> : <BadgePercent className="h-3 w-3" />} {product.badge}
                </span>
              </div>
              {/* Free shipping badge */}
              {product.freeShipping && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md">Frete Grátis</span>
                </div>
              )}
              <CardHeader className="p-0">
                <div className="aspect-square bg-gray-800 rounded-t-lg overflow-hidden relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Miniaturas */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {product.thumbs.map((thumb, i) => (
                      <img key={i} src={thumb} alt="Miniatura" className="w-8 h-8 rounded border-2 border-white shadow" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-white text-lg mb-2 flex items-center gap-2">
                  {product.name}
                </CardTitle>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-gray-300 text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-red-500 font-bold text-xl mr-2">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
                  </div>
                  <Button
                    size="sm"
                    className={`bg-red-600 hover:bg-red-700 transition-all ${added === index ? 'bg-green-600 pointer-events-none' : ''}`}
                    onClick={() => {
                      setAdded(index);
                      setTimeout(() => setAdded(null), 1200);
                    }}
                  >
                    {added === index ? 'Adicionado!' : <ShoppingCart className="h-4 w-4" />}
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
