import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Studio } from "@/components/studio";
import { Classes } from "@/components/classes";
import { JuiceBar } from "@/components/juice-bar";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Method />
        <Studio />
        <Classes />
        <JuiceBar />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
