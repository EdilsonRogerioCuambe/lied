"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Home,
  Image as ImageIcon,
  Info,
  Mail,
  Menu,
  Music,
  Users,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Categorizar itens do menu
  const primaryItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/#about", label: "Sobre", icon: Info },
    // { href: "/historia", label: "História", icon: Info },
    // { href: "/#shows", label: "Shows", icon: Calendar },
  ];

  const secondaryItems = [
    // { href: "/#merchandise", label: "Loja", icon: ShoppingBag },
    { href: "/#gallery", label: "Galeria", icon: ImageIcon },
    { href: "/#videos", label: "Vídeos", icon: Video },
    { href: "/#music", label: "Música", icon: Music },
    { href: "/#membros", label: "Membros", icon: Users },
    { href: "/#contact", label: "Contato", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative">
              <Image
                src="/images/Logo_Branco.png"
                alt="Logo"
                width={120}
                height={80}
                className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Primary Navigation */}
            <div className="flex items-center space-x-1 mr-6">
              {primaryItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-200 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              ))}
            </div>

            {/* Secondary Navigation - Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1"
              >
                Mais
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Button>

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {secondaryItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 group/item"
                      >
                        <Icon className="w-4 h-4 text-white/60 group-hover/item:text-white transition-colors" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white border border-white/10 shadow-lg hover:shadow-red-600/30 transition-all duration-200 transform hover:scale-105"
            >
              <Link href="/#historia">Conheça Nossa História</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/10 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4">
            {/* Primary Items */}
            <div className="space-y-1 mb-4">
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wide px-3 py-2">
                Principal
              </h3>
              {primaryItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Secondary Items */}
            <div className="space-y-1 mb-4">
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wide px-3 py-2">
                Explorar
              </h3>
              <div className="grid grid-cols-2 gap-1">
                {secondaryItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-3 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Button - Mobile */}
            <div className="pt-4 border-t border-white/10">
              <Button
                asChild
                className="w-full bg-red-600 hover:bg-red-700 text-white border border-white/10 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/#historia">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
