"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 615;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const TEXT_MUTED = "#727785";

export default function ProvenResults() {
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
        className="absolute left-0 top-0 transition-colors duration-300"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          backgroundColor: isDark ? 'black' : colors.white,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative" style={{ width: 1280, height: 615, top: 0 }}>
          <Image 
            src="/section-6-agent-detail/bg-grid.svg" 
            alt="Grid" 
            width={2400.92} 
            height={1830} 
            className={`absolute ${isDark ? 'opacity-20 brightness-50' : ''}`}
            style={{ left: -272, top: -183, width: 2400.92, height: 1830 }}
            unoptimized
          />

          {/* Content Box */}
          <div className="absolute" style={{ left: 24, top: 91, width: 1232, height: 371 }}>
            
            {/* Left Panel */}
            <div className="absolute flex flex-col" style={{ left: 0, top: -18, width: 584, height: 369, gap: 81 }}>
              <h2 className="m-0 text-black dark:text-white transition-colors duration-300 flex gap-[12px]" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 48, lineHeight: "36px" }}>
                Proven
                <span style={{ 
                  background: GRADIENT_BLUE, 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text" 
                }}>Results</span>
              </h2>

              <div className="flex flex-col w-full" style={{ gap: 57 }}>
                
                <div className="flex flex-row w-full" style={{ gap: 16 }}>
                  <div style={{ padding: 8, backgroundColor: isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(0, 90, 182, 0.1)", borderRadius: 8, height: 36 }}>
                    <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
                  </div>
                  <div className="flex flex-col" style={{ gap: 4 }}>
                    <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px" }}>45% Increase in CTR</span>
                    <span className="text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>Average boost in engagement for small business accounts.</span>
                  </div>
                </div>

                <div className="flex flex-row w-full" style={{ gap: 16 }}>
                  <div style={{ padding: 8, backgroundColor: isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(0, 90, 182, 0.1)", borderRadius: 8, height: 36 }}>
                    <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
                  </div>
                  <div className="flex flex-col" style={{ gap: 4 }}>
                    <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px" }}>12+ Weekly Hours Saved</span>
                    <span className="text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>Automated content scheduling across 5 major platforms.</span>
                  </div>
                </div>

                <div className="flex flex-row w-full" style={{ gap: 16 }}>
                  <div style={{ padding: 8, backgroundColor: isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(0, 90, 182, 0.1)", borderRadius: 8, height: 36 }}>
                    <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
                  </div>
                  <div className="flex flex-col" style={{ gap: 4 }}>
                    <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px" }}>Brand Voice Consistency</span>
                    <span className="text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>Advanced LLM fine-tuning to match your exact brand persona.</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Grid */}
            <div className="absolute" style={{ left: 628, top: 30, width: 584, height: 300 }}>
              
              <ResultCard icon="/section-6-agent-detail/icon-1.svg" title="Content generation" body="High-quality captions and visual\nprompts." x={0} y={0} />
              <ResultCard icon="/section-6-agent-detail/icon-2.svg" title="Auto scheduling" body="Post directly to Instagram, X, and FB." x={304} y={0} extraPad />
              <ResultCard icon="/section-6-agent-detail/icon-3.svg" title="AI optimization" body="Data-driven performance insights." x={0} y={176} />
              <ResultCard icon="/section-6-agent-detail/icon-4.svg" title="Multi-platform" body="Unified dashboard for all channels." x={304} y={176} />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ResultCard({ icon, title, body, x, y, extraPad }: { icon: string, title: string, body: string, x: number, y: number, extraPad?: boolean }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="absolute flex flex-col transition-colors duration-300 bg-[#F2F4F7] dark:bg-slate-900 border border-transparent dark:border-white/5" style={{ left: x, top: y, width: 280, padding: extraPad ? "24px 24px 40px" : "24px", gap: 8, borderRadius: 16, boxShadow: isDark ? "none" : "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
      <Image src={icon} alt="" width={18} height={16} className={isDark ? "brightness-200" : ""} />
      <div className="flex flex-col w-full" style={{ paddingTop: 8 }}>
        <h4 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px" }}>{title}</h4>
      </div>
      <p className="m-0 whitespace-pre-line text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}>{body}</p>
    </div>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white }}
    >
      <div className="relative flex flex-col gap-12 px-6 py-16">
        
        <div className="flex flex-col items-start gap-12 w-full">
          <h2 className="m-0 text-black dark:text-white transition-colors duration-300 flex flex-wrap gap-[8px]" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: 1.2 }}>
            <span>Proven</span>
            <span style={{ 
              background: GRADIENT_BLUE, 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              backgroundClip: "text" 
            }}>Results</span>
          </h2>

          <div className="flex flex-col gap-8 w-full">
            <MobileResultItem title="45% Increase in CTR" body="Average boost in engagement for small business accounts." />
            <MobileResultItem title="12+ Weekly Hours Saved" body="Automated content scheduling across 5 major platforms." />
            <MobileResultItem title="Brand Voice Consistency" body="Advanced LLM fine-tuning to match your exact brand persona." />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-4 w-full">
            <MobileResultCard icon="/section-6-agent-detail/icon-1.svg" title="Content gen" body="High-quality captions and visual prompts." />
            <MobileResultCard icon="/section-6-agent-detail/icon-2.svg" title="Scheduling" body="Post directly to Instagram, X, and FB." />
          </div>
          <div className="flex flex-row gap-4 w-full">
            <MobileResultCard icon="/section-6-agent-detail/icon-3.svg" title="Optimization" body="Data-driven performance insights." />
            <MobileResultCard icon="/section-6-agent-detail/icon-4.svg" title="Multi-platform" body="Unified dashboard for all channels." />
          </div>
        </div>

      </div>
    </section>
  );
}

function MobileResultItem({ title, body }: { title: string, body: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-row items-start gap-4">
      <div className="mt-1" style={{ padding: 8, backgroundColor: isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(0, 90, 182, 0.1)", borderRadius: 8, flexShrink: 0 }}>
        <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 18, lineHeight: "24px" }}>{title}</span>
        <span className="text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "22px" }}>{body}</span>
      </div>
    </div>
  );
}

function MobileResultCard({ icon, title, body }: { icon: string, title: string, body: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col flex-1 transition-colors duration-300 bg-[#F2F4F7] dark:bg-slate-900 border border-transparent dark:border-white/5" style={{ padding: 20, gap: 8, borderRadius: 16, boxShadow: isDark ? "none" : "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
      <Image src={icon} alt="" width={18} height={16} className={isDark ? "brightness-200" : ""} />
      <h4 className="m-0 mt-1 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px" }}>{title}</h4>
      <p className="m-0 text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}>{body}</p>
    </div>
  );
}
