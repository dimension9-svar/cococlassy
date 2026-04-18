export function Studio() {
  // Atmospheric section — research: the studio IS the product (Y7 insight)
  // White space = perceived value up to 300% increase
  return (
    <section className="bg-espresso text-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge" />
          The Space
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-6 max-w-[600px]">
          Lights low. Music loud.{" "}
          <em className="not-italic font-semibold text-charge">Form perfect</em>.
        </h2>

        <p className="text-cream/70 text-[17px] leading-[1.6] max-w-[520px] mb-16">
          Cream walls. Espresso accents. Reformer beds in matte black.
          One charge-green feature wall — always the juice bar. Every studio is numbered.
          Every studio feels like the same place. Yours.
        </p>

        {/* Studio cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { number: "01", name: "Sandton" },
            { number: "02", name: "Sea Point" },
            { number: "03", name: "Stellenbosch" },
          ].map((studio) => (
            <div
              key={studio.number}
              className="border border-cream/15 rounded-xl p-8 text-center flex flex-col items-center justify-center aspect-[4/3] md:aspect-square hover:border-charge/30 transition-colors"
            >
              <span className="font-serif font-bold text-[42px] tracking-[-0.03em] leading-none text-cream/90">
                {studio.number}
              </span>
              <span className="font-serif font-medium text-[18px] tracking-[-0.02em] mt-3">
                {studio.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
