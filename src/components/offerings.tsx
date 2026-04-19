export function Offerings() {
  return (
    <section id="method" className="px-5 md:px-10 pb-[90px] md:pb-[140px] max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] gap-8">
        <h2 className="font-serif font-medium text-[clamp(42px,5.3vw,70px)] leading-[1.02] tracking-[-0.035em] max-w-[720px] text-cream">
          Built for the woman who wants it{" "}
          <span className="font-semibold relative inline-block">
            all
            <span className="absolute bottom-[0.08em] -left-[0.05em] -right-[0.05em] h-[0.28em] bg-charge/30 -z-[1] -skew-x-[4deg]" />
          </span>
          .
        </h2>
        <p className="text-cream-muted text-[15px] max-w-[320px] leading-[1.55]">
          Six pillars. One studio. Zero compromise on how good it feels or how good it works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Tile A — charge green accent */}
        <div className="md:col-span-5 bg-charge text-espresso rounded-[14px] p-8 min-h-[460px] flex flex-col justify-between transition-transform duration-400 hover:-translate-y-1">
          <div>
            <div className="font-mono text-[11px] tracking-[0.15em] opacity-70">/ 01</div>
            <div className="w-11 h-11 rounded-full border-[1.5px] border-espresso/40 flex items-center justify-center opacity-85 mt-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></svg>
            </div>
          </div>
          <div>
            <div className="font-serif font-medium text-[44px] leading-[1.08] tracking-[-0.03em] mb-2.5">
              The <span className="font-bold">Classy</span> Reformer
            </div>
            <div className="text-[15px] leading-[1.55] opacity-80 max-w-[320px]">
              Our signature 50-minute reformer class. Low-impact, high-intensity, zero ego. Spring-loaded strength and a playlist that dares you.
            </div>
          </div>
        </div>

        {/* Tile B — raised surface */}
        <div className="md:col-span-4 bg-surface-raised border border-line rounded-[14px] p-8 min-h-[340px] flex flex-col justify-between transition-transform duration-400 hover:-translate-y-1">
          <div className="font-mono text-[11px] tracking-[0.15em] text-cream-faint">/ 02</div>
          <div>
            <div className="font-serif font-medium text-[32px] leading-[1.08] tracking-[-0.03em] mb-2.5 text-cream">Cold-Pressed Daily</div>
            <div className="text-[14px] leading-[1.55] text-cream-muted max-w-[320px]">Pressed in-house every morning. Never pasteurised. Never last week&apos;s. A juice bar that earns the word fresh.</div>
          </div>
        </div>

        {/* Tile C — surface */}
        <div className="md:col-span-3 bg-surface border border-line rounded-[14px] p-8 min-h-[340px] flex flex-col justify-between transition-transform duration-400 hover:-translate-y-1">
          <div className="font-mono text-[11px] tracking-[0.15em] text-cream-faint">/ 03</div>
          <div>
            <div className="font-serif font-medium text-[32px] leading-[1.08] tracking-[-0.03em] mb-2.5 text-cream">Sculpt + Stretch</div>
            <div className="text-[14px] leading-[1.55] text-cream-muted max-w-[320px]">Deep flexibility work meets tiny targeted burn. You&apos;ll feel muscles you forgot existed.</div>
          </div>
        </div>

        {/* Tile D — overlay */}
        <div className="md:col-span-4 bg-surface-overlay border border-line rounded-[14px] p-8 min-h-[340px] flex flex-col justify-between transition-transform duration-400 hover:-translate-y-1">
          <div className="font-mono text-[11px] tracking-[0.15em] text-cream-faint">/ 04</div>
          <div>
            <div className="font-serif font-medium text-[32px] leading-[1.08] tracking-[-0.03em] mb-2.5 text-cream">Adaptogen Lattes</div>
            <div className="text-[14px] leading-[1.55] text-cream-muted max-w-[320px]">Mushroom, matcha, cacao. Functional, delicious, and entirely caffeine-optional.</div>
          </div>
        </div>

        {/* Tile E — raised with charge border hint */}
        <div className="md:col-span-5 bg-surface-raised border border-line rounded-[14px] p-8 min-h-[280px] flex flex-col justify-between transition-transform duration-400 hover:-translate-y-1 hover:border-charge/30">
          <div className="font-mono text-[11px] tracking-[0.15em] text-cream-faint">/ 05</div>
          <div>
            <div className="font-serif font-medium text-[32px] leading-[1.08] tracking-[-0.03em] mb-2.5 text-cream">The Circle &mdash; our membership</div>
            <div className="text-[14px] leading-[1.55] text-cream-muted max-w-[320px]">Unlimited classes, juice bar discount, first dibs on events.</div>
          </div>
        </div>

        {/* Tile F — charge glow accent */}
        <div className="md:col-span-3 bg-surface border border-charge/20 rounded-[14px] p-8 min-h-[340px] flex flex-col justify-between transition-transform duration-400 hover:-translate-y-1 hover:border-charge/40 hover:shadow-[0_0_30px_rgba(212,255,58,0.08)]">
          <div className="font-mono text-[11px] tracking-[0.15em] text-charge">/ 06</div>
          <div>
            <div className="font-serif font-medium text-[32px] leading-[1.08] tracking-[-0.03em] mb-2.5 text-cream">Post-natal</div>
            <div className="text-[14px] leading-[1.55] text-cream-muted max-w-[320px]">Specialist-led return-to-movement programmes. Your body rebuilt, on your timeline.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
