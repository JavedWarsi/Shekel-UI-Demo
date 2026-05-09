"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { LogIn, LogOut, GitFork, Play } from "lucide-react";

const LOGIC_CARDS = [
  {
    title: "Input mapping",
    desc: "Define exactly which variables are passed from the trigger to the first set of agents.",
    link: "CONFIGURING DATA MAPS",
    Icon: LogIn
  },
  {
    title: "Output flow",
    desc: "Structure the finalized data into formats ready for API consumption or database storage.",
    link: "VIEW TRANSFORM LOGIC",
    Icon: LogOut
  },
  {
    title: "Conditions",
    desc: "Add branched logic (if/else) to direct your workflow based on agent output scores.",
    link: "BRANCHING DOCUMENTATION",
    Icon: GitFork
  }
];

export default function WorkflowExecution() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {LOGIC_CARDS.map((card, i) => {
            const Icon = card.Icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-12 border border-[#F1F3F6] shadow-[0_20px_40px_rgba(0,0,0,0.04)] flex flex-col h-full hover:border-[#2864E4]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2864E4] mb-10 group-hover:bg-[#2864E4] group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-4">{card.title}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed mb-12 flex-grow font-light">{card.desc}</p>
                <button className="text-[12px] font-bold text-[#2864E4] tracking-[0.15em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  {card.link} <ArrowRightSmall />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Real-time Execution Monitor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] p-12 md:p-20 border border-[#F1F3F6] shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20 relative z-10">
            <div>
              <h3 className="text-[32px] md:text-[36px] font-bold text-[#0F172A] mb-4">Real-time Execution</h3>
              <p className="text-[#64748B] text-[16px] font-light">Monitor your agent sequence as it processes in live environments.</p>
            </div>
            <button className="h-16 px-10 rounded-2xl bg-[#2864E4] text-white text-[15px] font-bold flex items-center gap-4 shadow-[0_15px_30px_rgba(40,100,228,0.3)] hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(40,100,228,0.4)] transition-all active:scale-95">
              <Play size={20} fill="white" />
              Run Workflow
            </button>
          </div>

          <div className="space-y-10 relative z-10 max-w-5xl">
            <LogEntry time="09:00" status="Success" text="Trigger: Incoming HTTP request received." />
            <LogEntry time="09:01" status="Success" text="Content AI: Generating copy for blog post [Success]." />
            <LogEntry time="09:02" status="Processing" text="Design AI: Synthesizing image variations based on copy..." />
            <LogEntry time="--:--" status="Pending" text="Publish AI: Pending Design AI completion." />
          </div>

          {/* Atmospheric Glow */}
          <div className="absolute -right-[15%] bottom-[15%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function LogEntry({ time, status, text }: { time: string, status: string, text: string }) {
  const isPending = status === 'Pending';
  const isProcessing = status === 'Processing';
  
  return (
    <div className="flex items-center gap-10">
      <span className="font-mono text-[15px] text-[#94A3B8] w-16 tracking-tight">{time}</span>
      <div className="relative">
        <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 transition-all ${isPending ? 'border-2 border-[#E2E8F0]' : isProcessing ? 'bg-[#2864E4] shadow-[0_0_15px_#2864E4]' : 'bg-[#10B981] shadow-[0_0_15px_#10B981]'}`} />
        {isProcessing && (
          <motion.div 
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-[#2864E4] rounded-full"
          />
        )}
      </div>
      <p className={`font-mono text-[15px] leading-none ${isPending ? 'text-[#94A3B8]' : isProcessing ? 'text-[#1E293B] font-medium' : 'text-[#1E293B]'}`}>
        {text}
      </p>
    </div>
  );
}

function ArrowRightSmall() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
