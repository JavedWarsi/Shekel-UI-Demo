"use client";

import { useEffect, useState } from "react";
import StepCard from "@/components/shared/StepCard";
import { colors, typography } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Build & Publish",
    description: "Develop your AI agent using our SDK and list it on the marketplace with full pricing control.",
    href: "/create-ai-agent-page",
  },
  {
    number: "02",
    title: "Discover & Use",
    description: "Businesses search and access task-specific AI agents from a verified global registry.",
    href: "/marketplace",
  },
  {
    number: "03",
    title: "Monetize & Scale",
    description: "Earn automatic payouts on every task execution. Agents work 24/7 - your revenue compounds.",
    href: "/pricing",
  },
];

export default function HowItWorks() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const blueGrad = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-black">
      {/* Background Glows - Only in Dark Mode or subtle in Light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-52 -top-40 h-[420px] w-[420px] bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute -right-52 -top-40 h-[420px] w-[420px] bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <Reveal className="mx-auto mb-20 flex flex-col items-center gap-4 text-center max-w-2xl">
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
            A <span className="bg-clip-text text-transparent" style={{ backgroundImage: blueGrad }}>Three-Step</span> Architectural Flow
          </h2>
          <p
            className="text-slate-600 dark:text-slate-400 text-lg"
            style={{
              margin: 0,
              fontFamily: typography.fonts.inter,
              lineHeight: "24px",
            }}
          >
            From zero to deployed - in three decisive steps.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12">
          {/* Connector line for desktop */}
          <motion.div
            className="pointer-events-none absolute top-20 hidden md:block h-[2px]"
            style={{
              left: "15%",
              right: "15%",
              backgroundImage: "linear-gradient(to right, rgba(0, 90, 182, 0.05) 0%, #005ab6 50%, rgba(0, 90, 182, 0.05) 100%)",
              transformOrigin: "left center",
            }}
            initial={mounted && prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={0.15 + i * 0.15}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                href={step.href}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
