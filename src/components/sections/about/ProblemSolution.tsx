"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

export default function ProblemSolution() {
  return (
    <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#05070C] md:px-16">
      <div className="mx-auto grid max-w-[1216px] gap-14 md:grid-cols-2 md:gap-24">

        {/* LEFT PANEL */}
        <Panel
          title="AI tools are disconnected"
          body="Most AI tools operate independently, creating silos of manual work between every step. Your team becomes the glue, losing time in the gaps between disconnected intelligence."
          muted
          icons={[
            "/section-3-about/problem-icon-1.svg",
            "/section-3-about/problem-icon-2.svg",
            "/section-3-about/problem-icon-3.svg",
          ]}
        />

        {/* RIGHT PANEL */}
        <Panel
          title="A workflow-driven system"
          body="Shekel connects AI agents into structured workflows. Data flows seamlessly from one expert agent to the next, maintaining context and precision through the entire lifecycle."
          muted={false}
          icons={[
            "/section-3-about/solution-icon-1.svg",
            "/section-3-about/solution-icon-2.svg",
            "/section-3-about/solution-icon-3.svg",
          ]}
        />
      </div>
    </section>
  );
}

function Panel({
  title,
  body,
  muted,
  icons,
}: {
  title: string;
  body: string;
  muted: boolean;
  icons: string[];
}) {
  const { isDark } = useThemeTokens();

  return (
    <div>
      {/* Heading */}
      <h2
        className="text-[#0B0B0B] transition-colors duration-300 dark:text-white"
        style={{
          margin: 0,
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: "clamp(32px,4vw,40px)",
          lineHeight: "1.15",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="mt-5 max-w-[520px] text-[rgba(25,28,30,0.62)] transition-colors duration-300 dark:text-gray-400"
        style={{
          marginBottom: 0,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 17,
          lineHeight: "30px",
        }}
      >
        {body}
      </p>

      {/* Workflow Card */}
      <div
        className="mt-8 flex items-center justify-between border px-8 py-8 transition-all duration-300"
        style={{
          borderRadius: "14px",

          borderColor: isDark
            ? "rgba(255,255,255,0.08)"
            : muted
            ? "rgba(217,221,228,1)"
            : "rgba(120,170,255,0.28)",

          background: isDark
            ? "#15181E"
            : muted
            ? "#F6F7F9"
            : "rgba(240,246,255,1)",
        }}
      >
        {icons.map((icon, idx) => (
          <div key={icon} className="flex items-center">

            {/* ICON BOX */}
            <div
              className="relative flex h-[56px] w-[56px] items-center justify-center rounded-xl transition-all duration-300"
              style={{
                background: muted
                  ? isDark
                    ? "rgba(255,255,255,0.04)"
                    : "#FFFFFF"
                  : isDark
                  ? "linear-gradient(180deg, #2563EB 0%, #7C9EFF 100%)"
                  : "linear-gradient(180deg, #4F8CFF 0%, #A9C4FF 100%)",

                border: muted
                  ? isDark
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid rgba(0,0,0,0.04)"
                  : "1px solid rgba(255,255,255,0.18)",

                boxShadow: muted
                  ? isDark
                    ? "0px 8px 20px rgba(0,0,0,0.15)"
                    : "0px 8px 20px rgba(15,23,42,0.05)"
                  : isDark
                  ? "0px 12px 30px rgba(37,99,235,0.35)"
                  : "0px 10px 25px rgba(79,140,255,0.28)",
              }}
            >
              {/* glow effect */}
              {!muted && (
                <div
                  className="absolute inset-0 rounded-xl opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(255,255,255,0.28), transparent 70%)",
                  }}
                />
              )}

              {/* icon */}
              <Image
                src={icon}
                alt=""
                width={20}
                height={20}
                className={`relative z-[1] object-contain ${
                  muted
                    ? isDark
                      ? "opacity-70 brightness-200"
                      : "opacity-60"
                    : "brightness-[4]"
                }`}
              />
            </div>

            {/* CONNECTOR */}
            {idx < icons.length - 1 && (
              <div
                className={`mx-5 hidden w-[80px] md:block ${
                  muted
                    ? isDark
                      ? "border-t border-dashed border-slate-700"
                      : "border-t border-dashed border-slate-300"
                    : "h-[3px] rounded-full bg-[#3B82F6]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Unified Stream Tag */}
      {!muted && (
        <div className="mt-4 flex justify-center">
          <div
            className="rounded-full px-4 py-1"
            style={{
              background: isDark
                ? "rgba(59,130,246,0.12)"
                : "rgba(59,130,246,0.08)",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#3B82F6",
              }}
            >
              UNIFIED STREAM
            </span>
          </div>
        </div>
      )}
    </div>
  );
}