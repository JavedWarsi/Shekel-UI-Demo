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
  XCircle,
  FileText
} from "lucide-react";

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
        <div className="flex-1 max-w-[700px]">
          <header className="mb-10">
            <h1 
              className="text-[40px] md:text-[56px] font-bold text-black tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: typography.fonts.inter }}
            >
              Terms & Conditions
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#4B5563] leading-[1.6] mb-8 max-w-[600px]" style={{ fontFamily: typography.fonts.inter }}>
              Please read these terms carefully before using Shekel. This agreement outlines the rules and regulations for the use of our AI platform.
            </p>
            
            <div className="mb-3">
              <span className="inline-block px-4 py-1.5 bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
                POLICY VERSION 2.4
              </span>
            </div>
            <p className="text-[13px] text-[#6B7280]" style={{ fontFamily: typography.fonts.inter }}>
              Last updated: June 2024
            </p>
          </header>
          
          <hr className="border-[#F3F4F6] mb-10" />

          <div className="space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                1. Introduction
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
                <p>
                  Welcome to Shekel AI. By accessing or using our platform, you agree to comply with and be bound by these Terms & Conditions. These terms apply to all visitors, users, and others who access or use the Service.
                </p>
                <p>
                  Our platform provides advanced AI orchestration, automated workflows, and agentic intelligence services. Your use of these services signifies your acceptance of our legal framework designed to protect both the platform and its participants.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                2. Use of the Platform
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
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
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                3. Accounts
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
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
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                4. AI Agents & Workflows
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
                <p>
                  By deploying AI agents on Shekel, you acknowledge that you are strictly liable for the actions of those agents. You must ensure that your agents operate within predefined ethical guidelines and do not cause harm.
                </p>
                <p>
                  We retain the right to suspend or terminate any agent that violates our policies, consumes excessive platform resources, or poses a security threat to the Shekel ecosystem.
                </p>
                <p>
                  You are responsible for testing your agents thoroughly before deploying them to the public marketplace.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                5. Restrictions
              </h2>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-1" />
                  <span className="text-[15px] text-[#4B5563] leading-[1.6]">Do not engage in activities that are illegal, harmful, or violate any third-party rights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-1" />
                  <span className="text-[15px] text-[#4B5563] leading-[1.6]">Do not use our platform to create spam, phishing, or malicious agents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-1" />
                  <span className="text-[15px] text-[#4B5563] leading-[1.6]">Do not attempt to disrupt or disable the platform's functionality or security.</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                6. Intellectual Property
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
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
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                7. Limitation of Liability
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
                <p>
                  In no event shall Shekel AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                8. Changes to Terms
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-[20px] font-semibold mb-4 text-[#699CFF]" style={{ fontFamily: typography.fonts.inter }}>
                9. Contact
              </h2>
              <div className="space-y-4 text-[15px] text-[#4B5563] leading-[1.8]" style={{ fontFamily: typography.fonts.inter }}>
                <p>
                  If you have any questions about these Terms, please contact us at support@shekel.ai or through our support portal.
                </p>
              </div>
            </section>
          </div>

          {/* Need Help Box */}
          <div className="mt-16 bg-black rounded-[24px] p-8 md:p-10 flex justify-between items-center relative overflow-hidden">
            <div className="flex flex-col z-10 max-w-[65%]">
              <div className="w-10 h-10 bg-[#1C1F26] rounded-xl flex items-center justify-center mb-4">
                <FileText size={20} className="text-[#699CFF]" />
              </div>
              <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-3 tracking-tight">Need help?</h3>
              <p className="text-white/70 text-[14px] leading-[1.6] mb-6">
                Our legal support team is available to help you understand your rights and responsibilities on the platform.
              </p>
              <button 
                className="px-6 py-3 text-white text-[13px] font-bold rounded-[8px] w-fit btn-primary-gradient"
              >
                Contact Support
              </button>
            </div>
            {/* Astronaut Image Placeholder */}
            <div className="absolute right-0 bottom-0 w-[180px] h-[180px] md:w-[220px] md:h-[220px] z-0 opacity-80 mix-blend-screen pointer-events-none">
              {/* Note: Ensure the actual image path exists, otherwise it will just be a blank space, which still keeps the layout intact. */}
              <Image 
                src="/shared/astronaut.png" 
                alt="Support Astronaut" 
                fill
                className="object-contain object-bottom right-[-20px] relative"
                unoptimized
              />
            </div>
          </div>

        </div>

        {/* --- RIGHT: Sidebar --- */}
        <aside className="w-full lg:w-[340px] shrink-0 pt-4 lg:pt-0">
          <div className="sticky top-24">
            <h2 className="text-[32px] md:text-[36px] leading-[1.1] font-bold tracking-tight mb-8" style={{ fontFamily: typography.fonts.inter }}>
              <span className="text-black">Trending </span>
              <span className="text-[#3B82F6]">AI</span><br/>
              <span className="text-[#E0E7FF]">Agents</span>
            </h2>
            
            <div className="flex flex-col gap-5">
              {TRENDING_AGENTS.map((agent) => {
                const AgentIcon = agent.Icon;
                return (
                  <div key={agent.name} className="p-5 rounded-[12px] bg-white border border-[#F3F4F6] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col hover:border-[#E5E7EB] hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-[#699CFF]">
                        <AgentIcon size={18} />
                      </div>
                      <div className="flex items-center text-[11px] font-bold text-[#111827]">
                        <ArrowUp size={12} className="text-[#10B981] mr-1" strokeWidth={3} /> {agent.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-[13px] font-bold text-[#111827] mb-2 tracking-widest" style={{ fontFamily: typography.fonts.inter }}>
                      {agent.name}
                    </h3>
                    
                    <p className="text-[12px] text-[#6B7280] leading-[1.5] mb-6 flex-grow" style={{ fontFamily: typography.fonts.inter }}>
                      {agent.description}
                    </p>
                    
                    <div className="mb-4 space-y-1">
                      <div className="text-[10px] font-bold text-[#699CFF] tracking-wider">
                        {agent.runs}
                      </div>
                      <div className="text-[11px] font-bold text-[#111827] tracking-wider">
                        {agent.price}
                      </div>
                    </div>
                    
                    <Link href="/agent-detail" className="block w-full mt-auto">
                      <button 
                        className="w-full py-2.5 rounded-[6px] text-[11px] font-bold uppercase tracking-widest btn-primary-gradient" 
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
