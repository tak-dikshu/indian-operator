"use client";

import { RevealOnScroll } from "./RevealOnScroll";

export function OperatorEdge() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full hidden md:block">
      <RevealOnScroll className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">The Operator Edge</h2>
        <p className="text-[var(--text-mute)] font-sans max-w-2xl">
          We don't trade everything. We master what moves.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Nifty & BankNifty Only (Wider) */}
        <RevealOnScroll delay={0} className="md:col-span-2">
          <div className="h-full bg-[var(--bg-elevated)] border border-[var(--card-border)] rounded-2xl p-8 relative overflow-hidden group hover:border-[var(--bull)]/30 transition-colors">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Nifty & BankNifty Only</h3>
                <p className="text-[var(--text-mute)] font-sans max-w-md">
                  Laser focus on the indices that matter. No distractions from low-volume stocks.
                </p>
              </div>

              {/* Mock Ticker Widget */}
              <div className="mt-8 bg-[var(--bg)] border border-[var(--card-border)] rounded-xl p-6 max-w-sm">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[var(--text-mute)] text-sm">NIFTY 50 INDEX</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bull opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-bull"></span>
                  </span>
                </div>
                <div className="flex items-baseline space-x-3">
                  <span className="font-mono text-3xl font-bold">22,493.55</span>
                  <span className="font-mono text-bull text-lg flex items-center">
                    ▲ 0.28%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Card 2: Volume Profile */}
        <RevealOnScroll delay={0.1} className="md:col-span-1">
          <div className="h-full bg-[var(--bg-elevated)] border border-[var(--card-border)] rounded-2xl p-8 hover:border-[var(--ice)]/30 transition-colors">
            <h3 className="font-display text-xl font-bold mb-3">Volume Profile</h3>
            <p className="text-[var(--text-mute)] font-sans text-sm">
              We track where the big money is positioned. It's not about lines on a chart, it's about order flow.
            </p>
            {/* Minimal visual abstract */}
            <div className="mt-6 flex flex-col gap-1.5 opacity-50">
              {[80, 40, 100, 60, 30].map((w, i) => (
                <div key={i} className="h-2 bg-[var(--ice)] rounded-r-sm" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Card 3: Zero-BS Psychology */}
        <RevealOnScroll delay={0.2} className="md:col-span-1">
          <div className="h-full bg-[var(--bg-elevated)] border border-[var(--card-border)] rounded-2xl p-8 hover:border-[var(--bear)]/30 transition-colors">
            <h3 className="font-display text-xl font-bold mb-3">Zero-BS Psychology</h3>
            <p className="text-[var(--text-mute)] font-sans text-sm">
              Trading is 80% mindset. We cut the noise and focus on execution without emotion.
            </p>
          </div>
        </RevealOnScroll>

        {/* Card 4: Live Market Execution */}
        <RevealOnScroll delay={0.3} className="md:col-span-2">
          <div className="h-full bg-[var(--bg-elevated)] border border-[var(--card-border)] rounded-2xl p-8 relative overflow-hidden group hover:border-[var(--gold)]/30 transition-colors">
            <h3 className="font-display text-2xl font-bold mb-3">Live Market Execution</h3>
            <p className="text-[var(--text-mute)] font-sans max-w-xl">
              Anyone can analyze a closed market. We execute live, on stream, through the volatility.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
