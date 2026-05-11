"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 150; 
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const FILTERS = ["All", "Getting Started", "AI Agents", "Workflows", "Account"];

export default function SearchFilter() {
  const { isDark } = useThemeTokens();
  
  return (
    <>
      <section
        className="relative hidden w-full overflow-hidden md:block mt-18 transition-colors duration-300"
        style={{
          backgroundColor: isDark ? 'black' : colors.white,
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
        }}
      >
        <div
          className="absolute left-0 top-0 flex w-full flex-col items-center justify-center"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <div
            className="flex w-full flex-col items-center"
            style={{ width: 768, gap: 32, padding: "0 32px" }}
          >
            {/* Search Input */}
            <div className="relative w-[704px] h-[64px]">
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full h-full rounded-[16px] border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-slate-900 text-black dark:text-white outline-none transition-colors duration-300"
                style={{
                  padding: "21px 24px 21px 56px",
                  boxShadow: isDark ? "none" : "0px 4px 20px -2px rgba(0, 0, 0, 0.05)",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22px",
                }}
              />

              <div
                className="absolute flex items-center justify-center"
                style={{
                  left: "24px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "18px",
                  height: "18px",
                }}
              >
                <Image
                  src="/section-2-faq/search-icon.svg"
                  alt="Search"
                  width={18}
                  height={18}
                  className={isDark ? 'brightness-200' : ''}
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex w-full flex-wrap justify-center gap-2 font-semibold">
              {FILTERS.map((filter, index) => (
                <button
                  key={filter}
                  className="rounded-full transition-colors duration-300"
                  style={{
                    padding: "8px 24px",
                    backgroundColor: index === 0 ? "#2F80ED" : (isDark ? 'rgba(255,255,255,0.05)' : "#F8FAFC"),
                    border: index === 0 ? "none" : (isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(229, 231, 235, 0.3)"),
                    color: index === 0 ? "#FFFFFF" : (isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"),
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    letterSpacing: "0.025em",
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative block w-full overflow-hidden px-6 py-8 md:hidden transition-colors duration-300"
        style={{ backgroundColor: isDark ? 'black' : colors.white }}
      >
        <div className="mx-auto flex w-full max-w-md flex-col gap-6">
          {/* Search Input */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full rounded-2xl border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-slate-900 text-black dark:text-white outline-none transition-colors duration-300"
              style={{
                padding: "16px 20px 16px 48px",
                boxShadow: isDark ? "none" : "0px 4px 20px -2px rgba(0, 0, 0, 0.05)",
                fontFamily: typography.fonts.inter,
                fontWeight: 500,
                fontSize: 16,
              }}
            />
            <div
              className="absolute"
              style={{ left: 16, top: 16, width: 18, height: 18 }}
            >
              <Image
                src="/section-2-faq/search-icon.svg"
                alt="Search"
                width={18}
                height={18}
                className={isDark ? 'brightness-200' : ''}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex w-full flex-wrap gap-2">
            {FILTERS.map((filter, index) => (
              <button
                key={filter}
                className="rounded-full transition-colors duration-300"
                style={{
                  padding: "6px 16px",
                  backgroundColor: index === 0 ? "#2F80ED" : (isDark ? 'rgba(255,255,255,0.05)' : "#F8FAFC"),
                  border: index === 0 ? "none" : (isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(229, 231, 235, 0.3)"),
                  color: index === 0 ? "#FFFFFF" : (isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"),
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}