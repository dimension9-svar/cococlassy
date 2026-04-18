import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Philosophy } from "@/components/philosophy";
import { Offerings } from "@/components/offerings";
import { JuiceBar } from "@/components/juice-bar";
import { Classes } from "@/components/classes";
import { Locations } from "@/components/locations";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { RevealScript } from "@/components/reveal-script";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Offerings />
        <JuiceBar />
        <Classes />
        <Locations />
        <FinalCTA />
      </main>
      <Footer />
      <RevealScript />
    </>
  );
}
