"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Mail,
    Lock,
    AlertCircle,
} from "lucide-react";

export default function LoginHero() {
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
        <div className="min-h-screen bg-white dark:bg-[#030712] flex flex-col font-sans overflow-hidden selection:bg-blue-100 transition-colors duration-300">


            {/* --- Main Content --- */}
            <main className="flex-1 flex items-center justify-center pt-[75px] py-12 px-8 md:px-16 lg:px-24 relative">
                {/* Soft Background Glows */}
                <div className="absolute left-[-10%] top-[-10%] w-[700px] h-[700px] bg-[#3B82F6] opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute right-[-10%] bottom-[-10%] w-[700px] h-[700px] bg-[#3B82F6] opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute left-[20%] bottom-[-10%] w-[900px] h-[900px] bg-[#8AA8F2] opacity-[0.08] blur-[180px] rounded-full pointer-events-none" />

                {/* Ellipse 43669 (Specific Spotted Blue Blur) */}
                <div
                    className="absolute pointer-events-none z-0"
                    style={{
                        width: '38.16px',
                        height: '38.16px',
                        left: '-327px',
                        top: '28px',
                        background: 'radial-gradient(circle, #1E3A8A 50%, transparent 70%)'
                    }}
                />

                <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 relative z-10">

                    {/* LEFT SIDE: Illustration */}
                    <div className="hidden lg:flex flex-1 items-center justify-center relative">
                        <div className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center">
                            <Image
                                src="/images/hero/robot.png"
                                alt="Floating Astronaut"
                                width={600}
                                height={600}
                                className="object-contain pointer-events-none scale-[1.4] animate-float-x"
                                priority
                            />

                            
                        </div>
                    </div>

                    {/* RIGHT SIDE: Login Card */}
                    <div className="flex-1 flex items-center justify-center lg:justify-end">
                        <div
                            className="w-full max-w-[480px] bg-white dark:bg-[#0F172A] p-10 md:p-12 shadow-[0px_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0px_20px_60px_rgba(0,0,0,0.3)] border border-gray-100/30 dark:border-white/5 rounded-[32px]" style={{ fontFamily: 'Plus Jakarta Sans' }}
                        >
                            <div className="mb-8 text-left">
                                <h1 className="text-[32px] md:text-[36px] font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight mb-2">
                                    Welcome back
                                </h1>
                                <p className="text-[15px] text-[#6B7280] dark:text-gray-400 font-light">
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
                                    <label className="text-[11px] font-bold text-[#4B5563] dark:text-gray-400 uppercase tracking-[0.1em] px-1">
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
                                            className="w-full h-14 pl-14 pr-6 rounded-[12px] bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-white/5 text-[15px] text-[#111827] dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-[#9CA3AF] dark:placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-[#4B5563] dark:text-gray-400 uppercase tracking-[0.1em] px-1">
                                        PASSWORD
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="w-full h-14 pl-14 pr-6 rounded-[12px] bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-white/5 text-[15px] text-[#111827] dark:text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-[#9CA3AF] dark:placeholder:text-gray-500"
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
                                            className="w-4 h-4 rounded border-gray-300 dark:border-white/10 text-[#0061C1] focus:ring-[#0061C1] bg-white dark:bg-[#1E293B]"
                                            checked={formData.rememberMe}
                                            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                        />
                                        <label htmlFor="remember" className="text-[14px] text-[#6B7280] dark:text-gray-400 cursor-pointer">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link href="/forgot-password" className="text-[14px] font-bold text-[#0061C1] dark:text-blue-400 hover:underline">
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
                                        <div className="w-full border-t border-gray-100 dark:border-white/5"></div>
                                    </div>
                                    <span className="relative px-4 bg-white dark:bg-[#0F172A] text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">
                                        OR
                                    </span>
                                </div>

                                {/* Social Login Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        type="button"
                                        className="flex-1 h-12 flex items-center justify-center gap-3 border border-gray-100 dark:border-white/5 rounded-[12px] bg-white dark:bg-[#1E293B] hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-bold text-[12px] text-[#111827] dark:text-white uppercase tracking-widest shadow-sm"
                                    >
                                        <Image src="/shared/google-icon.svg" alt="Google" width={18} height={18} />
                                        GOOGLE
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-1 h-12 flex items-center justify-center gap-3 border border-gray-100 dark:border-white/5 rounded-[12px] bg-white dark:bg-[#1E293B] hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-bold text-[12px] text-[#111827] dark:text-white uppercase tracking-widest shadow-sm"
                                    >
                                        <span className="text-[16px] font-extrabold tracking-tighter text-[#111827] dark:text-white">{"< >"}</span>
                                        GITHUB
                                    </button>
                                </div>

                                <div className="text-center pt-4">
                                    <p className="text-[14px] text-[#6B7280] dark:text-gray-500">
                                        Don't have an account? <Link href="/signup" className="text-[#0061C1] dark:text-blue-400 font-bold hover:underline ml-1">Sign up</Link>
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
