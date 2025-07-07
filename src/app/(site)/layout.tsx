import "../globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <Header />
        <main className="min-h-screen pt-16"> {/* pt-16 para não cobrir pelo header fixo */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 