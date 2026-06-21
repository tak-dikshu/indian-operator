"use client";

import { CandleField } from "./CandleField";
import { RevealOnScroll } from "./RevealOnScroll";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Candle Field */}
      <CandleField variant="background" />
      
      <RevealOnScroll className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Pulsing Live Badge */}
        <div className="flex items-center space-x-2 bg-[var(--bg-elevated)] border border-[var(--card-border)] px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bull opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-bull"></span>
          </div>
          <span className="text-xs font-mono font-medium tracking-wider text-[var(--text)]">LIVE NOW IN THE MARKETS</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[var(--text)] leading-tight">
          Master the Markets with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--bull)] to-[var(--ice)]">Indian Operator.</span>
          <br />
          <span className="text-bull drop-shadow-[0_0_15px_rgba(0,230,118,0.3)]">Join Live.</span>
        </h1>

        {/* Subcopy */}
        <p className="text-lg md:text-xl text-[var(--text-mute)] max-w-2xl mb-10 font-sans leading-relaxed">
          Real trades, raw price action, no recycled setups. Join <strong className="text-white font-semibold">Indian Operator</strong>, India's fastest-growing trading floor.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
          <a
            href="https://www.youtube.com/@Marketwithsumit.01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-bull text-black font-semibold px-8 py-3.5 rounded-lg hover:-translate-y-[2px] transition-transform hover:shadow-[0_0_20px_rgba(0,230,118,0.4)]"
          >
            <span>▶</span>
            <span>Join YouTube Live</span>
          </a>
          <a
            href="https://t.me/indianoperatorofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border border-[var(--text-mute)] text-[var(--text)] font-semibold px-8 py-3.5 rounded-lg hover:-translate-y-[2px] transition-transform hover:border-[var(--ice)] hover:text-[var(--ice)] hover:shadow-[0_0_20px_rgba(79,195,247,0.2)]"
          >
            <span>Get Telegram Alerts</span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="font-mono text-base font-medium text-[var(--text-mute)] flex flex-wrap justify-center gap-x-3">
          <span>14.7K on YouTube</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span>3.1K on Telegram</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span>1.1K on WhatsApp</span>
        </div>
      </RevealOnScroll>
    </section>
  );
}
