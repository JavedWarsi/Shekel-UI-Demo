"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const CARDS = [
  {
    icon: "/section-9/icon-verified.svg",
    title: "Verified Agents",
    desc: "Every agent undergoes rigorous security and quality audit",
  },
  {
    icon: "/section-9/icon-community.svg",
    title: "Community Ratings",
    desc: "Transparent reviews and historical performance data",
  },
  {
    icon: "/section-9/icon-secure.svg",
    title: "Secure Infrastructure",
    desc: "Enterprise-grade data encryption and privacy controls",
  },
  {
    icon: "/section-9/icon-scalable.svg",
    title: "Scalable Platform",
    desc: "Execute thousands of tasks simultaneously with low latency",
  },
];

export default function TrustReliability() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-[#101420] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 dark:opacity-20">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col gap-16">
        
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
            Built for <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>reliability</span> and <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>trust</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" stagger={0.1}>
          {CARDS.map((card) => (
            <RevealItem key={card.title}>
              <motion.article
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="h-full flex flex-col gap-6 p-8 transition-all duration-300 group hover:bg-slate-50 dark:hover:bg-white/5 rounded-3xl"
              >
                <div className="w-14 h-14 shrink-0 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image 
                    src={card.icon} 
                    alt={card.title} 
                    width={30} 
                    height={30} 
                    className="brightness-0 saturate-100 invert-[32%] sepia-[95%] saturate-[1900%] hue-rotate-[213deg] brightness-[95%] contrast-[94%] group-hover:brightness-100 group-hover:contrast-100 transition-all" 
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-slate-900 dark:text-white font-bold text-xl"
                    style={{ fontFamily: typography.fonts.jakarta }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: typography.fonts.inter }}
                  >
                    {card.desc}
                  </p>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>

      </div>
    </section>
  );
}
