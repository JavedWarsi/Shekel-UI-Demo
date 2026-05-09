"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { Search, PenTool, Mail } from "lucide-react";

const CAPABILITIES = [
  {
    title: "SEO Optimization",
    desc: "Equip your agent with real-time SERP analysis and keyword density checking capabilities.",
    Icon: Search
  },
  {
    title: "Content Generation",
    desc: "Integrated LLM hooks for high-quality long-form articles, ad copy, and social posts.",
    Icon: PenTool
  },
  {
    title: "Email Automation",
    desc: "Connect to SMTP or API-based mail providers for automated outreach and follow-ups.",
    Icon: Mail
  }
];

export default function AddCapabilities() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="text-[40px] font-bold text-[#0F172A] mb-16" style={{ fontFamily: typography.fonts.inter }}>
          Add Capabilities
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.Icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2864E4] mb-8">
                  <Icon size={24} />
                </div>
                <h3 className="text-[20px] font-bold text-[#0F172A] mb-4">
                  {cap.title}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
