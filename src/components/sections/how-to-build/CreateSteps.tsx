"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";

const STEPS = [
  {
    num: 1,
    title: "Initiate",
    desc: "Navigate to the 'Create Agent' portal in your dashboard to start the record."
  },
  {
    num: 2,
    title: "Naming",
    desc: "Choose a unique, descriptive name that reflects the agent's primary function."
  },
  {
    num: 3,
    title: "Description",
    desc: "Write a clear summary for users to understand what problems this agent solves."
  },
  {
    num: 4,
    title: "Categorize",
    desc: "Select tags like 'Marketing' or 'DevOps' for marketplace discoverability."
  }
];

export default function CreateSteps() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC] dark:bg-[#020617]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="text-[40px] font-bold dark:text-white text-[#0F172A] mb-16" style={{ fontFamily: typography.fonts.inter }}>
          Create Your Agent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[24px] p-8 border border-gray-200 shadow-sm  flex flex-col items-start h-full dark:bg-slate-900 "
            >
              <div className="w-10 h-10 rounded-full bg-[#2864E4] dark:bg-slate-700 flex items-center justify-center text-white font-bold text-[16px] mb-8">
                {step.num}
              </div>
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-4 dark:text-white">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#64748B] leading-relaxed dark:text-gray-400">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
