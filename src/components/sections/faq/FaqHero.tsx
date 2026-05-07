"use client";

import Image from "next/image";

const CANVAS_W = 1280;
const CANVAS_H = 717;

export default function FaqHero() {
  return (
    <>
      {/* DESKTOP (≥ 768px) */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          backgroundColor: "#02040A",
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
            className="absolute"
            style={{
              left: -19, top: -49, width: 1343, height: 211,
              filter: "blur(80px)",
              background: "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              opacity: 0.18,
            }}
          />

          {/* Top-left corner glow */}
          <div
            className="absolute"
            style={{
              left: -98, top: -139, width: 163, height: 163,
              filter: "blur(60px)",
              background: "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              borderRadius: "50%",
              opacity: 0.55,
            }}
          />

          {/* Top-right corner glow */}
          <div
            className="absolute"
            style={{
              left: 1252, top: -82, width: 163, height: 163,
              filter: "blur(65px)",
              background: "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              borderRadius: "50%",
              opacity: 0.55,
            }}
          />

          {/* Bottom fade to black */}
          <div
            className="absolute"
            style={{
              left: -7, top: 468, width: 1293, height: 278,
              background: "linear-gradient(0deg, rgba(2,4,10,1) 0%, rgba(2,4,10,0) 100%)",
              zIndex: 9,
            }}
          />

          {/* Left rocket — blurred, angled */}
          <div
            className="absolute"
            style={{
              left: 20, top: 178, width: 610, height: 540,
              zIndex: 6, opacity: 0.95,
              filter: "blur(2.5px)",
              transform: "rotate(13deg)",
            }}
          >
            <Image
              src="/section-2-faq/rocketfaq.png"
              alt="Rocket decoration"
              width={410} height={340}
              className="h-full w-full object-contain "
              unoptimized
            />
          </div>

          {/* Right rocket — blurred, flipped */}
          <div
            className="absolute"
            style={{
              left: 788, top: 398, width: 610, height: 540,
              zIndex: 6, opacity: 0.9,
              filter: "blur(4px)",
              transform: "rotate(13deg)",
            }}
          >
            <Image
              src="/section-2-faq/rocketfaq.png"
              alt="Rocket decoration"
              width={410} height={340}
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>

          {/* Center astronaut + question mark */}
          <div
            className="absolute"
            style={{ left: 161, top: -54, width: 1070, height: 1040, zIndex: 8 }}
          >
            <Image
              src="/section-2-faq/faqrob.png"
              alt="FAQ Astronaut with question mark"
              width={970} height={840}
              className="h-full w-full object-contain"
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
              className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent"
            >
              Frequently asked{" "}

              <span style={{ background: "linear-gradient(180deg, #5374d9ff  0%, #d6dcefff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", }} > questions </span>
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
                  color: "#C1C6D5",
                }}
              >
                Find answers about Shekel, AI agents, and how workflows work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE (< 768px) */}
      <section
        className="relative flex w-full flex-col items-center overflow-hidden px-6 pb-10 pt-14 md:hidden"
        style={{
          backgroundColor: "#02040A",
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
        }}
      >
        <div
          className="absolute left-1/2 top-0 h-[300px] w-full max-w-[500px] -translate-x-1/2 rounded-full opacity-50"
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
              color: "#ffffff",
            }}
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
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Find answers about Shekel, AI agents, and how workflows work.
            </p>
          </div>
        </div>

        <div className="relative z-0 mt-4 w-full max-w-sm">
          <Image
            src="/section-2-faq/faqrob.png"
            alt="FAQ Astronaut"
            width={540} height={430}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </section>
    </>
  );
}