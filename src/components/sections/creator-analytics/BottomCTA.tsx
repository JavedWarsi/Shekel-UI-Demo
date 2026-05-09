"use client";

import { typography } from "@/tokens/design-tokens";
import Image from "next/image";

export default function AnalyticsBottomCTA() {
  return (
    <div 
      className="w-full relative rounded-t-[48px] h-[700] overflow-hidden py-16 md:py-24 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between" 
      style={{ 
        fontFamily: typography.fonts.inter, 
        backgroundImage: "url('/section-8-about/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 text-left max-w-[700px] ml-[100px] mb-12 md:mb-0 md:ml-12">
        <h2 className="text-[48px] md:text-[56px] font-normal text-[#0b0b0b] leading-[1.25] tracking-tight mb-8" style={{ fontFamily: typography.fonts.poppins }}>
          Start Using AI<br/>Agents Today
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <button className="w-full sm:w-auto px-8 py-4 rounded-[12px] text-white font-medium text-[12px] uppercase tracking-wider shadow-[0_8px_30px_rgba(40,100,228,0.4)] transition-transform hover:scale-105"
            style={{ background: "linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)" }}
          >
            Explore Agents
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-[12px] text-[#2864E4] font-medium text-[12px] uppercase tracking-wider bg-white/50 backdrop-blur-sm border border-[#2864E4]/20 hover:bg-white/80 transition-colors">
            Start Building
          </button>
        </div>

        <p className="text-[9px] font-medium text-[#64748B] text-center uppercase tracking-[0.2em] leading-[1.8] max-w-[300px]">
          JOIN THOUSANDS OF USERS AND DEVELOPERS ALREADY USING SHEKEL
        </p>
      </div>

      <div className="relative z-20 flex-shrink-0 w-[350px] mr-[150px] md:w-[500px] h-[350px] md:h-[500px]">
        {/* Placeholder image for astronaut holding HUD */}
        <Image 
          src="/section-11/cta-robot.png" 
          alt="3D Character" 
          fill 
          className="object-contain scale-[2.2] animate-float"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}
