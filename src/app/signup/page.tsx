"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Circle
} from "lucide-react";
import { Button } from "@/components/shared/Button";
import { typography } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    number: false
  });

  useEffect(() => {
    setPasswordValidation({
      length: formData.password.length >= 8,
      number: /\d/.test(formData.password)
    });
  }, [formData.password]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* --- Simple Navbar --- */}
      <header className="h-[80px] px-8 flex items-center justify-between bg-transparent relative z-20">
        <Link href="/" className="shrink-0">
          <Image src="/shared/header-logo.svg" alt="Shekel" width={110} height={28} />
        </Link>
        <Link href="/connect-us">
          <Button variant="outline" className="border-gray-200 text-gray-500 h-9 px-6 font-semibold rounded-full text-xs">Contact Us</Button>
        </Link>
      </header>

      {/* --- Main Content --- */}
      <main className="flex-1 flex items-center justify-center py-10 px-6 lg:px-20 relative overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3B82F6] opacity-[0.12] blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Illustration */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative">
            <div className="relative z-10 w-full max-w-[1000px] aspect-square flex items-center justify-center">
              {/* <Float motion3d amplitude={10} rotate={1} duration={6}> */}
                <Image 
                  src="/section-11/cta-robot.png" 
                  alt="Futuristic Robot" 
                  width={800}
                  height={800}
                  className="object-contain pointer-events-none scale-200"
                  priority
                />
              {/* </Float> */}
            </div>
          </div>

          {/* RIGHT SIDE: Form Section */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div 
              className="w-full max-w-[500px] bg-white p-10 md:p-14 shadow-[0px_20px_60px_rgba(0,0,0,0.06)] border border-gray-100/30 rounded-[48px]"
            >
              <div className="mb-10 text-left">
                <h1 className="text-[32px] md:text-[38px] font-extrabold text-[#111827] tracking-tight leading-tight mb-2">
                  Create your account
                </h1>
                <p className="text-[16px] text-[#6B7280] font-light">
                  Start building and exploring AI agents.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-extrabold text-[#4B5563] uppercase tracking-[0.15em] px-1">
                    FULL NAME
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-14 px-6 rounded-[14px] bg-[#F3F4F6] border-none text-[15px] focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-[#9CA3AF] font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-extrabold text-[#4B5563] uppercase tracking-[0.15em] px-1">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-14 px-6 rounded-[14px] bg-[#F3F4F6] border-none text-[15px] focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-[#9CA3AF] font-medium"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-extrabold text-[#4B5563] uppercase tracking-[0.15em] px-1">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create a password"
                      className="w-full h-14 px-6 rounded-[14px] bg-[#F3F4F6] border-none text-[15px] focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all pr-14 placeholder:text-[#9CA3AF] font-medium"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827] transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-extrabold text-[#4B5563] uppercase tracking-[0.15em] px-1">
                    CONFIRM PASSWORD
                  </label>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Repeat your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full h-14 px-6 rounded-[14px] bg-[#F3F4F6] border-none text-[15px] focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-[#9CA3AF] font-medium"
                  />
                </div>

                {/* Password Validation Checklist */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <div className={`flex items-center gap-2.5 text-[11px] font-bold transition-all ${passwordValidation.length ? 'text-[#0061C1]' : 'text-[#9CA3AF]'}`}>
                     {passwordValidation.length ? <CheckCircle2 size={15} strokeWidth={2.5} /> : <Circle size={15} className="opacity-40" />}
                     <span className="uppercase tracking-[0.12em]">At least 8 characters</span>
                  </div>
                  <div className={`flex items-center gap-2.5 text-[11px] font-bold transition-all ${passwordValidation.number ? 'text-[#0061C1]' : 'text-[#9CA3AF]'}`}>
                     {passwordValidation.number ? <CheckCircle2 size={15} strokeWidth={2.5} /> : <Circle size={15} className="opacity-40" />}
                     <span className="uppercase tracking-[0.12em]">Include a number</span>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3 pt-3">
                  <input 
                    type="checkbox" 
                    id="terms"
                    className="w-5 h-5 rounded-[6px] border-gray-200 text-[#0061C1] focus:ring-[#0061C1] transition-all cursor-pointer"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  />
                  <label htmlFor="terms" className="text-[14px] text-[#4B5563] font-medium cursor-pointer">
                    I agree to <Link href="/terms-of-service" className="text-[#3B82F6] font-bold hover:underline">Terms & Conditions</Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  className="w-full h-16 text-[15px] font-extrabold bg-[#0061C1] hover:bg-[#0052A3] text-white transition-all rounded-[16px] shadow-lg shadow-blue-500/10 uppercase tracking-[0.15em] mt-2"
                >
                  Create Account
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100"></div>
                  </div>
                  <span className="relative px-6 bg-white text-[11px] font-extrabold text-[#9CA3AF] uppercase tracking-[0.2em]">
                    OR
                  </span>
                </div>

                {/* Social Login Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    type="button"
                    className="flex-1 h-14 flex items-center justify-center gap-3 border border-gray-100 rounded-[16px] bg-white hover:bg-gray-50 transition-all font-extrabold text-[12px] text-[#111827] uppercase tracking-[0.15em] shadow-sm"
                  >
                    <Image src="/shared/google-icon.svg" alt="Google" width={20} height={20} />
                    Google
                  </button>
                  <button 
                    type="button"
                    className="flex-1 h-14 flex items-center justify-center gap-3 border border-gray-100 rounded-[16px] bg-white hover:bg-gray-50 transition-all font-extrabold text-[12px] text-[#111827] uppercase tracking-[0.15em] shadow-sm"
                  >
                    <span className="text-[16px] font-extrabold tracking-tighter text-[#111827]">{"< >"}</span>
                    GitHub
                  </button>
                </div>

                <div className="text-center pt-8">
                  <p className="text-[15px] text-[#6B7280] font-medium">
                    Already have an account? <Link href="/signin" className="text-[#3B82F6] font-extrabold hover:underline ml-1">Sign in</Link>
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
