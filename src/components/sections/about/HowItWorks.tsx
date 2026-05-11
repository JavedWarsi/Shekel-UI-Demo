"use client";

import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const STEPS = [
  { icon: "/section-6-about/step-icon-1.svg", title: "01. Discover", body: "Browse the marketplace to find high-performance agents for your specific industry." },
  { icon: "/section-6-about/step-icon-2.svg", title: "02. Connect", body: "Drag agents into the workflow canvas and define the logical dependencies between them." },
  { icon: "/section-6-about/step-icon-3.svg", title: "03. Execute", body: "Deploy your workflow as an API or a scheduled job. Scale effortlessly as needed." },
];

export default function HowItWorks() {
  const { isDark } = useThemeTokens();
  
  return (
    <section className="bg-[#F2F4F780] dark:bg-white/5 px-6 py-20 md:px-16 transition-colors duration-300">
      <div className="mx-auto max-w-[1216px]">
        <h2 className="text-center text-[#0B0B0B] dark:text-white" style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 36, lineHeight: "40px" }}>
          Simple, structured workflow
        </h2>
        <p className="mt-6 text-center text-[rgba(25,28,30,0.6)] dark:text-gray-400" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18, lineHeight: "28px" }}>
          Build and run workflows in three clear steps.
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.title} className="px-4 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border bg-white dark:bg-slate-800 shadow-xl transition-colors" style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(193,198,213,0.1)", borderRadius: radiuses.pill }}>
                <Image src={step.icon} alt="" width={24} height={24} className={isDark ? "brightness-200" : ""} />
              </div>
              <h3 className="text-[#191C1E] dark:text-white" style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 36, lineHeight: "32px" }}>{step.title}</h3>
              <p className="mt-4 text-[rgba(25,28,30,0.6)] dark:text-gray-400" style={{ marginBottom: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
