"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 340;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const LINE_COLOR = "#C1C6D5";

export default function HowItWorks() {
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
      className="relative hidden w-full overflow-hidden dark:bg-slate-900  transition-colors md:block py-16 "
      style={{
        // backgroundColor: isDark ? 'black' : colors.white,
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
        <div className="relative dark:bg-slate-900" style={{ width: 1232, height: 311, top: 14 }}>
          
          <div className="absolute flex flex-col items-center" style={{ left: 0, top: 0, width: 1232, height: 48 }}>
            <h2 className="m-0 text-black dark:text-white transition-colors  text-center" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 48, lineHeight: "48px" }}>
              How It Works
            </h2>
          </div>

          <div className="absolute flex flex-row justify-between items-center" style={{ left: 104, top: 112, width: 1024, height: 199 }}>
            
            {/* Dashed connector line */}
            <div className="absolute" style={{ left: 256, top: 40, width: 512, height: 1, borderTop: `1px dashed ${isDark ? '#334155' : LINE_COLOR}` }} />

            {/* Step 1 */}
            <StepItem icon="/section-7-agent-detail/icon-input.svg" title="Input" body="Provide your brand goals and niche\nthrough text or files." />

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10" style={{ gap: 16, width: 260 }}>
              <div className="relative flex justify-center items-center" style={{ width: 136, height: 144, marginTop: -8, marginBottom: -40 }}>
                <Image src="/section-7-agent-detail/icon-ai.svg" alt="AI Processing" fill className="object-contain" />
              </div>
              <div className="flex flex-col items-center" style={{ gap: 16 }}>
                <h3 className="m-0 text-black dark:text-white transition-colors  text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 24, lineHeight: "27px" }}>AI Processing</h3>
                <p className="m-0 text-[#727785] dark:text-gray-400 transition-colors  text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px" }}>
                  SocialCraft analyzes trends and builds<br/>your campaign strategy.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <StepItem icon="/section-7-agent-detail/icon-output.svg" title="Generated Output" body="Receive ready-to-post content across\nall chosen channels." />

          </div>

        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, title, body }: { icon: string, title: string, body: string }) {
  return (
    <div className="flex flex-col items-center relative z-10" style={{ gap: 16, width: 260 }}>
      <Image src={icon} alt={title} width={80} height={80} className="rounded-full" />
      <div className="flex flex-col items-center" style={{ gap: 16 }}>
        <h3 className="m-0 text-black dark:text-white transition-colors  text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 24, lineHeight: "27px" }}>{title}</h3>
        <p className="m-0 text-[#727785] dark:text-gray-400 transition-colors  text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px" }}>
          {body.split('\\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br/>}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden transition-colors "
      style={{ backgroundColor: isDark ? 'black' : colors.white }}
    >
      <div className="relative flex flex-col gap-12 px-6 py-16">
        
        <h2 className="m-0 text-black dark:text-white transition-colors  text-center" style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: 1.2 }}>
          How It Works
        </h2>

        <div className="flex flex-col items-center relative gap-12">
          
          {/* Vertical dashed line for mobile */}
          <div className="absolute top-10 bottom-10" style={{ width: 1, borderLeft: `1px dashed ${isDark ? '#334155' : LINE_COLOR}`, left: "50%", transform: "translateX(-50%)", zIndex: 0 }} />

          {/* Step 1 */}
          <MobileStepItem icon="/section-7-agent-detail/icon-input.svg" title="Input" body="Provide your brand goals and niche through text or files." />

          {/* Step 2 */}
          <div className="flex flex-col items-center relative z-10 transition-colors " style={{ gap: 12, backgroundColor: isDark ? 'black' : colors.white, padding: "8px 0" }}>
            <div className="relative flex justify-center items-center" style={{ width: 102, height: 108, marginTop: -6, marginBottom: -30 }}>
              <Image src="/section-7-agent-detail/icon-ai.svg" alt="AI Processing" fill className="object-contain" />
            </div>
            <h3 className="m-0 text-black dark:text-white transition-colors  text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px" }}>AI Processing</h3>
            <p className="m-0 text-[#727785] dark:text-gray-400 transition-colors  text-center max-w-[280px]" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px" }}>
              SocialCraft analyzes trends and builds your campaign strategy.
            </p>
          </div>

          {/* Step 3 */}
          <MobileStepItem icon="/section-7-agent-detail/icon-output.svg" title="Generated Output" body="Receive ready-to-post content across all chosen channels." />

        </div>

      </div>
    </section>
  );
}

function MobileStepItem({ icon, title, body }: { icon: string, title: string, body: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col items-center relative z-10 transition-colors " style={{ gap: 12, backgroundColor: isDark ? 'black' : colors.white, padding: "8px 0" }}>
      <Image src={icon} alt={title} width={64} height={64} className="rounded-full" />
      <h3 className="m-0 text-black dark:text-white transition-colors  text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px" }}>{title}</h3>
      <p className="m-0 text-[#727785] dark:text-gray-400 transition-colors  text-center max-w-[280px]" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px" }}>
        {body}
      </p>
    </div>
  );
}
