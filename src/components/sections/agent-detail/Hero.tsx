"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 614;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

export default function Hero() {
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
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300 bg-white dark:bg-black"
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
        }}
      >
        {/* Background */}
        <div className="absolute transition-all duration-300" style={{ left: -315, top: -127, width: 1772, height: 1325, opacity: isDark ? 0.4 : 0.6 }}>
          <Image 
            src="/section-4-agent-detail/bg.webp" 
            alt="Background" 
            fill
            className={`object-cover pointer-events-none ${isDark ? 'brightness-50' : ''}`}
            unoptimized
          />
        </div>
        
        {/* Left Content */}
        <div className="absolute flex flex-col items-start" style={{ left: 61, top: 83, width: 805, gap: 32 }}>
          {/* Top Icon */}
          <div className="relative" style={{ width: 96, height: 96 }}>
            <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full overflow-hidden shadow-lg" style={{ background: BUTTON_GRADIENT, borderRadius: 16 }}>
            </div>
            <div className="absolute" style={{ left: 30, top: 31, width: 36, height: 34.5 }}>
              <Image src="/section-4-agent-detail/stars-icon.svg" alt="" fill className="object-contain" unoptimized />
            </div>
          </div>

          <div className="flex flex-col items-start w-full relative" style={{ gap: 8 }}>
            
            {/* Title & Rating */}
            <div className="flex items-center w-full relative" style={{ gap: 12 }}>
              <h1 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 48, lineHeight: "40px", letterSpacing: "-0.9px" }}>
                SocialCraft AI
              </h1>
              <div className="flex items-center relative transition-colors duration-300 bg-[#E6E8EB] dark:bg-white/10" style={{ padding: "4px 8px", borderRadius: 6 }}>
                <div className="relative" style={{ width: 11.67, height: 11.08 }}>
                  <Image src="/section-4-agent-detail/star-small.svg" alt="" fill className="object-contain" unoptimized />
                </div>
                <span className="pl-1 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px" }}>
                  4.8
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="flex items-center w-full relative" style={{ gap: 16 }}>
              <div className="flex items-center relative" style={{ gap: 4 }}>
                <div className="relative" style={{ width: 11.67, height: 11.67 }}>
                  <Image src="/section-4-agent-detail/runs-icon.svg" alt="" fill className={`object-contain transition-all duration-300 ${isDark ? 'brightness-200' : ''}`} unoptimized />
                </div>
                <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>
                  1.2k runs
                </span>
              </div>
              <div className="flex items-center relative" style={{ gap: 4 }}>
                <div className="relative" style={{ width: 12.83, height: 12.25 }}>
                  <Image src="/section-4-agent-detail/verified-icon.svg" alt="" fill className="object-contain" unoptimized />
                </div>
                <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>
                  Verified Creator
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-start w-full relative" style={{ gap: 8, paddingTop: 8 }}>
              <Tag text="Marketing" />
              <Tag text="Automation" />
            </div>

            {/* Description */}
            <div className="flex flex-col items-start relative" style={{ paddingTop: 16, maxWidth: 672 }}>
              <p className="m-0 text-black/80 dark:text-white/80 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18, lineHeight: "29.25px" }}>
                The ultimate autonomous marketing engine. Generate months of tailored high-<br/>
                engagement content and schedule it across all your platforms in seconds<br/>
                using advanced LLM optimization.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center w-full relative" style={{ gap: 16, paddingTop: 24 }}>
              <div className="flex items-center relative hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ padding: "16px 32px", background: BUTTON_GRADIENT, borderRadius: 12, gap: 8 }}>
                <div className="relative" style={{ width: 20, height: 20 }}>
                  <Image src="/section-4-agent-detail/play-icon.svg" alt="" fill className="object-contain" unoptimized />
                </div>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: colors.white }}>
                  Run Agent
                </span>
              </div>
              <div className="flex items-center justify-center relative hover:bg-gray-200 dark:hover:bg-white/20 active:scale-95 transition-all cursor-pointer bg-[#ECEEF1] dark:bg-white/10" style={{ padding: 16, borderRadius: 12 }}>
                <div className="relative" style={{ width: 18, height: 20 }}>
                  <Image src="/section-4-agent-detail/share-icon.svg" alt="" fill className={`object-contain transition-all ${isDark ? 'brightness-200' : ''}`} unoptimized />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Sticky Pricing Card */}
        <div className="absolute flex flex-col items-start transition-colors duration-300 bg-white dark:bg-[#0F172A] border border-black/10 dark:border-white/10 shadow-xl" style={{ left: 846, top: 107, width: 378.67, height: 396, padding: 32, gap: 16, borderRadius: radiuses.card }}>
          <div className="flex flex-col items-start w-full relative">
            <h3 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px" }}>
              Pricing Plans
            </h3>
          </div>

          <div className="flex flex-col items-start w-full relative" style={{ gap: 16, paddingTop: 8, paddingBottom: 16 }}>
            {/* Pay per task */}
            <div className="flex items-center justify-between w-full relative transition-colors duration-300 bg-[#F2F4F7] dark:bg-white/5" style={{ padding: 16, borderRadius: 12 }}>
              <div className="flex flex-col items-start relative">
                <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px" }}>
                  Pay per task
                </span>
                <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}>
                  Ideal for occasional use
                </span>
              </div>
              <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px" }}>
                $5
              </span>
            </div>

            {/* Monthly Subscription */}
            <div className="flex items-center justify-between w-full relative transition-colors duration-300 bg-[#1672DF] dark:bg-blue-600" style={{ padding: 16, borderRadius: 12 }}>
              <div className="flex flex-col items-start relative">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.white, whiteSpace: "nowrap" }}>
                  Monthly Subscription
                </span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: colors.white, opacity: 0.8, whiteSpace: "nowrap" }}>
                  Unlimited standard tasks
                </span>
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: colors.white }}>
                $19
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center w-full relative hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ padding: "16px 0", background: BUTTON_GRADIENT, borderRadius: 12 }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: "#F7F9FC" }}>
              Run Agent Now
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

