"use client";

import Image from "next/image";
import Link from "next/link";
import { typography } from "@/tokens/design-tokens";
import { 
  Shield, 
  Share2, 
  Cookie, 
  History, 
  Network, 
  Box,
  Mail,
  ArrowUp,
  TrendingUp,
  BarChart2,
  Gavel,
  Terminal,
  Fingerprint,
  Star,
  Check
} from "lucide-react";

// --- Mock Data for Sidebar ---
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-transparent transition-colors duration-300">
      {/* Global SVG Gradient for Icons */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}>
        <defs>
          <linearGradient id="icon-blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
      </svg>

      <main className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* --- LEFT: Main Content --- */}
        <div className="flex-1 max-w-[760px] bg-white dark:bg-[#0F172A] border-2 border-[#D4D4D4] dark:border-white/5 rounded-[24px] p-4 md:p-8 shadow-[0_2px_15px_rgba(0,0,0,0.015)] dark:shadow-none transition-colors duration-300">
          
          <header className="mb-10">
            <h1 
              className="text-[40px] md:text-[52px] font-medium text-black dark:text-white tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Privacy Policy
            </h1>
            <p className="text-[16px] font-normal text-[#000000] dark:text-gray-300 leading-[28px] tracking-[0px] align-middle mb-8" style={{ fontFamily: typography.fonts.inter }}>
              Your data is a digital extension of your identity. At Ethereal, we treat your information with the same curation and precision as the assets in our marketplace.
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#A0C4FF]"></div>
              <span className="text-[#A0C4FF] text-[10px] font-bold uppercase tracking-widest">
                LAST UPDATED: NOVEMBER 24, 2024
              </span>
            </div>
          </header>

          <hr className="border-[#F3F4F6] dark:border-white/10 mb-10" />

          <div className="space-y-8">
            {/* Section 1 */}
            <PolicySection 
              number="1." 
              title="Information We Collect" 
              // style={{fontFamily:'Plus Jakarta Sans'}}
              icon={<Image src="/section-13/fingIcon.svg" alt="Fingerprint" width={28} height={28} className="object-contain" />}
            >
              <p>We gather information that you provide directly to us when creating an account, curating collections, or transacting within the marketplace. This includes your name, digital wallet addresses, and communication preferences.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center gap-3 px-5 py-4 bg-white dark:bg-white/5 border border-[#F3F4F6] dark:border-white/10 rounded-[12px] text-[13px] text-[#4B5563] dark:text-gray-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-none flex-1">
                  <Check size={14} strokeWidth={2.5} stroke="url(#icon-blue-gradient)" className="border border-blue-500 rounded-[50px]"/>
                  Identity Verification Data
                </div>
                <div className="flex items-center gap-3 px-5 py-4 bg-white dark:bg-white/5 border border-[#F3F4F6] dark:border-white/10 rounded-[12px] text-[13px] text-[#4B5563] dark:text-gray-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-none flex-1">
                  <Check size={14} strokeWidth={2.5} stroke="url(#icon-blue-gradient)" className="border border-blue-500 rounded-[50px]" />
                  Blockchain Transaction Metadata
                </div>
              </div>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 2 */}
            <PolicySection 
              number="2." 
              title="How We Use Your Information" 
              icon={<Image src="/section-13/growpp.svg" alt="Growth" width={28} height={28} className="object-contain" />}
            >
              <p>Our primary goal is to provide a seamless, high-fidelity experience. We use your data to facilitate smart contract interactions, personalize your exhibition feed, and ensure the integrity of high-value marketplace exchanges.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 3 */}
            <PolicySection 
              number="3." 
              title="Data Sharing" 
              icon={<Image src="/section-13/ds.png" alt="Data Sharing" width={28} height={28} className="object-contain" />}
            >
              <p>We do not sell your personal data. Sharing only occurs with service providers necessary for platform operation (e.g., node providers or identity verifiers) or when mandated by legal frameworks to prevent fraudulent activity.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 4 */}
            <PolicySection 
              number="4." 
              title="Cookies & Tracking" 
              icon={<Image src="/section-13/coockies.png" alt="Cookies" width={28} height={28} className="object-contain" />}
            >
              <p>We utilize performance-optimized cookies to remember your display preferences and session state. These are ephemeral tools designed to enhance UI responsiveness, not to profile your behavior across the broader web.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 5 */}
            <PolicySection 
              number="5." 
              title="Data Security" 
              icon={<Image src="/section-13/sec.png" alt="Security" width={28} height={28} className="object-contain" />}
            >
              <p>Security is embedded in our architecture. We employ AES-256 encryption at rest and TLS 1.3 for data in transit. Our infrastructure is audited quarterly to maintain the "Neon Curator" standard of digital safety.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 6 */}
            <PolicySection 
              number="6." 
              title="User Rights" 
              icon={<Image src="/section-13/hum.png" alt="User Rights" width={28} height={28} className="object-contain" />}
            >
              <p>Depending on your jurisdiction (GDPR, CCPA), you have the right to access, rectify, or request the deletion of your data. You may also object to processing or request a portable copy of your marketplace history.</p>
              
              <div className="mt-6 border-l-[3px] border-[#E0E7FF] dark:border-blue-500/30 pl-5">
                <h4 className="font-bold mb-1.5 uppercase text-[10px] tracking-widest" style={{ color: '#8AB4F8', fontFamily: typography.fonts.inter }}>
                  EXERCISING YOUR RIGHTS
                </h4>
                <p className="text-[16px] font-normal text-[#000000] dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: typography.fonts.inter }}>
                  To submit a Data Subject Request, please use the button in your Profile Settings or contact our Data Privacy Officer via the support channel below.
                </p>
              </div>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 7 */}
            <PolicySection 
              number="7." 
              title="Third-Party Services" 
              icon={<Image src="/section-13/netw.png" alt="Network" width={28} height={28} className="object-contain" />}
            >
              <p>Our platform integrates with external protocols and wallet providers. These third-party entities have their own privacy policies. We recommend reviewing the terms of any wallet or oracle you connect to the Ethereal ecosystem.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 8 */}
            <PolicySection 
              number="8." 
              title="Changes to Policy" 
              icon={<Image src="/section-13/change.png" alt="Changes" width={28} height={28} className="object-contain" />}
            >
              <p>We evolve alongside the digital landscape. Any material changes to this policy will be communicated via the Ethereal Dashboard and updated on this page with a revised 'Last Updated' timestamp.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6] dark:border-white/10" />

            {/* Section 9 / Support Box */}
            <div className="relative mt-10  dark:from-blue-900/10 dark:to-blue-900/5 border border-[#EBF1FF] dark:border-white/10 rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-hidden">
              {/* Subtle Glow Effect */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0">
                <Image src="/section-13/Subtle Glow.svg" alt="" width={241} height={241} className="opacity-80" aria-hidden="true" />
              </div>

              <div className="flex-1 max-w-[400px] relative z-10">
                <h2 className="text-[18px] md:text-[20px] font-bold text-black dark:text-white mb-2" style={{ fontFamily: typography.fonts.inter }}>
                  9. Have questions about your data?
                </h2>
                <p className="text-[16px] font-normal text-[#000000] dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" style={{ fontFamily: typography.fonts.inter }}>
                  Our privacy team is available to clarify how we handle your digital footprint and assist with any data portability requests.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 shrink-0 relative z-10">
                <button 
                  className="px-6 py-2.5 rounded-[8px] text-[13px] font-bold text-white flex items-center gap-2 btn-primary-gradient w-full md:w-auto justify-center shadow-sm"
                >
                  <Mail size={16} strokeWidth={1.5} /> Contact Support
                </button>
                <Link href="#" className="text-[#000000] text-[14px] font-light dark:text-gray-300 hover:text-[#000000] transition-colors">
                  View Help Center
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT: Sidebar --- */}
        <aside className="w-full lg:w-[340px] shrink-0 pt-4 lg:pt-0">
          {/* <div className="border border-[#D4D4D4]  md:p-0 w-full" style={{width:'400px'}}>
            <h2 className="text-[32px] md:text-[36px] leading-[1.1] font-semibold tracking-tight mb-8 ml-5" style={{fontFamily:'Poppins',}}>
              <span className="text-[#111827] dark:text-white">Trending </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#2473f2ff] to-[#FFFFFF]">AI</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]">Agents</span>
            </h2>
          </div> */}
          <div className="sticky top-24">
            <h2 className="text-[32px] md:text-[36px] leading-[1.1] font-semibold tracking-tight mb-8 ml-5" style={{fontFamily:'Poppins',}}>
              <span className="text-[#111827] dark:text-white">Trending </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#2473f2ff] to-[#FFFFFF]">AI</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#FFFFFF]">Agents</span>
            </h2>
            
            <div className="flex flex-col gap-5 ">
              {TRENDING_AGENTS.map((agent) => {
                const AgentIcon = agent.Icon;
                return (
                  <div key={agent.name} className="p-6 rounded-[8px] bg-white dark:bg-[#0F172A] border border-[#F3F4F6] dark:border-white/5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col hover:border-[#E5E7EB] dark:hover:border-white/20 transition-all group pt-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="relative">
                        <AgentIcon 
                          size={24} 
                          strokeWidth={2.4} 
                          // stroke="url(#icon-blue-gradient)" 
                          stroke="#2864E4"
                          strokeLinecap="square" 
                          strokeLinejoin="miter"
                        />
                      </div>
                      <div className="flex items-center text-[13px] font-bold text-[#111827] dark:text-white">
                        <Star size={16} fill="url(#icon-blue-gradient)" stroke="url(#icon-blue-gradient)" className="mr-1.5" />
                        {agent.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-[20px] font-bold text-[#111827] dark:text-white mb-3 uppercase tracking-tight">
                      {agent.name}
                    </h3>
                    
                    <p className="text-[14px] text-[#4B5563] dark:text-gray-300 leading-[1.6] mb-8 flex-grow font-light">
                      {agent.description}
                    </p>
                    
                    <div className="mb-8 space-y-1.5">
                      <div className="text-[10px] font-bold text-[#96B3FF] uppercase tracking-widest">
                        {agent.runs}
                      </div>
                      <div className="text-[14px] font-light text-[#111827] dark:text-white uppercase">
                        {agent.price}
                      </div>
                    </div>
                    
                    <Link href="/agent-detail" className="block w-full">
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

// --- Sub-components ---

function PolicySection({ number, title, icon, children }: { number: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="flex gap-4 items-start">
      <div className="pt-0.5 shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h2 
          className="text-[20px] font-bold text-black dark:text-white mb-2" 
          style={{ fontFamily: typography.fonts.inter, letterSpacing: '-0.02em' }}
        >
          {number} {title}
        </h2>
        <div 
          className="text-[16px] font-normal text-[#000000] dark:text-gray-300 leading-[28px] tracking-[0px] align-middle" 
          style={{ fontFamily: typography.fonts.inter }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
