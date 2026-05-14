"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 510;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE =
  "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";

const TEXT_DARK = "#191c1e";
const TEXT_MUTED = "#414753";
const CARD_BG = "#f2f4f7";

const STEPS = [
  {
    title: "01. Create",
    description:
      "Select from our library or build a custom agent persona from scratch using natural language or code.",
    icon: "/section-3-developer-builder/icon-1.svg",
    iconSize: { width: 19, height: 18 },
    alt: "Create Icon",
  },
  {
    title: "02. Connect",
    description:
      "Link your agents via visual pipes. Create complex logical chains and conditional branching effortlessly.",
    icon: "/section-3-developer-builder/icon-2.svg",
    iconSize: { width: 24, height: 23 },
    alt: "Connect Icon",
  },
  {
    title: "03. Deploy",
    description:
      "Go live with a single API endpoint or web-hook. Monitor execution and performance in real-time.",
    icon: "/section-3-developer-builder/icon-3.svg",
    iconSize: { width: 20.05, height: 20.07 },
    alt: "Deploy Icon",
  },
] as const;

export default function HowItWorks() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          DESKTOP / TABLET
      ───────────────────────────────────────────── */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          // backgroundColor: colors.white,
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
          {/* Header */}
          <div
            className="absolute flex flex-col items-center"
            style={{
              left: 24,
              top: 80,
              width: 1232,
              gap: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 48,
                lineHeight: "40px",
                letterSpacing: "-0.9px",
                // color: TEXT_DARK,
                textAlign: "center",
              }}
            >
              How it works
            </h2>

            <p
              style={{
                margin: 0,
                width: 393.5,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: TEXT_MUTED,
                textAlign: "center",
              }}
            >
              Three steps from zero to an autonomous workforce.
            </p>
          </div>

          {/* Cards */}
          <div
            className="absolute grid grid-cols-3"
            style={{
              left: 24,
              top: 188,
              width: 1232,
              gap: 24,
            }}
          >
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-start dark:bg-gray-900"
                style={{
                  // backgroundColor: CARD_BG,
                  borderRadius: radiuses.cardLg,
                  padding: 32,
                  gap: 16,
                }}
              >
                {/* Icon Box */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: GRADIENT_BLUE,
                  }}
                >
                  <div
                    style={{
                      width: step.iconSize.width,
                      height: step.iconSize.height,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={step.icon}
                      alt={step.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="flex w-full pt-[8px]">
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.jakarta,
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: "32px",
                      // color: TEXT_DARK,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "26px",
                    color: TEXT_MUTED,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          MOBILE
      ───────────────────────────────────────────── */}
      <section
        className="relative block w-full overflow-hidden md:hidden"
        style={{ backgroundColor: colors.white }}
      >
        <div className="relative flex flex-col items-center gap-12 px-6 py-16 sm:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 32,
                lineHeight: "1.2",
                letterSpacing: "-0.5px",
                color: TEXT_DARK,
              }}
            >
              How it works
            </h2>

            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "1.5",
                color: TEXT_MUTED,
              }}
            >
              Three steps from zero to an autonomous workforce.
            </p>
          </div>

          {/* Mobile Cards */}
          <div className="flex w-full flex-col gap-6">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-start"
                style={{
                  backgroundColor: CARD_BG,
                  borderRadius: radiuses.cardLg,
                  padding: "32px 24px",
                  gap: 16,
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: GRADIENT_BLUE,
                  }}
                >
                  <div
                    style={{
                      width: step.iconSize.width,
                      height: step.iconSize.height,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={step.icon}
                      alt={step.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    margin: 0,
                    marginTop: 4,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_DARK,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "1.6",
                    color: TEXT_MUTED,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}