"use client";

import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";
import { CloudUpload, ArrowRight } from "lucide-react";

export default function PublishStep() {
  return (
    <section className="w-full py-32 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="text-[40px] font-bold text-[#0F172A] mb-16" style={{ fontFamily: typography.fonts.inter }}>
          Publish
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#E9EDF5] rounded-[24px] p-12 md:p-20 flex flex-col items-center text-center border border-[#DCE2EF]"
        >
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#2864E4] mb-8 shadow-sm">
            <CloudUpload size={32} />
          </div>

          <h3 className="text-[24px] md:text-[28px] font-bold text-[#0F172A] mb-6">
            Ready to go live?
          </h3>

          <p className="text-[16px] text-[#64748B] max-w-2xl mb-12 leading-relaxed">
            Once you've tested your agent and configured its settings, you can push it to the live marketplace with a single click. Make it searchable and start receiving runs.
          </p>

          <button 
            className="h-14 px-10 rounded-[10px] text-[14px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:opacity-90 active:scale-[0.98] flex items-center gap-3 shadow-[0_12px_24px_-8px_rgba(40,100,228,0.5)]"
            style={{ background: 'linear-gradient(180deg, #4F86F7 0%, #2864E4 100%)' }}
          >
            Publish Agent <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
