"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";

type Feature = {
  title: string;
  body: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Simple Integration",
    body: "Connect your LLM logic via API in minutes with our lightweight TypeScript SDK.",
    icon: "/section-8-marketplace/feature-1-icon.svg",
  },
  {
    title: "Automated Billing",
    body: "We handle payments, usage tracking, and global payouts so you can focus on building.",
    icon: "/section-8-marketplace/feature-2-icon.svg",
  },
  {
    title: "Built-in Analytics",
    body: "Monitor performance, usage, and earnings in real time with our developer console.",
    icon: "/section-8-marketplace/feature-3-icon.svg",
  },
];

export default function DeveloperHub() {
  return (
    <>
      <DeveloperHubDesktop />
      <DeveloperHubMobile />
    </>
  );
}

function DeveloperHubDesktop() {
  const { isDark } = useThemeTokens();
  
  return (
    <section className="relative mt-10 hidden w-full overflow-hidden bg-[#F7F9FC] dark:bg-transparent md:block transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1280px] px-8 py-10">
        <div className="grid grid-cols-[minmax(360px,476px)_minmax(460px,692px)] items-start justify-between gap-8 xl:gap-16">
          <div
            className="relative mt-24 w-full rounded-[32px] border bg-white dark:bg-slate-900 p-8 transition-colors duration-300"
            style={{
              borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.5)",
              boxShadow: isDark ? "none" : "0px 20px 50px 0px rgba(0,0,0,0.05)",
            }}
          >
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
              <Image src="/section-8-marketplace/dashboard-grid.svg" alt="" fill className={isDark ? "invert" : ""} unoptimized />
            </div>
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="m-0 text-sm font-medium leading-5 text-[#414753] dark:text-gray-400 transition-colors duration-300">Total Earnings</p>
                  <p className="m-0 text-[36px] font-black leading-10 tracking-[-0.025em] text-[#191C1E] dark:text-white transition-colors duration-300">$3,450.00</p>
                </div>
                <span className="rounded-full bg-[#B7EAFF] dark:bg-blue-500/20 px-3 py-1 text-xs font-bold text-[#005C72] dark:text-blue-400 transition-colors duration-300">PRO PLAN</span>
              </div>

              <div className="relative mt-8 h-40">
                <Image src="/section-8-marketplace/line-chart.svg" alt="" fill className={isDark ? "brightness-150" : ""} unoptimized />
              </div>

              <div className="mt-8">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-[#414753] dark:text-gray-500 transition-colors duration-300">Recent Activity</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Activity text="Agent 'SocialCraft' run" time="2m ago" color="#22C55E" />
                  <Activity text="Payout processed" time="1h ago" color="#3B82F6" />
                  <Activity text="Agent 'DevHelper' update" time="4h ago" color="#22C55E" />
                </div>
              </div>

              <div className="mt-6">
                <Image src="/section-8-marketplace/quota-bar.svg" alt="" width={412} height={8} className={isDark ? "opacity-30" : ""} unoptimized />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#414753] dark:text-gray-500 transition-colors duration-300">API QUOTA</span>
                  <span className="text-[10px] font-semibold" style={{ background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    72% USED
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-5">
            <h2
              className="m-0 whitespace-pre-line text-[#191C1E] dark:text-white transition-colors duration-300"
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 800,
                fontSize: 60,
                lineHeight: "72px",
              }}
            >
              Build and monetize{"\n"}
              <span
                style={{
                  background: BLUE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI agents
              </span>
            </h2>
            <p
              className="m-0 pt-7 text-[#414753] dark:text-gray-400 transition-colors duration-300"
              style={{
                maxWidth: 576,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "32.5px",
              }}
            >
              Create, publish, and scale your AI agents on Shekel using our
              powerful SDK. Everything you need to turn logic into revenue.
            </p>

            <div className="mt-8 flex items-center gap-5 bg-[#F2F4F7] dark:bg-white/5 p-6 transition-colors duration-300" style={{ borderRadius: radiuses.pill }}>
              <div className="relative h-[52px] w-[52px]">
                <Image
                  src="/section-8-marketplace/earn-overlay.svg"
                  alt=""
                  fill
                  className="object-contain"
                  style={{ transform: "scale(1.22)" }}
                  unoptimized
                />
              </div>
              <div>
                <p className="m-0 text-[18px] font-bold leading-7 text-[#191C1E] dark:text-white transition-colors duration-300">
                  Earn from every agent run
                </p>
                <p className="m-0 text-base font-medium leading-6" style={{ background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Top creators earn $2k+/month
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 rounded-xl bg-[#E6E8EB] dark:bg-white/10 transition-colors duration-300">
                    <Image src={f.icon} alt="" fill className={isDark ? "brightness-200" : ""} unoptimized />
                  </div>
                  <div>
                    <h3 className="m-0 text-[18px] font-bold leading-7 text-[#191C1E] dark:text-white transition-colors duration-300">{f.title}</h3>
                    <p className="m-0 pt-1 text-base leading-6 text-[#414753] dark:text-gray-400 transition-colors duration-300">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-10 h-[56px] min-w-[190px] border-0 px-8 py-0 hover:opacity-90 active:scale-95 transition-all"
              style={{ background: BLUE_GRADIENT, borderRadius: radiuses.cardSm }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#F7F9FC",
                }}
              >
                Start Building &gt;
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Activity({ text, time, color }: { text: string; time: string; color: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#F2F4F7] dark:bg-white/5 px-3 py-3 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-sm font-medium text-[#191C1E] dark:text-white transition-colors duration-300">{text}</span>
      </div>
      <span className="text-xs text-[#414753] dark:text-gray-500 transition-colors duration-300">{time}</span>
    </div>
  );
}

function DeveloperHubMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section className="mt-8 block bg-[#F7F9FC] dark:bg-transparent px-6 py-16 md:hidden transition-colors duration-300">
      <h2 className="m-0 text-[40px] font-extrabold leading-[1.05] text-[#191C1E] dark:text-white transition-colors duration-300">
        Build and monetize{" "}
        <span style={{ background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          AI agents
        </span>
      </h2>
      <p className="m-0 pt-4 text-base leading-7 text-[#414753] dark:text-gray-400 transition-colors duration-300">
        Create, publish, and scale your AI agents on Shekel using our powerful SDK.
      </p>
    </section>
  );
}
