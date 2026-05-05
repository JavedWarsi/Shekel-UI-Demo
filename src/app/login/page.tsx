"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/shared/Button";
import { typography } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    // Handle actual login logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden selection:bg-blue-100">
      {/* --- Simple Navbar --- */}
      <header className="h-[90px] px-10 md:px-20 flex items-center justify-between bg-transparent relative z-20">
        <Link href="/" className="shrink-0 transition-transform hover:scale-105">
          <Image src="/shared/header-logo.svg" alt="Shekel" width={120} height={30} />
        </Link>
        <Link href="/connect-us">
          <Button variant="outline" className="border-gray-200 text-gray-500 h-10 px-8 font-semibold rounded-full text-xs hover:border-blue-400 hover:text-blue-600 transition-all">Contact Us</Button>
        </Link>
      </header>

      {/* --- Main Content --- */}
      <main className="flex-1 flex items-center justify-center py-12 px-8 md:px-16 lg:px-24 relative">
        {/* Soft Background Glows */}
        <div className="absolute left-[-10%] top-[-10%] w-[700px] h-[700px] bg-[#3B82F6] opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[700px] h-[700px] bg-[#3B82F6] opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute left-[20%] bottom-[-10%] w-[900px] h-[900px] bg-[#8AA8F2] opacity-[0.08] blur-[180px] rounded-full pointer-events-none" />

        {/* Ellipse 43669 (Architectural Border + Interior Blur) */}
        <div 
          className="absolute pointer-events-none opacity-30 border border-[#2864E4] z-0"
          style={{
            width: '338.16px',
            height: '338.16px',
            left: '336px',
            top: '855px',
            background: '#2864E4',
            filter: 'blur(128.75px)',
            transform: 'rotate(56.87deg)',
            borderRadius: '100%'
          }}
        />

        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 relative z-10">
          
          {/* LEFT SIDE: Illustration */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative">
            <div className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center">
              {/* <Float motion3d amplitude={15} rotate={3} duration={5}> */}
                <Image 
                  src="/images/hero/robot.png" 
                  alt="Floating Astronaut" 
                //   fill 
                width={600}
                height={600}
                  className="object-contain pointer-events-none scale-[1.4]"
                  priority
                />
              {/* </Float> */}
              
              {/* Floating Geometric Elements (matching the image) */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#4ADE80] rounded-full blur-[2px] animate-pulse" />
              <div className="absolute top-1/3 left-[15%] w-8 h-8 bg-purple-500 rounded-full opacity-60 blur-[1px]" />
              <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-[#111827] rotate-12 opacity-80" />
              <div className="absolute bottom-[20%] left-1/2 w-10 h-10 border-[6px] border-[#3B82F6] rotate-[30deg] clip-path-triangle opacity-60">
                 <div className="w-full h-full bg-[#3B82F6]/20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-8 h-8 border-4 border-[#3B82F6] rotate-45 opacity-40" />
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-sm rotate-12 opacity-60" />
              <div className="absolute top-1/2 right-[15%] w-4 h-4 bg-[#111827] opacity-40 blur-[0.5px]" />
            </div>
          </div>

          {/* RIGHT SIDE: Login Card */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div 
              className="w-full max-w-[480px] bg-white p-10 md:p-12 shadow-[0px_20px_60px_rgba(0,0,0,0.06)] border border-gray-100/30 rounded-[32px]"
            >
              <div className="mb-8 text-left">
                <h1 className="text-[32px] md:text-[36px] font-extrabold text-[#111827] tracking-tight leading-tight mb-2">
                  Welcome back
                </h1>
                <p className="text-[15px] text-[#6B7280] font-light">
                  Sign in to continue building and using AI agents.
                </p>
              </div>

              {/* Error Alert Box */}
              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-[12px] flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle size={18} className="text-red-500" />
                  <span className="text-[14px] text-red-600 font-medium">{error}</span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#4B5563] uppercase tracking-[0.1em] px-1">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                      <Mail size={18} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (error) setError(null);
                      }}
                      className="w-full h-14 pl-14 pr-6 rounded-[12px] bg-white border border-gray-200 text-[15px] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-[#9CA3AF]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#4B5563] uppercase tracking-[0.1em] px-1">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                      <Lock size={18} />
                    </div>
                    <input 
                      type="password" 
                      placeholder="Enter your password"
                      className="w-full h-14 pl-14 pr-6 rounded-[12px] bg-white border border-gray-200 text-[15px] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-[#9CA3AF]"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox" 
                      id="remember"
                      className="w-4 h-4 rounded border-gray-300 text-[#0061C1] focus:ring-[#0061C1]"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    />
                    <label htmlFor="remember" className="text-[14px] text-[#6B7280] cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-[14px] font-bold text-[#0061C1] hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <button 
                  className="w-full h-14 text-[14px] font-extrabold bg-[#0061C1] hover:bg-[#0050A1] text-white transition-all rounded-[12px] shadow-lg shadow-blue-500/20 uppercase tracking-[0.1em]"
                >
                  SIGN IN
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100"></div>
                  </div>
                  <span className="relative px-4 bg-white text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">
                    OR
                  </span>
                </div>

                {/* Social Login Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    type="button"
                    className="flex-1 h-12 flex items-center justify-center gap-3 border border-gray-100 rounded-[12px] bg-white hover:bg-gray-50 transition-all font-bold text-[12px] text-[#111827] uppercase tracking-widest shadow-sm"
                  >
                    <Image src="/shared/google-icon.svg" alt="Google" width={18} height={18} />
                    GOOGLE
                  </button>
                  <button 
                    type="button"
                    className="flex-1 h-12 flex items-center justify-center gap-3 border border-gray-100 rounded-[12px] bg-white hover:bg-gray-50 transition-all font-bold text-[12px] text-[#111827] uppercase tracking-widest shadow-sm"
                  >
                    <span className="text-[16px] font-extrabold tracking-tighter text-[#111827]">{"< >"}</span>
                    GITHUB
                  </button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-[14px] text-[#6B7280]">
                    Don't have an account? <Link href="/signup" className="text-[#0061C1] font-bold hover:underline ml-1">Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
