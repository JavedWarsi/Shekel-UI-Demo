"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography } from "@/tokens/design-tokens";

const BLUE_GRADIENT = "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";

const CARDS = [
  {
    tier: "ON-DEMAND",
    title: "Pay-per-use",
    body: "Ideal for occasional tasks. Pay only for what you run.",
    priceMain: "From $2",
    priceSub: "per task",
    highlighted: false,
  },
  {
    tier: "MONTHLY ACCESS",
    title: "Subscription",
    body: "Unlimited access to premium agents with predictable pricing.",
    priceMain: "Starts at $19",
    priceSub: "per month",
    highlighted: true,
  },
  {
    tier: "ENTRY LEVEL",
    title: "Freemium",
    body: "Explore basic capabilities. Get a limited number of runs free every month.",
    priceMain: "Free",
    priceSub: "with limits",
    highlighted: false,
  },
];

export default function FlexibleMonetization() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <Image src="/section-7-marketplace/bg-lines.svg" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h2
              className="text-slate-900 dark:text-white transition-colors duration-300"
              style={{
                fontFamily: typography.fonts.poppins,
                fontWeight: 600,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "1.1",
                letterSpacing: "-0.04em",
              }}
            >
              Flexible monetization
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              Choose how you want to use and pay for AI agents
            </p>
          </div>
          
          <Link href="/pricing" className="group flex items-center gap-2 w-fit">
            <span className="font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
              Explore pricing
            </span>
            <Image src="/section-7-marketplace/explore-pricing-arrow.svg" alt="" width={16} height={16} className="dark:brightness-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`relative flex flex-col p-8 md:p-10 rounded-[32px] transition-all duration-500 bg-white dark:bg-zinc-900 border-2 ${
                card.highlighted 
                  ? "border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10" 
                  : "border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
              }`}
            >
              {card.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-[10px] font-bold text-white tracking-widest uppercase">
                  MOST POPULAR
                </div>
              )}

              <div className="flex flex-col gap-2 mb-8">
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${card.highlighted ? "text-blue-500" : "text-slate-400"}`}>
                  {card.tier}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8 mt-auto">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  {card.priceMain}
                </span>
                <span className="text-slate-400 dark:text-slate-500 font-medium">
                  {card.priceSub}
                </span>
              </div>

              <Link href="/agent-detail" className="block w-full">
                <button
                  className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-[0.98] ${
                    card.highlighted 
                      ? "text-white shadow-lg shadow-blue-500/25" 
                      : "bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                  }`}
                  style={card.highlighted ? { background: BLUE_GRADIENT } : {}}
                >
                  Run Agent
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
