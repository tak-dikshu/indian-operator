import { AnimatedSection } from "./animated-section";
import { Quote } from "lucide-react";
import { BentoCard } from "./bento-card";

const testimonials = [
  { quote: "Finally a channel that focuses on pure price action instead of selling dreams. Have learned so much about volume profile.", name: "Rahul S.", role: "Retail Trader" },
  { quote: "The daily live streams are gold. Watching Sumit map out levels before market opens has completely changed my trading psychology.", name: "Amit K.", role: "Option Buyer" },
  { quote: "No nonsense, no fake PnL screenshots. Just real charts and logical setups. Highly recommend to anyone serious about trading.", name: "Priya M.", role: "Swing Trader" }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 border-y border-white/5 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 text-white">Wall of <span className="text-cyan-400">Love</span></h2>
          <p className="text-gray-400 text-lg">What the community is saying about the streams.</p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="h-full">
              <BentoCard className="h-full hover:border-cyan-500/30 transition-colors duration-500">
                <Quote className="w-10 h-10 text-cyan-500 opacity-20 mb-6" />
                <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed font-sans text-lg">"{t.quote}"</p>
                <div>
                  <h4 className="text-white font-bold tracking-wide font-display">{t.name}</h4>
                  <p className="text-gray-500 text-sm font-medium">{t.role}</p>
                </div>
              </BentoCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
