"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";
import { motion } from "framer-motion";

const BLUE_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

const CARDS = [
  {
    title: "SecOps Warden",
    body: "Enterprise-grade threat detection and automated incident response across global clouds.",
    metaLeftLabel: "Used by",
    metaLeftValue: "Fortune 500 Companies",
    metaRightLabel: "Pricing",
    metaRightValue: "$499/Month",
    overlaySrc: "/section-5-marketplace/card-1-overlay.svg",
  },
  {
    title: "LedgerAI Analyst",
    body: "Automated audit and compliance for financial institutions with deep-ledger analysis.",
    metaLeftLabel: "Reliability",
    metaLeftValue: "99.99% Uptime",
    metaRightLabel: "Pricing",
    metaRightValue: "$2 / Run",
    overlaySrc: "/section-5-marketplace/card-2-overlay.svg",
  },
  {
    title: "QueryMaster",
    body: "Natural language interface for complex SQL/NoSQL enterprise databases.",
    metaLeftLabel: "Security",
    metaLeftValue: "SOC2 Compliant",
    metaRightLabel: "Tier",
    metaRightValue: "Enterprise Only",
    overlaySrc: "/section-5-marketplace/card-3-overlay.svg",
  },
];

export default function Enterprise() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-[#05070C] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
         <Image src="/section-5-marketplace/bg-lines.svg" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Reveal>
              <h2
                className="text-slate-900 dark:text-white transition-colors duration-300"
                style={{
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 600,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                Built for scale and security
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest uppercase">
                Enterprise AI Agents
              </p>
            </Reveal>
          </div>
          
          <Link href="/marketplace" className="group flex items-center gap-2 w-fit">
            <span className="font-bold text-slate-900 dark:text-white transition-colors">
              SEE ALL
            </span>
            <Image src="/section-5-marketplace/see-all-arrow.svg" alt="" width={8} height={12} className="dark:brightness-200" />
          </Link>
        </div>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" stagger={0.1}>
          {CARDS.map((card) => (
            <RevealItem key={card.title}>
              <motion.article
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="h-full flex flex-col p-8 md:p-10 rounded-[32px] transition-all duration-300 bg-white dark:bg-zinc-900/50 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className="relative w-16 h-16 rounded-2xl mb-6">
                  <Image src={card.overlaySrc} alt="" fill className="object-contain" />
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: typography.fonts.inter }}>
                    {card.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {card.body}
                  </p>
                </div>

                <div className="flex flex-col gap-3 mb-10 mt-auto">
                   <MetaRow label={card.metaLeftLabel} value={card.metaLeftValue} />
                   <MetaRow label={card.metaRightLabel} value={card.metaRightValue} />
                </div>

                <Link href="/agent-detail" className="block w-full">
                  <button
                    className="w-full py-4 rounded-2xl font-bold text-white shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98]"
                    style={{ background: BLUE_GRADIENT }}
                  >
                    RUN AGENT
                  </button>
                </Link>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.4} className="flex justify-center mt-8">
            <Link href="/marketplace" className="group flex items-center gap-3">
              <span className="font-bold bg-clip-text text-transparent group-hover:opacity-80 transition-opacity" style={{ backgroundImage: BLUE_GRADIENT }}>
                EXPLORE MORE AGENTS
              </span>
              <Image src="/section-5-marketplace/explore-more-arrow.svg" alt="" width={10} height={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </Reveal>

      </div>
    </section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</span>
      <span className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">{value}</span>
    </div>
  );
}
