"use client";

import { RevealOnScroll } from "./RevealOnScroll";

export function PlatformCards() {
  const cards = [
    {
      name: "YouTube",
      count: "14.7K Subscribers",
      action: "Watch Live",
      url: "https://www.youtube.com/@Marketwithsumit.01",
      color: "var(--bear)",
      glowClass: "group-hover:opacity-50",
      btnClass: "bg-bear text-white",
    },
    {
      name: "Telegram",
      count: "3.1K Members",
      action: "Join Free",
      url: "https://t.me/indianoperatorofficial",
      color: "var(--ice)",
      glowClass: "group-hover:opacity-50",
      btnClass: "bg-[var(--ice)] text-black",
    },
    {
      name: "WhatsApp",
      count: "1.1K Members",
      action: "Join Now",
      url: "https://www.whatsapp.com/channel/0029VbCYSjlJENxxeo0kO22P",
      color: "var(--bull)",
      glowClass: "group-hover:opacity-50",
      btnClass: "bg-bull text-black",
    },
    {
      name: "Instagram",
      count: "Followers",
      action: "Follow Now",
      url: "https://www.instagram.com/sumitrajput_yt?igsh=MWVxbjVqZ29jcGprNA==",
      color: "#f95caa",
      glowClass: "group-hover:opacity-50",
      btnClass: "insta-gradient-bg text-white",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <RevealOnScroll className="mb-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Your Desk. Four Screens.</h2>
        <p className="text-[var(--text-mute)] font-sans max-w-2xl mx-auto">
          Every platform serves a purpose. Don't miss the edge.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.1}>
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-[var(--bg-elevated)] border border-[var(--card-border)] rounded-2xl p-6 overflow-hidden hover:-translate-y-[2px] transition-transform duration-300"
              style={
                {
                  "--hover-color": card.color,
                } as React.CSSProperties
              }
            >
              {/* Radial Hover Glow */}
              <div 
                className={`absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[50px] opacity-0 transition-opacity duration-300 pointer-events-none ${card.glowClass}`}
                style={{ background: card.color }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-display text-xl font-bold mb-1">{card.name}</h3>
                <p className="font-mono text-sm text-[var(--text-mute)] mb-8">{card.count}</p>
                
                <div className={`mt-auto w-full py-2.5 rounded-lg text-center font-semibold text-sm transition-shadow group-hover:shadow-[0_0_15px_var(--hover-color)] ${card.btnClass}`}>
                  {card.action}
                </div>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
