import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const TITLE_GRADIENT =
  "linear-gradient(202.17deg, #FFFFFF 55.63%, rgba(255,255,255,0.35) 110.73%)";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070C] px-6 pb-6 pt-10 md:px-16 md:pb-28 md:pt-20">
      
      {/* Background Effects */}
      <Image
        src="/section-1-about/hero-ellipse-top.svg"
        alt=""
        width={1343}
        height={211}
        className="pointer-events-none absolute -top-12 left-0 opacity-40"
      />

      <Image
        src="/section-1-about/hero-ellipse-left.svg"
        alt=""
        width={163}
        height={163}
        className="pointer-events-none absolute -left-10 -top-10 opacity-80"
      />

      <Image
        src="/section-1-about/hero-ellipse-right.svg"
        alt=""
        width={163}
        height={163}
        className="pointer-events-none absolute -right-10 -top-10 opacity-80"
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-14 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT CONTENT */}
        <div className="max-w-[590px]">
          <h1
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(44px, 7vw, 72px)",
              lineHeight: "1",
              letterSpacing: "-0.056em",
              background: TITLE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Where AI agents
            <br />
            become systems
          </h1>

          <p
            className="mt-8 max-w-[520px]"
            style={{
              marginBottom: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "32px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Shekel brings multiple AI agents together into a unified
            architecture. It&apos;s not just about one task; it&apos;s about
            building resilient, automated production lines.
          </p>

          {/* CTA BUTTON */}
          <button
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 transition-transform duration-300 hover:scale-[1.02]"
            style={{
              borderRadius: radiuses.cardSm,
              background:
                "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)",
              boxShadow: "0px 20px 25px rgba(25,28,30,0.06)",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 18,
                lineHeight: "28px",
                color: colors.white,
              }}
            >
              Explore Agents
            </span>

            <Image
              src="/section-1-about/hero-arrow.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center md:h-[620px] md:w-[620px]">

          {/* Outer Rings */}
          <div className="absolute inset-0 rounded-[32px] border border-[#B557FA]/20" />
          <div className="absolute inset-5 rounded-[32px] border border-[#B557FA]/15" />
          <div className="absolute inset-10 rounded-[32px] border border-[#B557FA]/10" />
          <div className="absolute inset-16 rounded-[32px] border border-[#B557FA]/10" />
          <div className="absolute inset-24 rounded-[32px] border border-[#B557FA]/10" />

          {/* Purple Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#8A3FFC]/25 blur-[120px]" />

          {/* Glow Asset */}
          <div
            className="absolute opacity-100"
            style={{
              left: "-80px",
              top: "-120px",
              width: "180px",
              height: "180px",
            }}
          >
            <Image
              src="/section-1-developer-builder/hero-glow-2.svg"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating UI Image */}
          {/* <div
            className="absolute z-[1] animate-float"
            style={{
              width: "100%",
              height: "100%",
            }}
          > */}
            {/* <Image
              src="/section-1-developer-builder/bg-image.png"
              alt="Platform UI"
              fill
              className="object-contain"
              priority
            /> */}
          {/* </div> */}

          {/* Robot */}
          <div className="relative z-[2]">
            <Image
              src="/images/hero/robot.png"
              alt="AI Robot"
              width={830}
              height={830}
              // fill
              className="object-contain drop-shadow-[0_25px_60px_rgba(151,71,255,0.45)] animate-float"
              priority
            />
          </div>

          {/* Glow Overlay */}
          <Image
            src="/section-1-about/hero-glow.svg"
            alt=""
            fill
            className="pointer-events-none object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}