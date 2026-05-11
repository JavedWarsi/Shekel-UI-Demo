"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 769;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BG = "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)";
const CARD_SHADOW = "0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 0px 0px 2px #005AB6";
const BUTTON_SHADOW = "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)";

export default function PricingOptions() {
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
      className="relative hidden w-full overflow-hidden md:block py-16 transition-colors duration-300"
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
        <div className="relative" style={{ width: 1280, height: 769 }}>
          <div
            className="absolute overflow-hidden transition-colors duration-300"
            style={{
              left: 0,
              top: 0,
              width: CANVAS_W,
              height: CANVAS_H,
              backgroundColor: isDark ? '#05070C' : colors.white,
              borderRadius: radiuses.card,
            }}
          >
            {/* Background decoration */}
            <div className="absolute pointer-events-none" style={{ left: -531, top: -188, width: 2400.92, height: 1830 }}>
              <Image src="/section-6-agent-detail/bg-decoration.svg" alt="" fill className={`object-cover ${isDark ? 'opacity-20 brightness-50' : ''}`} unoptimized />
            </div>
            
            <div className="absolute pointer-events-none" style={{ left: -126, top: 638, width: 310, height: 131 }}>
              <div className="absolute w-[310px] h-[131px]" style={{ background: GRADIENT_BG, filter: "blur(203.4px)", opacity: isDark ? 0.3 : 1 }} />
            </div>
            <div className="absolute pointer-events-none" style={{ left: 1081, top: 655, width: 310, height: 131 }}>
              <div className="absolute w-[310px] h-[131px]" style={{ background: GRADIENT_BG, filter: "blur(203.4px)", opacity: isDark ? 0.3 : 1 }} />
            </div>

            {/* Section Header */}
            <div className="absolute flex flex-col items-center" style={{ left: 48, top: 76, width: 1184, height: 52 }}>
              <div className="absolute flex flex-col justify-center text-center" style={{ left: "50%", transform: "translateX(-50%)", top: -8 }}>
                <h2 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 60, lineHeight: "60px", letterSpacing: "-1.5px" }}>
                  Pricing options
                </h2>
              </div>
            </div>

            {/* Pricing Grid */}
            <div className="absolute flex flex-row" style={{ left: 24, top: 212, width: 1232, height: 469 }}>
              
              <PricingCard 
                title="Free" 
                subtitle="Explore the possibilities" 
                price="$0" 
                period="/mo" 
                features={["3 runs per month", "Basic text generation", "1 social platform"]} 
                buttonText="Start Free"
                x={0}
              />

              <PricingCard 
                title="Pay-per-use" 
                subtitle="Flexibility at its best" 
                price="$5" 
                period="/task" 
                features={["All Free features", "Premium visual AI", "Multi-platform scheduling", "API access"]} 
                buttonText="Get Started"
                x={421.33}
                highlighted
              />

              <PricingCard 
                title="Pro" 
                subtitle="Power for professionals" 
                price="$19" 
                period="/mo" 
                features={["Unlimited runs", "Priority processing", "Dedicated support"]} 
                buttonText="Go Pro"
                x={842.67}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, subtitle, price, period, features, buttonText, x, highlighted }: { title: string, subtitle: string, price: string, period: string, features: string[], buttonText: string, x: number, highlighted?: boolean }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="absolute flex flex-col items-start transition-colors duration-300" style={{ left: x, top: 0, width: 389.33, height: highlighted ? 441 : 448, backgroundColor: isDark ? '#0F172A' : colors.white, border: highlighted ? 'none' : '1px solid rgba(255, 255, 255, 0.34)', borderRadius: 24, padding: 32, gap: 24, boxShadow: highlighted ? CARD_SHADOW : 'none' }}>
      {highlighted && (
        <div className="absolute flex flex-col items-center" style={{ left: "50%", transform: "translateX(-50%)", top: -16, padding: "6px 20px", background: GRADIENT_BG, borderRadius: 9999 }}>
          <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "18px", textTransform: "uppercase", color: colors.white }}>Popular</span>
        </div>
      )}

      <div className="flex flex-col items-start w-full" style={{ gap: 8 }}>
        <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px" }}>{title}</span>
        <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px" }}>{subtitle}</span>
      </div>
      
      <div className="relative w-full" style={{ height: 48 }}>
        <div className="absolute flex flex-col justify-center" style={{ left: 0, top: "50%", transform: "translateY(-50%)", height: 48 }}>
          <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px" }}>{price}</span>
        </div>
        <div className="absolute flex flex-col justify-center" style={{ left: price.length > 2 ? 82.22 : 60.61, top: "50%", transform: "translateY(-50%)", height: 16, marginTop: 11 }}>
          <span className="text-black/40 dark:text-white/40 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px" }}>{period}</span>
        </div>
      </div>

      <div className="flex flex-col items-start w-full" style={{ gap: 20, paddingBottom: highlighted ? 0 : 48 }}>
        {features.map((f, i) => (
          <div key={i} className="flex items-center w-full" style={{ gap: 12 }}>
            <div className="relative" style={{ width: 12.23, height: 9.02 }}>
              <Image src={highlighted ? "/section-6-agent-detail/check-icon-blue.svg" : "/section-6-agent-detail/check-icon.svg"} alt="" fill className={`object-contain ${!highlighted && isDark ? 'brightness-200' : ''}`} />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`text-black dark:text-white transition-colors duration-300 ${highlighted ? 'font-semibold' : 'font-normal'}`} style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "21px" }}>{f}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ height: 48, borderRadius: 12, background: highlighted ? GRADIENT_BG : 'transparent', border: highlighted ? 'none' : '1px solid #2864E4', padding: "0 21px", boxShadow: highlighted ? BUTTON_SHADOW : 'none' }}>
        <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", background: highlighted ? 'none' : GRADIENT_BG, WebkitBackgroundClip: highlighted ? 'none' : 'text', WebkitTextFillColor: highlighted ? 'none' : 'transparent', backgroundClip: highlighted ? 'none' : 'text', color: highlighted ? colors.white : 'transparent' }}>
          {buttonText}
        </span>
      </div>
    </div>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white, borderRadius: radiuses.card, marginTop: 32, marginBottom: 32 }}
    >
      <div className="relative flex flex-col gap-12 px-6 py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <Image src="/section-6-agent-detail/bg-decoration.svg" alt="" fill className={`object-cover ${isDark ? 'opacity-20 brightness-50' : 'opacity-50'}`} unoptimized />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="m-0 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: "1.2", letterSpacing: "-1px" }}>
            Pricing options
          </h2>
        </div>

        <div className="relative z-10 flex flex-col gap-8 w-full">
          <MobilePricingCard title="Free" subtitle="Explore the possibilities" price="$0" period="/mo" features={["3 runs per month", "Basic text generation", "1 social platform"]} buttonText="Start Free" />
          <MobilePricingCard title="Pay-per-use" subtitle="Flexibility at its best" price="$5" period="/task" features={["All Free features", "Premium visual AI", "Multi-platform scheduling", "API access"]} buttonText="Get Started" highlighted />
          <MobilePricingCard title="Pro" subtitle="Power for professionals" price="$19" period="/mo" features={["Unlimited runs", "Priority processing", "Dedicated support"]} buttonText="Go Pro" />
        </div>
      </div>
    </section>
  );
}

