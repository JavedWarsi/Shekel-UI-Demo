"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 420;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const AGENTS = [
  {
    name: "CopyGenius Pro",
    rating: "4.7",
    icon: "/section-4-connect-us/icon-copygenius.svg",
  },
  {
    name: "VideoCraft AI",
    rating: "4.9",
    icon: "/section-4-connect-us/icon-videocraft.svg",
  },
  {
    name: "MetricMaster",
    rating: "4.5",
    icon: "/section-4-connect-us/icon-metricmaster.svg",
    isSmallIcon: true,
  },
];

export default function TrendingAiAgents() {
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
        backgroundColor: isDark ? 'black' : colors.white,
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
        }}
      >
        {/* Header */}
        <div
          className="absolute flex items-end justify-between"
          style={{ left: 48, top: 0, width: 1184 }}
        >
          <div className="flex flex-col gap-2">
            <h2
              className="m-0 text-black dark:text-white transition-colors duration-300"
              style={{
                fontFamily: typography.fonts.poppins,
                fontWeight: 600,
                fontSize: 48,
                lineHeight: "48px",
              }}
            >
              Trending AI Agents
            </h2>
            <p
              className="m-0 text-black dark:text-white/60 transition-colors duration-300"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "-0.025em",
              }}
            >
              Popular agents used by the community
            </p>
          </div>

          <Link href="/marketplace" className="no-underline">
            <div className="flex items-center gap-2 cursor-pointer group pb-2">
              <span
                className="text-black dark:text-white transition-colors duration-300"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Explore Agents
              </span>
              <Image
                src="/section-4-connect-us/arrow-up-right.svg"
                alt=""
                width={9}
                height={9}
                className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? 'brightness-200' : ''}`}
              />
            </div>
          </Link>
        </div>

        {/* Cards */}
        <div
          className="absolute flex flex-row items-stretch"
          style={{ left: 24, top: 120, width: 1232, gap: 40 }}
        >
          {AGENTS.map((agent, i) => (
            <AgentCard key={i} {...agent} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden px-6 py-16 transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white }}
    >
      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex flex-col gap-2 w-full">
          <h2
            className="m-0 text-black dark:text-white transition-colors duration-300"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 600,
              fontSize: "clamp(32px, 8vw, 40px)",
              lineHeight: "1.2",
            }}
          >
            Trending AI Agents
          </h2>
          <p
            className="m-0 text-black/60 dark:text-white/60 transition-colors duration-300"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
            }}
          >
            Popular agents used by the community
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {AGENTS.map((agent, i) => (
            <AgentCard key={i} {...agent} />
          ))}
        </div>

        <Link href="/marketplace" className="no-underline">
          <div className="flex items-center cursor-pointer group mt-2" style={{ gap: 8 }}>
            <span className="text-black dark:text-white transition-colors duration-300 uppercase tracking-widest text-sm" style={{ fontFamily: typography.fonts.inter }}>
              Explore Agents
            </span>
            <Image 
              src="/section-4-connect-us/arrow-up-right.svg" 
              alt="" 
              width={9} 
              height={9} 
              className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isDark ? 'brightness-200' : ''}`} 
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

function AgentCard({ name, rating, icon, isSmallIcon }: any) {
  const { isDark } = useThemeTokens();
  
  return (
    <div
      className="flex flex-col items-start w-full transition-all duration-300 hover:shadow-lg dark:hover:bg-white/10"
      style={{ 
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7", 
        borderRadius: 16, 
        padding: 32, 
        gap: 16, 
        flex: "1 1 0" 
      }}
    >
      <div 
        className={`flex items-center justify-center relative shrink-0 transition-colors duration-300 ${isSmallIcon ? 'bg-white dark:bg-white/10 shadow-sm' : ''}`} 
        style={{ 
          width: 56, 
          height: 56, 
          borderRadius: 12 
        }}
      >
        <div className={isSmallIcon ? "relative w-4 h-2.5" : "absolute inset-0"}>
          <Image src={icon} alt={name} fill className="object-contain" unoptimized />
        </div>
      </div>
      <div className="flex flex-col justify-center shrink-0 w-full mt-1">
        <p className="m-0 text-[#191C1E] dark:text-white font-semibold transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontSize: 16, lineHeight: "24px" }}>
          {name}
        </p>
      </div>
      <div className="flex items-center w-full" style={{ gap: 4 }}>
        <Image src="/section-4-connect-us/icon-star.svg" alt="" width={10} height={10} />
        <p className="m-0 text-[#727785] dark:text-white/40 font-normal transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontSize: 12, lineHeight: "18px" }}>
          {rating}
        </p>
      </div>
      <Link href="/agent-detail" className="w-full no-underline mt-auto">
        <button
          className="w-full cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-white/10 h-12"
          style={{ 
            backgroundColor: isDark ? 'transparent' : colors.white, 
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(193, 198, 213, 0.1)'}`, 
            borderRadius: 8, 
            boxShadow: isDark ? 'none' : "0px 1px 2px rgba(0,0,0,0.05)"
          }}
        >
          <span className="text-[#191C1E] dark:text-white font-semibold transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "21px" }}>
            Run Agent
          </span>
        </button>
      </Link>
    </div>
  );
}
