"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 800;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

export default function ContactFormAndSupport() {
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
        <div
          className="absolute flex flex-row items-stretch"
          style={{
            left: 32,
            top: 80,
            width: 1216,
            height: 640,
            gap: 64,
          }}
        >
          {/* Left Form */}
          <div
            className="flex flex-col border transition-colors duration-300"
            style={{
              width: 682.66,
              height: "100%",
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : colors.white,
              borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : "rgba(193, 198, 213, 0.15)",
              borderRadius: radiuses.cardLg,
              padding: 48,
              gap: 32,
              boxShadow: isDark ? 'none' : '0 4px 20px rgba(0,0,0,0.02)'
            }}
          >
            <h2
              className="m-0 text-black dark:text-white transition-colors duration-300"
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 30,
                lineHeight: "36px",
              }}
            >
              Send a Message
            </h2>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-6">
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-[#414753] dark:text-white/60 font-semibold" style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "20px" }}>Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-none outline-none ring-0 transition-colors duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                      borderRadius: radiuses.inputIcon,
                      padding: "16px",
                      fontFamily: typography.fonts.inter,
                      fontSize: 16,
                      color: isDark ? 'white' : '#191C1E',
                    }}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-[#414753] dark:text-white/60 font-semibold" style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "20px" }}>Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-none outline-none ring-0 transition-colors duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                      borderRadius: radiuses.inputIcon,
                      padding: "16px",
                      fontFamily: typography.fonts.inter,
                      fontSize: 16,
                      color: isDark ? 'white' : '#191C1E',
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#414753] dark:text-white/60 font-semibold" style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "20px" }}>Subject</label>
                <select
                  className="w-full border-none outline-none ring-0 appearance-none transition-colors duration-300"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                    borderRadius: radiuses.inputIcon,
                    padding: "16px",
                    fontFamily: typography.fonts.inter,
                    fontSize: 16,
                    color: isDark ? 'white' : '#191C1E',
                    backgroundImage: 'url("/section-3-connect-us/chevron.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#414753] dark:text-white/60 font-semibold" style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "20px" }}>Message</label>
                <textarea
                  placeholder="How can we help you?"
                  className="w-full border-none outline-none ring-0 resize-none transition-colors duration-300"
                  style={{
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                    borderRadius: radiuses.inputIcon,
                    padding: "16px",
                    height: 120,
                    fontFamily: typography.fonts.inter,
                    fontSize: 16,
                    color: isDark ? 'white' : '#191C1E',
                  }}
                />
              </div>

              <button
                className="w-full border-none cursor-pointer transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: BUTTON_GRADIENT,
                  borderRadius: radiuses.inputIcon,
                  padding: "16px",
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 16,
                  color: colors.white,
                  marginTop: 8,
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Support Info */}
          <div
            className="flex flex-col"
            style={{
              width: 469.33,
              gap: 48,
              paddingTop: 16,
            }}
          >
            <div className="flex flex-col gap-8">
              <h3
                className="m-0 text-black dark:text-white transition-colors duration-300"
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "32px",
                }}
              >
                Service Excellence
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ width: 48, height: 48, backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : "#ECEEF1", borderRadius: radiuses.icon }}
                  >
                    <Image src="/section-3-connect-us/icon-response.svg" alt="Response" width={24} height={24} className={isDark ? 'brightness-200' : ''} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 18, lineHeight: "28px" }}>Response time</span>
                    <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>We usually reply within 24 hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ width: 48, height: 48, backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : "#ECEEF1", borderRadius: radiuses.icon }}
                  >
                    <Image src="/section-3-connect-us/icon-clock.svg" alt="Availability" width={24} height={24} className={isDark ? 'brightness-200' : ''} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black dark:text-white transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 18, lineHeight: "28px" }}>Availability</span>
                    <span className="text-black/60 dark:text-white/60 transition-colors duration-300" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px" }}>Mon-Fri: 9am - 6pm EST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span
                className="text-black/40 dark:text-white/40 font-bold tracking-widest text-[14px] uppercase"
                style={{ fontFamily: typography.fonts.jakarta, lineHeight: "20px" }}
              >
                CONNECT WITH US
              </span>
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="hover:opacity-80 transition-opacity cursor-pointer">
                    <Image src={`/section-3-connect-us/social-${i}.svg`} alt="Social" width={24} height={24} className={isDark ? 'brightness-200' : ''} />
                  </div>
                ))}
              </div>
            </div>

            <Link href="/faq" className="no-underline mt-auto">
              <div
                className="flex items-center justify-between transition-all hover:opacity-90"
                style={{
                  backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : "rgba(22, 114, 223, 0.1)",
                  borderLeft: `4px solid #2864E4`,
                  borderRadius: "0 8px 8px 0",
                  padding: "24px 32px",
                }}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-blue-500 dark:text-blue-400 font-bold" style={{ fontFamily: typography.fonts.inter, fontSize: 16, lineHeight: "24px" }}>Looking for quick answers?</span>
                  <span className="text-black/60 dark:text-white/60" style={{ fontFamily: typography.fonts.inter, fontSize: 14, lineHeight: "20px" }}>Browse Faq</span>
                </div>
                <Image src="/section-3-connect-us/arrow-right.svg" alt="Arrow" width={24} height={24} className="brightness-110" />
              </div>
            </Link>
          </div>
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
      <div className="flex flex-col gap-12 px-6 py-16 sm:px-8">
        
        {/* Form */}
        <div
          className="flex flex-col border transition-colors duration-300"
          style={{
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : colors.white,
            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : "rgba(193, 198, 213, 0.15)",
            borderRadius: radiuses.cardLg,
            padding: 24,
            gap: 24,
            boxShadow: isDark ? 'none' : '0 4px 20px rgba(0,0,0,0.02)'
          }}
        >
          <h2 className="m-0 text-black dark:text-white font-bold text-2xl" style={{ fontFamily: typography.fonts.jakarta }}>Send a Message</h2>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[#414753] dark:text-white/60 font-semibold text-sm">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border-none outline-none ring-0 p-4 transition-colors"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                  borderRadius: radiuses.inputIcon,
                  color: isDark ? 'white' : '#191C1E',
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#414753] dark:text-white/60 font-semibold text-sm">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border-none outline-none ring-0 p-4 transition-colors"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                  borderRadius: radiuses.inputIcon,
                  color: isDark ? 'white' : '#191C1E',
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#414753] dark:text-white/60 font-semibold text-sm">Subject</label>
              <select
                className="w-full border-none outline-none ring-0 appearance-none p-4 transition-colors"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                  borderRadius: radiuses.inputIcon,
                  color: isDark ? 'white' : '#191C1E',
                  backgroundImage: 'url("/section-3-connect-us/chevron.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#414753] dark:text-white/60 font-semibold text-sm">Message</label>
              <textarea
                placeholder="How can we help you?"
                className="w-full border-none outline-none ring-0 resize-none p-4 transition-colors h-24"
                style={{
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : "#F2F4F7",
                  borderRadius: radiuses.inputIcon,
                  color: isDark ? 'white' : '#191C1E',
                }}
              />
            </div>

            <button
              className="w-full border-none p-4 font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: BUTTON_GRADIENT,
                borderRadius: radiuses.inputIcon,
                fontFamily: typography.fonts.jakarta,
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="m-0 text-black dark:text-white font-bold text-xl" style={{ fontFamily: typography.fonts.jakarta }}>Service Excellence</h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center shrink-0 w-12 h-12 transition-colors" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : "#ECEEF1", borderRadius: radiuses.icon }}>
                  <Image src="/section-3-connect-us/icon-response.svg" alt="Response" width={24} height={24} className={isDark ? 'brightness-200' : ''} />
                </div>
                <div className="flex flex-col">
                  <span className="text-black dark:text-white font-bold text-lg">Response time</span>
                  <span className="text-black/60 dark:text-white/60 text-sm">We usually reply within 24 hours.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center shrink-0 w-12 h-12 transition-colors" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : "#ECEEF1", borderRadius: radiuses.icon }}>
                  <Image src="/section-3-connect-us/icon-clock.svg" alt="Availability" width={24} height={24} className={isDark ? 'brightness-200' : ''} />
                </div>
                <div className="flex flex-col">
                  <span className="text-black dark:text-white font-bold text-lg">Availability</span>
                  <span className="text-black/60 dark:text-white/60 text-sm">Mon-Fri: 9am - 6pm EST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-black/40 dark:text-white/40 font-bold tracking-widest text-xs uppercase">CONNECT WITH US</span>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <Image key={i} src={`/section-3-connect-us/social-${i}.svg`} alt="Social" width={24} height={24} className={isDark ? 'brightness-200' : ''} />
              ))}
            </div>
          </div>

          <Link href="/faq" className="no-underline">
            <div className="flex items-center justify-between p-6 transition-all" style={{ backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : "rgba(22, 114, 223, 0.1)", borderLeft: `4px solid #2864E4`, borderRadius: "0 8px 8px 0" }}>
              <div className="flex flex-col">
                <span className="text-blue-500 dark:text-blue-400 font-bold text-base">Looking for quick answers?</span>
                <span className="text-black/60 dark:text-white/60 text-sm">Browse Faq</span>
              </div>
              <Image src="/section-3-connect-us/arrow-right.svg" alt="Arrow" width={24} height={24} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}