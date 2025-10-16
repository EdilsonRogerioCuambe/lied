import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Gallery } from "./_components/gallery";
import { Hero } from "./_components/hero";
import { Videos } from "./_components/videos";
import Members from "./_components/members";

export default function Home() {
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
  );
}
