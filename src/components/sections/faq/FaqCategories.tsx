"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 1200;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const ICONS = {
  gettingStarted: "/section-2-faq/gettingstrt.svg",
  aiAgents: "/section-2-faq/aiagent.svg",
  workflows: "/section-2-faq/wf.svg",
  usage: "/section-2-faq/usage.svg",
  whatsappchat: "/section-2-faq/wpm.svg",
};

function CategoryIcon({ src }: { src: string }) {
  const { isDark } = useThemeTokens();
  return (
    <Image
      src={src}
      alt=""
      width={22}
      height={22}
      className={isDark ? 'brightness-0 invert' : ''}
      style={{ objectFit: "contain", display: "block" }}
      unoptimized
    />
  );
}

const ChevronDown = () => {
  const { isDark } = useThemeTokens();
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 6L8 10L12 6" stroke={isDark ? "white" : "#0B0B0B"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const PlusIcon = () => {
  const { isDark } = useThemeTokens();
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M3 8h10M8 3v10" stroke={isDark ? "white" : "#0B0B0B"} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
};

function CategoryHeader({ iconSrc, title }: { iconSrc: string; title: string }) {
  const { isDark } = useThemeTokens();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: isDark ? "rgba(59, 130, 246, 0.2)" : "#DBEAFE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <CategoryIcon src={iconSrc} />
      </div>
      <span className="text-black dark:text-white transition-colors duration-300" style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize: 18,
        lineHeight: "24px",
      }}>
        {title}
      </span>
    </div>
  );
}

function QuestionRowChevron({ question }: { question: string }) {
  const { isDark } = useThemeTokens();
  return (
    <div className="flex items-center justify-between transition-colors duration-300 bg-white dark:bg-slate-900 border border-[#E5E7EB] dark:border-white/10 hover:border-blue-500 rounded-[14px] p-[18px_20px] cursor-pointer gap-3 shadow-sm">
      <span className="text-[#0B0B0B] dark:text-white transition-colors duration-300" style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 600, fontSize: 15, lineHeight: "22px",
      }}>
        {question}
      </span>
      <ChevronDown />
    </div>
  );
}

function QuestionRowPlus({ question }: { question: string }) {
  const { isDark } = useThemeTokens();
  return (
    <div className="flex items-center justify-between transition-colors duration-300 bg-white dark:bg-slate-900 border border-[#E5E7EB] dark:border-white/10 hover:border-blue-500 rounded-[14px] p-4 cursor-pointer gap-2 shadow-sm">
      <span className="text-[#0B0B0B] dark:text-white transition-colors duration-300" style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 600, fontSize: 13, lineHeight: "19px",
      }}>
        {question}
      </span>
      <PlusIcon />
    </div>
  );
}

