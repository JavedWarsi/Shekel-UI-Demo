"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { typography, colors } from "@/tokens/design-tokens";

const LOGOS = [
  { name: "OpenAI", src: "/section-1-workflows/logo-1.png" },
  { name: "Google AI", src: "/section-1-workflows/logo-2.png" },
  { name: "ANTHROPIC", src: "/section-1-workflows/logo-anthropic.png" },
  { name: "Azure", src: "/section-1-workflows/logo-4.png" },
  { name: "Meta", src: "/section-1-workflows/logo-5.png" },
  { name: "Notion", src: "/section-1-workflows/logo-6.png" },
  { name: "Slack", src: "/section-1-workflows/logo-7.png" },
  { name: "AWS", src: "/section-1-workflows/logo-8.png" },
];

export default function HowToBuildHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#03070E] pt-32 pb-0">
      {/* Background Grid Ornament */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#2864E4 1px, transparent 1px), linear-gradient(90deg, #2864E4 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase">
                DOCUMENTATION V2.4
              </span>
            </div>

            <h1 
              className="text-[72px] leading-[72px] font-medium tracking-[-1.8px] mb-8 bg-clip-text text-transparent" 
              style={{ 
                fontFamily: 'Poppins',
                background: 'linear-gradient(238.38deg, #FFFFFF 55.63%, rgba(255, 255, 255, 0) 110.73%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Build Intelligent<br />
              Autonomous<br /> 
              Agents.
            </h1>

            <p className="text-[18px] text-[#94A3B8] leading-relaxed max-w-lg mb-10">
              A comprehensive guide to architecting, deploying, and scaling agentic workflows with the AgentArchitect engine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image 
                src="/section-16-how-to-build-agents/herobookHB.png" 
                alt="Build Intelligent Agents" 
                fill 
                className="object-cover"
                priority
                // height={1100}
                // width={1100}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Bar */}
      <div className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md py-8 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            {LOGOS.map((logo) => (
              <div key={logo.name} className="h-6 relative min-w-[80px]">
                <span className="text-white font-bold text-[14px] tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
