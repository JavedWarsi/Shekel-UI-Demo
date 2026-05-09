"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { Share2, ArrowRightLeft } from "lucide-react";

export default function WorkflowDefinition() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: -0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-[40px] md:text-[48px] font-bold text-[#0F172A] leading-[1.2] mb-8" style={{ fontFamily: typography.fonts.inter }}>
              Workflows are orchestrated <br />
              sequences of <span className="text-[#2864E4]">AI agents.</span>
            </h2>
            
            <p className="text-[16px] text-[#64748B] leading-relaxed mb-12 max-w-xl">
              In The Digital Architect, a workflow is more than just a list of tasks. It is a living ecosystem where specialized agents communicate, share context, and execute multi-step operations autonomously. By linking agents together, you create a system that is greater than the sum of its parts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2864E4]">
                  <Share2 size={20} />
                </div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">Context Sharing</h4>
                <p className="text-[14px] text-[#64748B]">Agents pass memory blocks across nodes seamlessly.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2864E4]">
                  <ArrowRightLeft size={20} />
                </div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">Linear Flow</h4>
                <p className="text-[14px] text-[#64748B]">Execute sequential logic with built-in validation.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative aspect-square w-full max-w-[500px]"
          >
            <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl">
              <Image 
                src="/section-17-workflow-guide/image.png" 
                alt="AI Agent Cubes" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
