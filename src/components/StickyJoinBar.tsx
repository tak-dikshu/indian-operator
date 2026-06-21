"use client";

import { useState, useEffect } from "react";

export function StickyJoinBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const handleScroll = () => {
      // Show when scrolled past roughly 80vh (the hero section)
      const shouldShow = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  const buttons = [
    { name: "YouTube", url: "https://www.youtube.com/@Marketwithsumit.01", color: "text-bear border-bear hover:bg-bear hover:text-white" },
    { name: "Telegram", url: "https://t.me/indianoperatorofficial", color: "text-[var(--ice)] border-[var(--ice)] hover:bg-[var(--ice)] hover:text-black" },
    { name: "WhatsApp", url: "https://www.whatsapp.com/channel/0029VbCYSjlJENxxeo0kO22P", color: "text-bull border-bull hover:bg-bull hover:text-black" },
    { name: "Instagram", url: "https://www.instagram.com/sumitrajput_yt?igsh=MWVxbjVqZ29jcGprNA==", color: "text-[#f95caa] border-[#f95caa] hover:bg-[#f95caa] hover:text-white" },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="bg-[var(--bg-elevated)]/95 backdrop-blur-md border-b border-[var(--card-border)] py-3 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:block font-display font-bold text-lg">
            INDIAN OPERATOR
          </div>
          
          <div className="flex-1 flex justify-center gap-1.5 sm:gap-4 overflow-x-auto no-scrollbar">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2.5 py-1 sm:px-4 sm:py-1.5 rounded text-[10px] sm:text-sm font-bold border whitespace-nowrap transition-colors ${btn.color}`}
              >
                {btn.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => {
              setIsDismissed(true);
              setIsVisible(false);
            }}
            className="ml-4 text-[var(--text-mute)] hover:text-white p-1"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
