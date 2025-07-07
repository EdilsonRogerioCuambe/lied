import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: {
    default: "Grupo Lied | Pagode, Shows e Música ao Vivo",
    template: "%s | Grupo Lied"
  },
  description: "O melhor do pagode brasileiro! Veja fotos, vídeos, shows, stories e ouça a playlist oficial do Grupo Lied.",
  keywords: [
    "pagode", "grupo lied", "lied", "música ao vivo", "shows", "banda", "eventos", "samba", "playlist", "spotify", "youtube", "stories", "galeria", "vídeos", "merchandise"
  ],
  authors: [{ name: "Grupo Lied", url: "https://grupolied.com.br" }],
  creator: "Grupo Lied",
  openGraph: {
    title: "Grupo Lied | Pagode, Shows e Música ao Vivo",
    description: "O melhor do pagode brasileiro! Veja fotos, vídeos, shows, stories e ouça a playlist oficial do Grupo Lied.",
    url: "https://grupolied.com.br",
    siteName: "Grupo Lied",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Grupo Lied ao vivo"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Lied | Pagode, Shows e Música ao Vivo",
    description: "O melhor do pagode brasileiro! Veja fotos, vídeos, shows, stories e ouça a playlist oficial do Grupo Lied.",
    images: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
    ],
    creator: "@grupolied"
  },
  metadataBase: new URL("https://grupolied.com.br"),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
