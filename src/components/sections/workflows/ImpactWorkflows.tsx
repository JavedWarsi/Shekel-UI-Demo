"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Code2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { typography, radiuses } from "@/tokens/design-tokens";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ImpactWorkflows() {
  return (
    <section
      className="
        relative w-full overflow-hidden py-24 md:py-32
        bg-[#f9f9f9] text-[#0b0b0b]
        dark:bg-[#020617] dark:text-white
        transition-colors duration-300
      "
      style={{ fontFamily: typography.fonts.inter }}
    >
      {/* Background Decor */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#2864e4]/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div
            className="
              mb-6 inline-flex items-center gap-2 rounded-full
              border px-4 py-2 shadow-sm
              bg-white border-black/10
              dark:bg-slate-800 dark:border-white/10
            "
          >
            <Sparkles size={16} className="text-[#2864e4]" />

            <span
              className="
                text-[13px] font-bold uppercase tracking-widest
                text-[#475569] dark:text-slate-200
              "
            >
              Measurable Results
            </span>
          </div>

          <h2
            className="
              mb-6 text-[40px] font-bold leading-[1.1] tracking-tight
              text-[#0b0b0b] dark:text-white
              md:text-[56px]
            "
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Impact across workflows
          </h2>

          <p
            className="
              text-[18px] leading-[1.6]
              text-[#414753] dark:text-slate-300
              md:text-[20px]
            "
          >
            Measure the tangible benefits of autonomous AI agents across your
            organization. From marketing automation to development velocity,
            see how Shekel transforms your operations.
          </p>
        </motion.div>

        {/* Main Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
          className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {/* Marketing */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="
              group relative overflow-hidden border p-10 md:p-12
              transition-all duration-300
              bg-white border-black/10
              hover:border-[#2864e4]/20
              hover:shadow-[0_20px_40px_-15px_rgba(40,100,228,0.15)]

              dark:bg-slate-900
              dark:border-white/10
              dark:hover:border-[#2864e4]/40
            "
            style={{ borderRadius: radiuses.cardLg }}
          >
            <div className="absolute right-0 top-0 h-[300px] w-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ba9eff]/10 to-transparent blur-[60px] opacity-50 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10">
              <div
                className="
                  mb-8 flex h-14 w-14 items-center justify-center
                  rounded-2xl border shadow-sm
                  bg-[#f7f9fc] border-black/5
                  dark:bg-slate-800 dark:border-white/10
                "
              >
                <BarChart3 size={28} className="text-[#2864e4]" />
              </div>

              <h3
                className="
                  mb-4 text-[28px] font-bold
                  text-[#0b0b0b] dark:text-white
                  md:text-[32px]
                "
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Marketing
              </h3>

              <p
                className="
                  mb-10 text-[16px] leading-[1.6]
                  text-[#414753] dark:text-slate-300
                "
              >
                Automate market research, content creation, and SEO
                optimization. Deploy autonomous marketing agents to identify
                trends and execute campaigns 24/7.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-black/5 pt-8 dark:border-white/10">
                <div>
                  <div
                    className="
                      text-[36px] font-bold tracking-tight
                      text-[#1a1c1c] dark:text-white
                    "
                    style={{ fontFamily: typography.fonts.jakarta }}
                  >
                    3x
                  </div>

                  <div className="mt-1 text-[14px] font-medium text-[#475569] dark:text-slate-400">
                    Campaign ROI
                  </div>
                </div>

                <div>
                  <div
                    className="
                      text-[36px] font-bold tracking-tight
                      text-[#1a1c1c] dark:text-white
                    "
                    style={{ fontFamily: typography.fonts.jakarta }}
                  >
                    85%
                  </div>

                  <div className="mt-1 text-[14px] font-medium text-[#475569] dark:text-slate-400">
                    Faster Generation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Development */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="
              group relative overflow-hidden border p-10 md:p-12
              transition-all duration-300
              bg-white border-black/10
              hover:border-[#56ccf2]/20
              hover:shadow-[0_20px_40px_-15px_rgba(86,204,242,0.15)]

              dark:bg-slate-900
              dark:border-white/10
              dark:hover:border-[#56ccf2]/40
            "
            style={{ borderRadius: radiuses.cardLg }}
          >
            <div className="absolute right-0 top-0 h-[300px] w-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#56ccf2]/10 to-transparent blur-[60px] opacity-50 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10">
              <div
                className="
                  mb-8 flex h-14 w-14 items-center justify-center
                  rounded-2xl border shadow-sm
                  bg-[#f7f9fc] border-black/5
                  dark:bg-slate-800 dark:border-white/10
                "
              >
                <Code2 size={28} className="text-[#56ccf2]" />
              </div>

              <h3
                className="
                  mb-4 text-[28px] font-bold
                  text-[#0b0b0b] dark:text-white
                  md:text-[32px]
                "
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Development
              </h3>

              <p
                className="
                  mb-10 text-[16px] leading-[1.6]
                  text-[#414753] dark:text-slate-300
                "
              >
                Accelerate your software development lifecycle. Autonomous
                agents handle code review, testing, and continuous integration,
                freeing developers to focus on architecture.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-black/5 pt-8 dark:border-white/10">
                <div>
                  <div
                    className="
                      text-[36px] font-bold tracking-tight
                      text-[#1a1c1c] dark:text-white
                    "
                    style={{ fontFamily: typography.fonts.jakarta }}
                  >
                    10x
                  </div>

                  <div className="mt-1 text-[14px] font-medium text-[#475569] dark:text-slate-400">
                    Deployment Speed
                  </div>
                </div>

                <div>
                  <div
                    className="
                      text-[36px] font-bold tracking-tight
                      text-[#1a1c1c] dark:text-white
                    "
                    style={{ fontFamily: typography.fonts.jakarta }}
                  >
                    40%
                  </div>

                  <div className="mt-1 text-[14px] font-medium text-[#475569] dark:text-slate-400">
                    Less Tech Debt
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {/* Card 1 */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="
              flex flex-col items-center justify-center
              border p-8 text-center transition-colors
              bg-white border-black/5
              hover:border-[#2864e4]/30

              dark:bg-slate-900
              dark:border-white/10
              dark:hover:border-[#2864e4]/40
            "
            style={{ borderRadius: radiuses.card }}
          >
            <Zap className="mb-4 text-[#2864e4]" size={24} />

            <div
              className="
                mb-2 text-[32px] font-bold tracking-tight
                text-[#1a1c1c] dark:text-white
              "
              style={{ fontFamily: typography.fonts.jakarta }}
            >
              10k+
            </div>

            <div className="text-[14px] font-medium text-[#475569] dark:text-slate-400">
              Workflows Executed
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="
              flex flex-col items-center justify-center
              border p-8 text-center transition-colors
              bg-white border-black/5
              hover:border-[#2864e4]/30

              dark:bg-slate-900
              dark:border-white/10
              dark:hover:border-[#2864e4]/40
            "
            style={{ borderRadius: radiuses.card }}
          >
            <Clock className="mb-4 text-[#2864e4]" size={24} />

            <div
              className="
                mb-2 text-[32px] font-bold tracking-tight
                text-[#1a1c1c] dark:text-white
              "
              style={{ fontFamily: typography.fonts.jakarta }}
            >
              50%
            </div>

            <div className="text-[14px] font-medium text-[#475569] dark:text-slate-400">
              Less Manual Work
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="
              flex flex-col items-center justify-center
              border p-8 text-center transition-colors
              bg-white border-black/5
              hover:border-[#2864e4]/30

              dark:bg-slate-900
              dark:border-white/10
              dark:hover:border-[#2864e4]/40
            "
            style={{ borderRadius: radiuses.card }}
          >
            <ShieldCheck className="mb-4 text-[#2864e4]" size={24} />

            <div
              className="
                mb-2 text-[32px] font-bold tracking-tight
                text-[#1a1c1c] dark:text-white
              "
              style={{ fontFamily: typography.fonts.jakarta }}
            >
              99.9%
            </div>

            <div className="text-[14px] font-medium text-[#475569] dark:text-slate-400">
              Task Accuracy
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="
              group relative overflow-hidden
              bg-[#1a1c1c] p-8
              md:col-span-3 lg:col-span-1
              dark:bg-[#111827]
            "
            style={{ borderRadius: radiuses.card }}
          >
            <div className="absolute right-0 top-0 h-[200px] w-[200px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2864e4]/20 blur-[40px] transition-colors group-hover:bg-[#2864e4]/30" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <TrendingUp className="mb-6 text-white" size={28} />

                <h4
                  className="mb-3 text-[20px] font-bold text-white"
                  style={{ fontFamily: typography.fonts.poppins }}
                >
                  Discover Agents
                </h4>

                <p className="mb-8 text-[14px] leading-relaxed text-white/70">
                  Find the perfect AI agent for your specific workflow
                  requirements.
                </p>
              </div>

              <Link
                href="/marketplace"
                className="
                  inline-flex w-full items-center justify-center gap-2
                  rounded-xl bg-white px-6 py-3.5
                  text-[14px] font-bold text-[#1a1c1c]
                  transition-all hover:bg-[#f0f0f0] active:scale-95
                "
              >
                Explore Marketplace
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}