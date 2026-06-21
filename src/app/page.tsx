import { TickerBar } from "@/components/TickerBar";
import { Hero } from "@/components/Hero";
import { PlatformCards } from "@/components/PlatformCards";
import { OperatorEdge } from "@/components/OperatorEdge";
import { RecentStreams } from "@/components/RecentStreams";
import { WallOfLove } from "@/components/WallOfLove";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyJoinBar } from "@/components/StickyJoinBar";
import { CandleField } from "@/components/CandleField";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-[var(--bull)] selection:text-black">
      <TickerBar />
      
      <Hero />
      <CandleField variant="divider" />
      
      <PlatformCards />
      <CandleField variant="divider" />
      
      <div className="hidden md:block w-full">
        <OperatorEdge />
        <CandleField variant="divider" />
      </div>
      
      <RecentStreams />
      <CandleField variant="divider" />
      
      <WallOfLove />
      <CandleField variant="divider" />
      
      <FAQ />
      <CandleField variant="divider" />
      
      <FinalCTA />
      
      <Footer />
      <StickyJoinBar />
    </main>
  );
}
