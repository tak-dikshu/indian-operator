"use client";

import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-[var(--card-border)] last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="font-display text-lg md:text-xl font-bold group-hover:text-[var(--bull)] transition-colors">
          {question}
        </span>
        <span className={`ml-4 text-[var(--text-mute)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      <div 
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        <p className="pb-6 text-[var(--text-mute)] font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Do you provide buy/sell tips?",
      answer: "No. The Indian Operator stream and channels are strictly for educational purposes. We break down the market using price action and volume profile, but we do not provide financial advice or tips. You are responsible for your own trades."
    },
    {
      question: "How much capital do I need to start?",
      answer: "We recommend focusing on learning first before deploying real capital. Start with paper trading. When you are ready, capital requirements depend entirely on your personal risk tolerance, but do not risk money you cannot afford to lose."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes, but you need to be willing to learn. We focus on raw price action without relying on complicated indicators. Beginners will find value in watching live execution and understanding how to read the market context."
    },
    {
      question: "Are you SEBI registered?",
      answer: "No, I am not SEBI registered. All content across YouTube, Telegram, and other platforms is for educational purposes only. Always consult a certified financial advisor before making investment decisions."
    }
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto w-full">
      <RevealOnScroll className="mb-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="bg-[var(--bg-elevated)] border border-[var(--card-border)] rounded-2xl px-6 md:px-8">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
