"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";

type TrustCard = {
  title: string;
  body: string;
  icon: string;
};

const CARDS: TrustCard[] = [
  {
    title: "Verified Agents",
    body: "Every agent undergoes\nrigorous security and\nquality audit",
    icon: "/section-9-marketplace/icon-verified-agents.svg",
  },
  {
    title: "Community Ratings",
    body: "Transparent reviews and\nhistorical performance\ndata",
    icon: "/section-9-marketplace/icon-community-ratings.svg",
  },
  {
    title: "Secure Infrastructure",
    body: "Enterprise-grade data\nencryption and privacy\ncontrols",
    icon: "/section-9-marketplace/icon-secure-infra.svg",
  },
  {
    title: "Scalable Platform",
    body: "Execute thousands of\ntasks simultaneously with\nlow latency",
    icon: "/section-9-marketplace/icon-scalable-platform.svg",
  },
];

export default function TrustReliability() {
  return (
    <>
      <TrustDesktop />
      <TrustMobile />
    </>
  );
}

function TrustDesktop() {
  
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block transition-colors duration-300"
      style={{
        background: "var(--bg-trust-gradient)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-8" style={{ paddingTop: 122, paddingBottom: 118 }}>
        <header style={{ marginBottom: 86 }}>
          <h2
            className="m-0 text-center text-[#191C1E] dark:text-white transition-colors duration-300"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "48px",
              letterSpacing: "-0.025em",
            }}
          >
            Built for{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reliability
            </span>{" "}
            and{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              trust
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-4 gap-0">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-xl px-8 py-8 opacity-100 transition-all duration-200 ease-out hover:opacity-80 hover:bg-white/5"
              style={{ borderRadius: radiuses.inputIcon }}
            >
              <div className="mb-8">
                <Image src={card.icon} alt="" width={50} height={56} className="dark:brightness-200" unoptimized />
              </div>
              <h3
                className="m-0 pb-3 text-[#191C1E] dark:text-white transition-colors duration-300"
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  letterSpacing: "-0.025em",
                }}
              >
                {card.title}
              </h3>
              <p
                className="m-0 whitespace-pre-line text-[#414753] dark:text-gray-400 transition-colors duration-300"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                }}
              >
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section className="block bg-[#F7F9FC] dark:bg-[#05070C] px-6 py-16 md:hidden transition-colors duration-300">
      <h2 className="m-0 text-center text-[34px] font-medium leading-tight text-[#191C1E] dark:text-white transition-colors duration-300">
        Built for reliability and trust
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6">
        {CARDS.map((card) => (
          <article key={`m-${card.title}`} className="rounded-xl bg-white dark:bg-slate-900 p-6 transition-colors duration-300 shadow-sm dark:shadow-none">
            <Image src={card.icon} alt="" width={42} height={42} className={isDark ? "brightness-200" : ""} unoptimized />
            <h3 className="m-0 pt-4 text-xl font-bold text-[#191C1E] dark:text-white transition-colors duration-300">{card.title}</h3>
            <p className="m-0 whitespace-pre-line pt-2 text-base leading-6 text-[#414753] dark:text-gray-400 transition-colors duration-300">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
