"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

// ─────────────────────────────────────────────────────────────────────────────
// PricingGrid.tsx  —  "Section - Pricing Grid"
// Figma frame: 506:4756  "Section - Pricing Grid"
// Canvas: 1232 × 476 px   Page-y: 674   bg: transparent
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1232;
const CANVAS_H = 476;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const CARD_BORDER = "#e2e8f0";
const BLUE_TEXT = "#005ab6";
const TEXT_MUTED = "#414753";
const CARD_SHADOW = "0px 1px 1px 0px rgba(0,0,0,0.05)";
const HIGHLIGHT_SHADOW = "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)";
const BLUE_GRADIENT = `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`;

const STARTER_FEATURES = [
  "5 Free agent runs / mo",
  "Access to basic marketplace",
  "Community support"
];

const PRO_FEATURES = [
  "50 AI credits included",
  "Team collaboration tools",
  "Custom agent training",
  "Dedicated support agent"
];

const PAYG_FEATURES = [
  "Unlimited marketplace access",
  "Priority queue processing",
  "Pay only for what you run",
  "API webhooks enabled"
];

export default function PricingGrid() {
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
      className="relative hidden w-full md:block"
      style={{
        backgroundColor: "transparent",
        aspectRatio: `${CANVAS_W} / ${CANVAS_H + 40}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: CANVAS_H + 40,
        }}
      >
        <div
          className="absolute"
          style={{
            width: CANVAS_W,
            height: CANVAS_H + 40,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          {/* Starter Plan */}
          <div
            className="absolute flex flex-col bg-white dark:bg-slate-900 w-[389.33px] rounded-[12px] transition-all duration-300"
            style={{
              left: 0,
              top: 32,
              padding: 33,
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : CARD_BORDER}`,
              boxShadow: CARD_SHADOW,
            }}
          >
               <PlanHeader
                  title="Starter"
                  description="Ideal for individuals testing the waters."
                  price="$0"
                  period="/forever"
                />
                <div style={{ flex: 1, marginTop: 32, marginBottom: 44 }}>
                  <FeatureList features={STARTER_FEATURES} />
                </div>
                <SecondaryButton text="Start Free" />
          </div>

          {/* Pay-as-you-go Plan */}
          <div
            className="absolute flex h-[456.981px] items-center justify-center w-[401.01px]"
            style={{ left: 421.33, top: 29.5 }}
          >
              <div className="flex-none" style={{ transform: "scale(1.03)" }}>
                <div
                  className="bg-white dark:bg-slate-900 relative overflow-hidden flex flex-col w-[389.33px] transition-all duration-300"
                  style={{
                    padding: 34,
                    borderRadius: radiuses.cardSm,
                    border: `2px solid ${isDark ? 'rgba(59,130,246,0.3)' : 'rgba(0,90,182,0.2)'}`,
                    boxShadow: HIGHLIGHT_SHADOW,
                  }}
                >
                   {/* "MOST POPULAR" Badge Ribbon */}
                    <div
                        className="absolute flex items-center justify-center"
                        style={{
                            right: -25.63,
                            top: -29.57,
                            width: 133.555,
                            height: 133.555,
                        }}
                    >
                        <div style={{ transform: "rotate(45deg)", background: BLUE_GRADIENT, padding: "4px 40px" }}>
                           <span
                              style={{
                                  fontFamily: typography.fonts.inter,
                                  fontWeight: 600,
                                  fontSize: 10,
                                  lineHeight: "15px",
                                  letterSpacing: "0.5px",
                                  color: colors.white
                              }}
                           >
                                MOST POPULAR
                           </span>
                        </div>
                    </div>

                    <PlanHeader
                        title="Pay-as-you-go"
                        description="For power users who need high flexibility."
                        price="$2 - $10"
                        period="/task"
                        isHighlighted={true}
                        isPayg={true}
                    />
                    <div style={{ flex: 1, marginTop: 31.068, marginBottom: 38.835 }}>
                        <FeatureList features={PAYG_FEATURES} />
                    </div>
                    <PrimaryButton text="Run Agent" />
                </div>
              </div>
          </div>

          {/* Pro Plan */}
          <div
            className="absolute flex flex-col bg-white dark:bg-slate-900 w-[389.33px] rounded-[12px] transition-all duration-300"
            style={{
              left: 842.67,
              top: 36,
              padding: 33,
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : CARD_BORDER}`,
              boxShadow: CARD_SHADOW,
            }}
          >
                <PlanHeader
                  title="Pro"
                  description="Complete solution for growing teams."
                  price="$19"
                  period="/month"
                />
                <div style={{ flex: 1, marginTop: 32, marginBottom: 0 }}>
                  <FeatureList features={PRO_FEATURES} />
                </div>
                <SecondaryButton text="Go Pro" />
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
      className="relative block w-full overflow-hidden md:hidden pb-16"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="flex flex-col gap-6 px-6 sm:px-8">
         <div
            className="bg-white dark:bg-slate-900 relative overflow-hidden flex flex-col w-full transition-all duration-300"
            style={{
                padding: 34,
                borderRadius: radiuses.cardSm,
                border: `2px solid ${isDark ? 'rgba(59,130,246,0.3)' : 'rgba(0,90,182,0.2)'}`,
                boxShadow: HIGHLIGHT_SHADOW,
            }}
        >
             <div
                className="absolute flex items-center justify-center"
                style={{
                    right: -25,
                    top: -25,
                    width: 133,
                    height: 133,
                }}
            >
                <div style={{ transform: "rotate(45deg)", background: BLUE_GRADIENT, padding: "4px 40px" }}>
                    <span
                        style={{
                            fontFamily: typography.fonts.inter,
                            fontWeight: 600,
                            fontSize: 10,
                            lineHeight: "15px",
                            letterSpacing: "0.5px",
                            color: colors.white
                        }}
                    >
                        MOST POPULAR
                    </span>
                </div>
            </div>

            <PlanHeader
                title="Pay-as-you-go"
                description="For power users who need high flexibility."
                price="$2 - $10"
                period="/task"
                isHighlighted={true}
            />
            <div style={{ marginTop: 32, marginBottom: 32 }}>
                <FeatureList features={PAYG_FEATURES} />
            </div>
            <PrimaryButton text="Run Agent" />
        </div>

        <div
          className="flex flex-col bg-white dark:bg-slate-900 w-full transition-all duration-300"
          style={{
            padding: 33,
            borderRadius: radiuses.cardSm,
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : CARD_BORDER}`,
            boxShadow: CARD_SHADOW,
          }}
        >
            <PlanHeader
              title="Starter"
              description="Ideal for individuals testing the waters."
              price="$0"
              period="/forever"
            />
            <div style={{ marginTop: 32, marginBottom: 32 }}>
              <FeatureList features={STARTER_FEATURES} />
            </div>
            <SecondaryButton text="Start Free" />
        </div>

        <div
          className="flex flex-col bg-white dark:bg-slate-900 w-full transition-all duration-300"
          style={{
            padding: 33,
            borderRadius: radiuses.cardSm,
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : CARD_BORDER}`,
            boxShadow: CARD_SHADOW,
          }}
        >
            <PlanHeader
              title="Pro"
              description="Complete solution for growing teams."
              price="$19"
              period="/month"
            />
            <div style={{ marginTop: 32, marginBottom: 32 }}>
              <FeatureList features={PRO_FEATURES} />
            </div>
            <SecondaryButton text="Go Pro" />
        </div>
      </div>
    </section>
  );
}

function PlanHeader({
  title,
  description,
  price,
  period,
  isHighlighted = false,
  isPayg = false,
}: {
  title: string;
  description: string;
  price: string;
  period: string;
  isHighlighted?: boolean;
  isPayg?: boolean;
}) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col" style={{ paddingBottom: isPayg ? 31.068 : 32 }}>
      <div className="flex flex-col gap-[8px]">
        <h3
          className="m-0 transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "28px",
            color: isHighlighted ? (isDark ? '#60A5FA' : BLUE_TEXT) : (isDark ? '#FFFFFF' : '#0B0B0B'),
          }}
        >
          {title}
        </h3>
        <p
          className="m-0 text-[#475569] dark:text-white/60 transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
          }}
        >
          {description}
        </p>
      </div>

      <div className="flex items-baseline" style={{ paddingTop: isPayg ? 31.068 : 32 }}>
        <span
          className="text-[#0B0B0B] dark:text-white transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 36,
            lineHeight: "40px",
          }}
        >
          {price}
        </span>
        <span
          className="ml-1 text-[#475569] dark:text-white/60 transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
          }}
        >
          {period}
        </span>
      </div>
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  const { isDark } = useThemeTokens();
  
  return (
    <ul className="m-0 p-0 flex flex-col gap-[16px] list-none">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-[12px]">
          <div style={{ position: "relative", width: 15, height: 15 }}>
            <Image
              src="/section-2-pricing/check-icon.svg"
              alt=""
              fill
              className={`object-contain ${isDark ? 'brightness-200' : ''}`}
            />
          </div>
          <span
            className="text-[#475569] dark:text-white/80 transition-colors duration-300"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
            }}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SecondaryButton({ text }: { text: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div
      className="flex items-center justify-center cursor-pointer group hover:bg-[#005ab6] transition-colors duration-200"
      style={{
        border: `1px solid ${isDark ? '#3B82F6' : BLUE_TEXT}`,
        borderRadius: radiuses.cardSm,
        padding: "13px 25px",
        width: "100%"
      }}
    >
      <span
        className="group-hover:text-white transition-colors duration-200"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: isDark ? '#3B82F6' : BLUE_TEXT,
          height: 24,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function PrimaryButton({ text }: { text: string }) {
  return (
    <div
      className="flex items-center justify-center cursor-pointer relative hover:opacity-90 transition-opacity duration-200"
      style={{
        background: BLUE_GRADIENT,
        borderRadius: radiuses.cardSm,
        padding: "12px 24px",
        width: "100%"
      }}
    >
      <span
        className="relative z-10"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.white,
          height: 24,
        }}
      >
        {text}
      </span>
    </div>
  );
}