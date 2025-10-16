import type { Metadata } from "next";
import { Bungee, Poppins } from "next/font/google";
import { Footer } from "./(site)/_components/footer";
import { Header } from "./(site)/_components/header";
import "./globals.css";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Lied | Pagode, Shows e Música ao Vivo",
    template: "%s | Grupo Lied",
  },
  description:
    "Grupo Lied: pagode de São Paulo desde 2016. Vídeos, reels, shows, histórias e playlist oficial.",
  keywords: [
    "pagode",
    "grupo lied",
    "lied",
    "música ao vivo",
    "shows",
    "banda",
    "eventos",
    "samba",
    "playlist",
    "spotify",
    "youtube",
    "stories",
    "galeria",
    "vídeos",
    "merchandise",
  ],
  authors: [{ name: "Grupo Lied", url: "https://grupolied.com.br" }],
  creator: "Grupo Lied",
  openGraph: {
    title: "Grupo Lied | Pagode, Shows e Música ao Vivo",
    description:
      "Grupo Lied: pagode de São Paulo desde 2016. Vídeos, reels, shows, histórias e playlist oficial.",
    url: "https://grupolied.com.br",
    siteName: "Grupo Lied",
    images: [
      {
        url: "https://grupolied.com.br/images/Lied_01.png",
        width: 1200,
        height: 630,
        alt: "Grupo Lied ao vivo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Lied | Pagode, Shows e Música ao Vivo",
    description:
      "Grupo Lied: pagode de São Paulo desde 2016. Vídeos, reels, shows, histórias e playlist oficial.",
    images: ["https://grupolied.com.br/images/Lied_01.png"],
    creator: "@grupolied",
  },
  metadataBase: new URL("https://grupolied.com.br"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${bungee.variable} ${poppins.variable}`}>
      <body className="bg-black text-white font-[var(--font-poppins)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
