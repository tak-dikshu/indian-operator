"use client";
import { useState } from "react";
import { AnimatedSection } from "./animated-section";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Do you provide buy/sell tips?", a: "No. The channel is strictly for educational purposes. We teach you how to read the charts so you can take your own trades." },
  { q: "How much capital do I need to start?", a: "We recommend learning and paper trading first. When you start, capital doesn't matter as much as risk management. Start small and focus on process." },
  { q: "Is this for beginners?", a: "Yes, 'Seekhiye Zero Se' is our motto. We cover basics from what a candlestick is, to advanced volume profile concepts." },
  { q: "Are you SEBI registered?", a: "No, Indian Operator is not SEBI registered. All analysis is personal opinion for learning." }
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#030712] border-b border-white/5 relative overflow-hidden">
      <div className="absolute -left-64 top-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white">Common <span className="text-purple-400">Questions</span></h2>
          <p className="text-gray-400 text-lg">Everything you need to know about the channel.</p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div 
                className={`border rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-300 ${open === i ? 'border-purple-500/30 bg-purple-500/5 shadow-[0_0_30px_rgba(168,85,247,0.1)]' : 'border-white/10 bg-white/[0.02] hover:border-white/20'}`}
              >
                <button 
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <h3 className="font-display font-bold text-lg text-white pr-8">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open === i ? 'rotate-180 text-purple-400' : 'text-gray-500'}`} />
                </button>
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-[500px] pb-6 md:pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed font-sans text-lg">{faq.a}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