export default function FaqCategories() {
  const { isDark } = useThemeTokens();
  
  return (
    <>
      <section
        className="relative hidden w-full overflow-hidden md:block transition-colors duration-300"
        style={{
          backgroundColor: isDark ? 'black' : 'transparent',
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
        }}
      >
        <div
          className="absolute left-0 top-0 flex w-full flex-col items-center pt-24"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <div style={{ width: 1024, display: "flex", flexDirection: "column", gap: 96, padding: "0 32px" }}>

            {/* Getting Started */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CategoryHeader iconSrc={ICONS.gettingStarted} title="Getting Started" />
              <QuestionRowChevron question="What is Shekel?" />
              <QuestionRowChevron question="Technical knowledge required?" />
            </div>

            {/* AI Agents */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <CategoryHeader iconSrc={ICONS.aiAgents} title="AI Agents" />
              <QuestionRowChevron question="What are AI agents?" />
              <QuestionRowChevron question="Creating own agents?" />
            </div>

            {/* Still Need Help */}
            <div className="flex items-center justify-between transition-colors duration-300 bg-white dark:bg-slate-900 border border-[#E5E7EB] dark:border-white/10 rounded-[32px] p-16 relative overflow-hidden shadow-sm">
              <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
                <h2 className="m-0 text-[#0B0B0B] dark:text-white transition-colors duration-300" style={{
                  fontFamily: typography.fonts.jakarta, fontWeight: 700,
                  fontSize: 30, lineHeight: "36px",
                }}>
                  Still need help?
                </h2>
                <p className="m-0 text-black/55 dark:text-white/50 transition-colors duration-300" style={{
                  fontFamily: typography.fonts.inter, fontWeight: 400,
                  fontSize: 16, lineHeight: "24px",
                  maxWidth: 442, marginTop: 8
                }}>
                  If you couldn't find your answer, our team of AI specialists is
                  here to assist you with technical integration or billing.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, zIndex: 1 }}>
                <button className="transition-all hover:bg-gray-50 dark:hover:bg-white/10" style={{
                  border: "1px solid #E5E7EB", borderRadius: 14, background: isDark ? 'transparent' : "#fff",
                  padding: "14px 40px", fontFamily: typography.fonts.inter,
                  fontWeight: 600, fontSize: 16, color: isDark ? 'white' : "#0B0B0B", cursor: "pointer",
                  boxShadow: isDark ? 'none' : "0px 4px 20px -2px rgba(0,0,0,0.05)",
                }}>
                  Contact Support
                </button>
                <button className="transition-all hover:opacity-90 active:scale-95" style={{
                  border: "none", borderRadius: 14, padding: "14px 32px",
                  background: "linear-gradient(160deg, #4a8af4 0%, #a8c4ff 100%)",
                  fontFamily: typography.fonts.inter, fontWeight: 600,
                  fontSize: 16, color: "#fff", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <Image
                    src={ICONS.whatsappchat}
                    alt="WhatsApp"
                    width={18}
                    height={18}
                  />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Bottom Grid — Workflows & Usage */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CategoryHeader iconSrc={ICONS.workflows} title="Workflows" />
                <QuestionRowPlus question="What is a workflow?" />
                <QuestionRowPlus question="How they work?" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <CategoryHeader iconSrc={ICONS.usage} title="Usage" />
                <QuestionRowPlus question="Running agents" />
                <QuestionRowPlus question="Connecting agents" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        className="block w-full px-4 py-8 md:hidden transition-colors duration-300"
        style={{ backgroundColor: isDark ? 'black' : "#EEF2F8" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CategoryHeader iconSrc={ICONS.gettingStarted} title="Getting Started" />
            <QuestionRowChevron question="What is Shekel?" />
            <QuestionRowChevron question="Technical knowledge required?" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CategoryHeader iconSrc={ICONS.aiAgents} title="AI Agents" />
            <QuestionRowChevron question="What are AI agents?" />
            <QuestionRowChevron question="Creating own agents?" />
          </div>

          {/* Still Need Help — mobile */}
          <div className="transition-colors duration-300 bg-white dark:bg-slate-900 border border-[#E5E7EB] dark:border-white/10 rounded-[20px] p-7 flex flex-col gap-5 relative overflow-hidden">
            <svg
              style={{ position: "absolute", top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: "90%", pointerEvents: "none" }}
              viewBox="0 0 300 40" fill="none"
            >
              <line x1="0" y1="20" x2="128" y2="20" stroke="#93C5FD" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="172" y1="20" x2="300" y2="20" stroke="#93C5FD" strokeWidth="1" strokeDasharray="6 4" />
              <g transform="translate(133,8)">
                <line x1="12" y1="0" x2="0" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
                <line x1="0" y1="0" x2="12" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
                <line x1="12" y1="0" x2="24" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
                <line x1="24" y1="0" x2="12" y2="12" stroke="#93C5FD" strokeWidth="1.2" />
              </g>
            </svg>

            <div className="relative z-10">
              <h2 className="m-0 text-[#0B0B0B] dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
                Still need help?
              </h2>
              <p className="m-0 text-black/55 dark:text-white/50 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 13, lineHeight: "20px" }}>
                If you couldn't find your answer, our team of AI specialists is
                here to assist you with technical integration or billing.
              </p>
            </div>

            <div className="flex gap-2.5 relative z-10">
              <button className="flex-1 transition-all hover:bg-gray-50 dark:hover:bg-white/10" style={{
                border: "1px solid #E5E7EB", borderRadius: 12, background: isDark ? 'transparent' : "#fff",
                padding: "12px 8px", fontFamily: typography.fonts.inter, fontWeight: 600,
                fontSize: 14, color: isDark ? 'white' : "#0B0B0B", cursor: "pointer",
                boxShadow: isDark ? 'none' : "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                Contact Support
              </button>
              <button className="flex-1 transition-all hover:opacity-90 active:scale-95" style={{
                border: "none", borderRadius: 12,
                background: "linear-gradient(160deg, #4a8af4 0%, #a8c4ff 100%)",
                padding: "12px 8px", fontFamily: typography.fonts.inter, fontWeight: 600,
                fontSize: 14, color: "#fff", cursor: "pointer",
              }}>
                Chat on WhatsApp
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <CategoryHeader iconSrc={ICONS.workflows} title="Workflows" />
              <QuestionRowPlus question="What is a workflow?" />
              <QuestionRowPlus question="How they work?" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <CategoryHeader iconSrc={ICONS.usage} title="Usage" />
              <QuestionRowPlus question="Running agents" />
              <QuestionRowPlus question="Connecting agents" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}