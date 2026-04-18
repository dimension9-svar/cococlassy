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

        {/* Highlight cards — replacing stock image */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Main highlight card */}
            <div className="col-span-2 bg-espresso text-cream rounded-2xl p-8 relative overflow-hidden">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-charge mb-4">Signature Class</div>
              <div className="font-serif text-[36px] md:text-[44px] font-medium tracking-[-0.035em] leading-[1.02] mb-3">
                The Classy Reformer
              </div>
              <p className="text-cream/60 text-[14px] leading-[1.55] max-w-[360px]">
                50 minutes of spring-loaded precision. Your heart rate climbs. Your form stays. This is where the work lives.
              </p>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-[160px] h-[160px] rounded-full border border-cream/10" />
              <div className="absolute -bottom-16 -right-16 w-[240px] h-[240px] rounded-full border border-cream/[0.05]" />
            </div>

            {/* Women-only card */}
            <div className="bg-charge border border-charge-deep rounded-2xl p-6 flex flex-col justify-between min-h-[180px]">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-espresso/70">Every studio</div>
              <div>
                <div className="font-serif text-[28px] font-semibold leading-[0.95] tracking-[-0.03em] text-espresso">Women-only</div>
                <div className="font-mono text-[10px] tracking-[0.1em] text-espresso/70 mt-2">NO EXCEPTIONS</div>
              </div>
            </div>

            {/* Juice card */}
            <div className="bg-toffee rounded-2xl p-6 flex flex-col justify-between min-h-[180px]">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-espresso/60">After class</div>
              <div>
                <div className="font-serif text-[28px] font-semibold leading-[0.95] tracking-[-0.03em] text-espresso">Fresh press</div>
                <div className="font-mono text-[10px] tracking-[0.1em] text-espresso/60 mt-2">6 JUICES &middot; DAILY</div>
              </div>
            </div>

            {/* Small format cards */}
            <div className="bg-shell border border-line rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-charge/30 border border-charge-deep/30 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--charge-deep)" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></svg>
              </div>
              <div>
                <div className="font-serif text-[16px] font-medium tracking-[-0.02em]">50-min sessions</div>
                <div className="font-mono text-[9px] tracking-[0.1em] text-muted uppercase">In &middot; Sweat &middot; Glow</div>
              </div>
            </div>

            <div className="bg-ivory border border-line rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-charge/30 border border-charge-deep/30 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--charge-deep)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <div>
                <div className="font-serif text-[16px] font-medium tracking-[-0.02em]">Small classes</div>
                <div className="font-mono text-[9px] tracking-[0.1em] text-muted uppercase">Known by name</div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-5 -right-5 w-[120px] h-[120px] bg-charge rounded-full flex flex-col items-center justify-center -rotate-6 border border-charge-deep shadow-[0_8px_30px_-8px_rgba(168,217,31,0.4)] z-10">
            <div className="font-serif text-[26px] font-semibold leading-[0.9] text-espresso tracking-[-0.03em]">Glow</div>
            <div className="font-mono text-[9px] tracking-[0.15em] text-espresso mt-1">FROM WITHIN</div>
          </div>
        </div>
      </div>
    </section>
  );
}
