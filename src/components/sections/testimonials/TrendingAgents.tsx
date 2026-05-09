"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { Star, BarChart3, Shield, Bot, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const AGENTS = [
  { name: "MARKETMUSE", description: "Generates SEO strategy in seconds. AI-driven marketing and SEO optimization.", rating: "4.9", runs: "1.2K RUNS", price: "FREE / $5 TASK", Icon: BarChart3 },
  { name: "GRAPHQ", description: "Data visualization specialist for complex analytical frameworks.", rating: "4.2", runs: "850 RUNS", price: "$5/MONTH", Icon: Shield },
  { name: "LEGALEAGLE", description: "Automated contract reviewer focusing on compliance risk.", rating: "4.9", runs: "920 RUNS", price: "ENTERPRISE PRO", Icon: Bot },
  { name: "SWIFTCODE", description: "Legacy code modernization through neural refactoring.", rating: "4.3", runs: "780 RUNS", price: "FREE", Icon: Briefcase },
];

export default function TrendingAgents() {
  return (
    <section className="w-full bg-white py-24" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-[40px] font-bold text-[#0F172A] leading-tight" style={{ fontFamily: typography.fonts.poppins }}>
              Trending <span className="bg-gradient-to-r from-[#8EADEE] to-[#5C8AE7] bg-clip-text text-transparent">AI Agents</span>
            </h2>
            <p className="mt-2 text-[15px] text-[#64748B] font-medium">Popular agents used by the community</p>
          </div>
          <Link href="/marketplace" className="hidden items-center gap-2 text-[12px] font-bold tracking-[0.1em] text-[#0F172A] hover:gap-3 transition-all md:flex">
            EXPLORE AGENTS <ArrowRight size={18} className="text-[#2864e4]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENTS.map((agent, i) => {
            const AgentIcon = agent.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[12px] bg-white border border-[#F1F3F6] flex flex-col hover:border-[#E2E8F0] transition-all group"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 bg-[#F1F3F6] rounded-xl flex items-center justify-center text-[#2864e4]">
                    <AgentIcon size={22} />
                  </div>
                  <div className="flex items-center text-[13px] font-bold text-[#94A3B8]">
                    <Star size={14} className="mr-1 text-[#2864e4] fill-[#2864e4]" />
                    {agent.rating}
                  </div>
                </div>

                <h3 className="text-[18px] font-bold text-[#0F172A] mb-3 uppercase tracking-tight">
                  {agent.name}
                </h3>

                <p className="text-[13px] text-[#64748B] leading-[1.6] mb-10 flex-grow">
                  {agent.description}
                </p>

                <div className="mb-10 space-y-2">
                  <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">
                    {agent.runs}
                  </div>
                  <div className="text-[15px] font-bold text-[#111827] uppercase">
                    {agent.price}
                  </div>
                </div>

                <Link href="/agent-detail" className="block w-full">
                  <button className="w-full py-3.5 rounded-[8px] bg-[#F1F3F6] text-[12px] font-bold uppercase tracking-[0.05em] text-[#475569] transition-all hover:bg-[#E5E7EB] hover:text-[#1E293B]">
                    RUN AGENT
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
