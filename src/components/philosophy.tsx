export function Philosophy() {
  return (
    <section className="px-5 md:px-10 py-[90px] md:py-[140px] max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-20 items-center">
        {/* Copy side */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cocoa flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-cocoa" />
            01 &middot; The Philosophy
          </div>

          <h2 className="font-serif font-medium text-[clamp(42px,5.3vw,74px)] leading-[1.02] tracking-[-0.035em]">
            Soft studio.<br />
            <span className="font-semibold text-charge-deep">Sharp</span> results.
          </h2>

          <p className="text-[17px] leading-[1.65] text-cocoa mt-[22px] max-w-[480px]">
            We built CocoClassy for women who are tired of choosing between a workout that feels good and one that actually works. Our reformer method is precision strength training disguised as a 50-minute ritual. Lights low. Music loud. Form perfect.
          </p>
          <p className="text-[17px] leading-[1.65] text-cocoa mt-[22px] max-w-[480px]">
            Then you walk ten steps to the bar and refuel with something your body actually asked for.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-[50px] max-w-[480px]">
            {[
              { n: "50", sup: "MIN", label: "Signature class" },
              { n: "12", sup: "MAX", label: "Bodies per class" },
              { n: "100", sup: "%", label: "Women-only floor" },
              { n: "24", sup: "H", label: "Cold-press cycle" },
            ].map((s) => (
              <div key={s.label} className="border-t border-line pt-[18px]">
                <div className="font-serif text-[56px] font-medium leading-none tracking-[-0.035em] text-espresso">
                  {s.n}
                  <sup className="text-[18px] text-charge-deep align-top font-normal ml-0.5">{s.sup}</sup>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-cocoa mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="relative">
          <div
            className="aspect-[4/5] rounded-2xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, rgba(26,15,8,0.15), rgba(26,15,8,0.4)), url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=900') center/cover",
            }}
          >
            {/* Floating card */}
            <div className="absolute bottom-6 left-6 right-6 bg-ivory/95 backdrop-blur-lg p-5 rounded-[10px]">
              <div className="font-mono text-[10px] tracking-[0.15em] text-cocoa uppercase">Signature Class</div>
              <div className="font-serif text-[22px] font-medium tracking-[-0.03em] mt-1">The Classy Reformer</div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-5 -right-5 w-[140px] h-[140px] bg-charge rounded-full flex flex-col items-center justify-center -rotate-6 border border-charge-deep">
            <div className="font-serif text-[32px] font-semibold leading-[0.9] text-espresso tracking-[-0.03em]">Glow</div>
            <div className="font-mono text-[10px] tracking-[0.15em] text-espresso mt-1">FROM WITHIN</div>
          </div>
        </div>
      </div>
    </section>
  );
}
