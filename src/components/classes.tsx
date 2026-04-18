export function Classes() {
  // Class tiering creates clear progression — SLT insight
  const classTypes = [
    {
      tag: "Foundation",
      name: "The Essentials",
      duration: "50 min",
      level: "All levels",
      description:
        "Where every body begins. Classical reformer work with a modern edge. Slow springs, clean lines, sharp cueing. You'll leave knowing what your body can actually do.",
      features: ["Springs & straps fundamentals", "Postural alignment", "Core activation sequencing"],
    },
    {
      tag: "Signature",
      name: "The Classy Reformer",
      duration: "50 min",
      level: "Intermediate",
      description:
        "The class that built this brand. Full-body reformer sequences at tempo. Your heart rate climbs. Your form stays. This is where the work lives.",
      features: ["Dynamic flow sequences", "Tempo-driven resistance", "Full-body sculpt"],
    },
    {
      tag: "Intensive",
      name: "The Deep Burn",
      duration: "50 min",
      level: "Advanced",
      description:
        "For the woman who's been here before and wants to be pushed. Heavier springs, longer holds, fewer breaks. You earned this class.",
      features: ["Heavy spring resistance", "Extended time under tension", "Advanced progressions"],
    },
    {
      tag: "Recovery",
      name: "The Unwind",
      duration: "45 min",
      level: "All levels",
      description:
        "Stretch. Breathe. Lengthen. Not every session needs to burn. This one restores what the others demand.",
      features: ["Myofascial release", "Flexibility sequences", "Breathwork integration"],
    },
  ];

  return (
    <section id="classes" className="bg-shell">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-charge-deep mb-4 flex items-center gap-3">
          <span className="w-7 h-px bg-charge-deep" />
          Classes
        </div>

        <h2 className="font-serif font-medium text-[clamp(30px,5vw,48px)] leading-[1.02] tracking-[-0.035em] mb-6">
          Four classes. <em className="not-italic font-semibold text-charge-deep">No filler</em>.
        </h2>

        <p className="text-cocoa text-[17px] leading-[1.6] max-w-[520px] mb-14">
          We don&apos;t do thirty class types with cute names. We do four, and we do them properly.
          Start at Essentials. Progress when your body tells you to.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {classTypes.map((c) => (
            <div
              key={c.name}
              className="bg-cream border border-line rounded-xl p-7 md:p-9 hover:border-charge-deep/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-charge-deep bg-charge/20 px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted flex gap-3">
                  <span>{c.duration}</span>
                  <span>&middot;</span>
                  <span>{c.level}</span>
                </div>
              </div>

              <h3 className="font-serif font-medium text-[22px] tracking-[-0.025em] leading-[1.2] mb-3">
                {c.name}
              </h3>

              <p className="text-cocoa text-[14px] leading-[1.6] mb-5">
                {c.description}
              </p>

              <ul className="space-y-2">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13px] text-cocoa">
                    <span className="w-1.5 h-1.5 rounded-full bg-charge border border-charge-deep shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
