"use client";

import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1232;
const CANVAS_H = 114;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const LABEL_COLOR = "#727785";

const BUTTONS = [
  "Marketing teams",
  "Startup founders",
  "Agencies",
  "Content creators",
];

export default function DesignedFor() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden h-[180px] dark:bg-slate-900 md:block py-12 transition-colors duration-300"
      style={{
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative" style={{ width: 1232, height: 114, top: 0 }}>
          <div
            className="absolute"
            style={{
              left: 556.97,
              top: 0,
              width: 118.06,
              height: 18,
            }}
          >
            <DesignedForHeading />
          </div>
        </div>
        <div
          className="absolute flex flex-row items-center justify-center"
          style={{ left: 0, top: 58, width: CANVAS_W, height: 56, gap: 20 }}
        >
          {BUTTONS.map((text, i) => (
            <DesignedForButton key={i} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300"
    >
      <div className="flex flex-col items-center gap-6 px-6 py-12">
        <DesignedForHeading />
        <div className="flex flex-wrap justify-center gap-3">
          {BUTTONS.map((text, i) => (
            <DesignedForButton key={i} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignedForHeading() {
  return (
    <span
      className="transition-colors duration-300"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: "18px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: LABEL_COLOR,
        textAlign: "center",
      }}
    >
      Designed For
    </span>
  );
}

function DesignedForButton({ text }: { text: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div
      className="flex items-center justify-center transition-colors duration-300 bg-[#F2F4F7] dark:bg-white/5 border border-transparent dark:border-white/10"
      style={{
        borderRadius: radiuses.full,
        padding: "16px 32px",
      }}
    >
      <span
        className="transition-colors duration-300 text-[#191C1E] dark:text-white"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </div>
  );
}
