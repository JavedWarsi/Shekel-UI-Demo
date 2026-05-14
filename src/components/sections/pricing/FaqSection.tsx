"use client";

import Image from "next/image";
import { useState } from "react";
import { typography } from "@/tokens/design-tokens";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "How does pricing work?",
    answer: "We offer three tiers to support your growth. You can start for free, pay only for what you use on the marketplace, or subscribe to Pro for high-volume needs and team features."
  },
  {
    question: "What is pay-per-use?",
    answer: "Pay-per-use allows you to pay a nominal fee per task executed by an agent, giving you ultimate flexibility without a monthly subscription."
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of the next billing cycle."
  },
  {
    question: "Do unused credits roll over?",
    answer: "Unused Pro credits do not roll over to the next month. They reset at the beginning of each billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Our Starter plan acts as a free trial, giving you 5 free agent runs per month to test our platform's capabilities."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-[#05070C] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: typography.fonts.poppins }}>
              Common questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Everything you need to know about our billing and platform features.
            </p>
          </div>

          <button className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold w-fit hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
            <Image src="/section-4-pricing/chat-icon.svg" alt="" width={20} height={16} className="dark:brightness-200" />
            Contact Support
            <Image src="/section-4-pricing/arrow-icon.svg" alt="" width={16} height={16} className="dark:brightness-200" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-center justify-between p-6">
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="shrink-0"
                >
                  <Image src="/section-4-pricing/chevron-down.svg" alt="" width={12} height={8} className="dark:brightness-200" />
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}