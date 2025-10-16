import { Heart, Instagram, Music, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-red-600/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="#home" className="inline-block mb-4">
              <div className="flex items-center space-x-2">
                <Music className="h-8 w-8 text-red-500" />
                <span className="text-white font-bold text-2xl">LIED</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              O Grupo LIED é uma das principais referências do pagode
              brasileiro, levando alegria e emoção para fãs em todo o país.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/grupolied"
                target="_blank"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@GrupoLied"
                target="_blank"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Music className="h-6 w-6" />
              </Link>
            </div>
            {/* Social Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-300">
              <div className="rounded-xl border border-stone-800 p-4 bg-stone-900/40">
                <p className="text-sm text-gray-400">Instagram</p>
                <p className="text-white text-xl font-bold">18,5 mil</p>
                <p className="text-gray-400 text-xs">Seguidores</p>
              </div>
              <div className="rounded-xl border border-stone-800 p-4 bg-stone-900/40">
                <p className="text-sm text-gray-400">YouTube</p>
                <p className="text-white text-xl font-bold">1,03 mil</p>
                <p className="text-gray-400 text-xs">Inscritos</p>
              </div>
              <div className="rounded-xl border border-stone-800 p-4 bg-stone-900/40">
                <p className="text-sm text-gray-400">Spotify</p>
                <p className="text-white text-xl font-bold">160</p>
                <p className="text-gray-400 text-xs">Seguidores</p>
              </div>
            </div>
            <div className="mt-4 text-gray-300">
              <span className="block">Contato/WhatsApp: </span>
              <Link
                href="https://wa.me/5511981231025"
                target="_blank"
                className="text-red-500 hover:text-red-400 font-semibold"
              >
                +55 11 98123-1025
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#shows"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Shows
                </Link>
              </li>
              <li>
                <Link
                  href="#merchandise"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Loja
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Grupo LIED. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> para os
              fãs do pagode
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
