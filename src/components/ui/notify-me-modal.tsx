"use client";
import { useState } from "react";
import { Button } from "./button";
import { Bell, X } from "lucide-react";

export function NotifyMeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = () => {
    setStatus("loading");
    // Simulate push subscription
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setIsOpen(false), 2000);
    }, 1500);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="secondary" className="fixed bottom-6 right-6 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] h-14 w-14 p-0 z-50 animate-bounce border border-emerald-500 bg-[#030712] hover:bg-emerald-500/10 transition-colors">
        <Bell className="w-6 h-6 text-emerald-400" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#030712] border border-white/10 rounded-3xl shadow-[0_0_100px_rgba(16,185,129,0.1)] w-full max-w-md p-8 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                <Bell className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-display font-bold tracking-tight mb-2 text-white">Get Live Alerts</h3>
              <p className="text-gray-400 leading-relaxed">Never miss a live trading session. Turn on browser push notifications to get alerted the second Indian Operator goes live.</p>
            </div>
            
            {status === "success" ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-4 text-center font-bold">
                Successfully subscribed to live alerts!
              </div>
            ) : (
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-lg h-14 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all" 
                onClick={handleSubscribe} 
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Enable Notifications"}
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
