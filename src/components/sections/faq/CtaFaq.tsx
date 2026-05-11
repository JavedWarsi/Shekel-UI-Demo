"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1216;
const CANVAS_H = 552;

export default function CtaFaq() {
  const { isDark } = useThemeTokens();
  
  return (
    <>
      <section
        className="relative hidden w-full overflow-hidden md:block transition-colors duration-300"
        style={{
          backgroundColor: isDark ? 'black' : colors.white,
          paddingTop: 32,
          paddingBottom: 96,
        }}
      >
        <div
          className="relative w-full overflow-hidden mx-auto max-w-[1216px]"
          style={{
            borderRadius: 24,
            aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
            containerType: "inline-size",
          }}
        >
          <div
            className="absolute left-0 top-0 w-full"
            style={{
              height: CANVAS_H,
              transform: `scale(calc(100cqw / ${CANVAS_W}))`,
              transformOrigin: "top left",
            }}
          >
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/section-4-faq/bg.png"
                alt=""
                width={CANVAS_W}
                height={CANVAS_H}
                className={`h-full w-full object-cover ${isDark ? 'opacity-30 brightness-50' : ''}`}
                unoptimized
              />
            </div>

            {/* Robot */}
            <div
              className="absolute flex items-center justify-center pt-45"
              style={{
                right: 80,
                top: 0,
                width: 620,
                height: CANVAS_H,
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/section-2-faq/faqbot.png"
                alt="AI Agent Robot"
                width={1000}
                height={1000}
                className="object-contain pointer-events-none scale-[1.7] animate-float"
                priority
                unoptimized
              />
            </div>

            {/* Content */}
            <div
              className="absolute flex flex-col"
              style={{ left: 109, top: 96, zIndex: 3 }}
            >
              <h2
                className="transition-colors duration-300 text-black dark:text-white"
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 80,
                  lineHeight: "1.0",
                  letterSpacing: "-0.03em",
                  textTransform: "capitalize",
                  maxWidth: 460,
                }}
              >
                Start Using AI Agents Today
              </h2>

              <div
                style={{
                  marginTop: 48,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <Link href="/marketplace" className="no-underline">
                  <button
                    className="transition-all hover:opacity-90 active:scale-95"
                    style={{
                      padding: "20px 40px",
                      borderRadius: 10,
                      border: "none",
                      background: "linear-gradient(160deg, rgba(40,100,228,1) 9%, rgba(30,154,255,1) 72%, rgba(198,248,255,1) 100%)",
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 13,
                      lineHeight: "20px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    Explore Agents
                  </button>
                </Link>

                <Link href="/create-ai-agent-page" className="no-underline">
                  <button
                    className="transition-all hover:bg-white/20 active:scale-95"
                    style={{
                      padding: "19px 40px",
                      borderRadius: 10,
                      border: "1px solid rgba(100,140,220,0.5)",
                      background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.15)",
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 13,
                      lineHeight: "20px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isDark ? "white" : "#2864E4",
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Start Building
                  </button>
                </Link>
              </div>

              <p
                className="transition-colors duration-300 text-black/45 dark:text-white/40"
                style={{
                  margin: "28px 0 0 0",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 10,
                  lineHeight: "16px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  maxWidth: 380,
                }}
              >
                Join thousands of users and developers
                <br />
                already using Shekel
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative block w-full overflow-hidden py-12 md:hidden transition-colors duration-300"
        style={{ backgroundColor: isDark ? 'black' : colors.white }}
      >
        <div
          className="relative w-full flex flex-col items-center overflow-hidden px-8 py-14"
          style={{ borderRadius: 24 }}
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/section-4-faq/bg.png"
              alt=""
              fill
              className={`object-cover ${isDark ? 'opacity-30 brightness-50' : ''}`}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col items-start gap-8">
            <h2
              className="transition-colors duration-300 text-black dark:text-white"
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 44,
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
                textTransform: "capitalize",
              }}
            >
              Start Using AI Agents Today
            </h2>

            <div className="flex flex-col gap-4 w-full sm:w-3/4">
              <Link href="/marketplace" className="w-full no-underline">
                <button
                  className="w-full transition-all hover:opacity-90 active:scale-95"
                  style={{
                    padding: "16px 32px",
                    borderRadius: 10,
                    border: "none",
                    background: "linear-gradient(160deg, rgba(40,100,228,1) 9%, rgba(30,154,255,1) 72%, rgba(198,248,255,1) 100%)",
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  Explore Agents
                </button>
              </Link>

              <Link href="/create-ai-agent-page" className="w-full no-underline">
                <button
                  className="w-full transition-all hover:bg-white/20 active:scale-95"
                  style={{
                    padding: "15px 32px",
                    borderRadius: 10,
                    border: "1px solid rgba(100,140,220,0.5)",
                    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.15)",
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: isDark ? "white" : "#2864E4",
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Start Building
                </button>
              </Link>
            </div>

            <p
              className="transition-colors duration-300 text-black/45 dark:text-white/40"
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 9,
                lineHeight: "16px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Join thousands of users and developers
              <br />
              already using Shekel
            </p>
          </div>

          {/* Robot */}
          <div className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center mt-8">
            <Image
              src="/section-2-faq/faqbot.png"
              alt="Futuristic Robot"
              width={1000}
              height={1000}
              className="object-contain pointer-events-none scale-[1.5] animate-float"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
}