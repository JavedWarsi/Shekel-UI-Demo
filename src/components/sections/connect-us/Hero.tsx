"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 717;

const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GLOW_GRADIENT = `linear-gradient(
  180deg,
  ${colors.brand.blueStart} 0%,
  ${colors.brand.blueEnd} 100%
)`;

export default function Hero() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

/* =========================================
   DESKTOP
========================================= */

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden bg-[#02040A] md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        borderBottomLeftRadius: "35px",
        borderBottomRightRadius: "35px",
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
        {/* =========================================
            GLOWS
        ========================================= */}

        <div
          className="absolute"
          style={{
            left: -19,
            top: -49,
            width: 1343,
            height: 211,
            background: GLOW_GRADIENT,
            filter: "blur(1000px)",
            opacity: 0.3,
          }}
        />

        <div
          className="absolute"
          style={{
            left: -98,
            top: -139,
            width: 163,
            height: 163,
            background: GLOW_GRADIENT,
            filter: "blur(203.4px)",
            opacity: 0.4,
            borderRadius: "50%",
          }}
        />

        <div
          className="absolute"
          style={{
            left: 99,
            top: 609,
            width: 1034,
            height: 373,
            background: GLOW_GRADIENT,
            filter: "blur(203.4px)",
            opacity: 0.4,
          }}
        />

        <div
          className="absolute"
          style={{
            left: 1252,
            top: -82,
            width: 163,
            height: 163,
            background: GLOW_GRADIENT,
            filter: "blur(214.7px)",
            opacity: 0.4,
            borderRadius: "50%",
          }}
        />

        {/* =========================================
            HERO IMAGE
        ========================================= */}

        <div
          className="absolute"
          style={{
            left: 133,
            top: 140,
            width: 843,
            height: 749,
            opacity: 1,

          }}
        >
          {/* Mailbox */}
          <div
            className="absolute"
            style={{
              left: 320,
              top: 45,
              width: 620,
              height: 540,
              zIndex: 1,
            }}
          >
            <Image
              src="/section-1-connect-us/mailbox.png"
              alt="Mailbox"
              width={420}
              height={340}
              className="h-full w-full object-contain"
              priority
              unoptimized
            />
          </div>

          {/* Bot */}
          <div
            className="absolute animate-bot-rise-left"
            style={{
              left: 90,
              top: 50,
              width: 520,
              height: 520,
              zIndex: 2,
            }}
          >
            <Image
              src="/section-1-connect-us/mailbot.png"
              alt="Mail bot"
              width={520}
              height={520}
              className="h-full w-full scale-[1.2] object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* =========================================
            HEADING
        ========================================= */}

        <div
          className="absolute"
          style={{
            left: 94,
            top: 71,
            width: 516,
            height: 198,
          }}
        >
          <SectionHeading fontSize={72} lineHeight="72px" />
        </div>

        {/* =========================================
            BODY TEXT
        ========================================= */}

        <div
          className="absolute"
          style={{
            left: 840,
            top: 115,
            width: 400,
            height: 64,
          }}
        >
          <SectionBody fontSize={24} lineHeight="32px" />
        </div>
      </div>
    </section>
  );
}

/* =========================================
   MOBILE
========================================= */

function SectionMobile() {
  return (
    <section className="relative block w-full overflow-hidden bg-[#02040A] md:hidden">
      {/* Glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "120%",
          height: 200,
          background: GLOW_GRADIENT,
          filter: "blur(100px)",
          opacity: 0.45,
        }}
      />

      <div className="relative z-10 flex flex-col gap-8 px-6 py-16 sm:px-8">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            fontSize="clamp(40px, 10vw, 56px)"
            lineHeight="1.1"
          />

          <SectionBody
            fontSize="clamp(16px, 4vw, 18px)"
            lineHeight="1.5"
          />
        </div>

        {/* Image */}
        <div className="relative mx-auto mt-4 w-full max-w-[500px] animate-hero-float">
          <Image
            src="/section-1-connect-us/hero-image.png"
            alt="Connect with us illustration"
            width={843}
            height={749}
            className="h-auto w-full object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================
   HEADING
========================================= */

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h1
      className="m-0"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 800,
        fontSize,
        lineHeight,
        letterSpacing: "-0.05em",
        background:
          "linear-gradient(193deg, #FFFFFF 40%, rgba(68, 145, 240, 0.95) 100%)",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Get in touch with us
    </h1>
  );
}

/* =========================================
   BODY TEXT
========================================= */

function SectionBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      className="m-0 text-white/70"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
      }}
    >
      We&apos;re here to help you navigate the world of AI agents.
      <br />
      Premium support for modern builders.
    </p>
  );
}