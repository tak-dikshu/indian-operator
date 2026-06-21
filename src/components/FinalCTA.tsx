"use client";

import { RevealOnScroll } from "./RevealOnScroll";

export function FinalCTA() {
  const buttons = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Marketwithsumit.01",
      className: "bg-bear text-white hover:shadow-[0_0_15px_var(--bear)]",
    },
    {
      name: "Telegram",
      url: "https://t.me/indianoperatorofficial",
      className: "bg-[var(--ice)] text-black hover:shadow-[0_0_15px_var(--ice)]",
    },
    {
      name: "WhatsApp",
      url: "https://www.whatsapp.com/channel/0029VbCYSjlJENxxeo0kO22P",
      className: "bg-bull text-black hover:shadow-[0_0_15px_var(--bull)]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sumitrajput_yt?igsh=MWVxbjVqZ29jcGprNA==",
      className: "insta-gradient-bg text-white hover:shadow-[0_0_15px_#f95caa]",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto w-full text-center">
      <RevealOnScroll>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to stop guessing?</h2>
        <p className="text-[var(--text-mute)] font-sans text-lg mb-10 max-w-xl mx-auto">
          Join the community across all platforms and catch the next setup live.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3.5 rounded-lg font-bold text-sm transition-all hover:-translate-y-[2px] ${btn.className}`}
            >
              {btn.name}
            </a>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
