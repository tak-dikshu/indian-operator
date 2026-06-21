"use client";

import { RevealOnScroll } from "./RevealOnScroll";

export function RecentStreams() {
  const streams = [
    {
      title: "LIVE TRADING | ZERO TO HERO",
      isLive: false,
      thumbnail: "https://img.youtube.com/vi/GIp_K3nj5cM/hqdefault.jpg",
      url: "https://www.youtube.com/live/GIp_K3nj5cM?si=TqYTXCJ2vrzvlcjo",
    },
    {
      title: "LIVE TRADING | OPTIONS BUYING",
      isLive: false,
      thumbnail: "https://img.youtube.com/vi/5jaAfNQPK8I/hqdefault.jpg",
      url: "https://www.youtube.com/live/5jaAfNQPK8I?si=OaqI9MjJxEedRsgw",
    },
    {
      title: "LIVE TRADING | NIFTY BANKNIFTY SENSEX",
      isLive: false,
      thumbnail: "https://img.youtube.com/vi/BYVlCT_NIqc/hqdefault.jpg",
      url: "https://www.youtube.com/live/BYVlCT_NIqc?si=stWqTODdzvaRizhh",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto w-full">
      <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Recent Streams</h2>
          <p className="text-[var(--text-mute)] font-sans max-w-2xl">
            Watch the execution. Learn the process.
          </p>
        </div>
        <a
          href="https://www.youtube.com/@Marketwithsumit.01"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 sm:mt-0 text-[var(--text-mute)] hover:text-white transition-colors flex items-center space-x-2 font-medium group"
        >
          <span>View All on YouTube</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {streams.map((stream, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.1}>
            <a
              href={stream.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 border border-[var(--card-border)] bg-[#111] group-hover:border-[var(--text-mute)] transition-colors flex items-center justify-center">
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url(${stream.thumbnail})` }}
                />

                {/* Play Button Icon */}
                <div className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-bull group-hover:border-bull group-hover:text-black transition-all z-10">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-current border-b-[8px] border-b-transparent ml-1"></div>
                </div>

                {/* Live Badge */}
                {stream.isLive && (
                  <div className="absolute top-3 left-3 z-10 bg-bear text-white text-xs font-bold px-2 py-1 rounded flex items-center space-x-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>LIVE</span>
                  </div>
                )}
              </div>
              <h3 className="font-display font-semibold text-lg line-clamp-2 group-hover:text-[var(--bull)] transition-colors">
                {stream.title}
              </h3>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
