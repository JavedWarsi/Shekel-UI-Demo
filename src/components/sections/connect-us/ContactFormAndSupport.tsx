"use client";

import Image from "next/image";
import Link from "next/link";
import { typography } from "@/tokens/design-tokens";

const BUTTON_GRADIENT = "linear-gradient(180deg, #2864E4 0%, #3B82F6 100%)";

export default function ContactFormAndSupport() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-black relative overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 flex flex-col p-8 md:p-12 rounded-[40px] bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8" style={{ fontFamily: typography.fonts.jakarta }}>
            Send a Message
          </h2>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-4 rounded-2xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-4 rounded-2xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Subject</label>
              <select
                className="w-full p-4 rounded-2xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '20px' }}
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Message</label>
              <textarea
                placeholder="How can we help you?"
                className="w-full p-4 rounded-2xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all h-32 resize-none"
              />
            </div>

            <button
              className="w-full py-5 rounded-2xl text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all active:scale-[0.98]"
              style={{ background: BUTTON_GRADIENT }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Support Info */}
        <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-8">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: typography.fonts.jakarta }}>
              Service Excellence
            </h3>

            <div className="flex flex-col gap-8">
              <InfoRow
                icon="/section-3-connect-us/icon-response.svg"
                title="Response time"
                body="We usually reply within 24 hours."
              />
              <InfoRow
                icon="/section-3-connect-us/icon-clock.svg"
                title="Availability"
                body="Mon-Fri: 9am - 6pm EST"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">CONNECT WITH US</span>
            <div className="flex gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center cursor-pointer hover:bg-blue-500 group transition-all">
                  <Image src={`/section-3-connect-us/social-${i}.svg`} alt="Social" width={24} height={24} className="dark:brightness-200 group-hover:brightness-0 group-hover:invert transition-all" />
                </div>
              ))}
            </div>
          </div>

          <Link href="/faq" className="group">
             <div className="flex items-center justify-between p-8 rounded-3xl bg-blue-500/5 dark:bg-blue-500/10 border-l-4 border-blue-600 transition-all group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-blue-600 dark:text-blue-400">Looking for quick answers?</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Browse FAQ</span>
                </div>
                <Image src="/section-3-connect-us/arrow-right.svg" alt="" width={24} height={24} className="group-hover:translate-x-2 transition-transform" />
             </div>
          </Link>
        </div>

      </div>
    </section>
  );
}

function InfoRow({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="flex items-start gap-6">
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
        <Image src={icon} alt="" width={28} height={28} className="dark:brightness-200" />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400">{body}</p>
      </div>
    </div>
  );
}