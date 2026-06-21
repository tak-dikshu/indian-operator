"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { channels } from "@/lib/data";

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  const getStyle = (type: string) => {
    switch(type) {
      case 'youtube': return 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]';
      case 'telegram': return 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]';
      case 'whatsapp': return 'bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]';
      case 'instagram': return 'bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.3)]';
      default: return 'bg-gray-800 text-white';
    }
  };

  const getLabel = (type: string) => {
    switch(type) {
      case 'youtube': return 'YouTube';
      case 'telegram': return 'Telegram';
      case 'whatsapp': return 'WhatsApp';
      case 'instagram': return 'Instagram';
      default: return 'Join';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-max z-50 flex items-center justify-center"
        >
          <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center gap-2 pr-12 relative w-full md:w-auto overflow-x-auto no-scrollbar">
            
            {channels.map((channel) => (
              <a 
                key={channel.id} 
                href={channel.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex-1 md:flex-none min-w-[100px] flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 ${getStyle(channel.type)}`}
              >
                {getLabel(channel.type)}
              </a>
            ))}

            <button 
              onClick={() => {
                setIsDismissed(true);
                setIsVisible(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
