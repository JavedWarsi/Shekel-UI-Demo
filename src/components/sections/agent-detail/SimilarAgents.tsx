"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 366;

const GRADIENT_TEXT = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";

export default function SimilarAgents() {
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
      className="relative hidden w-full overflow-hidden dark:bg-slate-900 md:block transition-colors duration-300"
      style={{
        // backgroundColor: isDark ? 'black' : colors.white,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0 dark:bg-slate-900"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(calc(100cqw / ${CANVAS_W}px))`,
          transformOrigin: "top left",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative flex flex-col items-start w-full h-full" style={{ width: 1232, height: 366, gap: 40 }}>
          
          {/* Header Row */}
          <div className="relative shrink-0 w-full" style={{ height: 68 }}>
            <div className="absolute flex flex-col justify-center left-0 top-[24px] w-[420px]" style={{ transform: "translateY(-50%)" }}>
              <p className="m-0 transition-colors duration-300 text-black dark:text-white" style={{ fontFamily: typography.fonts.jakarta, fontWeight: 600, fontSize: 48, lineHeight: "48px" }}>
                <span>Similar </span>
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_TEXT }}>Agents</span>
              </p>
            </div>
            
            <Link href="/marketplace" className="absolute flex items-center cursor-pointer group no-underline" style={{ gap: 7.99, left: 1008, top: 24 }}>
              <div className="flex flex-col justify-center shrink-0">
                <p className="m-0 transition-colors duration-300 text-black dark:text-white/60 group-hover:text-blue-500" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase" }}>
                  Explore More Agents
                </p>
              </div>
              <div className="relative shrink-0" style={{ width: 8.75, height: 8.75 }}>
                <Image src="/section-8-agent-detail/arrow-up-right.svg" alt="" fill className={`object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isDark ? 'brightness-200' : ''}`} />
              </div>
            </Link>
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-3 relative shrink-0 w-full" style={{ gap: 40, height: 258 }}>
            <AgentCard icon="/section-8-agent-detail/icon-copygenius.svg" title="CopyGenius Pro" rating="4.7" />
            <AgentCard icon="/section-8-agent-detail/icon-videocraft.svg" title="VideoCraft AI" rating="4.9" />
            <AgentCard icon="/section-8-agent-detail/icon-metricmaster.svg" title="MetricMaster" rating="4.5" isMetricMaster />
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentCard({ icon, title, rating, isMetricMaster }: { icon: string, title: string, rating: string, isMetricMaster?: boolean }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col items-start relative shrink-0 self-start w-full transition-colors duration-300 bg-[#f2f4f7] dark:bg-slate-900 border border-transparent dark:border-white/5" style={{ borderRadius: 16, padding: 32, gap: 15.5 }}>
      {isMetricMaster ? (
        <div className="flex items-center justify-center overflow-clip relative shrink-0 transition-colors duration-300" style={{ width: 56, height: 56, backgroundColor: isDark ? '#1E293B' : "#ffffff", borderRadius: 12, boxShadow: isDark ? 'none' : "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
          <div className="relative shrink-0" style={{ width: 16.667, height: 10 }}>
            <Image src={icon} alt="" fill className={`object-contain ${isDark ? 'brightness-200' : ''}`} />
          </div>
        </div>
      ) : (
        <div className="relative shrink-0 dark:bg-slate-900" style={{ width: 56, height: 56 }}>
          <Image src={icon} alt="" fill className={`object-contain ${isDark ? 'brightness-125' : ''}` } />
        </div>
      )}
      
      <div className="flex flex-col items-start relative shrink-0 w-full mt-[0.5px]">
        <div className="flex flex-col justify-center shrink-0 w-full">
          <p className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px" }}>
            {title}
          </p>
        </div>
      </div>
      <div className="flex items-center relative shrink-0 w-full" style={{ gap: 4 }}>
        <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
          <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
        </div>
        <div className="flex flex-col justify-center shrink-0">
          <p className="m-0 text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px" }}>
            {rating}
          </p>
        </div>
      </div>
      <Link href="/agent-detail" className="w-full no-underline">
        <div className="flex items-center justify-center relative shrink-0 w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10 transition-colors bg-white dark:bg-white/5 border border-[rgba(193,198,213,0.1)] rounded-lg shadow-sm" style={{ height: 48, padding: "1px 21px" }}>
          <p className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px" }}>
            Run Agent
          </p>
        </div>
      </Link>
    </div>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden px-6 py-16 transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white }}
    >
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col items-center text-center gap-4 w-full">
          <p className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.jakarta, fontWeight: 600, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: "1.2" }}>
            <span>Similar </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT_TEXT }}>Agents</span>
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <MobileAgentCard icon="/section-8-agent-detail/icon-copygenius.svg" title="CopyGenius Pro" rating="4.7" />
          <MobileAgentCard icon="/section-8-agent-detail/icon-videocraft.svg" title="VideoCraft AI" rating="4.9" />
          <MobileAgentCard icon="/section-8-agent-detail/icon-metricmaster.svg" title="MetricMaster" rating="4.5" isMetricMaster />
        </div>

        <Link href="/marketplace" className="flex items-center cursor-pointer group mt-2 no-underline" style={{ gap: 7.99 }}>
          <p className="m-0 text-black dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", letterSpacing: "1.4px", textTransform: "uppercase" }}>
            Explore More Agents
          </p>
          <div className="relative shrink-0" style={{ width: 8.75, height: 8.75 }}>
            <Image src="/section-8-agent-detail/arrow-up-right.svg" alt="" fill className={`object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isDark ? 'brightness-200' : ''}`} />
          </div>
        </Link>
      </div>
    </section>
  );
}

function MobileAgentCard({ icon, title, rating, isMetricMaster }: { icon: string, title: string, rating: string, isMetricMaster?: boolean }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col items-start relative w-full transition-colors duration-300 bg-[#f2f4f7] dark:bg-slate-900 border border-transparent dark:border-white/5" style={{ borderRadius: 16, padding: 24, gap: 16 }}>
      <div className="flex flex-row items-center gap-4">
        {isMetricMaster ? (
          <div className="flex items-center justify-center overflow-clip relative shrink-0 transition-colors duration-300" style={{ width: 56, height: 56, backgroundColor: isDark ? '#1E293B' : "#ffffff", borderRadius: 12, boxShadow: isDark ? 'none' : "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
            <div className="relative shrink-0" style={{ width: 16.667, height: 10 }}>
              <Image src={icon} alt="" fill className={`object-contain ${isDark ? 'brightness-200' : ''}`} />
            </div>
          </div>
        ) : (
          <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
            <Image src={icon} alt="" fill className={`object-contain ${isDark ? 'brightness-125' : ''}`} />
          </div>
        )}
        <div className="flex flex-col items-start gap-1">
          <p className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px" }}>
            {title}
          </p>
          <div className="flex items-center gap-1">
            <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
              <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
            </div>
            <p className="m-0 text-[#727785] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px" }}>
              {rating}
            </p>
          </div>
        </div>
      </div>
      <Link href="/agent-detail" className="w-full no-underline">
        <div className="flex items-center justify-center relative w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10 transition-colors bg-white dark:bg-white/5 border border-[rgba(193,198,213,0.1)] rounded-lg shadow-sm" style={{ height: 44, padding: "1px 21px" }}>
          <p className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px" }}>
            Run Agent
          </p>
        </div>
      </Link>
    </div>
  );
}
