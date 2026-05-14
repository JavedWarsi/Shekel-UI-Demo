"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 712;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

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
            backgroundColor: isDark ? "#020617" : colors.white,
            borderRadius: 36,
            overflow: "hidden",
          }}
        >
          {/* Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden dark:bg-black  dark:opacity-40"
            style={{
              left: -272,
              top: -183,
              width: 2400.92,
              height: 1830,
            }}
          >
            <Image
              src="/section-6-agent-detail/bg-grid.svg"
              alt="Grid"
              fill
              className={`object-cover transition-all duration-300 ${
                isDark
                  ? "opacity-10 brightness-50 invert-[0.05]"
                  : "opacity-100"
              }`}
              unoptimized
            />
          </div>

          {/* Main Content */}
          <div
            className="absolute"
            style={{
              left: "calc(50% + 10px)",
              top: 142,
              width: 1232,
              height: 368,
              transform: "translateX(-50%)",
            }}
          >
            {/* Heading */}
            <div
              className="absolute"
              style={{
                left: "calc(50% + 0.5px)",
                top: -31,
                width: 450,
                height: 32,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className="absolute flex flex-col justify-center text-center w-full"
                style={{
                  top: 16,
                  transform: "translateY(-50%)",
                }}
              >
                <h2
                  className={`m-0 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                  style={{
                    fontFamily: typography.fonts.poppins,
                    fontWeight: 500,
                    fontSize: 48,
                    lineHeight: "32px",
                  }}
                >
                  Try This{" "}
                  <span
                    style={{
                      background: GRADIENT_BLUE,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Agent
                  </span>
                </h2>
              </div>
            </div>

            {/* Panels */}
            <div
              className="absolute"
              style={{
                left: 0,
                right: 0,
                top: 64,
                height: 304,
              }}
            >
              {/* Left Panel */}
              <div
                className="absolute flex flex-col items-start"
                style={{
                  left: 0,
                  top: 0,
                  right: 632,
                  height: 434,
                  padding: "32px 32px 48px",
                  background: GRADIENT_BLUE,
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.39)",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    letterSpacing: "1.4px",
                    textTransform: "uppercase",
                    color: colors.white,
                  }}
                >
                  Input Prompt
                </span>

                <div
                  className="flex w-full overflow-hidden relative transition-colors duration-300"
                  style={{
                    height: 322,
                    padding: 24,
                    backgroundColor: isDark ? "#111827" : colors.white,
                    borderRadius: 16,
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  <p
                    className={`m-0 transition-colors duration-300 ${
                      isDark ? "text-white/70" : "text-black/50"
                    }`}
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "24px",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Generate 5 Instagram posts for a fitness brand
                    specializing in{"\n"}
                    home workout equipment. Tone: Energetic and motivating.
                  </p>

                  {/* Run Button */}
                  <div
                    className="absolute flex items-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                    style={{
                      bottom: 16,
                      right: 16,
                      padding: "8px 24px",
                      gap: 8,
                      background: GRADIENT_BLUE,
                      borderRadius: 9999,
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        width: 6.42,
                        height: 8.17,
                      }}
                    >
                      <Image
                        src="/section-2-agent-detail/run-icon.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>

                    <span
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: colors.white,
                      }}
                    >
                      Run
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div
                className="absolute flex flex-col items-start overflow-hidden transition-colors duration-300"
                style={{
                  left: 632,
                  right: 0,
                  top: 40,
                  height: 304,
                  padding: 32,
                  backgroundColor: isDark ? "#0F172A" : TERMINAL_BG,
                  borderRadius: 24,
                  gap: 16,
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {/* Traffic Lights */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>

                {/* Terminal Text */}
                <div
                  className="flex flex-col gap-2 relative z-10"
                  style={{ opacity: 0.85 }}
                >
                  {[
                    "> Initializing SocialCraft Engine v4.2...",
                    "> Fetching trending hashtags for #fitness #homeworkout...",
                    "> analyzing audience engagement metrics (last 30 days)...",
                    "> Generating 5 visual concepts using DALL-E 3 Integration...",
                    "> Writing persuasive copy for Instagram platform...",
                    "> Optimizing posting schedule for Tuesday mornings...",
                    "> Process complete. Awaiting user approval.",
                  ].map((line, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: typography.fonts.mono,
                        fontSize: 14,
                        lineHeight: "20px",
                        color:
                          idx === 0 || idx === 6
                            ? "#4ADE80"
                            : idx === 3 || idx === 4
                            ? "#60A5FA"
                            : "#CBD5E1",
                      }}
                    >
                      {line}
                    </span>
                  ))}

                  <div
                    style={{
                      width: 4,
                      height: 16,
                      backgroundColor: "rgba(255,255,255,0.5)",
                    }}
                  />
                </div>

                {/* Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0) 50%, rgba(2,6,23,0) 100%)",
                    opacity: 0.4,
                  }}
                />
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
      style={{
        backgroundColor: isDark ? "#020617" : colors.white,
        borderRadius: 36,
      }}
    >
      {/* Grid */}
      <div className="absolute inset-0 w-[200%] h-[150%] -left-1/2 -top-1/4 opacity-20 pointer-events-none">
        <Image
          src="/section-6-agent-detail/bg-grid.svg"
          alt="Grid"
          fill
          className={`object-cover ${
            isDark ? "brightness-50 opacity-10" : ""
          }`}
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col gap-12">
        {/* Heading */}
        <div className="flex justify-center">
          <h2
            className={`text-center transition-colors duration-300 ${
              isDark ? "text-white" : "text-black"
            }`}
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 8vw, 40px)",
              lineHeight: 1.2,
            }}
          >
            Try This{" "}
            <span
              style={{
                background: GRADIENT_BLUE,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Agent
            </span>
          </h2>
        </div>

        {/* Mobile Content */}
        <div className="flex flex-col gap-8">
          {/* Input */}
          <div
            className="relative flex flex-col gap-3"
            style={{
              padding: "24px 24px 32px",
              background: GRADIENT_BLUE,
              borderRadius: 24,
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: colors.white,
              }}
            >
              Input Prompt
            </span>

            <div
              style={{
                minHeight: 200,
                padding: 24,
                backgroundColor: isDark ? "#111827" : colors.white,
                borderRadius: 16,
              }}
            >
              <p
                className={`transition-colors duration-300 ${
                  isDark ? "text-white/70" : "text-black/50"
                }`}
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                }}
              >
                Generate 5 Instagram posts for a fitness brand specializing
                in home workout equipment. Tone: Energetic and motivating.
              </p>
            </div>
          </div>

          {/* Terminal */}
          <div
            className="relative overflow-hidden"
            style={{
              padding: 24,
              backgroundColor: isDark ? "#0F172A" : TERMINAL_BG,
              borderRadius: 24,
            }}
          >
            <div className="flex gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              {[
                "> Initializing SocialCraft Engine v4.2...",
                "> Fetching trending hashtags...",
                "> analyzing audience engagement metrics...",
                "> Generating 5 visual concepts...",
                "> Writing persuasive copy...",
                "> Optimizing posting schedule...",
                "> Process complete.",
              ].map((line, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: typography.fonts.mono,
                    fontSize: 12,
                    lineHeight: "18px",
                    color:
                      idx === 0 || idx === 6
                        ? "#4ADE80"
                        : idx === 3 || idx === 4
                        ? "#60A5FA"
                        : "#CBD5E1",
                  }}
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}