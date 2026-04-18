import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { Method } from "@/components/method";
import { Studio } from "@/components/studio";
import { Classes } from "@/components/classes";
import { Instructors } from "@/components/instructors";
import { JuiceBar } from "@/components/juice-bar";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Method />
        <Studio />
        <Classes />
        <Instructors />
        <JuiceBar />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
