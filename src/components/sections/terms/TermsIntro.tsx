"use client";

import React from 'react';
import { typography } from '@/tokens/design-tokens';
import { useThemeTokens } from '@/hooks/useThemeTokens';

const TermsIntro = () => {
  const { isDark } = useThemeTokens();
  
  return (
    <section className="mb-12 transition-colors duration-300">
      <h2 
        className="text-[24px] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] to-[#ECF2FF]"
        style={{ fontFamily: 'Plus Jakarta Sans' }}
      >
        1. Introduction
      </h2>
      
      <div 
        className="space-y-8 text-[16px] font-normal text-black dark:text-gray-300 leading-[28px] tracking-[0px] align-middle"
        style={{ fontFamily: "Inter" }}
      >
        <p>
          Welcome to Shekel AI. By accessing or using our platform, you agree to comply with and be bound by these Terms & Conditions. These terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p>
          Our platform provides advanced AI orchestration, automated workflows, and agentic intelligence services. Your use of these services signifies your acceptance of our legal framework designed to protect both the platform and its participants.
        </p>
      </div>
    </section>
  );
};

export default TermsIntro;
