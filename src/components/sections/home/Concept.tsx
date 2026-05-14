"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const LIST_ITEMS = [
  "Decentralized node hosting",
  "Standardized Agent APIs",
  "Automated Revenue Splitting",
];

export default function Concept() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full transition-colors duration-300 bg-white dark:bg-black py-16 md:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/section-2/bg-decoration.svg"
          alt=""
          fill
          className="object-cover opacity-60 dark:opacity-20"
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div
            className="inline-flex w-fit bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 rounded-full px-4 py-1.5"
          >
            <span
              className="font-bold text-xs tracking-widest text-[#BA9EFF]"
              style={{ fontFamily: typography.fonts.inter }}
            >
              THE CONCEPT
            </span>
          </div>

          <h2
            className="text-slate-900 dark:text-white transition-colors duration-300"
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.15",
            }}
          >
            The App Store for <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>
              Autonomous Intelligence
            </span>
          </h2>

          <p
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ fontFamily: typography.fonts.inter }}
          >
            Shekel is the bridge between raw compute and functional automation. We
            provide the infrastructure for developers to host agents and for
            businesses to consume intelligence on-demand without vendor lock-in.
          </p>

          <ul className="flex flex-col gap-4 mt-4">
            {LIST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                  <Image 
                    src="/section-2/check-icon.svg" 
                    alt="" 
                    width={20} 
                    height={20} 
                    className="dark:invert-0 invert opacity-60 dark:opacity-100"
                  />
                </div>
                <span
                  className="text-slate-900 dark:text-slate-200 font-medium"
                  style={{ fontFamily: typography.fonts.inter }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content - Staggered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
          <div className="lg:mb-12">
            <ConceptCard
              bgSrc="/section-2/card-multichain-bg.svg"
              title="Multi-Chain Sync"
            />
          </div>
          <div>
            <ConceptCard
              bgSrc="/section-2/card-escrow-bg.svg"
              title="Secure Escrow"
              isTall
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function ConceptCard({ bgSrc, title, isTall }: { bgSrc: string; title: string; isTall?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="flex flex-col p-5 bg-white dark:bg-[#151926] border border-black/5 dark:border-white/5 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none"
    >
      <div className={`relative overflow-hidden rounded-2xl ${isTall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
        <Image
          src={bgSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <span
        className="mt-6 text-slate-900 dark:text-white font-semibold text-lg px-2 pb-2"
        style={{ fontFamily: typography.fonts.inter }}
      >
        {title}
      </span>
    </motion.div>
  );
}
