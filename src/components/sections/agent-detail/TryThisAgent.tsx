"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 712;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const TERMINAL_BG = "#020617";

export default function TryThisAgent() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionDesktop() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block py-16 transition-colors duration-300"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="relative transition-colors duration-300"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            backgroundColor: isDark ? 'black' : colors.white,
            borderRadius: 36,
            overflow: "hidden"
          }}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ left: -272, top: -183, width: 2400.92, height: 1830 }}>
            <Image 
              src="/section-6-agent-detail/bg-grid.svg" 
              alt="Grid" 
              fill
              className={`object-cover ${isDark ? 'opacity-20 brightness-50' : ''}`}
              unoptimized
            />
          </div>

          {/* Main Content Area */}
          <div className="absolute" style={{ left: "calc(50% + 10px)", top: 142, width: 1232, height: 368, transform: "translateX(-50%)" }}>
            
            {/* Heading */}
            <div className="absolute" style={{ left: "calc(50% + 0.5px)", top: -31, width: 450, height: 32, transform: "translateX(-50%)" }}>
              <div className="absolute flex flex-col justify-center text-center w-full" style={{ top: 16, transform: "translateY(-50%)" }}>
                <h2 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 48, lineHeight: "32px" }}>
                  Try This{" "}
                  <span style={{ 
                    background: GRADIENT_BLUE, 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text" 
                  }}>Agent</span>
                </h2>
              </div>
            </div>

            {/* Container for Left and Right Panels */}
            <div className="absolute" style={{ left: 0, right: 0, top: 64, height: 304 }}>
              
              {/* Left Panel: Input Prompt */}
              <div className="absolute flex flex-col items-start" style={{ left: 0, top: 0, right: 632, height: 434, padding: "32px 32px 48px", background: GRADIENT_BLUE, borderRadius: 24, border: "1px solid rgba(255, 255, 255, 0.39)", gap: 12 }}>
                <div className="flex flex-col items-start w-full relative">
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: colors.white }}>
                    Input Prompt
                  </span>
                </div>
                <div className="flex flex-col items-start w-full relative" style={{ height: 322 }}>
                  <div className="flex w-full overflow-hidden relative transition-colors duration-300" style={{ height: 322, padding: 24, backgroundColor: isDark ? '#1E293B' : colors.white, borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
                    <div className="flex flex-col items-start flex-1 min-w-px relative">
                      <p className="m-0 text-black/50 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", whiteSpace: "pre-wrap" }}>
                        Generate 5 Instagram posts for a fitness brand specializing in{"\n"}home workout equipment. Tone: Energetic and motivating.
                      </p>
                    </div>
                  </div>
                  
                  {/* Run Button */}
                  <div className="absolute flex items-center hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ bottom: 16, right: 16, padding: "8px 24px", gap: 8, background: GRADIENT_BLUE, borderRadius: 9999 }}>
                    <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0)", borderRadius: 9999, boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)" }} />
                    <div className="relative" style={{ width: 6.42, height: 8.17 }}>
                      <Image src="/section-2-agent-detail/run-icon.svg" alt="" fill className="object-contain" />
                    </div>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: colors.white, position: "relative" }}>
                      Run
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Panel: Terminal */}
              <div className="absolute flex flex-col items-start overflow-hidden transition-colors duration-300" style={{ left: 632, right: 0, top: 40, height: 304, padding: 32, backgroundColor: isDark ? '#0F172A' : TERMINAL_BG, borderRadius: 24, gap: 16, border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                {/* Traffic lights */}
                <div className="flex items-start w-full relative" style={{ gap: 8 }}>
                  <div style={{ width: 12, height: 12, backgroundColor: "rgba(239, 68, 68, 0.5)", borderRadius: 9999 }} />
                  <div style={{ width: 12, height: 12, backgroundColor: "rgba(234, 179, 8, 0.5)", borderRadius: 9999 }} />
                  <div style={{ width: 12, height: 12, backgroundColor: "rgba(34, 197, 94, 0.5)", borderRadius: 9999 }} />
                </div>
                
                {/* Terminal lines */}
                <div className="flex flex-col items-start w-full relative z-10" style={{ gap: 8, opacity: 0.8 }}>
                  <div className="flex flex-col items-start w-full relative">
                    <span style={{ fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#4ADE80" }}>{`> Initializing SocialCraft Engine v4.2...`}</span>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <span style={{ fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#CBD5E1" }}>{`> Fetching trending hashtags for #fitness #homeworkout...`}</span>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <span style={{ fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#CBD5E1" }}>{`> analyzing audience engagement metrics (last 30 days)...`}</span>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <span style={{ fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#60A5FA" }}>{`> Generating 5 visual concepts using DALL-E 3 Integration...`}</span>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <span style={{ fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#60A5FA" }}>{`> Writing persuasive copy for Instagram platform...`}</span>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <span style={{ fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#CBD5E1" }}>{`> Optimizing posting schedule for Tuesday mornings...`}</span>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <span style={{ fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#4ADE80" }}>{`> Process complete. Awaiting user approval.`}</span>
                  </div>
                  <div style={{ width: 4, height: 16, backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
                </div>
                
                {/* Terminal Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(0deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0) 50%, rgba(2,6,23,0) 100%)", opacity: 0.4 }} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden py-16 px-6 transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white, borderRadius: 36 }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 w-[200%] h-[150%] -left-1/2 -top-1/4 opacity-20 dark:opacity-40 pointer-events-none">
        <Image 
          src="/section-6-agent-detail/bg-grid.svg" 
          alt="Grid" 
          fill
          className={`object-cover ${isDark ? 'brightness-50' : ''}`}
          unoptimized
        />
      </div>

      <div className="relative flex flex-col gap-12 z-10">
        
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="m-0 text-black dark:text-white transition-colors duration-300 text-center flex flex-col items-center" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: 1.2 }}>
            <span>Try This</span>
            <span style={{ 
              background: GRADIENT_BLUE, 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              backgroundClip: "text" 
            }}>Agent</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 w-full">
          
          {/* Left Panel: Input Prompt */}
          <div className="flex flex-col items-start w-full relative" style={{ padding: "24px 24px 32px", background: GRADIENT_BLUE, borderRadius: 24, border: "1px solid rgba(255, 255, 255, 0.39)", gap: 12 }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase", color: colors.white }}>
              Input Prompt
            </span>
            <div className="flex flex-col items-start w-full relative">
              <div className="flex w-full relative transition-colors duration-300" style={{ minHeight: 200, padding: 24, backgroundColor: isDark ? '#1E293B' : colors.white, borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
                <p className="m-0 text-black/50 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", whiteSpace: "pre-wrap" }}>
                  Generate 5 Instagram posts for a fitness brand specializing in home workout equipment. Tone: Energetic and motivating.
                </p>
              </div>
              
              {/* Run Button */}
              <div className="absolute flex items-center hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ bottom: -20, right: 16, padding: "8px 24px", gap: 8, background: GRADIENT_BLUE, borderRadius: 9999, boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)" }}>
                <div className="relative" style={{ width: 6.42, height: 8.17 }}>
                  <Image src="/section-2-agent-detail/run-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: colors.white }}>
                  Run
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: Terminal */}
          <div className="flex flex-col items-start w-full relative overflow-hidden transition-colors duration-300" style={{ padding: 24, backgroundColor: isDark ? '#0F172A' : TERMINAL_BG, borderRadius: 24, gap: 16, border: isDark ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            {/* Traffic lights */}
            <div className="flex items-start w-full relative" style={{ gap: 8 }}>
              <div style={{ width: 10, height: 10, backgroundColor: "rgba(239, 68, 68, 0.5)", borderRadius: 9999 }} />
              <div style={{ width: 10, height: 10, backgroundColor: "rgba(234, 179, 8, 0.5)", borderRadius: 9999 }} />
              <div style={{ width: 10, height: 10, backgroundColor: "rgba(34, 197, 94, 0.5)", borderRadius: 9999 }} />
            </div>
            
            <div className="flex flex-col items-start w-full relative z-10" style={{ gap: 8, opacity: 0.8 }}>
              <span style={{ fontFamily: typography.fonts.mono, fontSize: 12, lineHeight: "18px", color: "#4ADE80" }}>{`> Initializing SocialCraft Engine v4.2...`}</span>
              <span style={{ fontFamily: typography.fonts.mono, fontSize: 12, lineHeight: "18px", color: "#CBD5E1" }}>{`> Fetching trending hashtags for #fitness #homeworkout...`}</span>
              <span style={{ fontFamily: typography.fonts.mono, fontSize: 12, lineHeight: "18px", color: "#CBD5E1" }}>{`> analyzing audience engagement metrics...`}</span>
              <span style={{ fontFamily: typography.fonts.mono, fontSize: 12, lineHeight: "18px", color: "#60A5FA" }}>{`> Generating 5 visual concepts using DALL-E 3...`}</span>
              <span style={{ fontFamily: typography.fonts.mono, fontSize: 12, lineHeight: "18px", color: "#60A5FA" }}>{`> Writing persuasive copy for Instagram platform...`}</span>
              <span style={{ fontFamily: typography.fonts.mono, fontSize: 12, lineHeight: "18px", color: "#CBD5E1" }}>{`> Optimizing posting schedule for Tuesday mornings...`}</span>
              <span style={{ fontFamily: typography.fonts.mono, fontSize: 12, lineHeight: "18px", color: "#4ADE80" }}>{`> Process complete. Awaiting user approval.`}</span>
              <div style={{ width: 4, height: 14, backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
            </div>

            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(0deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0) 50%, rgba(2,6,23,0) 100%)", opacity: 0.4 }} />
          </div>

        </div>

      </div>
    </section>
  );
}
