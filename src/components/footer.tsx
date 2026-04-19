export function Footer() {
  return (
    <footer className="bg-surface px-5 md:px-10 pt-[60px] md:pt-[80px] pb-[30px] md:pb-10 border-t border-line">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-[60px] pb-[60px] border-b border-line">
          <div>
            <a href="#" className="inline-flex items-center gap-2.5 no-underline text-cream">
              <span className="font-serif font-bold text-[38px] tracking-[-0.025em] leading-none">
                Coco<span className="text-charge">Classy</span>
              </span>
            </a>
            <p className="text-cream-faint text-[14px] leading-[1.6] mt-5 max-w-[320px]">
              A women&apos;s Pilates lab and cold-pressed juice bar. Move with intention. Drink with purpose. Glow on repeat.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-charge mb-5">Studio</h4>
            <ul className="list-none space-y-2.5">
              {["The Method", "Classes", "Memberships"].map((item) => (
                <li key={item}>
                  <a href="#method" className="text-cream-muted text-[14px] no-underline transition-colors hover:text-charge">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-charge mb-5">The Bar</h4>
            <ul className="list-none space-y-2.5">
              {["Full Menu", "Cleanse Programmes", "Order Ahead"].map((item) => (
                <li key={item}>
                  <a href="#juice" className="text-cream-muted text-[14px] no-underline transition-colors hover:text-charge">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-charge mb-5">Company</h4>
            <ul className="list-none space-y-2.5">
              {["About", "Locations", "Franchise With Us", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#locations" className="text-cream-muted text-[14px] no-underline transition-colors hover:text-charge">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between font-mono text-[11px] tracking-[0.1em] text-cream-faint gap-4">
          <span>&copy; 2026 COCOCLASSY &mdash; ALL RIGHTS RESERVED</span>
          <span>MADE IN SOUTH AFRICA &middot; PRESSED FRESH DAILY</span>
        </div>
      </div>
    </footer>
  );
}
