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
  Fingerprint
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* --- Global SVG Gradient for Icons --- */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="icon-blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#D4E3FF" />
          </linearGradient>
        </defs>
      </svg>

      <main className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* --- LEFT: Main Content --- */}
        <div className="flex-1 max-w-[760px] bg-white border border-[#F0F0F0] rounded-[24px] p-8 md:p-12 shadow-[0_2px_15px_rgba(0,0,0,0.015)]">
          
          <header className="mb-10">
            <h1 
              className="text-[40px] md:text-[52px] font-bold text-black tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: typography.fonts.inter }}
            >
              Privacy Policy
            </h1>
            <p className="text-[13px] md:text-[14px] text-[#4B5563] leading-[1.7] mb-8" style={{ fontFamily: typography.fonts.inter }}>
              Your data is a digital extension of your identity. At Ethereal, we treat your information with the same curation and precision as the assets in our marketplace.
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#A0C4FF]"></div>
              <span className="text-[#A0C4FF] text-[10px] font-bold uppercase tracking-widest">
                LAST UPDATED: NOVEMBER 24, 2024
              </span>
            </div>
          </header>

          <hr className="border-[#F3F4F6] mb-10" />

          <div className="space-y-8">
            {/* Section 1 */}
            <PolicySection 
              number="1." 
              title="Information We Collect" 
              icon={<Fingerprint size={28} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />}
            >
              <p>We gather information that you provide directly to us when creating an account, curating collections, or transacting within the marketplace. This includes your name, digital wallet addresses, and communication preferences.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-[6px] text-[12px] text-[#4B5563]">
                  <Box size={12} strokeWidth={2} stroke="url(#icon-blue-gradient)" />
                  Identity Verification Data
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-[6px] text-[12px] text-[#4B5563]">
                  <Box size={12} strokeWidth={2} stroke="url(#icon-blue-gradient)" />
                  Blockchain Transaction Metadata
                </div>
              </div>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 2 */}
            <PolicySection 
              number="2." 
              title="How We Use Your Information" 
              icon={
                <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-[1.5px]" style={{ borderColor: 'url(#icon-blue-gradient)' }}>
                  <TrendingUp size={16} strokeWidth={2} stroke="url(#icon-blue-gradient)" />
                </div>
              }
            >
              <p>Our primary goal is to provide a seamless, high-fidelity experience. We use your data to facilitate smart contract interactions, personalize your exhibition feed, and ensure the integrity of high-value marketplace exchanges.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 3 */}
            <PolicySection 
              number="3." 
              title="Data Sharing" 
              icon={<Share2 size={28} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />}
            >
              <p>We do not sell your personal data. Sharing only occurs with service providers necessary for platform operation (e.g., node providers or identity verifiers) or when mandated by legal frameworks to prevent fraudulent activity.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 4 */}
            <PolicySection 
              number="4." 
              title="Cookies & Tracking" 
              icon={<Cookie size={28} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />}
            >
              <p>We utilize performance-optimized cookies to remember your display preferences and session state. These are ephemeral tools designed to enhance UI responsiveness, not to profile your behavior across the broader web.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 5 */}
            <PolicySection 
              number="5." 
              title="Data Security" 
              icon={<Shield size={28} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />}
            >
              <p>Security is embedded in our architecture. We employ AES-256 encryption at rest and TLS 1.3 for data in transit. Our infrastructure is audited quarterly to maintain the "Neon Curator" standard of digital safety.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 6 */}
            <PolicySection 
              number="6." 
              title="User Rights" 
              icon={<Gavel size={28} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />}
            >
              <p>Depending on your jurisdiction (GDPR, CCPA), you have the right to access, rectify, or request the deletion of your data. You may also object to processing or request a portable copy of your marketplace history.</p>
              
              <div className="mt-6 border-l-[3px] border-[#E0E7FF] pl-5">
                <h4 className="font-bold mb-1.5 uppercase text-[10px] tracking-widest" style={{ color: '#8AB4F8', fontFamily: typography.fonts.inter }}>
                  EXERCISING YOUR RIGHTS
                </h4>
                <p className="text-[#4B5563] text-[13px] leading-relaxed" style={{ fontFamily: typography.fonts.inter }}>
                  To submit a Data Subject Request, please use the button in your Profile Settings or contact our Data Privacy Officer via the support channel below.
                </p>
              </div>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 7 */}
            <PolicySection 
              number="7." 
              title="Third-Party Services" 
              icon={<Network size={28} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />}
            >
              <p>Our platform integrates with external protocols and wallet providers. These third-party entities have their own privacy policies. We recommend reviewing the terms of any wallet or oracle you connect to the Ethereal ecosystem.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 8 */}
            <PolicySection 
              number="8." 
              title="Changes to Policy" 
              icon={<History size={28} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />}
            >
              <p>We evolve alongside the digital landscape. Any material changes to this policy will be communicated via the Ethereal Dashboard and updated on this page with a revised 'Last Updated' timestamp.</p>
            </PolicySection>

            <hr className="border-[#F3F4F6]" />

            {/* Section 9 / Support Box */}
            <div className="mt-10 bg-gradient-to-br from-[#F4F8FF] to-[#FAFCFF] border border-[#EBF1FF] rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex-1 max-w-[400px]">
                <h2 className="text-[18px] md:text-[20px] font-bold text-black mb-2" style={{ fontFamily: typography.fonts.inter }}>
                  9. Have questions about your data?
                </h2>
                <p className="text-[#4B5563] text-[13px] leading-relaxed" style={{ fontFamily: typography.fonts.inter }}>
                  Our privacy team is available to clarify how we handle your digital footprint and assist with any data portability requests.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 shrink-0">
                <button 
                  className="px-6 py-2.5 rounded-[8px] text-[13px] font-bold text-white flex items-center gap-2 btn-primary-gradient w-full md:w-auto justify-center shadow-sm"
                >
                  <Mail size={16} strokeWidth={1.5} /> Contact Support
                </button>
                <Link href="#" className="text-[#9CA3AF] text-[11px] font-medium hover:text-[#4B5563] transition-colors">
                  View Help Center
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT: Sidebar --- */}
        <aside className="w-full lg:w-[320px] shrink-0 pt-4 lg:pt-0">
          <div className="sticky top-24">
            <h2 className="text-[32px] md:text-[36px] leading-[1.1] font-bold tracking-tight mb-8" style={{ fontFamily: typography.fonts.inter }}>
              <span className="text-black">Trending </span>
              <span className="text-[#3B82F6]">AI</span><br/>
              <span className="text-[#E0E7FF]">Agents</span>
            </h2>
            
            <div className="flex flex-col gap-4">
              {TRENDING_AGENTS.map((agent) => {
                const AgentIcon = agent.Icon;
                return (
                  <div key={agent.name} className="p-4 rounded-[12px] bg-white border border-[#F0F0F0] shadow-[0_2px_8px_rgba(0,0,0,0.015)] flex flex-col hover:border-[#E5E7EB] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <AgentIcon size={16} strokeWidth={1.5} stroke="url(#icon-blue-gradient)" />
                      </div>
                      <div className="flex items-center text-[10px] font-bold text-[#111827]">
                        <ArrowUp size={10} className="text-[#10B981] mr-1" strokeWidth={3} /> {agent.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-[12px] font-bold text-[#111827] mb-1.5 tracking-widest uppercase" style={{ fontFamily: typography.fonts.inter }}>
                      {agent.name}
                    </h3>
                    
                    <p className="text-[11px] text-[#6B7280] leading-[1.5] mb-5 flex-grow" style={{ fontFamily: typography.fonts.inter }}>
                      {agent.description}
                    </p>
                    
                    <div className="mb-4 space-y-1">
                      <div className="text-[9px] font-bold tracking-wider uppercase" style={{ color: '#8AB4F8' }}>
                        {agent.runs}
                      </div>
                      <div className="text-[10px] font-bold text-[#111827] tracking-wider uppercase">
                        {agent.price}
                      </div>
                    </div>
                    
                    <Link href="/agent-detail" className="block w-full mt-auto">
                      <button 
                        className="w-full py-2 rounded-[6px] text-[10px] font-bold uppercase tracking-widest btn-primary-gradient" 
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
          className="text-[20px] font-bold text-black mb-2" 
          style={{ fontFamily: typography.fonts.inter, letterSpacing: '-0.02em' }}
        >
          {number} {title}
        </h2>
        <div 
          className="text-[#4B5563] text-[13px] leading-[1.7]" 
          style={{ fontFamily: typography.fonts.inter }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
