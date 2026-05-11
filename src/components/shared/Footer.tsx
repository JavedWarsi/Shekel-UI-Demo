"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { typography } from "@/tokens/design-tokens";

const productLinks = [
  { label: "Explore Agents", href: "/marketplace" },
  { label: "Categories", href: "/category-page" },
  { label: "Agent Details", href: "/agent-detail" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Agents Statistics", href: "/agent-statistics" },
];
const platformLinks = [
  { label: "Create / Publish Agents", href: "/create-ai-agent-page" },
  { label: "Workflow Builder", href: "/workflows" },
  { label: "Developer", href: "/developer-builder" },
  { label: "Documentation", href: "/how-to-build-agents" },
];
const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/connect-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials / Reviews", href: "/testimonials" },
];
const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Brand Assets / Media Kit", href: "/brand-assets" },
  { label: "Privacy Policy", href: "/privacy-and-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-black/5 dark:border-white/10 bg-white dark:bg-black text-[#1a1c1c] dark:text-white transition-all duration-300"
      style={{ fontFamily: typography.fonts.inter }}
    >
      <div className="mx-auto flex w-full flex-col">
        <div className="grid grid-cols-1 gap-12 px-6 py-14 md:px-[84px] lg:grid-cols-3 lg:gap-16 lg:py-[87px] xl:gap-24">
          <div className="flex w-full max-w-[331px] flex-col lg:col-span-1">
            <div className="flex flex-col gap-4">
              <Image 
                src="/shared/footer-brand.svg" 
                alt="Shekel logo" 
                width={127} 
                height={34} 
                className="transition-all duration-300 dark:invert-0 invert" 
              />
              <p className="max-w-[313px] text-[14px] leading-[22.75px] text-[#475569] dark:text-white/70">
                AI-powered marketplace to discover, build, and scale intelligent agents. Built for the Nocturnal
                Architect.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-[14px]">
              <Image 
                src="/shared/footer-social-icons.png" 
                alt="Social icons" 
                width={54} 
                height={20} 
                className="transition-all duration-300 dark:invert-0 invert" 
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-10 lg:col-span-2 xl:gap-x-14">
            <nav className="flex w-full flex-col gap-[14px]">
              <h3
                className="text-[14px] leading-5 font-bold text-[#0b0b0b] dark:text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Product
              </h3>
              {productLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-[14px] leading-5 text-[#475569] dark:text-white/70 transition-colors duration-200 hover:text-black dark:hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav className="flex w-full flex-col gap-[25px]">
              <h3
                className="text-[14px] leading-5 font-bold text-[#0b0b0b] dark:text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Platform
              </h3>
              <div className="flex flex-col gap-[15px]">
                {platformLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="text-[14px] leading-5 text-[#475569] dark:text-white/70 transition-colors duration-200 hover:text-black dark:hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <nav className="flex w-full flex-col items-start gap-[15px]">
              <h3
                className="text-[14px] leading-5 font-bold text-[#0b0b0b] dark:text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Company
              </h3>
              {companyLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-[14px] leading-5 text-[#475569] dark:text-white/70 transition-colors duration-200 hover:text-black dark:hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav className="flex w-full flex-col gap-[15px]">
              <h3
                className="text-[14px] leading-5 font-bold text-[#0b0b0b] dark:text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Resources
              </h3>
              {resourceLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-[14px] leading-5 text-[#475569] dark:text-white/70 transition-colors duration-200 hover:text-black dark:hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex h-auto w-full border-t border-black/5 dark:border-white/10 px-6 py-8 md:h-[82px] md:items-center md:px-[84px] md:py-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.11em] text-[#475569] dark:text-white">
            © 2026 Shekel Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>  );
}
