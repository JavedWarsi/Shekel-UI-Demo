"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import {
  Star,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const TRENDING_AGENTS = [
  {
    name: "MARKETMUSE",
    description:
      "Generates SEO strategy in seconds. AI-driven marketing and SEO optimization.",
    runs: "1.2K RUNS",
    price: "FREE / $5 TASK",
    rating: "4.9",
    Icon: TrendingUp,
  },
  {
    name: "GRAPHQ",
    description:
      "Data visualization specialist for complex analytical frameworks.",
    runs: "850 RUNS",
    price: "$5/MONTH",
    rating: "4.2",
    Icon: (props: any) => (
      <Image
        src="/graphq.svg"
        alt="GraphQ"
        width={props.size || 24}
        height={props.size || 24}
        className="object-contain"
      />
    ),
  },
  {
    name: "LEGALEAGLE",
    description:
      "Automated contract reviewer focusing on compliance risk.",
    runs: "920 RUNS",
    price: "ENTERPRISE PRO",
    rating: "4.9",
    Icon: (props: any) => (
      <Image
        src="/ham.svg"
        alt="ham"
        width={props.size || 24}
        height={props.size || 24}
        className="object-contain"
      />
    ),
  },
  {
    name: "SWIFTCODE",
    description:
      "Legacy code modernization through neural refactoring.",
    runs: "780 RUNS",
    price: "FREE",
    rating: "4.3",
    Icon: (props: any) => (
      <Image
        src="/terminal.svg"
        alt="terminal"
        width={props.size || 24}
        height={props.size || 24}
        className="object-contain"
      />
    ),
  },
];

export default function TrendingAgents() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className="w-full py-24 transition-colors duration-300 bg-white dark:bg-[#05070C]"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2
              className="text-[40px] font-bold leading-tight text-[#0F172A] dark:text-white transition-colors duration-300"
              style={{ fontFamily: typography.fonts.poppins }}
            >
              Trending{" "}
              <span className="bg-gradient-to-r from-[#8EADEE] to-[#5C8AE7] bg-clip-text text-transparent">
                AI Agents
              </span>
            </h2>

            <p className="mt-2 text-[15px] font-medium text-[#64748B] dark:text-white/60 transition-colors duration-300">
              Popular agents used by the community
            </p>
          </div>

          <Link
            href="/marketplace"
            className="hidden items-center gap-2 text-[12px] font-bold tracking-[0.1em] text-[#0F172A] dark:text-white hover:gap-3 transition-all md:flex"
          >
            EXPLORE AGENTS
            <ArrowRight size={18} className="text-[#2864e4]" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRENDING_AGENTS.map((agent, i) => {
            const AgentIcon = agent.Icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  group flex flex-col rounded-[12px] p-8
                  border transition-all duration-300
                  bg-white border-[#F1F3F6]
                  hover:border-[#E2E8F0]
                  dark:bg-[#0B111B]
                  dark:border-white/10
                  dark:hover:border-[#2864e4]/40
                "
              >
                
                {/* Top */}
                <div className="mb-10 flex items-start justify-between">
                  
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center rounded-xl
                      bg-[#F1F3F6]
                      dark:bg-[#111827]
                      text-[#2864e4]
                      transition-colors duration-300
                    "
                  >
                    <AgentIcon size={22} />
                  </div>

                  <div className="flex items-center text-[13px] font-bold text-[#94A3B8] dark:text-white/60 transition-colors duration-300">
                    <Star
                      size={14}
                      className="mr-1 fill-[#2864e4] text-[#2864e4]"
                    />
                    {agent.rating}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-[18px] font-bold uppercase tracking-tight text-[#0F172A] dark:text-white transition-colors duration-300">
                  {agent.name}
                </h3>

                {/* Description */}
                <p className="mb-10 flex-grow text-[13px] leading-[1.6] text-[#64748B] dark:text-white/60 transition-colors duration-300">
                  {agent.description}
                </p>

                {/* Stats */}
                <div className="mb-10 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] dark:text-white/40">
                    {agent.runs}
                  </div>

                  <div className="text-[15px] font-bold uppercase text-[#111827] dark:text-white transition-colors duration-300">
                    {agent.price}
                  </div>
                </div>

                {/* Button */}
                <Link href="/agent-detail" className="block w-full">
                  <button
                    className="
                      w-full rounded-[8px] py-3.5
                      text-[12px] font-bold uppercase tracking-[0.05em]
                      transition-all duration-300
                      bg-[#F1F3F6] text-[#475569]
                      hover:bg-[#E5E7EB] hover:text-[#1E293B]
                      dark:bg-[#111827]
                      dark:text-white/80
                      dark:hover:bg-[#1F2937]
                      dark:hover:text-white
                    "
                  >
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