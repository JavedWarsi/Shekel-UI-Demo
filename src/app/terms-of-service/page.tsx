"use client";

import Image from "next/image";
import Link from "next/link";
import { typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import {
  TrendingUp,
  ChartNoAxesColumn,
  Gavel,
  Terminal,
  ArrowUp,
  Star,
  XCircle
} from "lucide-react";

import TermsIntro from "@/components/sections/terms/TermsIntro";

const TRENDING_AGENTS = [
  {
    name: "MARKETMUSE",
    description: "Generates SEO strategy in seconds. AI-driven marketing and SEO optimization.",
    runs: "1.2K RUNS",
    price: "FREE / $5 TASK",
    rating: "4.9",
    Icon: TrendingUp
  },
  {
    name: "GRAPHQ",
    description: "Data visualization specialist for complex analytical frameworks.",
    runs: "850 RUNS",
    price: "$5/MONTH",
    rating: "4.2",
    Icon: (props: any) => <Image src="/graphq.svg" alt="GraphQ" width={props.size || 24} height={props.size || 24} className="object-contain" />
  },
  {
    name: "LEGALEAGLE",
    description: "Automated contract reviewer focusing on compliance risk.",
    runs: "920 RUNS",
    price: "ENTERPRISE PRO",
    rating: "4.9",
    Icon: (props: any) => <Image src="/ham.svg" alt="ham" width={props.size || 24} height={props.size || 24} className="object-contain" />
  
  },
  {
    name: "SWIFTCODE",
    description: "Legacy code modernization through neural refactoring.",
    runs: "780 RUNS",
    price: "FREE",
    rating: "4.3",
    Icon: (props: any) => <Image src="/terminal.svg" alt="terminal" width={props.size || 24} height={props.size || 24} className="object-contain" />
  }
];

export default function TermsOfServicePage() {
  const { isDark } = useThemeTokens();
  
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <main className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* --- LEFT: Main Content --- */}
        <div className="flex-1 max-w-[1200px] border-2 border-[#D4D4D4] dark:border-white/5 bg-white dark:bg-[#0F172A] p-4 md:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.015)] dark:shadow-none transition-colors duration-300 rounded-[24px]">
          <header className="mb-16">
            <h1
              className="text-[40px] md:text-[56px] font-medium text-black dark:text-white tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Terms & Conditions
            </h1>
            <p className="text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle mb-8 max-w-[600px]" style={{ fontFamily: "Inter" }}>
              Please read these terms carefully before using Shekel. This agreement outlines the rules and regulations for the use of our AI platform.
            </p>

            <div className="mb-3">
              <span className="inline-block px-4 py-1.5 bg-[#111827] text-[#96B3FF] text-[11px] font-light uppercase tracking-[0.15em] rounded-full">
                POLICY VERSION 2.4
              </span>
            </div>
            <p className="text-[13px] text-[#6B7280] font-light" style={{ fontFamily: typography.fonts.inter }}>
              Last updated: June 2024
            </p>
          </header>

          <hr className="border-[#F3F4F6] dark:border-white/10 mb-16" />

          <div className="space-y-16">
            {/* Section 1 */}
            <TermsIntro />

            {/* Section 2 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                2. Use of the Platform
              </h2>
              <div className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>
                <p>
                  You may use Shekel only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the platform does not violate any local, state, or international laws.
                </p>
                <p>
                  Access to certain features may require a valid subscription or API key. You agree not to circumvent any technical limitations or security measures implemented within the platform architecture.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                3. Accounts
              </h2>
              <div className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>
                <p>
                  When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>
                <p>
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                </p>
                <p>
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                4. AI Agents & Workflows
              </h2>
              <div className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>
                <p>
                  Shekel allows you to use and build customized autonomous AI agents. You are in
                  command of the agents, and you remain responsible for those agents' behavior, outputs,
                  and results.
                </p>
                <p>
                  Manage your own risk and use caution when creating agents.
                </p>
                <p>
                  We do not guarantee the specific outcomes of AI-generated actions. Users are
                  encouraged to implement human-in-the-loop verification for high-stake
                  financial or legal tasks handled by Shekel agents.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                5. Restrictions
              </h2>
              <ul className="space-y-6 mt-6 list-none p-0">
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF8E8E] flex items-center justify-center mt-1.5 shrink-0">
                    <div className="w-2.5 h-0.5 bg-[#FF8E8E] rounded-full"></div>
                  </div>
                  <span className="text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>Reverse engineering or attempting to extract the source code of the underlying functionality.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF8E8E] flex items-center justify-center mt-1.5 shrink-0">
                    <div className="w-2.5 h-0.5 bg-[#FF8E8E] rounded-full"></div>
                  </div>
                  <span className="text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>Using the service to generate malicious code, spam, or deceptive content.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF8E8E] flex items-center justify-center mt-1.5 shrink-0">
                    <div className="w-2.5 h-0.5 bg-[#FF8E8E] rounded-full"></div>
                  </div>
                  <span className="text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>Automated scraping of the platform interface without explicit prior permission.</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                6. Intellectual Property
              </h2>
              <div className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Shekel AI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Shekel AI.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                7. Limitation of Liability
              </h2>
              <div className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>
                <p>
                  In no event shall Shekel AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                8. Changes to Terms
              </h2>
              <div className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#2864E4] to-[#ECF2FF]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                9. Contact
              </h2>
              <div className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: "Inter" }}>
                <p>
                  If you have any questions about these Terms, please contact us at support@shekel.ai or through our support portal.
                </p>
              </div>
            </section>
          </div>

          {/* Need Help Box */}
          <div className="mt-20 w-full max-w-[800px] bg-[#0B0B0B] border-2 border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-visible shadow-2xl shadow-black/50 mx-auto lg:mx-0">
            <div className="flex flex-col z-10 max-w-full md:max-w-[55%]">
              {/* Question Icon */}
              <div className="w-9 h-9 rounded-[10px] bg-[#3B82F6] flex items-center justify-center text-white font-bold text-[18px] mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                ?
              </div>
              <h3 className="text-white text-[32px] md:text-[36px] font-bold mb-3 tracking-tight leading-tight">
                Need help?
              </h3>
              <p className="text-[#A1A1AA] text-[15px] md:text-[16px] leading-[1.5] mb-8 font-light">
                Our legal and technical teams are available to clarify any sections of this agreement or assist with enterprise compliance.
              </p>
              <button
                className="w-full md:w-[224px] h-[44px] rounded-[8px] text-[13px] font-bold text-white flex items-center justify-center bg-[#2864E4] hover:bg-blue-600 shadow-sm"
              >
                Contact Support
              </button>
            </div>

            {/* Astronaut Image */}
            <div className="absolute right-[-220px] md:right-[-180px] top-1/2 -translate-y-1/2 w-[420px] h-[900px] md:w-[600px] md:h-[1300px] z-20 pointer-events-none hidden lg:block scale-x-[-1]">
              <div className="relative w-full h-full animate-float">
                <Image
                  src="/shared/astronaut.png"
                  alt="Support Astronaut"
                  fill
                  className="object-contain scale-y-125 scale-x-120"
                  unoptimized
                />
              </div>
            </div>
          </div>

        </div>

        {/* --- RIGHT: Sidebar --- */}
        <aside className="w-full lg:w-[340px] shrink-0 pt-4 lg:pt-0">
          <div className="sticky top-24" >
            <h2 className="text-[32px] md:text-[36px] leading-[1.1] font-semibold tracking-tight mb-8" style={{ fontFamily: 'Poppins' }}>
              <span className="text-black dark:text-white">Trending </span>
              <span className="text-[#2864e4]">AI</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]">Agents</span>
            </h2>

            <div className="flex flex-col gap-5">
              {TRENDING_AGENTS.map((agent) => {
                const AgentIcon = agent.Icon;
                return (
                  <div key={agent.name} className="p-6 rounded-[8px] bg-white dark:bg-[#0F172A] border border-[#F3F4F6] dark:border-white/5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col hover:border-[#E5E7EB] dark:hover:border-white/20 transition-all group pt-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="relative">
                        <AgentIcon
                          size={24}
                          strokeWidth={2.4}
                          stroke="#2864E4"
                          strokeLinecap="square" 
                          strokeLinejoin="miter"
                        />
                      </div>
                      <div className="flex items-center text-[13px] font-bold text-black dark:text-white">
                        <Star size={16} className="mr-1.5" fill="#2864E4" stroke="#2864E4" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
                        {agent.rating}
                      </div>
                    </div>

                    <h3 className="text-[20px] font-bold text-black dark:text-white mb-3 uppercase tracking-tight">
                      {agent.name}
                    </h3>

                    <p className="text-[14px] text-[#4B5563] dark:text-gray-300 leading-[1.6] mb-8 flex-grow font-light">
                      {agent.description}
                    </p>

                    <div className="mb-8 space-y-1.5">
                      <div className="text-[10px] font-bold text-[#96B3FF] uppercase tracking-widest">
                        {agent.runs}
                      </div>
                      <div className="text-[14px] font-bold text-black dark:text-white uppercase">
                        {agent.price}
                      </div>
                    </div>

                    <Link href="/agent-detail" className="block w-full no-underline">
                      <button
                        className="w-full h-12 rounded-[8px] text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: 'linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)' }}
                      >
                        RUN AGENT
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
}
