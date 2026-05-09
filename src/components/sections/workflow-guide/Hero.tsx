"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { typography } from "@/tokens/design-tokens";

export default function WorkflowGuideHero() {
  return (
    <section className="relative w-full max-w-[full] h-[717px] mx-auto overflow-hidden bg-[#000000] mt-[66px] flex flex-col items-center pt-[100px]">
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-[72px] leading-[72px] font-medium tracking-[-1.8px] mb-6 bg-clip-text text-transparent"
            style={{
              fontFamily: 'Poppins',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Workflow Guide
          </h1>
          <p
            className="text-[20px] text-[#94A3B8] leading-[32.5px] max-w-[800px] mx-auto font-normal"
            style={{ fontFamily: 'Inter', letterSpacing: '0px' }}
          >
            Learn how to connect AI agents into powerful workflows. Orchestrate complex logic with visual precision.
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{
          rotate: [0, 360],
          rotateX: [0, 8, 0, -8, 0],
          rotateY: [0, -8, 0, 8, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-full h-full mb-[-850px] mt-[100px]"
        style={{
          transformStyle: "preserve-3d",
          // marginBottom: '-840px'
        }}
      >
        <Image
          src="/section-17-workflow-guide/animatebg.png"
          alt="Workflow Guide Ornament"
          fill
          className="object-contain scale-[1.4]"
          priority
        />
      </motion.div>

      {/* Decorative Blur for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none" />
    </section>
  );
}
