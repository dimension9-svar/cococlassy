export function Method() {
  const pillars = [
    {
      number: "01",
      title: "Twelve bodies. Maximum.",
      description:
        "Every class is capped at twelve. Your instructor sees you, corrects you, and knows your name by your third visit. This is not a crowd.",
    },
    {
      number: "02",
      title: "Women-only floor.",
      description:
        "Every studio. No exceptions. The energy changes when the room is yours. We built the space around that truth.",
    },
    {
      number: "03",
      title: "Low-impact. High-intensity.",
      description:
        "Your joints are safe. Your muscles are not. Springs and straps do what gravity alone cannot — rebuild you from the inside out.",
    },
    {
      number: "04",
      title: "Pressed this morning.",
      description:
        "Every juice is cold-pressed in-house within 24 hours. No concentrates. No heat. No shortcuts. The bar is part of the method, not an afterthought.",
    },
  ];

  return (
    <section id="method" className="bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          The Method
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-6 max-w-[600px]">
          Soft studio.{" "}
          <em className="not-italic font-semibold text-charge-deep">Sharp results</em>.
        </h2>

        <p className="text-cocoa text-[17px] leading-[1.6] max-w-[560px] mb-16">
          Most studios pick a lane: precious and pastel, or clinical and corporate.
          We built CocoClassy in the space between — feminine enough to feel like an indulgence,
          rigorous enough to earn its results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="bg-ivory border border-line rounded-xl p-8 md:p-10 group hover:border-charge-deep/30 transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] text-charge-deep font-medium">
                {p.number}
              </span>
              <h3 className="font-serif font-medium text-[22px] tracking-[-0.025em] leading-[1.2] mt-3 mb-3">
                {p.title}
              </h3>
              <p className="text-cocoa text-[15px] leading-[1.6]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
