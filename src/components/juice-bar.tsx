export function JuiceBar() {
  const juices = [
    {
      number: "001",
      name: "The Green One",
      tag: "Anti-Inflam",
      ingredients: "Cucumber, celery, green apple, ginger, lemon, turmeric",
      color: "#A8D91F",
    },
    {
      number: "002",
      name: "The Glow",
      tag: "Skin + Gut",
      ingredients: "Beetroot, carrot, orange, ginger, activated charcoal rim",
      color: "#C0392B",
    },
    {
      number: "003",
      name: "The Reset",
      tag: "Post-Class",
      ingredients: "Pineapple, mint, coconut water, lime, sea salt",
      color: "#F1C40F",
    },
    {
      number: "004",
      name: "The Deep",
      tag: "Immunity",
      ingredients: "Activated charcoal, lemon, honey, cayenne, filtered water",
      color: "#2C3E50",
    },
  ];

  return (
    <section id="juice" className="bg-shell">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          The Juice Bar
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-6 max-w-[600px]">
          Pressed this morning.{" "}
          <em className="not-italic font-semibold text-charge-deep">For you</em>.
        </h2>

        <p className="text-cocoa text-[17px] leading-[1.6] max-w-[520px] mb-14">
          The juice bar is not an add-on. It&apos;s proof that we thought about the forty minutes
          after your class ends, not just the class itself. Glass where possible.
          Cream exterior, espresso lid, charge-green stripe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {juices.map((j) => (
            <div
              key={j.number}
              className="bg-cream border border-line rounded-xl overflow-hidden hover:border-charge-deep/30 transition-colors"
            >
              {/* Color bar */}
              <div className="h-2" style={{ backgroundColor: j.color }} />

              <div className="p-6">
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted">
                  N&deg;{j.number}
                </span>

                <h3 className="font-serif font-medium text-[20px] tracking-[-0.02em] mt-2 mb-1">
                  {j.name}
                </h3>

                <span className="inline-block font-mono text-[9px] tracking-[0.12em] uppercase text-charge-deep bg-charge/20 px-2.5 py-0.5 rounded-full mb-4">
                  {j.tag}
                </span>

                <p className="text-cocoa text-[13px] leading-[1.6]">
                  {j.ingredients}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-8 text-center">
          All juices cold-pressed in-house &middot; No concentrates &middot; No heat &middot; Vegan &middot; Glass cups
        </p>
      </div>
    </section>
  );
}
