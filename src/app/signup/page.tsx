"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Float } from "@/components/shared/motion/Float";
import { typography } from "@/tokens/design-tokens";
import { Eye, EyeOff, CheckCircle2, Circle } from "lucide-react";

// -----------------------------------------------------------------------------
// SIGN UP PAGE — High-Fidelity Figma Implementation
// -----------------------------------------------------------------------------

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const passwordValidation = {
    length: formData.password.length >= 8,
    number: /\d/.test(formData.password),
    match: formData.password !== "" && formData.password === formData.confirmPassword,
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        background: 'linear-gradient(to bottom, #dfe6f1 0%, #c9d6ea 50%, #f2f3f5 100%)' 
      }}
    >
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
      <main className="flex-1 flex items-center justify-center py-10 px-6 lg:px-20">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Illustration (50%) */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative">
            {/* Concentrated Radial Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white rounded-full opacity-[0.5] blur-[100px] pointer-events-none" 
            />
            
            <div className="relative z-10 w-full max-w-[1200px] aspect-square flex items-center justify-center">
              <Float 
                motion3d 
                amplitude={8} 
                rotate={1} 
                duration={6}
                className="relative w-full h-full"
              >
                <Image 
                  src="/section-11/cta-robot.png" 
                  alt="Futuristic Robot" 
                  fill 
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
              </Float>
            </div>
          </div>

          {/* RIGHT SIDE: Form Section (50%) */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div 
              className="w-full max-w-[480px] bg-white p-8 md:p-10 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-white/50"
              style={{ borderRadius: '16px' }}
            >
              <div className="mb-8 text-left">
                <h1 className="text-[30px] font-bold mb-2 text-[#0B1B2B]" style={{ fontFamily: typography.fonts.jakarta }}>
                  Create your account
                </h1>
                <p className="text-[15px] text-[#6B7A90]" style={{ fontFamily: typography.fonts.inter }}>
                  Start building and exploring AI agents.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#8A94A6] uppercase tracking-widest px-1">
                    FULL NAME
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-12 px-5 rounded-full bg-[#F5F7FA] border border-[#E6EAF0]/50 text-sm focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-[#A0AEC0]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#8A94A6] uppercase tracking-widest px-1">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-5 rounded-full bg-[#F5F7FA] border border-[#E6EAF0]/50 text-sm focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-[#A0AEC0]"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#8A94A6] uppercase tracking-widest px-1">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create a password"
                      className="w-full h-12 px-5 rounded-full bg-[#F5F7FA] border border-[#E6EAF0]/50 text-sm focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all pr-12 placeholder:text-[#A0AEC0]"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8A94A6]"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#8A94A6] uppercase tracking-widest px-1">
                    CONFIRM PASSWORD
                  </label>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Repeat your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full h-12 px-5 rounded-full bg-[#F5F7FA] border border-[#E6EAF0]/50 text-sm focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-[#A0AEC0]"
                  />
                </div>

                {/* Password Validation Checklist */}
                <div className="flex flex-col gap-2 px-1 py-1">
                  <div className={`flex items-center gap-2 text-[12px] ${passwordValidation.length ? 'text-[#2F6FED]' : 'text-[#8A94A6]'}`}>
                     <CheckCircle2 size={13} className={passwordValidation.length ? 'text-[#2F6FED]' : 'text-[#E6EAF0]'} />
                     <span>At least 8 characters</span>
                  </div>
                  <div className={`flex items-center gap-2 text-[12px] ${passwordValidation.number ? 'text-[#2F6FED]' : 'text-[#8A94A6]'}`}>
                     <CheckCircle2 size={13} className={passwordValidation.number ? 'text-[#2F6FED]' : 'text-[#E6EAF0]'} />
                     <span>Includes a number</span>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-2.5 pt-1 px-1">
                  <input 
                    type="checkbox" 
                    id="terms"
                    className="w-4 h-4 rounded border-[#E6EAF0] text-[#2F6FED] focus:ring-[#2F6FED]"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  />
                  <label htmlFor="terms" className="text-[14px] text-[#6B7A90]">
                    I agree to <Link href="/terms-of-service" className="text-[#2B6CB0] font-semibold hover:underline">Terms & Conditions</Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  className="w-full h-12 text-[14px] font-semibold bg-[#2F6FED] hover:bg-[#1e5ad1] text-white transition-all rounded-[12px] shadow-sm uppercase tracking-wide"
                >
                  Create Account
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E6EAF0]"></div>
                  </div>
                  <span className="relative px-4 bg-white text-[12px] font-semibold text-[#8A94A6] uppercase">
                    OR
                  </span>
                </div>

                {/* Social Login Buttons */}
                <div className="flex gap-3">
                  <button 
                    type="button"
                    className="flex-1 h-11 flex items-center justify-center gap-3 border border-[#E6EAF0] rounded-[10px] bg-white hover:bg-[#F5F7FA] transition-all font-semibold text-[13px] text-[#0B1B2B] uppercase tracking-wider"
                  >
                    <div className="w-5 h-5 rounded-full border border-[#0B1B2B] flex items-center justify-center relative">
                      <div className="w-2.5 h-2.5 rounded-full border border-[#0B1B2B] mt-[-2px]" />
                      <div className="absolute bottom-0 w-3 h-1.5 border border-[#0B1B2B] rounded-t-full border-b-0" />
                    </div>
                    Google
                  </button>
                  <button 
                    type="button"
                    className="flex-1 h-11 flex items-center justify-center gap-3 border border-[#E6EAF0] rounded-[10px] bg-white hover:bg-[#F5F7FA] transition-all font-semibold text-[13px] text-[#0B1B2B] uppercase tracking-wider"
                  >
                    <span className="text-[14px] font-bold tracking-tighter text-[#0B1B2B]">{"< >"}</span>
                    GitHub
                  </button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-[14px] text-[#6B7A90]">
                    Already have an account? <Link href="/signin" className="text-[#2B6CB0] font-semibold hover:underline ml-1">Sign in</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* --- Simple Footer --- */}
      <footer className="bg-transparent py-8 px-8 border-t border-gray-200/10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Image src="/shared/header-logo.svg" alt="Shekel" width={90} height={24} />
          <p className="text-[12px] text-gray-400">© 2026 Shekel AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
