export function ProofStrip() {
  // Social proof strip — research: trust badges increase conversions 30%+
  const logos = [
    "Vogue SA",
    "Women&apos;s Health",
    "Elle",
    "Sunday Times",
    "GQ SA",
    "Marie Claire",
  ];

  return (
    <section className="bg-shell border-y border-line">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted shrink-0">
          As featured in
        </span>
        <div className="flex items-center gap-8 md:gap-12 overflow-x-auto">
          {logos.map((name) => (
            <span
              key={name}
              className="font-serif font-medium text-[15px] md:text-[17px] tracking-[-0.02em] text-cocoa/50 whitespace-nowrap select-none"
              dangerouslySetInnerHTML={{ __html: name }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
