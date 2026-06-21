"use client";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

export function MockTicker() {
  const [price, setPrice] = useState(22450.65);
  const [change, setChange] = useState(145.20);
  const isPositive = change >= 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(p => p + (Math.random() * 10 - 4));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-center items-center bg-[#0A0A0A] p-6 relative overflow-hidden group">
       <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
         <div className="w-full h-full flex items-end justify-between px-2 pb-8 gap-1 md:gap-2">
            {[40, 60, 30, 80, 50, 90, 70, 100, 85, 45, 65, 85, 95, 75].map((h, i) => (
              <div key={i} className={`w-2 md:w-3 ${i > 6 ? 'bg-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.5)]'} rounded-sm transition-all duration-1000`} style={{ height: `${h}%` }} />
            ))}
         </div>
       </div>
       
       <div className="relative z-10 text-center bg-[#0A0A0A]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
         <h4 className="text-gray-400 font-bold tracking-widest text-sm mb-2 uppercase flex items-center justify-center gap-2">
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           Nifty 50 Index
         </h4>
         <div className="text-5xl md:text-6xl font-display font-black text-white tracking-tight mb-4 tabular-nums">
           {price.toFixed(2)}
         </div>
         <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-lg ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
           {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
           <span>{isPositive ? '+' : ''}{change.toFixed(2)} ({((change / price) * 100).toFixed(2)}%)</span>
         </div>
       </div>
    </div>
  );
}
