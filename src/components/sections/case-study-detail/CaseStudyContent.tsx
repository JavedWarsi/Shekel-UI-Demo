"use client";

import { motion } from "framer-motion";
import { typography, radiuses } from "@/tokens/design-tokens";
import { CheckCircle2, TrendingUp, Zap, ShieldCheck } from "lucide-react";

interface CaseStudyContentProps {
  study: {
    company: string;
    color: string;
  };
}

export default function CaseStudyContent({ study }: CaseStudyContentProps) {
  return (
    <section className="w-full py-24 bg-white" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-[#414753] leading-[1.8]"
            >
              <h2 className="text-[32px] font-bold text-[#0b0b0b] mb-8" style={{ fontFamily: typography.fonts.poppins }}>The Challenge</h2>
              <p className="mb-8">
                {study.company} faced a significant bottleneck in their operational workflows. With manual processes accounting for over 70% of their task execution time, scaling their global operations had become increasingly expensive and error-prone. They needed a solution that could handle complex decision-making at scale without compromising on quality or security.
              </p>
              
              <h2 className="text-[32px] font-bold text-[#0b0b0b] mb-8" style={{ fontFamily: typography.fonts.poppins }}>The Solution</h2>
              <p className="mb-8">
                By leveraging Shekel's autonomous agent marketplace, {study.company} deployed a custom network of specialized AI agents. These agents were chained together to form end-to-end autonomous workflows, handling everything from initial data ingestion to final execution and verification.
              </p>
              
              <div className="bg-[#f7f9fc] p-10 my-12 border border-[rgba(0,0,0,0.04)]" style={{ borderRadius: radiuses.card }}>
                <h3 className="text-[24px] font-bold text-[#0b0b0b] mb-6" style={{ fontFamily: typography.fonts.poppins }}>Implementation Strategy</h3>
                <ul className="space-y-4 m-0 p-0 list-none">
                  {[
                    "Phase 1: Identification of high-impact manual bottlenecks.",
                    "Phase 2: Deployment of specialized task-specific agents.",
                    "Phase 3: Integration of agent chaining for complex workflows.",
                    "Phase 4: Real-time optimization using execution performance data."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-[16px] font-medium text-[#1a1c1c]">
                      <CheckCircle2 size={20} style={{ color: study.color }} className="flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-[32px] font-bold text-[#0b0b0b] mb-8" style={{ fontFamily: typography.fonts.poppins }}>The Result</h2>
              <p>
                The impact was immediate and measurable. Within the first quarter of deployment, {study.company} saw a dramatic reduction in operational costs and a significant increase in output quality. The autonomous network now handles 95% of the previously manual tasks, allowing their human team to focus on high-level strategy and innovation.
              </p>
            </motion.div>
          </div>

          {/* Sidebar / Stats */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[rgba(0,0,0,0.08)] p-8 shadow-sm"
                style={{ borderRadius: radiuses.card }}
              >
                <h4 className="text-[18px] font-bold text-[#0b0b0b] mb-8" style={{ fontFamily: typography.fonts.poppins }}>Key Outcomes</h4>
                <div className="space-y-8">
                  {[
                    { label: "Efficiency Boost", value: "85%", icon: Zap, color: "#2864e4" },
                    { label: "Cost Reduction", value: "60%", icon: TrendingUp, color: "#10b981" },
                    { label: "Task Accuracy", value: "99.9%", icon: ShieldCheck, color: "#7c4dff" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}10` }}>
                        <stat.icon size={24} style={{ color: stat.color }} />
                      </div>
                      <div>
                        <div className="text-[24px] font-bold text-[#1a1c1c]" style={{ fontFamily: typography.fonts.jakarta }}>{stat.value}</div>
                        <div className="text-[14px] font-medium text-[#475569]">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="bg-[#1a1c1c] p-8 text-white relative overflow-hidden" style={{ borderRadius: radiuses.card }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                <h4 className="text-[20px] font-bold mb-4 relative z-10" style={{ fontFamily: typography.fonts.poppins }}>Ready to scale?</h4>
                <p className="text-white/70 text-[14px] mb-8 relative z-10 leading-relaxed">
                  Join hundreds of companies using Shekel to automate their future.
                </p>
                <button className="w-full py-4 bg-white text-[#1a1c1c] font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
