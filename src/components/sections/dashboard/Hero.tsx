"use client";

import { typography } from "@/tokens/design-tokens";
import { motion } from "framer-motion";

export default function DashboardHero() {
  return (
    <div className="relative w-full">
      {/* Left Ellipse */}
      <div 
        className="absolute pointer-events-none z-[-1] rounded-full"
        style={{
          width: "696px",
          height: "696px",
          top: "30px",
          left: "-348px",
          background: "linear-gradient(-123.13deg, #2864E4 0%, #ECF2FF 100%)",
          filter: "blur(257.5px)",
          transform: "rotate(-123.13deg)"
        }}
      />
      
      {/* Right Ellipse */}
      <div 
        className="absolute pointer-events-none z-[-1] rounded-full"
        style={{
          width: "696px",
          height: "696px",
          top: "30px",
          right: "-348px",
          background: "linear-gradient(-123.13deg, #2864E4 0%, #ECF2FF 100%)",
          filter: "blur(257.5px)",
          transform: "rotate(-123.13deg)"
        }}
      />

      <div className="pt-24 pb-12  max-w-full mx-auto w-full" style={{ fontFamily: typography.fonts.inter }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 
            className="text-[32px] md:text-[40px] font-medium text-[#0b0b0b] mb-2 text-left " 
            style={{ fontFamily: typography.fonts.poppins }}
          >
            Welcome back <span className="text-[36px]">👋</span>
          </h1>
          <p className="text-[16px] text-[#64748B]">
            Here's what's happening with your AI workflows.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
