"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 690;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";

type PricingCard = {
  tier: string;
  title: string;
  body: string;
  priceMain: string;
  priceSub: string;
  buttonGradient: boolean;
  highlighted?: boolean;
  x: number;
  width: number;
};

const CARDS: PricingCard[] = [
  {
    tier: "ON-DEMAND",
    title: "Pay-per-use",
    body: "Ideal for occasional tasks. Pay only for\nwhat you run.",
    priceMain: "From $2",
    priceSub: "per task",
    buttonGradient: false,
    x: 0,
    width: 373.33,
  },
  {
    tier: "MONTHLY ACCESS",
    title: "Subscription",
    body: "Unlimited access to premium agents\nwith predictable pricing.",
    priceMain: "Starts at $19",
    priceSub: "per month",
    buttonGradient: true,
    highlighted: true,
    x: 395.33,
    width: 391.99,
  },
  {
    tier: "ENTRY LEVEL",
    title: "Freemium",
    body: "Explore basic capabilities. Get a limited\nnumber of runs free every month.",
    priceMain: "Free",
    priceSub: "with limits",
    buttonGradient: false,
    x: 810.67,
    width: 373.33,
  },
];

export default function FlexibleMonetization() {
  return (
    <>
      <FlexibleMonetizationDesktop />
      <FlexibleMonetizationMobile />
    </>
  );
}

function FlexibleMonetizationDesktop() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#05070C' : colors.white,
        borderRadius: radiuses.card,
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
        <div
          className="absolute left-0 top-0 h-full w-full transition-colors duration-300"
          style={{ backgroundColor: isDark ? '#05070C' : colors.white }}
        />
        <div
          className="absolute"
          style={{ left: -531, top: -228, width: 2400.92, height: 1830 }}
        >
          <Image src="/section-7-marketplace/bg-lines.svg" alt="" fill className={isDark ? "opacity-20" : ""} unoptimized />
        </div>
        <div
          className="absolute"
          style={{
            left: -126,
            top: 638,
            width: 310,
            height: 131,
            borderRadius: "9999px",
            background: BLUE_GRADIENT,
            filter: "blur(203.4px)",
            opacity: isDark ? 0.4 : 1,
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1081,
            top: 655,
            width: 310,
            height: 131,
            borderRadius: "9999px",
            background: BLUE_GRADIENT,
            filter: "blur(203.4px)",
            opacity: isDark ? 0.4 : 1,
          }}
        />

        <div className="absolute left-0 top-0 w-[1280px] px-12 pt-[66px]">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-4">
              <h2
                className="m-0 text-black dark:text-white transition-colors duration-300"
                style={{
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 500,
                  fontSize: 60,
                  lineHeight: "60px",
                  letterSpacing: "-0.025em",
                }}
              >
                Flexible monetization
              </h2>
              <p
                className="m-0 text-black dark:text-white/60 transition-colors duration-300"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "28px",
                }}
              >
                Choose how you want to use and pay for AI agents
              </p>
            </div>
            <Link className="inline-flex items-center gap-2 no-underline group" href="/pricing">
              <span
                className="text-black dark:text-white transition-colors duration-300 group-hover:text-[#2F80ED]"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "24px",
                }}
              >
                Explore pricing
              </span>
              <Image src="/section-7-marketplace/explore-pricing-arrow.svg" alt="" width={16} height={16} className={isDark ? "brightness-200" : ""} unoptimized />
            </Link>
          </div>

          <div className="relative mt-16 h-[351px]">
            {CARDS.map((card) => (
              <PricingCardView key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCardView({ card }: { card: PricingCard }) {
  const { isDark } = useThemeTokens();
  
  return (
    <article
      className="absolute rounded-2xl bg-white dark:bg-slate-900 px-8 pb-8 pt-8 transition-colors duration-300"
      style={{
        left: card.x,
        top: 0,
        width: card.width,
        height: 351.5,
        border: card.highlighted 
          ? (isDark ? "2px solid #3B82F6" : "2px solid #2F80ED")
          : (isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(255,255,255,0.08)"),
        boxShadow: card.highlighted 
          ? (isDark ? "0px 0px 40px -10px rgba(59,130,246,0.3)" : "0px 0px 40px -10px rgba(47,128,237,0.3)")
          : "none",
      }}
    >
      {card.highlighted ? (
        <div
          className="absolute"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: -14.71,
            width: 123.77,
            borderRadius: "9999px",
            background: isDark ? "#3B82F6" : "#2F80ED",
            padding: "4px 16px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 700,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.05em",
              color: "#fff",
            }}
          >
            MOST POPULAR
          </span>
        </div>
      ) : null}

      <div className="pb-8">
        <p
          className="m-0 transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 10,
            lineHeight: "15px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: card.highlighted 
              ? (isDark ? "#60A5FA" : "#2F80ED")
              : (isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"),
          }}
        >
          {card.tier}
        </p>
        <h3
          className="m-0 pt-2 text-black dark:text-white transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "32px",
          }}
        >
          {card.title}
        </h3>
        <p
          className="m-0 whitespace-pre-line pt-2 text-[rgba(0,0,0,0.6)] dark:text-gray-400 transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "26px",
          }}
        >
          {card.body}
        </p>
      </div>

      <div className="flex items-baseline gap-1">
        <span
          className="text-black dark:text-white transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 36,
            lineHeight: "40px",
          }}
        >
          {card.priceMain}
        </span>
        <span
          className="text-[rgba(0,0,0,0.4)] dark:text-white/40 transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
          }}
        >
          {card.priceSub}
        </span>
      </div>

      <Link href="/agent-detail">
        <button
          className="mt-8 w-full rounded-2xl border-0 py-4 hover:opacity-90 active:scale-95 transition-all"
          style={{ background: card.buttonGradient ? BLUE_GRADIENT : (isDark ? "#3B82F6" : "#2F80ED") }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "24px",
              color: "#fff",
            }}
          >
            Run Agent
          </span>
        </button>
      </Link>
    </article>
  );
}

function FlexibleMonetizationMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section className="block bg-white dark:bg-[#05070C] px-6 py-14 md:hidden transition-colors duration-300">
      <h2
        className="m-0 text-black dark:text-white transition-colors duration-300"
        style={{
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: "clamp(34px, 9vw, 46px)",
          lineHeight: "1.05",
        }}
      >
        Flexible monetization
      </h2>
      <p
        className="m-0 pt-3 text-black dark:text-white/60 transition-colors duration-300"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
        }}
      >
        Choose how you want to use and pay for AI agents
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {CARDS.map((card) => (
          <div key={`m-${card.title}`} className="rounded-2xl border p-5 bg-white dark:bg-slate-900 transition-colors duration-300" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : "rgba(0,0,0,0.08)" }}>
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 dark:text-white/40">{card.tier}</p>
            <h3 className="m-0 pt-2 text-2xl font-bold text-black dark:text-white">{card.title}</h3>
            <p className="m-0 whitespace-pre-line pt-2 text-base leading-6 text-black/70 dark:text-gray-400">{card.body}</p>
            <div className="pt-4">
              <span className="text-3xl font-bold text-black dark:text-white">{card.priceMain}</span>
              <span className="pl-1 text-sm text-black/50 dark:text-white/40">{card.priceSub}</span>
            </div>
            <Link href="/agent-detail">
              <button className="mt-4 w-full rounded-2xl border-0 py-3 text-white transition-opacity hover:opacity-90" style={{ background: card.buttonGradient ? BLUE_GRADIENT : (isDark ? "#3B82F6" : "#2F80ED") }}>
                Run Agent
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
