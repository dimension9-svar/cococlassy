export function JuiceBar() {
  const juices = [
    { code: "N\u00B0001 \u00B7 THE GREEN ONE", name: "Green Glow", desc: "Kale, cucumber, green apple, lemon, ginger, mint.", price: "R 68", tag: "ANTI-INFLAM" },
    { code: "N\u00B0002 \u00B7 BEET DRIVEN", name: "Ruby Rush", desc: "Beetroot, carrot, orange, turmeric, black pepper. Pre-class rocket fuel.", price: "R 72", tag: "PRE-WORKOUT" },
    { code: "N\u00B0003 \u00B7 CITRUS WAKE", name: "Golden Hour", desc: "Orange, pineapple, turmeric, lemon, cayenne. Morning in a glass.", price: "R 65", tag: "IMMUNE" },
    { code: "N\u00B0004 \u00B7 BLUSH", name: "Watermelon Rose", desc: "Watermelon, strawberry, rose water, lime. A soft reset.", price: "R 68", tag: "HYDRATE" },
    { code: "N\u00B0005 \u00B7 PROTEIN", name: "Classy Shake", desc: "Banana, almond butter, cacao, oat milk, collagen. Post-reformer ritual.", price: "R 85", tag: "RECOVERY" },
    { code: "N\u00B0006 \u00B7 NIGHT", name: "Quiet Mind", desc: "Tart cherry, chamomile, magnesium, honey. Your 7pm wind-down.", price: "R 78", tag: "SLEEP" },
  ];

  return (
    <section id="juice" className="bg-surface py-[90px] md:py-[140px] px-5 md:px-10 relative overflow-hidden border-t border-b border-line">
      {/* Green glow */}
      <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] opacity-[0.12] blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--charge) 0%, transparent 60%)" }}
      />

      <div className="max-w-[1400px] mx-auto relative z-[2]">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-charge flex items-center gap-3 mb-6">
          <span className="w-7 h-px bg-charge" />
          02 &middot; The Juice Bar
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end mb-[70px]">
          <h2 className="font-serif font-medium text-[clamp(50px,6.6vw,96px)] leading-[0.98] tracking-[-0.04em] text-cream">
            Pressed this morning.{" "}
            <span className="text-charge font-semibold">For you.</span>
          </h2>
          <div className="text-cream-muted text-[15px] leading-[1.6] max-w-[380px]">
            Every juice on the menu is cold-pressed in our studio kitchen within the last 24 hours. No concentrates. No heat. No shortcuts. Just what your body actually wanted after class.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-line border border-line" style={{ gap: "1px" }}>
          {juices.map((j) => (
            <div key={j.code} className="bg-bg p-[30px] md:p-[36px_30px] transition-colors hover:bg-surface-raised group cursor-default">
              <div className="font-mono text-[11px] tracking-[0.12em] text-charge mb-[18px]">{j.code}</div>
              <div className="font-serif font-medium text-[28px] leading-[1.15] tracking-[-0.03em] mb-2 text-cream transition-colors group-hover:text-charge">{j.name}</div>
              <div className="text-[13.5px] leading-[1.55] text-cream-faint mb-[22px]">{j.desc}</div>
              <div className="font-mono text-[13px] text-cream-dim pt-[14px] border-t border-line flex justify-between">
                {j.price}
                <span className="text-charge text-[10px] tracking-[0.1em]">{j.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
