"use client";

import { typography, colors, radiuses } from "@/tokens/design-tokens";
import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, Settings, Sparkles, Terminal } from "lucide-react";

const STEPS = [
  {
    title: "Environment Setup",
    desc: "Install the Shekel SDK and initialize your project workspace with our CLI tools.",
    icon: Terminal,
    color: "#2864e4",
    code: "npm install @shekel/sdk\nshekel init my-agent"
  },
  {
    title: "Define Agent Logic",
    desc: "Configure your agent's persona, knowledge base, and specific task parameters using JSON or YAML.",
    icon: Settings,
    color: "#56ccf2",
    code: "{\n  \"name\": \"DataHarvester\",\n  \"role\": \"Scraper\",\n  \"tools\": [\"browser\", \"sql\"]\n}"
  },
  {
    title: "Integrate Frameworks",
    desc: "Connect your agent to popular LLMs like GPT-4, Claude, or local Llama models via our unified API.",
    icon: Cpu,
    color: "#10b981",
    code: "const agent = new ShekelAgent({\n  model: \"claude-3-opus\",\n  api_key: PROCESS.ENV.KEY\n});"
  },
  {
    title: "Test & Optimize",
    desc: "Run simulations in our sandbox environment to verify success rates and token efficiency.",
    icon: Sparkles,
    color: "#7c4dff",
    code: "await agent.test({\n  input: \"Analyze this data...\",\n  mode: \"sandbox\"\n});"
  }
];

export default function HowToBuildSteps() {
  return (
    <section className="relative w-full py-24 bg-white" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b0b0b] mb-4" style={{ fontFamily: typography.fonts.poppins }}>
            The 4-Step Process
          </h2>
          <p className="text-[16px] text-[#414753] max-w-2xl mx-auto">
            Everything you need to go from idea to a fully functioning autonomous agent on the Shekel network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {STEPS.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: step.color, boxShadow: `0 10px 20px -5px ${step.color}40` }}
                >
                  <step.icon size={28} />
                </div>
                <div>
                  <span className="text-[#94A3B8] font-bold text-[14px] uppercase tracking-widest">Step 0{i + 1}</span>
                  <h3 className="text-[24px] font-bold text-[#0b0b0b]">{step.title}</h3>
                </div>
              </div>
              
              <p className="text-[16px] leading-relaxed text-[#414753]">
                {step.desc}
              </p>
              
              <div className="bg-[#0b0b0b] rounded-2xl p-6 font-mono text-[14px] text-white/80 relative overflow-hidden group">
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <pre className="mt-4">
                  <code>{step.code}</code>
                </pre>
                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Code2 size={20} className="text-white/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
