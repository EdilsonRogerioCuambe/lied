import { Contact } from "../components/contact";
import { About } from "../components/about";
import { Gallery } from "../components/gallery";
import { Videos } from "../components/videos";
import { Hero } from "../components/hero";
// import { Merchandise } from "../components/merchandise";
import { Shows } from "../components/shows";
import Members from "../components/members";

export default function Home() {
      console.log("🚀 ~ Home ~ <Shows />:", <Shows />)
  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <Hero />
      <About />
      {/* <Shows /> */}
      {/* <Merchandise /> */}
      <Gallery />
      <Videos />
      {/* <MusicSection /> */}
      <Members />
      <Contact />
    </div>
  )
}
