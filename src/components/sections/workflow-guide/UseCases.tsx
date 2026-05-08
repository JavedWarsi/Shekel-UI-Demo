"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, ShieldCheck, Zap } from "lucide-react";

const USE_CASES = [
  {
    title: "Market Intelligence",
    desc: "Chain a web scraper with a sentiment analysis agent and a report generator to get daily market insights.",
    icon: BarChart3,
    agents: ["Scraper", "LLM", "Formatter"],
    color: "#2864e4"
  },
  {
    title: "Global Support",
    desc: "Route incoming tickets to a translation agent, then to a specialized support agent, and back to the customer.",
    icon: Globe,
    agents: ["Translator", "Expert", "Responder"],
    color: "#56ccf2"
  },
  {
    title: "Security Auditing",
    desc: "Continuously scan logs, identify patterns with a threat-detection agent, and trigger defensive actions.",
    icon: ShieldCheck,
    agents: ["Monitor", "Analyzer", "Actor"],
    color: "#10b981"
  },
  {
    title: "Content Pipeline",
    desc: "Generate content ideas, draft articles, and optimize for SEO using three distinct specialized entities.",
    icon: Zap,
    agents: ["Ideator", "Writer", "Optimizer"],
    color: "#7c4dff"
  }
];

export default function WorkflowUseCases() {
  return (
    <section className="relative w-full py-24 bg-[#f9f9f9]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b0b0b] mb-4" style={{ fontFamily: typography.fonts.poppins }}>
            Popular Workflow Patterns
          </h2>
          <p className="text-[16px] text-[#414753] max-w-2xl mx-auto">
            These blueprints represent common multi-agent configurations used by industry-leading teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USE_CASES.map((useCase, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 8 }}
              className="bg-white border border-[rgba(0,0,0,0.06)] p-8 rounded-3xl shadow-sm flex flex-col md:flex-row gap-8 items-start group transition-all"
            >
              <div 
                className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-white"
                style={{ backgroundColor: useCase.color }}
              >
                <useCase.icon size={32} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-[#0b0b0b] mb-3">{useCase.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#414753] mb-6">
                  {useCase.desc}
                </p>
                
                <div className="flex items-center gap-2 mb-6">
                  {useCase.agents.map((agent, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-[#f8fafd] border border-[rgba(0,0,0,0.04)] rounded-full text-[12px] font-bold text-[#2864e4]">
                        {agent}
                      </span>
                      {j < useCase.agents.length - 1 && <ArrowRight size={12} className="text-[#94A3B8]" />}
                    </div>
                  ))}
                </div>
                
                <button className="text-[14px] font-bold text-[#2864e4] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Deploy this pattern <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
