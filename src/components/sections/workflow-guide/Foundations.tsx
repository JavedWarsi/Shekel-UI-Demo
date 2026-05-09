"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { MousePointer2, Paintbrush2, Type } from "lucide-react";

const STEPS = [
  {
    num: 1,
    title: "Open Workflow Builder",
    desc: "Navigate to the workspace and select 'New Workflow' to initialize your architectural canvas."
  },
  {
    num: 2,
    title: "Add agents",
    desc: "Drag and drop pre-configured agents from your library onto the workspace grid."
  },
  {
    num: 3,
    title: "Connect nodes",
    desc: "Draw visual paths between output and input sockets to define the execution sequence."
  }
];

export default function WorkflowFoundations() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0F172A] mb-16" style={{ fontFamily: typography.fonts.inter }}>
          Building Foundations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] p-10 border border-[#F1F3F6] shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2864E4] flex items-center justify-center text-white font-bold text-[18px] mb-10 shadow-lg shadow-blue-500/20">
                {step.num}
              </div>
              <h3 className="text-[22px] font-bold text-[#0F172A] mb-4">{step.title}</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Node Architecture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] p-12 md:p-24 border border-[#F1F3F6] shadow-[0_20px_40px_rgba(0,0,0,0.04)] text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-[32px] md:text-[36px] font-bold text-[#0F172A] mb-4">Visual Node Architecture</h3>
            <p className="text-[#64748B] text-[16px] mb-24 max-w-xl mx-auto font-light">Intuitive drag-and-drop connections for seamless intelligence flow.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative">
              {/* Connector lines with moving dots */}
              <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-[#E2E8F0] -translate-y-1/2 z-0">
                <motion.div 
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#2864E4] rounded-full shadow-[0_0_10px_#2864E4]"
                />
              </div>
              
              <NodeCard icon={<MousePointer2 size={28} />} title="Content AI" subtitle="PRIMARY GENERATOR" />
              <NodeCard icon={<Paintbrush2 size={28} />} title="Design AI" subtitle="VISUAL ORCHESTRATOR" active />
              <NodeCard icon={<Type size={28} />} title="Publish AI" subtitle="ENDPOINT DELIVERY" />
            </div>
          </div>
          
          {/* Faint Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(#2864E4 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />
        </motion.div>
      </div>
    </section>
  );
}

function NodeCard({ icon, title, subtitle, active = false }: { icon: any, title: string, subtitle: string, active?: boolean }) {
  return (
    <div className={`relative z-10 w-full md:w-[240px] bg-white rounded-[24px] p-10 border transition-all duration-500 ${active ? 'border-[#2864E4] shadow-[0_25px_50px_rgba(40,100,228,0.12)] scale-105' : 'border-[#F1F3F6] shadow-[0_15px_35px_rgba(0,0,0,0.03)]'}`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 mx-auto transition-colors ${active ? 'bg-[#2864E4] text-white shadow-lg shadow-blue-500/30' : 'bg-blue-50 text-[#2864E4]'}`}>
        {icon}
      </div>
      <h4 className="text-[20px] font-bold text-[#0F172A] mb-2">{title}</h4>
      <p className="text-[11px] font-bold text-[#94A3B8] tracking-[0.15em] uppercase">{subtitle}</p>
      
      {active && (
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -right-2 w-4 h-4 bg-[#2864E4] rounded-full border-[3px] border-white shadow-sm" 
        />
      )}
    </div>
  );
}
