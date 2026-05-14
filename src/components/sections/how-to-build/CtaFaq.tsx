"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaFaq.tsx — FAQ CTA Section
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1216;
const CANVAS_H = 552;

export default function CtaFaq() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px)
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block dark:bg-slate-900"
        style={{
          paddingTop: 32,
          paddingBottom: 96,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div
          className="relative w-full overflow-hidden"
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
            {/* ── Full-bleed background image ── */}
            <div className="absolute inset-0">
              <Image
                src="/section-4-faq/bg.png"
                alt=""
                width={CANVAS_W}
                height={CANVAS_H}
                className="h-full w-full object-cover dark:opacity-40"
                unoptimized
              />
            </div>

            {/* ── Robot — floating, centered vertically on the right half ── */}
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

            {/* ── Text + Buttons — left side ── */}
            <div
              className="absolute flex flex-col"
              style={{ left: 109, top: 96, zIndex: 3 }}
            >
              {/* Heading */}
              <h2
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 80,
                  lineHeight: "1.0",
                  letterSpacing: "-0.03em",
                  textTransform: "capitalize",
                  // color: "#0B0B0B",
                  maxWidth: 460,
                }}
              >
                Start Using AI Agents Today
              </h2>

              {/* Buttons row */}
              <div
                style={{
                  marginTop: 48,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {/* Filled blue button */}
                <button
                  style={{
                    padding: "20px 40px",
                    borderRadius: 10,
                    border: "none",
                    background:
                      "linear-gradient(160deg, rgba(40,100,228,1) 9%, rgba(30,154,255,1) 72%, rgba(198,248,255,1) 100%)",
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

                {/* Outlined button */}
                <button
                  style={{
                    padding: "19px 40px",
                    borderRadius: 10,
                    border: "1px solid rgba(100,140,220,0.5)",
                    background: "rgba(255,255,255,0.15)",
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 13,
                    lineHeight: "20px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#2864E4",
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Start Building
                </button>
              </div>

              {/* Subtext */}
              <p
                style={{
                  margin: "28px 0 0 0",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 10,
                  lineHeight: "16px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#0B0B0B",
                  opacity: 0.45,
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

      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px)
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative block w-full overflow-hidden py-12 md:hidden"
        style={{
          backgroundColor: colors.white,
          paddingLeft: 0,
          paddingRight: 0,
        }}
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
              className="object-cover"
            />
          </div>

          {/* Text block */}
          <div className="relative z-10 flex w-full flex-col items-start gap-8">
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 44,
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
                textTransform: "capitalize",
                color: "#0B0B0B",
              }}
            >
              Start Using AI Agents Today
            </h2>

            <div className="flex flex-col gap-4" style={{ width: "75%" }}>
              <button
                style={{
                  padding: "16px 32px",
                  borderRadius: 10,
                  border: "none",
                  background:
                    "linear-gradient(160deg, rgba(40,100,228,1) 9%, rgba(30,154,255,1) 72%, rgba(198,248,255,1) 100%)",
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

              <button

                style={{
                  padding: "15px 32px",
                  borderRadius: 10,
                  border: "1px solid rgba(100,140,220,0.5)",
                  background: "rgba(255,255,255,0.15)",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#2864E4",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
              >
                Start Building
              </button>
            </div>

            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 9,
                lineHeight: "16px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#0B0B0B",
                opacity: 0.45,
              }}
            >
              Join thousands of users and developers
              <br />
              already using Shekel
            </p>
          </div>

          {/* Robot — centered float on mobile */}
          <div className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center">
            <Image
              src="/section-2-faq/faqbot.png"
              alt="Futuristic Robot"
              width={1000}
              height={1000}
              className="object-contain pointer-events-none scale-[1.5] animate-float"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}