"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Float } from "@/components/shared/motion/Float";

const StartUsingAI = () => {
  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-[64px] overflow-hidden shadow-[0px_60px_120px_rgba(0,0,0,0.06)] dark:shadow-none border border-gray-100 dark:border-white/5 relative min-h-[620px] group mb-10">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7FF] via-[#F8F4FF] to-[#FFF0F7] dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 pointer-events-none transition-colors duration-300" />
      
      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden">
         <div 
           className="absolute inset-0 bg-[url('/section-7/circuit-lines.svg')] bg-repeat opacity-40 mix-blend-multiply" 
           style={{ backgroundSize: '800px' }}
         />
      </div>
      
      {/* Grain/Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Floating Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-400/10 blur-[100px] rounded-full translate-y-1/4 translate-x-1/4" />

      <div className="grid grid-cols-1 lg:grid-cols-12 h-full relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-6 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-[56px] md:text-[74px] font-bold text-[#111827] dark:text-white leading-[1.0] tracking-tighter mb-16">
            Start Using AI <br /> Agents Today
          </h2>
          <div className="flex flex-col items-center sm:items-start gap-14">
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button className="h-16 px-16 bg-[#0061C1] hover:bg-[#0051A1] rounded-[22px] text-[13px] font-extrabold uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/30 border-none text-white transition-all transform hover:-translate-y-1">
                Explore Agents
              </Button>
              <Button variant="ghost" className="h-16 px-16 border border-blue-100 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md text-[#0061C1] dark:text-blue-400 hover:bg-white dark:hover:bg-white/10 rounded-[22px] text-[13px] font-extrabold uppercase tracking-[0.2em] transition-all shadow-sm">
                Start Building
              </Button>
            </div>
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] text-center sm:text-left ml-2 opacity-80 leading-relaxed max-w-[400px]">
              Join thousands of users and developers already optimizing their workflows with Shekel AI.
            </div>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="lg:col-span-6 relative flex items-center justify-center p-12 min-h-[500px] lg:min-h-full">
          {/* Wave Background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
             <div 
               className="absolute inset-0 bg-[url('/section-7/bg-waves.svg')] bg-repeat opacity-60 mix-blend-multiply" 
               style={{ backgroundSize: '600px' }}
             />
          </div>

          {/* Wireframe Concentric Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute border border-gray-400/[0.12] rounded-full" 
                style={{ 
                  width: `${200 + i * 50}px`,
                  height: `${200 + i * 50}px`,
                }} 
              />
            ))}
          </div>

          {/* Glowing Portal Core */}
          <div className="relative z-0">
            <div className="absolute inset-0 bg-[#A855F7] rounded-[56px] blur-[110px] opacity-25" />
            <div className="w-[360px] h-[360px] bg-gradient-to-br from-[#0061C1] via-[#A855F7] to-[#EC4899] rounded-[64px] shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative overflow-hidden group-hover:rotate-3 transition-transform duration-1000">
               <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
               <div className="absolute -inset-10 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transform rotate-45" />
               {/* Pink Portal Square detail */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border border-white/20 rounded-[48px] mix-blend-overlay" />
            </div>
          </div>

          {/* Main Robot Image */}
          <div className="absolute inset-0 z-10 flex items-center justify-center scale-110 lg:scale-125">
             <Float motion3d amplitude={16} duration={6}>
                <div className="relative w-[560px] h-[560px]">
                  <Image 
                    src="/new-images/cta-robot.webp" 
                    alt="Shekel AI Bot" 
                    fill 
                    className="object-contain drop-shadow-[0_45px_75px_rgba(0,0,0,0.2)] animate-float"
                  />
                </div>
             </Float>
          </div>

          {/* Floating Data Card */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-60 h-80 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-[48px] shadow-2xl z-20 overflow-hidden hidden xl:block translate-x-6 hover:-translate-y-[55%] transition-transform duration-500">
             <div className="p-8 space-y-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/30 flex items-center justify-center shadow-inner">
                   <TrendingUp size={28} className="text-[#0061C1]" />
                </div>
                <div className="space-y-4">
                   <div className="h-3 w-full bg-white/40 rounded-full" />
                   <div className="h-3 w-3/4 bg-white/20 rounded-full" />
                   <div className="h-3 w-1/2 bg-white/10 rounded-full" />
                </div>
                <div className="mt-auto flex items-end gap-3.5 pb-2 h-20">
                   <div className="flex-1 bg-white/20 rounded-t-xl h-[40%]" />
                   <div className="flex-1 bg-white/40 rounded-t-xl h-[70%]" />
                   <div className="flex-1 bg-[#0061C1] rounded-t-xl h-[100%] shadow-[0_0_25px_rgba(0,97,193,0.5)]" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUsingAI;