function MobilePricingCard({ title, subtitle, price, period, features, buttonText, highlighted }: { title: string, subtitle: string, price: string, period: string, features: string[], buttonText: string, highlighted?: boolean }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col items-start w-full relative transition-colors duration-300 bg-white dark:bg-slate-900 border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 gap-6 shadow-sm" style={{ boxShadow: highlighted ? CARD_SHADOW : 'none' }}>
      {highlighted && (
        <div className="absolute flex flex-col items-center" style={{ left: "50%", transform: "translateX(-50%)", top: -16, padding: "6px 20px", background: GRADIENT_BG, borderRadius: 9999 }}>
          <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "18px", textTransform: "uppercase", color: colors.white }}>Popular</span>
        </div>
      )}

      <div className="flex flex-col items-start w-full gap-2">
        <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px" }}>{title}</span>
        <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px" }}>{subtitle}</span>
      </div>
      
      <div className="flex items-baseline w-full h-12 gap-1">
        <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px" }}>{price}</span>
        <span className="text-black/40 dark:text-white/40 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px" }}>{period}</span>
      </div>

      <div className="flex flex-col items-start w-full gap-4 pb-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-center w-full gap-3">
            <Image src={highlighted ? "/section-6-agent-detail/check-icon-blue.svg" : "/section-6-agent-detail/check-icon.svg"} alt="" width={12.23} height={9.02} className={!highlighted && isDark ? 'brightness-200' : ''} />
            <span className={`text-black dark:text-white transition-colors duration-300 ${highlighted ? 'font-semibold' : 'font-normal'}`} style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "21px" }}>{f}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full hover:opacity-90 active:scale-95 transition-all cursor-pointer" style={{ height: 48, borderRadius: 12, background: highlighted ? GRADIENT_BG : 'transparent', border: highlighted ? 'none' : '1px solid #2864E4', padding: "0 21px" }}>
        <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", background: highlighted ? 'none' : GRADIENT_BG, WebkitBackgroundClip: highlighted ? 'none' : 'text', WebkitTextFillColor: highlighted ? 'none' : 'transparent', backgroundClip: highlighted ? 'none' : 'text', color: highlighted ? colors.white : 'transparent' }}>{buttonText}</span>
      </div>
    </div>
  );
}
