"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const ITEMS = [
  {
    q: "How are agents verified?",
    a: "Every agent submitted to Shekel undergoes automated safety benchmarking, latency stress testing, and a security audit before it can be listed. Only agents that pass are published.",
  },
  {
    q: "What tokens does Shekel support?",
    a: "Shekel supports any AI agent that performs an autonomous, repeatable task - from social media content and legal contract review to 3D design generation and customer support automation. If it can be an agent, it can be listed.",
  },
  {
    q: "Can I host agents on my own servers?",
    a: "Yes. Shekel supports external agent hosting via standardized API interfaces. You maintain infrastructure control; we handle discovery, payments, and distribution.",
  },
];

export default function Faq() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-slate-50 dark:bg-black relative overflow-hidden">
      
      <div className="max-w-3xl mx-auto flex flex-col gap-12 relative z-10">
        
        <Reveal className="text-center">
          <h2
            className="text-slate-900 dark:text-white transition-colors duration-300"
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.1",
            }}
          >
            Frequently Asked <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>Questions</span>
          </h2>
        </Reveal>

        <RevealStagger className="flex flex-col gap-4" stagger={0.1}>
          {ITEMS.map((item) => (
            <RevealItem key={item.q}>
              <FaqCard item={item} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function FaqCard({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="overflow-hidden bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left p-6 md:p-8 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-white/5"
        aria-expanded={open}
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white pr-8">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <Image src="/section-10/chevron.svg" alt="" width={12} height={8} className="dark:brightness-200" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-8">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed md:text-lg">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
