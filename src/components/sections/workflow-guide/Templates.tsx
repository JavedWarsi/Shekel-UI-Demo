"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { Zap, Clock } from "lucide-react";

const TIPS = [
  {
    title: "Parallel execution",
    desc: "Run independent agent chains simultaneously to reduce overall latency.",
    Icon: Zap
  },
  {
    title: "Infinite loops",
    desc: "Enable agents to recurse until a specific condition or goal is met.",
    Icon: Clock
  }
];

const TEMPLATES = [
  { src: "/section-17-workflow-guide/Border.png", title: "Social Media Automation", desc: "Auto-generate and post content across multiple platforms." },
  { src: "/section-17-workflow-guide/Border (1).png", title: "Market Analysis", desc: "Scan real-time data and generate comprehensive reports." },
  { src: "/section-17-workflow-guide/mail.png", title: "Customer Support", desc: "Multi-agent chain for complex support ticket resolution." }
];

export default function WorkflowTemplates() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0F172A]" style={{ fontFamily: typography.fonts.inter }}>
            Optimization Tips
          </h2>
          <button className="text-[12px] font-bold text-[#2864E4] uppercase tracking-widest hover:underline">VIEW DOCUMENTATION</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {TIPS.map((tip, i) => {
            const Icon = tip.Icon;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] p-12 border border-[#F1F3F6] shadow-[0_20px_40px_rgba(0,0,0,0.04)] flex items-center gap-10 hover:border-[#2864E4]/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2864E4] flex-shrink-0 group-hover:bg-[#2864E4] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={32} />
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#0F172A] mb-2">{tip.title}</h4>
                  <p className="text-[15px] text-[#64748B] leading-relaxed font-light">{tip.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0F172A] mb-16" style={{ fontFamily: typography.fonts.inter }}>
          Production Templates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEMPLATES.map((tmpl, i) => (
            <motion.div
              key={tmpl.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[32px] overflow-hidden mb-8 border border-[#F1F3F6] shadow-[0_15px_35px_rgba(0,0,0,0.05)]">
                <Image
                  src={tmpl.src}
                  alt={tmpl.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-[20px] font-bold text-[#0F172A] mb-3 group-hover:text-[#2864E4] transition-colors">{tmpl.title}</h4>
              <p className="text-[15px] text-[#64748B] leading-relaxed font-light">{tmpl.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