function Tag({ text }: { text: string }) {
  const { isDark } = useThemeTokens();
  return (
    <div className="flex flex-col items-start relative transition-colors duration-300 bg-[#B7EAFF] dark:bg-blue-500/20" style={{ padding: "4px 12px", borderRadius: radiuses.full }}>
      <span className="transition-colors duration-300 text-[#001F28] dark:text-blue-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "16px", letterSpacing: "0.6px", textTransform: "uppercase" }}>
        {text}
      </span>
    </div>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300 bg-white dark:bg-black"
    >
      <div className="absolute inset-0 w-full h-[1325px] transition-all duration-300" style={{ opacity: isDark ? 0.3 : 0.2 }}>
        <Image 
          src="/section-4-agent-detail/bg.webp" 
          alt="Background" 
          fill
          className={`object-cover object-top pointer-events-none ${isDark ? 'brightness-50' : ''}`}
          unoptimized
        />
      </div>
      <div className="relative flex flex-col gap-8 px-6 py-16">
        
        <div className="relative" style={{ width: 64, height: 64 }}>
          <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full overflow-hidden shadow-lg" style={{ background: BUTTON_GRADIENT, borderRadius: 12 }}>
          </div>
          <div className="absolute" style={{ left: 20, top: 20, width: 24, height: 24 }}>
            <Image src="/section-4-agent-detail/stars-icon.svg" alt="" fill className="object-contain" unoptimized />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <h1 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: 1.2, letterSpacing: "-0.9px" }}>
              SocialCraft AI
            </h1>
            <div className="flex flex-row items-center transition-colors duration-300 bg-[#E6E8EB] dark:bg-white/10" style={{ padding: "4px 8px", borderRadius: 6 }}>
              <div className="relative" style={{ width: 12, height: 12 }}>
                <Image src="/section-4-agent-detail/star-small.svg" alt="Star" fill className="object-contain" unoptimized />
              </div>
              <div className="flex flex-col pl-1">
                <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px" }}>4.8</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-4">
            <div className="flex flex-row items-center gap-1.5">
              <div className="relative" style={{ width: 12, height: 12 }}>
                <Image src="/section-4-agent-detail/runs-icon.svg" alt="Runs" fill className={`object-contain transition-all ${isDark ? 'brightness-200' : ''}`} unoptimized />
              </div>
              <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px" }}>1.2k runs</span>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <div className="relative" style={{ width: 13, height: 12 }}>
                <Image src="/section-4-agent-detail/verified-icon.svg" alt="Verified" fill className="object-contain" unoptimized />
              </div>
              <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px" }}>Verified Creator</span>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2 pt-2">
            <Tag text="Marketing" />
            <Tag text="Automation" />
          </div>

          <div className="pt-2">
            <p className="m-0 text-black/80 dark:text-white/80 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "26px" }}>
              The ultimate autonomous marketing engine. Generate months of tailored high-engagement content and schedule it across all your platforms in seconds using advanced LLM optimization.
            </p>
          </div>

          <div className="flex flex-row items-center gap-4 pt-4">
            <div className="relative flex-1 flex flex-row items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ padding: "16px", background: BUTTON_GRADIENT, borderRadius: 12 }}>
              <div className="relative" style={{ width: 20, height: 20 }}>
                <Image src="/section-4-agent-detail/play-icon.svg" alt="Run" fill className="object-contain" unoptimized />
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.white }}>Run Agent</span>
            </div>
            <div className="flex flex-col justify-center items-center hover:bg-gray-200 dark:hover:bg-white/20 active:scale-95 transition-all cursor-pointer bg-[#ECEEF1] dark:bg-white/10" style={{ padding: 16, borderRadius: 12 }}>
              <div className="relative" style={{ width: 18, height: 20 }}>
                <Image src="/section-4-agent-detail/share-icon.svg" alt="Share" fill className={`object-contain transition-all ${isDark ? 'brightness-200' : ''}`} unoptimized />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Pricing Card */}
        <div className="flex flex-col items-stretch w-full gap-4 mt-4 transition-colors duration-300 bg-white dark:bg-[#0F172A] border border-black/10 dark:border-white/10 shadow-lg" style={{ padding: 24, borderRadius: radiuses.card }}>
          <h3 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px" }}>Pricing Plans</h3>

          <div className="flex flex-col gap-3 py-2">
            <div className="flex flex-row justify-between items-center w-full transition-colors duration-300 bg-[#F2F4F7] dark:bg-white/5" style={{ padding: 16, borderRadius: 12 }}>
              <div className="flex flex-col">
                <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px" }}>Pay per task</span>
                <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px" }}>Ideal for occasional use</span>
              </div>
              <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px" }}>$5</span>
            </div>

            <div className="flex flex-row justify-between items-center w-full transition-colors duration-300 bg-[#1672DF] dark:bg-blue-600" style={{ padding: 16, borderRadius: 12 }}>
              <div className="flex flex-col">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.white, whiteSpace: "nowrap" }}>Monthly Subscription</span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: colors.white, opacity: 0.8, whiteSpace: "nowrap" }}>Unlimited standard tasks</span>
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: colors.white }}>$19</span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-full hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ padding: "16px", background: BUTTON_GRADIENT, borderRadius: 12 }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: "#F7F9FC" }}>Run Agent Now</span>
          </div>
        </div>

      </div>
    </section>
  );
}
