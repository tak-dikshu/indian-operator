"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Candle {
  id: number;
  height: number;
  isBull: boolean;
  delay: number;
}

interface CandleFieldProps {
  variant?: "background" | "divider";
}

export function CandleField({ variant = "background" }: CandleFieldProps) {
  const [candles, setCandles] = useState<Candle[]>([]);

  useEffect(() => {
    const numCandles = typeof window !== "undefined" && window.innerWidth < 768 ? 30 : 80;
    const newCandles = Array.from({ length: numCandles }).map((_, i) => {
      // 60% chance of green, heights between 10% and 50%
      const isBull = Math.random() > 0.4;
      const height = variant === "background" 
        ? Math.floor(Math.random() * 20) + 5  // Heights between 5% and 25%
        : Math.floor(Math.random() * 80) + 20;
      // Stagger animation based on index
      const delay = Math.random() * 0.5;
      
      return {
        id: i,
        height,
        isBull,
        delay,
      };
    });
    setCandles(newCandles);
  }, []);

  const isBg = variant === "background";

  return (
    <div 
      className={`flex items-end justify-between w-full overflow-hidden ${
        isBg ? "absolute inset-0 z-0 opacity-15 pointer-events-none" : "h-12 w-full my-8 opacity-40"
      }`}
      aria-hidden="true"
      style={isBg ? { maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)" } : undefined}
    >
      {candles.map((candle) => (
        <motion.div
          key={candle.id}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 0.8,
            delay: candle.delay,
            ease: "easeOut",
          }}
          style={{
            height: `${candle.height}%`,
            transformOrigin: "bottom",
          }}
          className={`w-1 sm:w-2 mx-[1px] sm:mx-1 rounded-sm ${
            candle.isBull ? "bg-bull" : "bg-bear"
          }`}
        />
      ))}
    </div>
  );
}
