"use client";

import Image from "next/image";

const CANVAS_W = 1280;
const CANVAS_H = 717;

export default function FaqHero() {
  return (
    <>
      {/* DESKTOP (≥ 768px) */}
      <section
        className="relative hidden w-full overflow-hidden md:block transition-colors duration-300 bg-white dark:bg-[#02040A]"
        style={{
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
        }}
      >
        <div
          className="absolute left-0 top-0"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(calc(100cqw / ${CANVAS_W}px))`,
            transformOrigin: "top left",
          }}
        >
          {/* Top blue glow */}
          <div
            className="absolute transition-opacity duration-300"
            style={{
              left: -19, top: -49, width: 1343, height: 211,
              filter: "blur(80px)",
              background: "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              opacity: 0.1, // Reduced for light mode
            }}
          />

          {/* Top-left corner glow */}
          <div
            className="absolute transition-opacity duration-300"
            style={{
              left: -98, top: -139, width: 163, height: 163,
              filter: "blur(60px)",
              background: "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              borderRadius: "50%",
              opacity: 0.2, // Reduced for light mode
            }}
          />

          {/* Top-right corner glow */}
          <div
            className="absolute transition-opacity duration-300"
            style={{
              left: 1252, top: -82, width: 163, height: 163,
              filter: "blur(65px)",
              background: "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              borderRadius: "50%",
              opacity: 0.2, // Reduced for light mode
            }}
          />

          {/* Bottom fade to background */}
          <div
            className="absolute transition-all duration-300"
            style={{
              left: -7, top: 468, width: 1293, height: 278,
              background: "linear-gradient(0deg, var(--faq-bg) 0%, transparent 100%)",
              zIndex: 9,
            }}
          />
          <style jsx>{`
            section { --faq-bg: #ffffff; }
            :global(.dark) section { --faq-bg: #02040A; }
          `}</style>

          {/* Left rocket — blurred, angled */}
          <div
            className="absolute transition-opacity duration-300"
            style={{
              left: 20, top: 178, width: 610, height: 540,
              zIndex: 6, opacity: 0.4, // Reduced for light mode
              filter: "blur(2.5px)",
              transform: "rotate(13deg)",
            }}
          >
            <Image
              src="/section-2-faq/rocketfaq.png"
              alt="Rocket decoration"
              width={410} height={340}
              className="h-full w-full object-contain dark:opacity-100 transition-opacity duration-300"
              unoptimized
            />
          </div>

          {/* Right rocket — blurred, flipped */}
          <div
            className="absolute transition-opacity duration-300"
            style={{
              left: 788, top: 398, width: 610, height: 540,
              zIndex: 6, opacity: 0.4, // Reduced for light mode
              filter: "blur(4px)",
              transform: "rotate(13deg)",
            }}
          >
            <Image
              src="/section-2-faq/rocketfaq.png"
              alt="Rocket decoration"
              width={410} height={340}
              className="h-full w-full object-contain dark:opacity-100 transition-opacity duration-300"
              unoptimized
            />
          </div>

          {/* Center astronaut + question mark */}
          <div
            className="absolute transition-opacity duration-300"
            style={{ left: 161, top: -54, width: 1070, height: 1040, zIndex: 8, opacity: 0.8 }}
          >
            <Image
              src="/section-2-faq/faqrob.png"
              alt="FAQ Astronaut with question mark"
              width={970} height={840}
              className="h-full w-full object-contain dark:opacity-100 transition-opacity duration-300"
              unoptimized
            />
          </div>

          {/* Text Content */}
          <div
            className="absolute flex flex-col items-center text-center w-full"
            style={{ left: 0, top: 60, zIndex: 10 }}
          >
            {/* Heading — font-size: 56px, Poppins 500 */}
            <h1
              style={{
                margin: 0,
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 60,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
              className="text-black dark:text-white bg-clip-text transition-colors duration-300"
            >
              Frequently asked{" "}

              <span style={{ background: "linear-gradient(180deg, #5374d9ff  0%, #427dfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", }} > questions </span>
              </h1>

            {/* Body — font-size: 20px, Inter 400, mt: 20px */}
            <div style={{ marginTop: 20, maxWidth: 672 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'inter',
                  fontWeight: 300,
                  fontSize: 20,
                  lineHeight: "28px",
                }}
                className="text-slate-600 dark:text-[#C1C6D5] transition-colors duration-300"
              >
                Find answers about Shekel, AI agents, and how workflows work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE (< 768px) */}
      <section
        className="relative flex w-full flex-col items-center overflow-hidden px-6 pb-10 pt-14 md:hidden transition-colors duration-300 bg-white dark:bg-[#02040A]"
        style={{
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
        }}
      >
        <div
          className="absolute left-1/2 top-0 h-[300px] w-full max-w-[500px] -translate-x-1/2 rounded-full opacity-20 dark:opacity-50 transition-opacity duration-300"
          style={{
            filter: "blur(100px)",
            background: "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <h1
            style={{
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 36,
              lineHeight: "1.22",
              letterSpacing: "-0.02em",
            }}
            className="text-black dark:text-white transition-colors duration-300"
          >
            Frequently asked{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7A9BFF 0%, #A2B9FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              questions
            </span>
          </h1>
          <div style={{ marginTop: 16, maxWidth: 448 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "22px",
              }}
              className="text-slate-600 dark:text-white/50 transition-colors duration-300"
            >
              Find answers about Shekel, AI agents, and how workflows work.
            </p>
          </div>
        </div>

        <div className="relative z-0 mt-4 w-full max-w-sm transition-opacity duration-300 opacity-60 dark:opacity-100">
          <Image
            src="/section-2-faq/faqrob.png"
            alt="FAQ Astronaut"
            width={540} height={430}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </section>    </>
  );
}