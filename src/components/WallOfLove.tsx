"use client";

import { RevealOnScroll } from "./RevealOnScroll";

export function WallOfLove() {
  const testimonials = [
    {
      quote: "Finally a channel that actually trades live instead of giving hindsight analysis. The volume profile setup completely changed how I look at BankNifty.",
      name: "Rahul M.",
      role: "Option Buyer",
    },
    {
      quote: "No tips, no BS. Just pure execution and psychology. I've learned more about risk management here than from expensive paid courses.",
      name: "Vikram S.",
      role: "Retail Trader",
    },
    {
      quote: "The live stream is my daily trading desk. Seeing the exact process of identifying the edge and waiting for the right moment is invaluable.",
      name: "Amit P.",
      role: "Intraday Trader",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <RevealOnScroll className="mb-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Wall of Love</h2>
        <p className="text-[var(--text-mute)] font-sans max-w-2xl mx-auto">
          From the community.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.1}>
            <div className="h-full bg-[var(--bg-elevated)] border border-[var(--card-border)] rounded-2xl p-8 flex flex-col relative">
              {/* Quote Glyph */}
              <div className="text-[var(--bull)] opacity-20 font-display text-8xl absolute top-4 left-6 leading-none select-none">
                "
              </div>
              
              <div className="relative z-10 flex-grow">
                <p className="text-[var(--text)] font-sans text-lg mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="relative z-10 mt-auto">
                <p className="font-display font-bold text-lg">{t.name}</p>
                <p className="text-[var(--text-mute)] text-sm">{t.role}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
