"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Início" },
    { href: "/#about", label: "Sobre" },
    { href: "/historia", label: "História" },
    { href: "/#shows", label: "Shows" },
    { href: "/#merchandise", label: "Loja" },
    { href: "/#gallery", label: "Galeria" },
    { href: "/#videos", label: "Vídeos" },
    { href: "/#music", label: "Música" },
    { href: "/membros", label: "Membros" },
    { href: "/#contact", label: "Contato" },
  ]

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-red-600/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-red-500" />
              <span className="text-white font-bold text-xl">LIED</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-red-500 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-red-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-600/20">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-red-500 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
