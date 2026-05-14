"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT =
  "linear-gradient(160deg, rgba(40, 100, 228, 1) 9%, rgba(30, 154, 255, 1) 72%, rgba(198, 248, 255, 1) 100%)";

const BLUR_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

const CTA_DECOR_SCALE = 1.6;
const CTA_DECOR_BASE_W = 760;
const CTA_DECOR_BASE_H = 552;

export default function CtaSection() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ───────────────── Desktop ─────────────────

function SectionDesktop() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className={`relative hidden w-full overflow-hidden md:block transition-all duration-300 ${isDark ? "bg-black" : "bg-white"
        }`}
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        borderRadius: 24,
        marginTop: 48,
      }}
    >
      <div
        className="absolute top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top center",
          left: "50%",
          marginLeft: `calc(-${CANVAS_W}px / 2)`,
        }}
      >
        {/* Main Background */}
        <div
          className={`absolute inset-0 rounded-[24px] transition-all duration-300 ${isDark
            ? "bg-[#020617] border border-white/10"
            : "bg-[#F8FAFC] border border-gray-200"
            }`}
        />

        {/* Background Image */}
        <div
          className="absolute dark:brightness-50"
          style={{
            left: -385,
            top: -397,
            width: 1841,
            height: 1252,
          }}
        >
          <Image
            src="/section-6-explore-agent/cta-bg.png"
            alt=""
            fill
            unoptimized
            className={`object-cover transition-all duration-300 ${isDark
              ? "opacity-10 brightness-50 invert"
              : "opacity-50"
              }`}
          />
        </div>

        {/* Blur Glow */}
        <div
          className="absolute transition-all  duration-300"
          style={{
            left: -549,
            top: -566,
            width: 696,
            height: 696,
            background: BLUR_GRADIENT,
            filter: "blur(257.5px)",
            borderRadius: "50%",
            opacity: isDark ? 0.15 : 0.3,
          }}
        />

        {/* Decorative SVG */}
        <div
          className="absolute pointer-events-none dark:brightness-30"
          style={{
            right: -160,
            top:
              -(CTA_DECOR_BASE_H * CTA_DECOR_SCALE - CANVAS_H) / 2,
            width: CTA_DECOR_BASE_W * CTA_DECOR_SCALE,
            height: CTA_DECOR_BASE_H * CTA_DECOR_SCALE,
          }}
        >
          <Image
            src="/section-6-explore-agent/cta-decor.svg"
            alt=""
            fill
            className={`object-contain object-right  transition-all duration-300 ${isDark ? "opacity-30" : "opacity-80"
              }`}
          />
        </div>

        {/* Graphic Image */}
        <div
          className="absolute perspective-[1200px] "
          style={{
            left: 682,
            top: -60,
            width: 970,
            height: 870,
          }}
        >
          <div className="relative z-100 w-full h-full animate-astronaut-fly">
            <Image
              src="/section-6-explore-agent/cta-graphic.png"
              alt=""
              fill
              unoptimized
              className={`object-contain transition-all duration-500 scale-[0.7] ${isDark ? "brightness-90" : ""
                }`}
            />
          </div>
        </div>

        {/* Heading */}
        <h2
          className={`absolute m-0 transition-colors duration-300 ${isDark ? "text-white" : "text-black"
            }`}
          style={{
            left: 109,
            top: 112,
            width: 612,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 72,
            lineHeight: "72px",
            letterSpacing: "-0.05em",
          }}
        >
          Start Using AI
          <br />
          Agents Today
        </h2>

        {/* Buttons */}
        <div
          className="absolute flex flex-row items-center"
          style={{
            left: 101,
            top: 315,
            gap: 16,
          }}
        >
          <Link href="/explore-agent">
            <button
              className="hover:opacity-90 active:scale-95 transition-all"
              style={{
                background: BUTTON_GRADIENT,
                borderRadius: 10,
                padding: "20px 40px",
                boxShadow: isDark
                  ? "0 10px 30px rgba(37,99,235,0.35)"
                  : "0 10px 25px rgba(37,99,235,0.20)",
              }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: colors.white,
                }}
              >
                Explore Agents
              </span>
            </button>
          </Link>

          <Link href="/workflows">
            <button
              className={`hover:opacity-90 border active:scale-95 transition-all ${isDark
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-300"
                }`}
              style={{
                border: "1px solid",
                borderRadius: 10,
                padding: "20px 40px",
              }}
            >
              <span
                className={`transition-colors duration-300 ${isDark ? "text-white" : "text-black"
                  }`}
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Start Building
              </span>
            </button>
          </Link>
        </div>

        {/* Bottom Text */}
        <p
          className={`absolute m-0 transition-colors duration-300 ${isDark ? "text-white/50" : "text-black/50"
            }`}
          style={{
            left: 115,
            top: 426,
            width: 423,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "16px",
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Join thousands of users and developers
          <br />
          already using Shekel
        </p>
      </div>
    </section>
  );
}

// ───────────────── Mobile ─────────────────

function SectionMobile() {
  const { isDark } = useThemeTokens();

  return (
    <section
      className={`relative block w-full overflow-hidden md:hidden transition-all duration-300 ${isDark ? "bg-black" : "bg-white"
        }`}
      style={{
        borderRadius: 24,
        marginTop: 32,
      }}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${isDark
          ? "bg-[#020617] border border-white/10"
          : "bg-[#F8FAFC]"
          }`}
      />

      {/* Background Image */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-300 ${isDark
          ? "opacity-10 brightness-50 invert"
          : "opacity-40"
          }`}
      >
        <Image
          src="/section-6-explore-agent/cta-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Graphic Overlay */}
      <div
        className="absolute right-0 top-1/4 w-3/4 aspect-square z-0"
        style={{
          transform: "translateX(30%)",
        }}
      >
        <Image
          src="/section-6-explore-agent/cta-graphic.png"
          alt=""
          fill
          className={`object-contain transition-all duration-300 ${isDark ? "opacity-50" : "opacity-70"
            }`}
        />
      </div>

      {/* Glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          left: -200,
          top: -200,
          background: BLUR_GRADIENT,
          filter: "blur(180px)",
          opacity: isDark ? 0.15 : 0.25,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-6 py-16">
        <h2
          className={`m-0 transition-colors duration-300 ${isDark ? "text-white" : "text-black"
            }`}
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: "clamp(40px, 10vw, 56px)",
            lineHeight: "1.1",
            letterSpacing: "-0.05em",
          }}
        >
          Start Using AI Agents Today
        </h2>

        <div className="flex flex-col w-full gap-4 mt-4">
          <Link href="/explore-agent" className="w-full">
            <button
              className="w-full hover:opacity-90 active:scale-95 transition-all"
              style={{
                background: BUTTON_GRADIENT,
                borderRadius: 10,
                padding: "16px 24px",
              }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: colors.white,
                }}
              >
                Explore Agents
              </span>
            </button>
          </Link>

          <Link href="/workflows" className="w-full">
            <button
              className={`w-full transition-all duration-300 ${isDark
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-300"
                }`}
              style={{
                border: "1px solid",
                borderRadius: 10,
                padding: "16px 24px",
              }}
            >
              <span
                className={`transition-colors duration-300 ${isDark ? "text-white" : "text-black"
                  }`}
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",

                }}
              >
                Start Building
              </span>
            </button>
          </Link>
        </div>

        <p
          className={`m-0 mt-8 transition-colors duration-300 ${isDark ? "text-white/50" : "text-black/50"
            }`}
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "16px",
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            maxWidth: "80%",
          }}
        >
          Join thousands of users and developers already
          using Shekel
        </p>
      </div>
    </section>
  );
}