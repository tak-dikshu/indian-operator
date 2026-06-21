"use client";
import { motion } from "framer-motion";

export function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: delay * 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
