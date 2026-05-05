"use client";

import Image from "next/image";
import Link from "next/link";
import { typography } from "@/tokens/design-tokens";
import { 
  TrendingUp, 
  BarChart2, 
  Gavel, 
  Terminal, 
  ArrowUp,
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
    Icon: BarChart2
  },
  {
    name: "LEGALEAGLE",
    description: "Automated contract reviewer focusing on compliance risk.",
    runs: "920 RUNS",
    price: "ENTERPRISE PRO",
    rating: "4.9",
    Icon: Gavel
  },
  {
    name: "SWIFTCODE",
    description: "Legacy code modernization through neural refactoring.",
    runs: "780 RUNS",
    price: "FREE",
    rating: "4.3",
    Icon: Terminal
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* --- LEFT: Main Content --- */}
        <div className="flex-1 max-w-[800px]">
          <header className="mb-16">
            <h1 
              className="text-[40px] md:text-[56px] font-bold text-[#111827] tracking-tight leading-[1.1] mb-6"
              style={{  }}
            >
              Terms & Conditions
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#4B5563] leading-[1.6] mb-8 max-w-[600px] font-light" style={{  }}>
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
          
          <hr className="border-[#F3F4F6] mb-16" />

          <div className="space-y-16">
            {/* Section 1 */}
            <TermsIntro />

            {/* Section 2    style =  fontFamily: typography.fonts.jakarta */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{ }}>
                2. Use of the Platform
              </h2>
              <div className="space-y-8 text-[16px] text-[#4B5563] leading-[2.2] font-light" style={{ }}>
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
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{  }}>  
                3. Accounts
              </h2>
              <div className="space-y-8 text-[16px] text-[#4B5563] leading-[2.2] font-light" style={{  }}>
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
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{  }}>
                4. AI Agents & Workflows
              </h2>
              <div className="space-y-8 text-[16px] text-[#4B5563] leading-[2.2] font-light" style={{  }}>
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
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{  }}>
                5. Restrictions
              </h2>
              <ul className="space-y-6 mt-6 font-light" style={{  }}>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF8E8E] flex items-center justify-center mt-1.5 shrink-0">
                    <div className="w-2.5 h-0.5 bg-[#FF8E8E] rounded-full"></div>
                  </div>
                  <span className="text-[16px] text-[#4B5563] leading-[2.2]">Reverse engineering or attempting to extract the source code of the underlying functionality.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF8E8E] flex items-center justify-center mt-1.5 shrink-0">
                    <div className="w-2.5 h-0.5 bg-[#FF8E8E] rounded-full"></div>
                  </div>
                  <span className="text-[16px] text-[#4B5563] leading-[2.2]">Using the service to generate malicious code, spam, or deceptive content.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF8E8E] flex items-center justify-center mt-1.5 shrink-0">
                    <div className="w-2.5 h-0.5 bg-[#FF8E8E] rounded-full"></div>
                  </div>
                  <span className="text-[16px] text-[#4B5563] leading-[2.2]">Automated scraping of the platform interface without explicit prior permission.</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{  }}>
                6. Intellectual Property
              </h2>
              <div className="space-y-8 text-[16px] text-[#4B5563] leading-[2.2] font-light" style={{  }}>
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
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{  }}>
                7. Limitation of Liability
              </h2>
              <div className="space-y-8 text-[16px] text-[#4B5563] leading-[2.2] font-light" style={{  }}>
                <p>
                  In no event shall Shekel AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{  }}>
                8. Changes to Terms
              </h2>
              <div className="space-y-8 text-[16px] text-[#4B5563] leading-[2.2] font-light" style={{  }}>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]" style={{  }}>
                9. Contact
              </h2>
              <div className="space-y-8 text-[16px] text-[#4B5563] leading-[2.2] font-light" style={{  }}>
                <p>
                  If you have any questions about these Terms, please contact us at support@shekel.ai or through our support portal.
                </p>
              </div>
            </section>
          </div>

          {/* Need Help Box */}
          <div className="mt-20 w-full max-w-[800px] bg-[#0B0B0B] border-2 border-white/10 rounded-[32px] pt-[23px] pb-[23px] pl-[28px] pr-[28px] flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-visible shadow-2xl shadow-black/50 mx-auto lg:mx-0">
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
                className="px-10 h-14 text-white text-[15px] font-bold rounded-[14px] w-fit shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] active:scale-[0.98]"
                style={{ 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #9A7BFF 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Contact Support
              </button>
            </div>

            {/* Astronaut Image - Overflowing significantly */}
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
          <div className="sticky top-24">
            <h2 className="text-[32px] md:text-[36px] leading-[1.1] font-bold tracking-tight mb-8" style={{  }}>
              <span className="text-[#111827]">Trending </span>
              <span className="text-[#2864e4]">AI</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]">Agents</span>
            </h2>
            
            <div className="flex flex-col gap-5">
              {TRENDING_AGENTS.map((agent) => {
                const AgentIcon = agent.Icon;
                return (
                  <div key={agent.name} className="p-8 rounded-[24px] bg-white border border-[#F3F4F6] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col hover:border-[#E5E7EB] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="relative">
                        <AgentIcon size={24} strokeWidth={1.5} stroke="url(#icon-gradient)" />
                      </div>
                      <div className="flex items-center text-[13px] font-bold text-[#111827]">
                        <span className="text-[#96B3FF] mr-1.5 text-[15px]">★</span> {agent.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-[20px] font-bold text-[#111827] mb-3 uppercase tracking-tight">
                      {agent.name}
                    </h3>
                    
                    <p className="text-[14px] text-[#4B5563] leading-[1.6] mb-8 flex-grow font-light">
                      {agent.description}
                    </p>
                    
                    <div className="mb-8 space-y-1.5">
                      <div className="text-[10px] font-bold text-[#96B3FF] uppercase tracking-widest">
                        {agent.runs} RUNS
                      </div>
                      <div className="text-[14px] font-bold text-[#111827] uppercase">
                        {agent.price}
                      </div>
                    </div>
                    
                    <Link href="/agent-detail" className="block w-full">
                      <button 
                        className="w-full h-12 rounded-[8px] text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: 'linear-gradient(180deg, #3B82F6 0%, #FFFFFF 140%)' }}
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

        {/* Global SVG Gradients */}
        <svg width="0" height="0" className="absolute invisible">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#A5C5FF" />
            </linearGradient>
          </defs>
        </svg>

      </main>
    </div>
  );
}
