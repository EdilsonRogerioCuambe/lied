/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faker } from "@faker-js/faker";
import {
  Award,
  BadgePercent,
  Eye,
  Flame,
  Heart,
  MessageCircle,
  Package,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Merchandise() {
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>(
    {}
  );
  const [products, setProducts] = useState<any[]>([]);

  const handleWhatsAppClick = (productName: string, selectedSize?: string) => {
    const phoneNumber = "5511999999999"; // Substitua pelo número de WhatsApp real
    const sizeText = selectedSize ? ` - Tamanho: ${selectedSize}` : "";
    const message = `Olá! Tenho interesse no produto "${productName}"${sizeText}. Poderia me dar mais informações sobre preço e disponibilidade?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const generateProducts = () => [
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
        category: "clothing",
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
        category: "accessory",
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
        category: "clothing",
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
        category: "accessory",
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
        category: "clothing",
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
        category: "accessory",
      },
    ];
    setProducts(generateProducts());
  }, []);

  const handleLike = (index: number) => {
    const newLiked = new Set(liked);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLiked(newLiked);
  };

  const handleSizeSelect = (productIndex: number, size: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productIndex]: prev[productIndex] === size ? "" : size,
    }));
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "Novo":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white";
      case "Mais Vendido":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black";
      case "Limitado":
        return "bg-gradient-to-r from-purple-500 to-purple-600 text-white";
      case "Promoção":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white";
      case "Verão":
        return "bg-gradient-to-r from-orange-500 to-orange-600 text-white";
      case "Acessório":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white";
    }
  };

  return (
    <section
      id="merchandise"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-red-950/10 via-stone-950 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Loja{" "}
            <span className="text-red-500 relative">
              Oficial
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2">
            Vista a camisa do seu grupo favorito! Produtos oficiais com
            qualidade premium e estilo único para você mostrar seu amor pelo
            pagode.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-red-500" />
              <span>Entrega Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-red-500" />
              <span>Qualidade Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-red-500" />
              <span>Frete Grátis*</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group pt-0 bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
                {/* Main Image */}
                <Image
                  src={
                    hoveredCard === index ? product.hoverImage : product.image
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={400}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 ${getBadgeStyle(
                      product.badge
                    )}`}
                  >
                    {product.badge === "Novo" && <Flame className="h-3 w-3" />}
                    {product.badge === "Mais Vendido" && (
                      <BadgePercent className="h-3 w-3" />
                    )}
                    {product.badge}
                  </span>
                  {product.discount > 0 && (
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-lg animate-pulse">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Free Shipping Badge */}
                {product.freeShipping && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-600 text-white shadow-lg flex items-center gap-1">
                      <Truck className="h-3 w-3" />
                      <span className="hidden sm:inline">Frete Grátis</span>
                      <span className="sm:hidden">Grátis</span>
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                  <button
                    onClick={() => handleLike(index)}
                    className={`w-12 h-12 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      liked.has(index)
                        ? "bg-red-500/80 text-white"
                        : "bg-black/40 text-white hover:bg-red-500/60"
                    }`}
                    aria-label="Adicionar aos favoritos"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        liked.has(index) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                  <button
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
                    aria-label="Visualizar produto"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>

                {/* Color Options */}
                <div className="absolute bottom-3 left-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.colors.map((color: string, colorIndex: number) => (
                    <div
                      key={colorIndex}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      title={`Cor ${colorIndex + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-4 sm:p-6">
                {/* Product Name */}
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-500 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-gray-300 text-sm ml-2 font-medium">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">
                    ({product.reviews})
                  </span>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-2 font-medium">
                    Tamanhos disponíveis:
                  </p>
                  <div className="flex gap-1 flex-wrap">
                    {product.sizes.map((size: string, sizeIndex: number) => (
                      <button
                        key={sizeIndex}
                        onClick={() => handleSizeSelect(index, size)}
                        className={`px-2 py-1 text-xs rounded border transition-all duration-300 cursor-pointer hover:scale-105 ${
                          selectedSizes[index] === size
                            ? "bg-red-500 text-white border-red-500"
                            : "bg-gray-800 text-gray-300 border-gray-700 hover:border-red-500"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-bold text-xl">
                        {product.price}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        {product.oldPrice}
                      </span>
                    </div>
                    {product.freeShipping && (
                      <span className="text-green-400 text-xs font-medium">
                        Frete grátis
                      </span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
                    onClick={() =>
                      handleWhatsAppClick(product.name, selectedSizes[index])
                    }
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Comprar</span>
                    <span className="sm:hidden">Buy</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-6 sm:p-8 bg-gradient-to-r from-stone-900/50 to-red-950/20 backdrop-blur-sm rounded-2xl border border-stone-800 mb-8">
            <div className="text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Mais de 50 Produtos Oficiais
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Explore nossa coleção completa com roupas, acessórios e produtos
                exclusivos
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ver Toda a Loja
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 bg-transparent px-8 py-3 hover:scale-105 transition-all duration-300"
              >
                Catálogo Completo
              </Button>
            </div>
          </div>

          {/* Footer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-400 text-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Package className="h-4 w-4 text-red-500" />
              <span>Entrega para todo Brasil</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="h-4 w-4 text-red-500" />
              <span>Garantia de qualidade</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4 text-red-500" />
              <span>Atendimento via WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
