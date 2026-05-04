"use client";

import { motion } from "framer-motion";
import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { ArrowRight, BarChart3, Code2, Sparkles, TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER_CONTAINER = {
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
    <section className="relative w-full overflow-hidden bg-[#f9f9f9] py-24 md:py-32" style={{ fontFamily: typography.fonts.inter }}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.1)] to-transparent" />
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2864e4]/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
      />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[rgba(0,0,0,0.08)] shadow-sm mb-6">
            <Sparkles size={16} className="text-[#2864e4]" />
            <span className="text-[13px] font-bold uppercase tracking-widest text-[#475569]">Measurable Results</span>
          </div>
          <h2 
            className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight mb-6 text-[#0b0b0b]"
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Impact across workflows
          </h2>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#414753]">
            Measure the tangible benefits of autonomous AI agents across your organization. From marketing automation to development velocity, see how Shekel transforms your operations.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Marketing Card */}
          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="group relative bg-white border border-[rgba(0,0,0,0.08)] p-10 md:p-12 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(40,100,228,0.15)] hover:border-[rgba(40,100,228,0.2)] overflow-hidden"
            style={{ borderRadius: radiuses.cardLg }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#ba9eff]/10 to-transparent rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-50" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#f7f9fc] border border-[rgba(0,0,0,0.05)] flex items-center justify-center mb-8 shadow-sm">
                <BarChart3 size={28} className="text-[#2864e4]" />
              </div>
              
              <h3 className="text-[28px] md:text-[32px] font-bold text-[#0b0b0b] mb-4" style={{ fontFamily: typography.fonts.poppins }}>
                Marketing
              </h3>
              <p className="text-[16px] text-[#414753] leading-[1.6] mb-10">
                Automate market research, content creation, and SEO optimization. Deploy autonomous marketing agents to identify trends and execute campaigns 24/7.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[rgba(0,0,0,0.06)]">
                <div>
                  <div className="text-[36px] font-bold text-[#1a1c1c] tracking-tight" style={{ fontFamily: typography.fonts.jakarta }}>3x</div>
                  <div className="text-[14px] font-medium text-[#475569] mt-1">Campaign ROI</div>
                </div>
                <div>
                  <div className="text-[36px] font-bold text-[#1a1c1c] tracking-tight" style={{ fontFamily: typography.fonts.jakarta }}>85%</div>
                  <div className="text-[14px] font-medium text-[#475569] mt-1">Faster Generation</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Development Card */}
          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="group relative bg-white border border-[rgba(0,0,0,0.08)] p-10 md:p-12 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(86,204,242,0.15)] hover:border-[rgba(86,204,242,0.2)] overflow-hidden"
            style={{ borderRadius: radiuses.cardLg }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#56ccf2]/10 to-transparent rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-50" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#f7f9fc] border border-[rgba(0,0,0,0.05)] flex items-center justify-center mb-8 shadow-sm">
                <Code2 size={28} className="text-[#56ccf2]" />
              </div>
              
              <h3 className="text-[28px] md:text-[32px] font-bold text-[#0b0b0b] mb-4" style={{ fontFamily: typography.fonts.poppins }}>
                Development
              </h3>
              <p className="text-[16px] text-[#414753] leading-[1.6] mb-10">
                Accelerate your software development lifecycle. Autonomous agents handle code review, testing, and continuous integration, freeing developers to focus on architecture.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[rgba(0,0,0,0.06)]">
                <div>
                  <div className="text-[36px] font-bold text-[#1a1c1c] tracking-tight" style={{ fontFamily: typography.fonts.jakarta }}>10x</div>
                  <div className="text-[14px] font-medium text-[#475569] mt-1">Deployment Speed</div>
                </div>
                <div>
                  <div className="text-[36px] font-bold text-[#1a1c1c] tracking-tight" style={{ fontFamily: typography.fonts.jakarta }}>40%</div>
                  <div className="text-[14px] font-medium text-[#475569] mt-1">Less Tech Debt</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Secondary Grid Section (Metrics & Discovery) */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-white border border-[rgba(0,0,0,0.06)] p-8 flex flex-col justify-center items-center text-center hover:border-[#2864e4]/30 transition-colors" style={{ borderRadius: radiuses.card }}>
            <Zap className="text-[#2864e4] mb-4" size={24} />
            <div className="text-[32px] font-bold text-[#1a1c1c] tracking-tight mb-2" style={{ fontFamily: typography.fonts.jakarta }}>10k+</div>
            <div className="text-[14px] font-medium text-[#475569]">Workflows Executed</div>
          </motion.div>
          
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-white border border-[rgba(0,0,0,0.06)] p-8 flex flex-col justify-center items-center text-center hover:border-[#2864e4]/30 transition-colors" style={{ borderRadius: radiuses.card }}>
            <Clock className="text-[#2864e4] mb-4" size={24} />
            <div className="text-[32px] font-bold text-[#1a1c1c] tracking-tight mb-2" style={{ fontFamily: typography.fonts.jakarta }}>50%</div>
            <div className="text-[14px] font-medium text-[#475569]">Less Manual Work</div>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-white border border-[rgba(0,0,0,0.06)] p-8 flex flex-col justify-center items-center text-center hover:border-[#2864e4]/30 transition-colors" style={{ borderRadius: radiuses.card }}>
            <ShieldCheck className="text-[#2864e4] mb-4" size={24} />
            <div className="text-[32px] font-bold text-[#1a1c1c] tracking-tight mb-2" style={{ fontFamily: typography.fonts.jakarta }}>99.9%</div>
            <div className="text-[14px] font-medium text-[#475569]">Task Accuracy</div>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-[#1a1c1c] p-8 flex flex-col justify-between items-start lg:col-span-1 md:col-span-3 relative overflow-hidden group" style={{ borderRadius: radiuses.card }}>
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#2864e4]/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#2864e4]/30 transition-colors" />
            <div className="relative z-10 w-full">
              <TrendingUp className="text-white mb-6" size={28} />
              <h4 className="text-[20px] font-bold text-white mb-3" style={{ fontFamily: typography.fonts.poppins }}>Discover Agents</h4>
              <p className="text-[14px] text-white/70 mb-8 leading-relaxed">
                Find the perfect AI agent for your specific workflow requirements.
              </p>
              <Link href="/marketplace" className="inline-flex w-full items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-[#1a1c1c] text-[14px] font-bold transition-all hover:bg-[#f0f0f0] active:scale-95">
                Explore Marketplace <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
