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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F8F9FB" }}>
      {/* --- Simple Navbar --- */}
      <header className="h-[80px] px-8 flex items-center justify-between border-b border-gray-200 bg-white">
        <Link href="/" className="shrink-0">
          <Image src="/shared/header-logo.svg" alt="Shekel" width={120} height={32} />
        </Link>
        <Link href="/connect-us">
          <Button variant="outline" className="border-gray-300 text-gray-700 h-10 px-6 font-semibold">Get Started</Button>
        </Link>
      </header>

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Left Column: Visual Mascot (Pure Black) */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-[#000000] relative overflow-hidden">
          {/* Precise Background Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] rounded-full opacity-[0.15] blur-[150px]" 
          />

          <Float 
            motion3d 
            amplitude={12} 
            rotate={1.5} 
            duration={7.5}
            className="relative z-10 w-[75%] max-w-[480px] aspect-square"
            style={{ perspective: "1200px" }}
          >
            <Image 
              src="/images/hero/astronaut.png" 
              alt="Mascot Astronaut" 
              fill 
              className="object-contain"
              priority
            />
          </Float>

          <div className="absolute bottom-16 left-16 z-20 space-y-3">
            <h2 className="text-white text-4xl font-bold tracking-tight" style={{ fontFamily: typography.fonts.poppins }}>
              The future of AI agents is here.
            </h2>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed" style={{ fontFamily: typography.fonts.inter }}>
              Join the Shekel network and start building your autonomous workflow ecosystem today.
            </p>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20">
          <div 
            className="w-full max-w-[480px] bg-white p-12 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]"
            style={{ borderRadius: '32px' }}
          >
            <div className="mb-10">
              <h1 className="text-[24px] font-bold mb-2 text-[#111827]" style={{ fontFamily: typography.fonts.poppins }}>
                Create your account
              </h1>
              <p className="text-[14px] text-[#6B7280]" style={{ fontFamily: typography.fonts.inter }}>
                Start building and exploring AI agents.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#374151] uppercase tracking-[0.05em]" style={{ fontFamily: typography.fonts.inter }}>
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#374151] uppercase tracking-[0.05em]" style={{ fontFamily: typography.fonts.inter }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#374151] uppercase tracking-[0.05em]" style={{ fontFamily: typography.fonts.inter }}>
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Create a password"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none transition-all pr-12 placeholder:text-gray-400"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#374151] uppercase tracking-[0.05em]" style={{ fontFamily: typography.fonts.inter }}>
                    Confirm Password
                  </label>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Repeat your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] outline-none transition-all pr-12 placeholder:text-gray-400"
                  />
                </div>

                {/* Password Validation Checklist */}
                <div className="flex flex-col gap-1.5 mt-3">
                  <div className={`flex items-center gap-2 text-[11px] font-bold tracking-tight uppercase ${passwordValidation.length ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.length ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                    <span>At least 8 characters</span>
                  </div>
                  <div className={`flex items-center gap-2 text-[11px] font-bold tracking-tight uppercase ${passwordValidation.number ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.number ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                    <span>Includes a number</span>
                  </div>
                  <div className={`flex items-center gap-2 text-[11px] font-bold tracking-tight uppercase ${passwordValidation.match ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.match ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                    <span>Passwords match</span>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="terms"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0052CC] focus:ring-[#0052CC]"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                />
                <label htmlFor="terms" className="text-sm text-gray-500 leading-snug" style={{ fontFamily: typography.fonts.inter }}>
                  I agree to <Link href="/terms" className="text-[#0052CC] font-semibold hover:underline">Terms & Conditions</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                className="w-full h-14 text-[14px] font-bold tracking-[0.05em] bg-[#0052CC] hover:bg-[#0041A3] text-white transition-all hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-blue-500/10 uppercase"
                style={{ borderRadius: '12px' }}
              >
                CREATE ACCOUNT
              </button>

              {/* Separator */}
              <div className="relative flex items-center justify-center py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <span className="relative px-4 bg-white text-[11px] font-bold text-gray-300 uppercase tracking-[0.1em]" style={{ fontFamily: typography.fonts.inter }}>
                  OR
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="button"
                  className="flex-1 h-12 flex items-center justify-center gap-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-all hover:border-gray-300"
                >
                  <Image src="/section-1-create-ai-agent-page/logo-google-ai.png" alt="Google" width={80} height={30} className="object-contain h-5 w-auto opacity-90" />
                </button>
                <button 
                  type="button"
                  className="flex-1 h-12 flex items-center justify-center gap-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-all hover:border-gray-300"
                >
                  <Image src="/section-1-developer-builder/icon-github.png" alt="GitHub" width={18} height={18} className="opacity-90" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#111827]">GitHub</span>
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500" style={{ fontFamily: typography.fonts.inter }}>
                  Already have an account? <Link href="/signin" className="text-[#0052CC] font-bold hover:underline">Sign in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* --- High-Fidelity Footer --- */}
      <footer className="bg-black py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[80px]">
            {[
              { title: "Product", links: ["Marketplace", "Workflows", "Pricing"] },
              { title: "Platform", links: ["Dev Studio", "Network Status", "Documentation"] },
              { title: "Company", links: ["About Us", "Contact", "Terms"] },
              { title: "Resources", links: ["Blog", "Community", "Support"] },
            ].map(col => (
              <div key={col.title} className="space-y-6">
                <h4 className="text-white text-[16px] font-semibold tracking-tight">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map(link => (
                    <li key={link}>
                      <Link href="#" className="text-gray-400 text-[14px] hover:text-white transition-colors leading-[2]">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-[#1F2937]">
            <p className="text-gray-500 text-[14px]">
              © 2026 Shekel AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
