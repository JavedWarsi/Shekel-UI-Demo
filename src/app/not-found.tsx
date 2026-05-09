"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative w-full min-h-screen bg-white flex flex-col items-start justify-start overflow-hidden pt-[165px]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[52vw] h-[52vw] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Bottom Right Glow (Ellipse 43666) */}
      <div 
        className="absolute rounded-full blur-[100px] pointer-events-none opacity-40 z-0"
        style={{
          width: '904px',
          height: '904px',
          top: '405px',
          left: '985px',
          background: 'linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-[69px] relative z-10">
        <div className="relative w-full min-h-[800px]">
          {/* Left Side: Content */}
          <div className="relative z-20 max-w-[598px]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#000000] mb-10"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '72px',
                letterSpacing: '-1.8px',
              }}
            >
              The page you’re looking for doesn’t <br /> exist or has been moved.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/"
                className="h-[52px] px-8 rounded-sm text-[16px] font-semibold text-white flex items-center justify-center transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ 
                  background: 'linear-gradient(180deg, #ba9eff 0%, #699cff 100%)',
                  fontFamily: 'var(--font-plus-jakarta)',
                  boxShadow: '0px 8px 20px rgba(105, 156, 255, 0.2)'
                }}
              >
                Go to Homepage
              </Link>
              <Link
                href="/explore-agent"
                className="h-[52px] px-8 rounded-sm text-[16px] font-semibold text-white bg-[#101828] flex items-center justify-center transition-all hover:bg-[#1d2939] active:scale-[0.98]"
                style={{ 
                  fontFamily: 'var(--font-plus-jakarta)'
                }}
              >
                Explore Agents
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="absolute top-0 left-[320px] w-[1043px] h-[672px] z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/404.png"
                  alt="404 Illustration"
                  fill
                  className="object-contain scale-140"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
