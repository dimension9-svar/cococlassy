export function Marquee() {
  const items = [
    "Move with intention",
    "Drink with intention",
    "Glow on purpose",
    "The feminine reformer",
  ];
  const track = [...items, ...items];

  return (
    <section className="border-t border-b border-line bg-surface overflow-hidden py-[22px] relative">
      <div
        className="flex gap-[50px] whitespace-nowrap w-max"
        style={{ animation: "marquee 38s linear infinite" }}
      >
        {track.map((text, i) => (
          <span key={i} className="font-serif font-medium text-[42px] text-cream/80 tracking-[-0.025em] inline-flex items-center gap-[50px]">
            {text}
            <span className="w-[9px] h-[9px] bg-charge rounded-full shadow-[0_0_12px_var(--charge)] inline-block" />
          </span>
        ))}
      </div>
    </section>
  );
}
