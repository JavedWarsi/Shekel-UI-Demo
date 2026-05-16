"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const workflowNodes = [
  { icon: "/section-7/icon-content.svg", label: "Content AI", bg: colors.brand.blue, iconW: 18, iconH: 18 },
  { icon: "/section-7/icon-design.svg", label: "Design AI", bg: colors.brand.cyan, iconW: 19, iconH: 18 },
  { icon: "/section-7/icon-publish.svg", label: "Publish AI", bg: colors.brand.blue, iconW: 19, iconH: 16 },
];

const columns = [
  {
    heading: "Run marketing campaigns",
    body: "Generate platform-specific content at scale. Brief in → polished campaign out.Agent: SocialCraft AI | $0.05/post or $15/month",
    link: "Explore marketing",
    href: "/marketplace",
    icon: "/section-7/icon-arrow.svg",
  },
  {
    heading: "Build intelligent workflows",
    body: "Chain multiple AI agents together to automate complex business processes - from lead intake to deliverable output.",
    link: "Explore workflows",
    href: "/workflows",
    icon: "/section-7/icon-arrow.svg",
  },
  {
    heading: "Scale with automation",
    body: "Replace hours of human effort with always-on AI agents that support, execute, and scale across every workflow.",
    link: "Explore automation",
    href: "/marketplace",
    icon: "/section-7/icon-arrow-alt.svg",
  },
];

export default function WhatYouCanDo() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-[#02040A] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
         <div className="absolute -left-1/4 top-1/4 w-1/2 h-full bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-16">
        
        <Reveal className="text-center">
          <h2
            className="text-slate-900 dark:text-white transition-colors duration-300 uppercase"
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.1",
            }}
          >
            What you can do with <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>Shekel</span>
          </h2>
        </Reveal>

        {/* Visual Card - Orchestration Demo */}
        <Reveal className="w-full">
          <div className="relative w-full aspect-[21/9] min-h-[350px] md:min-h-[400px] flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-[40px] shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all duration-500">
            
            {/* Animated Background Waves */}
            <div className="absolute inset-0 opacity-20 dark:opacity-40">
              <Image src="/section-7/bg-waves.svg" alt="" fill className="object-cover" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-2xl">
              
              {/* Input Bar Mock */}
              <div className="w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                <div className="w-10 h-10 shrink-0 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Image src="/section-7/icon-prompt.svg" alt="" width={22} height={22} />
                </div>
                <span className="text-slate-900 dark:text-slate-300 font-medium">
                  Stop Doing It Manually.
                  {/* Generate marketing campaign */}
                  </span>
                <div className="ml-auto w-1 h-6 bg-blue-500 rounded-full animate-pulse" />
              </div>

              {/* Workflow Nodes */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                {workflowNodes.map((node, idx) => (
                  <div key={node.label} className="flex items-center gap-6 md:gap-12">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-3 p-4 md:p-6 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 rounded-3xl shadow-lg backdrop-blur-md"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-2xl" style={{ background: node.bg }}>
                        <Image src={node.icon} alt={node.label} width={node.iconW} height={node.iconH} className="invert" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-300 tracking-wider uppercase">{node.label}</span>
                    </motion.div>
                    
                    {idx < workflowNodes.length - 1 && (
                      <div className="hidden md:block w-12 h-[2px] bg-gradient-to-r from-blue-500/40 to-cyan-500/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-10 right-10 hidden lg:flex items-center gap-3 p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '0s' }}>
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                 <Image src="/section-7/icon-check.svg" alt="" width={11} height={8} />
              </div>
              <span className="text-sm font-semibold text-slate-500">12 Posts generated</span>
            </div>

            <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-3 p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <Image src="/section-7/icon-clock.svg" alt="" width={20} height={20} />
              <span className="text-sm font-semibold text-slate-500">Scheduled</span>
            </div>

          </div>
        </Reveal>

        {/* Bottom Columns */}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {columns.map((col) => (
            <RevealItem key={col.heading}>
              <div className="flex flex-col gap-4 group cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {col.heading}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {col.body}
                </p>
                <Link href={col.href} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  {col.link}
                  <Image src={col.icon} alt="" width={12} height={12} className="dark:invert-0 invert" />
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

      </div>
    </section>
  );
}
