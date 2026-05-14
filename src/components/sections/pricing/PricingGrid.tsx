"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

const BLUE_GRADIENT = `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`;

const PLANS = [
  {
    title: "Starter",
    description: "Ideal for individuals testing the waters.",
    price: "$0",
    period: "/forever",
    features: [
      "5 Free agent runs / mo",
      "Access to basic marketplace",
      "Community support"
    ],
    buttonText: "Start Free",
    highlighted: false,
  },
  {
    title: "Pay-as-you-go",
    description: "For power users who need high flexibility.",
    price: "$2 - $10",
    period: "/task",
    features: [
      "Unlimited marketplace access",
      "Priority queue processing",
      "Pay only for what you run",
      "API webhooks enabled"
    ],
    buttonText: "Run Agent",
    highlighted: true,
    popular: true,
  },
  {
    title: "Pro",
    description: "Complete solution for growing teams.",
    price: "$19",
    period: "/month",
    features: [
      "50 AI credits included",
      "Team collaboration tools",
      "Custom agent training",
      "Dedicated support agent"
    ],
    buttonText: "Go Pro",
    highlighted: false,
  }
];

export default function PricingGrid() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan) => (
          <div
            key={plan.title}
            className={`relative flex flex-col p-8 md:p-10 rounded-[32px] transition-all duration-500 bg-white dark:bg-zinc-900 border-2 ${
              plan.highlighted 
                ? "border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10" 
                : "border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
                <div className="absolute top-6 right-[-32px] rotate-45 bg-blue-600 text-white text-[10px] font-bold py-1 px-12 tracking-widest uppercase">
                  POPULAR
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 mb-8">
              <h3 className={`text-2xl font-bold ${plan.highlighted ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"}`}>
                {plan.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {plan.description}
              </p>
            </div>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                {plan.price}
              </span>
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                {plan.period}
              </span>
            </div>

            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 shrink-0 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Image src="/section-2-pricing/check-icon.svg" alt="" width={10} height={10} className="brightness-0 saturate-100 invert-[32%] sepia-[95%] saturate-[1900%] hue-rotate-[213deg] brightness-[95%] contrast-[94%]" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-[0.98] ${
                plan.highlighted 
                  ? "text-white shadow-lg shadow-blue-500/25" 
                  : "bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
              }`}
              style={plan.highlighted ? { background: BLUE_GRADIENT } : {}}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}