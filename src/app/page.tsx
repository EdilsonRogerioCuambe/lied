import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Videos } from "./components/videos";
import { MusicSection } from "./components/music";
import { Stories } from "./components/stories";
import { Hero } from "./components/hero";
import { Merchandise } from "./components/merchandise";
import { Shows } from "./components/shows";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Stories />
      <About />
      <Shows />
      <Merchandise />
      <Gallery />
      <Videos />
      <MusicSection />
      <Contact />
      <Footer />
    </div>
  )
}
