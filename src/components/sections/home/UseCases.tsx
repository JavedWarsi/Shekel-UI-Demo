"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const CARDS = [
  {
    title: "Marketing",
    desc: "Run campaign briefs, generate performance copy, and automate social content - all through specialized marketing AI agents deployed on demand.",
    img: "/section-5/marketing.png",
  },
  {
    title: "Real Estate",
    desc: "Generate 3D floor plans, write property listings, and automate buyer inquiries. From ideation to close, faster.",
    img: "/section-5/real-estate.jpg",
  },
  {
    title: "Legal",
    desc: "Deploy AI agents that review contracts, surface clause-level risk, and deliver plain-English summaries - without a full legal retainer.",
    img: "/section-5/legal-overlay.png",
  },
];

export default function UseCases() {
  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-slate-50 dark:bg-black relative overflow-hidden">

      {/* Ambient Glows for Dark Mode */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-blue-600/5 dark:bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute -right-1/4 bottom-0 w-1/2 h-full bg-indigo-600/5 dark:bg-indigo-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        <Reveal className="mb-16">
          <h2
            className="text-center text-slate-900 dark:text-white transition-colors duration-300"
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.1",
            }}
          >
            Engineered for <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>Every Vertical</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
          {CARDS.map((card) => (
            <RevealItem key={card.title}>
              <motion.article
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="h-full flex flex-col p-8 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-[40px] shadow-xl shadow-slate-200/40 dark:shadow-none backdrop-blur-md"
              >
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                <h3
                  className="text-slate-900 dark:text-white font-semibold text-xl mb-3"
                  style={{ fontFamily: typography.fonts.inter }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: typography.fonts.inter }}
                >
                  {card.desc}
                </p>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>

      </div>
    </section>
  );
}
