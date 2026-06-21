"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";

export function BentoCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (!isMounted) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(16, 185, 129, 0.1),
      transparent 40%
    )
  `;

  return (
    <div
      className={`group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-colors hover:bg-white/[0.04] ${className}`}
      onMouseMove={handleMouseMove}
    >
      {isMounted && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 hidden md:block"
          style={{ background }}
        />
      )}
      <div className="relative z-10 flex flex-col h-full w-full p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
