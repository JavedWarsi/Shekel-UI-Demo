"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 181;

const LABEL_COLOR = "#727785";

export default function UserReviews() {
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
          transform: `scale(calc(100cqw / ${CANVAS_W}px))`,
          transformOrigin: "top left",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative flex items-center" style={{ width: 1232, height: 181, top: 0, gap: 80 }}>
          
          {/* Rating Column */}
          <div className="flex flex-col items-center flex-shrink-0 relative" style={{ width: 186.06, gap: 13 }}>
            <div className="flex flex-col items-center w-full relative">
              <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 96, lineHeight: "96px", textAlign: "center" }}>
                4.8
              </span>
            </div>
            <div className="flex items-center justify-center relative" style={{ width: 232.58, height: 23.75 }}>
              <div style={{ transform: "scale(1.25)", flex: "none" }}>
                <div className="flex items-start justify-center relative" style={{ width: 186.06 }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                      <Image src="/section-7-agent-detail/star-full.svg" alt="" fill className="object-contain" />
                    </div>
                  ))}
                  <div className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                    <Image src="/section-7-agent-detail/star-half.svg" alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full relative">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", textAlign: "center", letterSpacing: "0.7px", textTransform: "uppercase", color: LABEL_COLOR }}>
                Based on 1.2k reviews
              </span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="flex-1 grid grid-cols-2 relative" style={{ gap: 40, height: 181 }}>
            <ReviewCard 
              text={`"SocialCraft completely changed how I manage my\nagency. It does 80% of the heavy lifting for my\nsocial team."`}
              author="— Sarah J., Founder"
            />
            <ReviewCard 
              text={`"The tone optimization is scary good. I've tried other\ntools, but this actually sounds like me."`}
              author="— Marcus Chen, Content Creator"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function ReviewCard({ text, author }: { text: string, author: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col items-start relative self-start transition-colors duration-300 bg-white dark:bg-slate-900 border border-transparent dark:border-white/5" style={{ borderRadius: 16, padding: 32, gap: 24, boxShadow: isDark ? "none" : "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
      <div className="absolute" style={{ left: -4, top: -8, width: 34, height: 24 }}>
        <Image src="/section-7-agent-detail/quote-icon.svg" alt="" fill className={`object-contain ${isDark ? 'brightness-200' : ''}`} />
      </div>
      <div className="flex flex-col relative w-full" style={{ width: 386.08, height: 72 }}>
        <p className="m-0 text-[#414753] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontStyle: "italic", fontSize: 16, lineHeight: "24px" }}>
          {text.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br/>}</span>
          ))}
        </p>
      </div>
      <div className="flex flex-col items-start w-full relative">
        <span className="text-[#414753] dark:text-gray-300 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px" }}>
          {author}
        </span>
      </div>
    </div>
  );
}

function SectionMobile() {
  const { isDark } = useThemeTokens();
  
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden py-16 px-6 transition-colors duration-300"
      style={{ backgroundColor: isDark ? 'black' : colors.white }}
    >
      <div className="flex flex-col items-center gap-12 w-full">
        
        {/* Rating Column Mobile */}
        <div className="flex flex-col items-center relative w-full" style={{ gap: 13 }}>
          <div className="flex flex-col items-center w-full relative">
            <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 64, lineHeight: "64px", textAlign: "center" }}>
              4.8
            </span>
          </div>
          <div className="flex items-center justify-center relative" style={{ width: 232.58, height: 23.75 }}>
            <div style={{ transform: "scale(1.25)", flex: "none" }}>
              <div className="flex items-start justify-center relative" style={{ width: 186.06 }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                    <Image src="/section-7-agent-detail/star-full.svg" alt="" fill className="object-contain" />
                  </div>
                ))}
                <div className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                  <Image src="/section-7-agent-detail/star-half.svg" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full relative">
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "18px", textAlign: "center", letterSpacing: "0.7px", textTransform: "uppercase", color: LABEL_COLOR }}>
              Based on 1.2k reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid Mobile */}
        <div className="flex flex-col relative w-full" style={{ gap: 24 }}>
          <MobileReviewCard 
            text={`"SocialCraft completely changed how I manage my agency. It does 80% of the heavy lifting for my social team."`}
            author="— Sarah J., Founder"
          />
          <MobileReviewCard 
            text={`"The tone optimization is scary good. I've tried other tools, but this actually sounds like me."`}
            author="— Marcus Chen, Content Creator"
          />
        </div>

      </div>
    </section>
  );
}

function MobileReviewCard({ text, author }: { text: string, author: string }) {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="flex flex-col items-start relative w-full transition-colors duration-300 bg-white dark:bg-slate-900 border border-[rgba(255,255,255,0.1)] rounded-3xl p-6 gap-4 shadow-sm" style={{ boxShadow: isDark ? "none" : "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
      <div className="absolute" style={{ left: -4, top: -8, width: 34, height: 24 }}>
        <Image src="/section-7-agent-detail/quote-icon.svg" alt="" fill className={`object-contain ${isDark ? 'brightness-200' : ''}`} />
      </div>
      <div className="flex flex-col relative w-full mt-2">
        <p className="m-0 text-[#414753] dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontStyle: "italic", fontSize: 15, lineHeight: "24px" }}>
          {text}
        </p>
      </div>
      <div className="flex flex-col items-start w-full relative">
        <span className="text-[#414753] dark:text-gray-300 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px" }}>
          {author}
        </span>
      </div>
    </div>
  );
}
