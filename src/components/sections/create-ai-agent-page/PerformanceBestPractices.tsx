"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { typography } from "@/tokens/design-tokens";

const CARDS = [
  {
    icon: "/section-5-create-ai-agent-page/card-icon-1.svg",
    title: "Clear Instructions",
    body: "Define specific prompts and expected outputs to ensure consistent and accurate results.",
  },
  {
    icon: "/section-5-create-ai-agent-page/card-icon-2.svg",
    title: "High-quality Outputs",
    body: "Add strong example outputs to improve user trust and engagement.",
  },
  {
    icon: "/section-5-create-ai-agent-page/card-icon-3.svg",
    title: "Smart Pricing",
    body: "Choose the right pricing model to balance user growth and revenue generation.",
  },
];

export default function PerformanceBestPractices() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <section
      className="w-full rounded-[31px] px-4 py-10 transition-colors duration-300 md:px-12"
      style={{
        background: isDark ? "#0f172a" : "#f2f4f7",
        border: isDark ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="grid w-full gap-8 lg:grid-cols-[409px_minmax(0,1fr)]">
        
        {/* LEFT CONTENT */}
        <div>
          <h2
            style={{
              margin: 0,
              color: isDark ? "#ffffff" : "#000000",
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(38px,5vw,64px)",
              lineHeight: 1.05,
            }}
          >
            Build high performing{" "}
            <span style={{ color: "#60a5fa" }}>AI agents</span>
          </h2>

          <p
            style={{
              margin: "20px 0 0",
              color: isDark ? "#cbd5e1" : "#000000",
              fontFamily: typography.fonts.inter,
              fontSize: 20,
              lineHeight: "28px",
            }}
          >
            Improve your agent quality, increase usage, and maximize earnings
            by following proven best practices.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid gap-5">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl border p-6 transition-all duration-300"
              style={{
                background:
                  i === 1
                    ? isDark
                      ? "rgba(37,99,235,0.12)"
                      : "#2f80ed1a"
                    : isDark
                    ? "#111827"
                    : "rgba(255,255,255,0.6)",

                borderColor:
                  i === 1
                    ? "rgba(47,128,237,0.3)"
                    : isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.4)",
              }}
            >
              <div className="flex items-center gap-4">
                
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    background: isDark
                      ? "rgba(96,165,250,0.12)"
                      : "#2f80ed1a",
                  }}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={22}
                    height={20}
                  />
                </div>

                <h3
                  style={{
                    margin: 0,
                    color: isDark ? "#ffffff" : "#000000",
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 28,
                  }}
                >
                  {card.title}
                </h3>
              </div>

              <p
                style={{
                  margin: "10px 0 0",
                  color: isDark ? "#94a3b8" : "#64748b",
                  fontSize: 16,
                  lineHeight: "24px",
                  fontFamily: typography.fonts.inter,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}