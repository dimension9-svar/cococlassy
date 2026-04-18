export function Classes() {
  const classes = [
    { time: "50 MIN", level: "ALL LEVELS", name: "The Classy Reformer", desc: "Our signature. Springs, straps, stamina. The class that built this brand." },
    { time: "45 MIN", level: "BEGINNER", name: "Soft Start", desc: "The one to book first. Foundations, form, and zero intimidation." },
    { time: "50 MIN", level: "ADVANCED", name: "Pulse HIIT", desc: "Reformer meets interval training. The 2pm slump doesn\u2019t stand a chance." },
    { time: "55 MIN", level: "ALL LEVELS", name: "Sculpt + Stretch", desc: "Half-hour sculpt, half-hour release. Leave longer than you arrived." },
    { time: "40 MIN", level: "MAMA", name: "Post-natal", desc: "Specialist-led. Six weeks to twelve months. Bring baby when you need to." },
    { time: "60 MIN", level: "ALL LEVELS", name: "Candlelit Flow", desc: "Friday 6pm. Lights off. Candles on. The reward class." },
    { time: "50 MIN", level: "INTERMEDIATE", name: "Core Capital", desc: "Midsection specialist. Deep abs, obliques, and posture you\u2019ll feel for days." },
    { time: "30 MIN", level: "EXPRESS", name: "The Quick One", desc: "Lunch-break length. Full-body payoff. In, sweat, juice, back to work." },
  ];

  return (
    <section id="classes" className="px-5 md:px-10 py-[90px] md:py-[140px] max-w-[1400px] mx-auto">
      <div className="text-center mb-[70px]">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cocoa mb-6 flex items-center justify-center gap-3">
          03 &middot; On the Schedule
        </div>
        <h2 className="font-serif font-medium text-[clamp(44px,5.7vw,78px)] leading-[1.02] tracking-[-0.035em]">
          Eight classes. One{" "}
          <span className="text-charge-deep font-semibold">obsession</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {classes.map((c) => (
          <div
            key={c.name}
            className="bg-ivory border border-line rounded-[14px] p-[26px_26px_30px] relative overflow-hidden transition-all duration-300 hover:border-espresso hover:-translate-y-1 group"
          >
            {/* Top accent bar on hover */}
            <div className="absolute top-0 left-0 right-0 h-0 bg-charge transition-all duration-300 group-hover:h-1" />

            <div className="font-mono text-[11px] tracking-[0.1em] text-muted mb-4 flex justify-between">
              <span>{c.time}</span>
              <span className="bg-shell px-2 py-0.5 rounded-full text-cocoa">{c.level}</span>
            </div>

            <h3 className="font-serif font-medium text-[26px] tracking-[-0.03em] leading-[1.15] mb-2.5">{c.name}</h3>
            <p className="text-[13.5px] leading-[1.5] text-cocoa mb-6">{c.desc}</p>

            <a href="#cta" className="text-[12.5px] font-medium text-espresso no-underline inline-flex items-center gap-1.5 border-b border-espresso pb-0.5 transition-colors hover:text-charge-deep hover:border-charge-deep">
              Book &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
