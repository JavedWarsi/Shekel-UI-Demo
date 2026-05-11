"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 466;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)";

const CARDS = [
  {
    title: "WhatsApp",
    body: "Immediate support via encrypted chat.",
    linkText: "Start Chat",
    iconBg: "rgba(47, 128, 237, 0.1)",
    iconSrc: "/section-2-connect-us/icon-whatsapp.svg",
  },
  {
    title: "Email",
    body: "Detailed inquiries and technical help.",
    linkText: "support@shekel.ai",
    iconBg: "rgba(86, 204, 242, 0.1)",
    iconSrc: "/section-2-connect-us/icon-email.svg",
  },
  {
    title: "Social Media",
    body: "Follow our updates and news.",
    linkText: "View Profiles",
    iconBg: "#E8F1FE",
    iconSrc: "/section-2-connect-us/icon-social.svg",
  },
];

export default function ContactMethods() {
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
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300"
      style={{
        backgroundColor: isDark ? 'black' : colors.white,
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
        {/* Glow Ellipses */}
        <div
          className="absolute transition-opacity duration-300"
          style={{
            left: -688,
            top: 146,
            width: 696,
            height: 696,
            background: GRADIENT_BLUE,
            filter: "blur(200px)",
            opacity: isDark ? 0.3 : 0.1,
          }}
        />
        <div
          className="absolute transition-opacity duration-300"
          style={{
            left: 1270,
            top: 148,
            width: 696,
            height: 696,
            background: GRADIENT_BLUE,
            filter: "blur(200px)",
            opacity: isDark ? 0.3 : 0.1,
          }}
        />

        {/* Cards Container */}
        <div
          className="absolute flex flex-row items-stretch"
          style={{
            left: 34,
            top: 116,
            width: 1216,
            gap: 32,
          }}
        >
          {CARDS.map((card, idx) => (
            <div key={idx} style={{ flex: "1 1 0" }}>
              <ContactCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white }}
    >
      <div
        className="absolute left-0 top-0 w-full h-full opacity-30 transition-opacity duration-300"
        style={{
          background: GRADIENT_BLUE,
          filter: "blur(100px)",
          opacity: isDark ? 0.2 : 0.1
        }}
      />
      <div className="relative z-10 flex flex-col gap-6 px-6 py-16 sm:px-8">
        {CARDS.map((card, idx) => (
          <ContactCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}

function ContactCard({
  title,
  body,
  linkText,
  iconBg,
  iconSrc,
}: {
  title: string;
  body: string;
  linkText: string;
  iconBg: string;
  iconSrc: string;
}) {
  const { isDark } = useThemeTokens();
  
  return (
    <div
      className="flex flex-col items-start border transition-colors duration-300 hover:border-blue-500/50 cursor-pointer"
      style={{
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
        borderRadius: radiuses.card,
        padding: 32,
        gap: 24,
        height: "100%",
      }}
    >
      <div
        className="flex items-center justify-center transition-colors duration-300"
        style={{
          width: 48,
          height: 48,
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : iconBg,
          borderRadius: radiuses.icon,
        }}
      >
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={24}
          height={24}
          className={isDark ? 'brightness-200' : ''}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="m-0 text-black dark:text-white transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "28px",
          }}
        >
          {title}
        </h3>
        <p
          className="m-0 text-black/60 dark:text-white/60 transition-colors duration-300"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
          }}
        >
          {body}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-4">
        <span
          className="text-blue-500 dark:text-blue-400 font-semibold"
          style={{
            fontFamily: typography.fonts.inter,
            fontSize: 16,
            lineHeight: "24px",
          }}
        >
          {linkText}
        </span>
        <Image
          src="/section-2-connect-us/link-arrow.svg"
          alt="Arrow"
          width={16}
          height={16}
          className={isDark ? 'brightness-200' : ''}
        />
      </div>
    </div>
  );
}
