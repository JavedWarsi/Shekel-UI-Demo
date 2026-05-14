"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const CTA_TEXT_LEFT = 406;
const CTA_TEXT_WIDTH = 683;
const CTA_BODY_WIDTH = 460;

function Desktop() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      className="relative hidden w-full overflow-visible md:block"
      style={{
        aspectRatio: `${CANVAS_W}/${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0 overflow-visible"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <div
          className={`absolute inset-0 overflow-hidden rounded-3xl ${
            isDark ? "bg-[#020817]" : "bg-black"
          }`}
        >
          {/* Background */}
          <Image
            src="/section-7-create-ai-agent-page/cta-bg.png"
            alt=""
            fill
            className={`object-cover ${
              isDark ? "opacity-30" : "opacity-100"
            }`}
          />

          {/* Dark Overlay */}
          {/* {isDark && (
            <div className="absolute inset-0 bg-[#020817]/80 z-[1]" />
          )} */}

          {/* Robot */}
          <Image
            src="/section-7-create-ai-agent-page/robot.png"
            alt=""
            width={360}
            height={421}
            className="pointer-events-none absolute right-[-92px] top-[128px] z-10 blur-[3.5px] opacity-90 animate-float"
          />

          {/* Heading */}
          <h2
            style={{
              margin: 0,
              position: "absolute",
              left: CTA_TEXT_LEFT,
              top: 113,
              width: CTA_TEXT_WIDTH,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 72,
              lineHeight: "72px",
              color: isDark ? "#ffffff" : "#000000",
              letterSpacing: -3.6,
              zIndex: 20,
            }}
          >
            Ready To Launch Your AI Agent?
          </h2>

          {/* Buttons */}
          <div
            className="absolute top-[302px] flex gap-4 z-20"
            style={{ left: CTA_TEXT_LEFT }}
          >
            <button
              className="h-[60px] min-w-[200px] rounded-[10px] px-10 text-sm uppercase tracking-[1.4px] text-white transition-all duration-300"
              style={{
                background:
                  "linear-gradient(188.63deg, #2864e4 35.4%, #1e9aff 67.2%, #c6f8ff 151.2%)",
              }}
            >
              Publish Agent
            </button>

            <button
              className={`h-[62px] min-w-[200px] rounded-[10px] border px-10 text-sm uppercase tracking-[1.4px] transition-all duration-300 ${
                isDark
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-[#2864e4] bg-white text-[#2864e4]"
              }`}
            >
              Explore Agents
            </button>
          </div>

          {/* Description */}
          <p
            style={{
              margin: 0,
              position: "absolute",
              left: CTA_TEXT_LEFT,
              top: 407,
              width: CTA_BODY_WIDTH,
              textAlign: "left",
              color: isDark ? "#CBD5E1" : "#000000",
              fontSize: 20,
              lineHeight: "26px",
              fontFamily: typography.fonts.inter,
              zIndex: 20,
            }}
          >
            Publish Your Agent To The Marketplace, Reach Real Users, And Start
            Earning From Every Run.
          </p>
        </div>

        {/* Rocket */}
        <div className="animate-float">
          
        <Image
          src="/section-8/rocket.webp"
          alt=""
          width={560}
          height={620}
          className={`pointer-events-none absolute left-[-126px] top-[-84px] z-20 transition-all duration-300 ${
            isDark ? "opacity-90" : "opacity-100"
          } `}
          style={{
            transform: "scaleX(-1) rotate(-30deg)",
          }}
        />
        </div>
      </div>
    </section>
  );
}

function Mobile() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      className={`relative mx-4 overflow-hidden rounded-2xl p-6 md:hidden ${
        isDark ? "bg-[#020817]" : ""
      }`}
      style={{
        backgroundImage:
          "url('/section-7-create-ai-agent-page/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {/* {isDark && (
        <div className="absolute inset-0 bg-[#020817]/80 z-[1]" />
      )} */}

      <div className="relative z-10">
        <h2
          style={{
            margin: 0,
            color: isDark ? "#ffffff" : "#000000",
            fontFamily: typography.fonts.inter,
            fontSize: "clamp(32px,9vw,44px)",
            lineHeight: 1.1,
          }}
        >
          Ready to launch your AI agent?
        </h2>

        <div className="mt-4 grid gap-2">
          <button
            className="rounded-xl py-3 text-sm uppercase tracking-[1.4px] text-white"
            style={{
              background: colors.brand.blue,
            }}
          >
            Publish Agent
          </button>

          <button
            className={`rounded-xl border py-3 text-sm uppercase tracking-[1.4px] transition-all duration-300 ${
              isDark
                ? "border-white/20 bg-white/10 text-white"
                : "border-[#2864e4] bg-white text-[#2864e4]"
            }`}
          >
            Explore Agents
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CreateAgentCta() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}