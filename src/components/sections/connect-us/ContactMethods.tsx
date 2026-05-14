"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const CARDS = [
  {
    title: "WhatsApp",
    body: "Immediate support via encrypted chat.",
    linkText: "Start Chat",
    iconBg: "bg-green-500/10 dark:bg-green-500/20",
    iconSrc: "/section-2-connect-us/icon-whatsapp.svg",
    color: "text-green-600 dark:text-green-400"
  },
  {
    title: "Email",
    body: "Detailed inquiries and technical help.",
    linkText: "support@shekel.ai",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
    iconSrc: "/section-2-connect-us/icon-email.svg",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Social Media",
    body: "Follow our updates and news.",
    linkText: "View Profiles",
    iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
    iconSrc: "/section-2-connect-us/icon-social.svg",
    color: "text-purple-600 dark:text-purple-400"
  },
];

export default function ContactMethods() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] dark:bg-blue-600/20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] dark:bg-blue-600/20" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {CARDS.map((card, idx) => (
          <div
            key={idx}
            className="group flex flex-col p-8 md:p-10 rounded-[32px] bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
              <Image
                src={card.iconSrc}
                alt={card.title}
                width={24}
                height={24}
                className="dark:brightness-200"
              />
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: typography.fonts.poppins }}>
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.body}
              </p>
            </div>

            <div className="mt-auto flex items-center gap-3">
               <span className={`font-bold ${card.color} group-hover:underline`}>
                 {card.linkText}
               </span>
               <Image
                 src="/section-2-connect-us/link-arrow.svg"
                 alt="Arrow"
                 width={16}
                 height={16}
                 className="dark:brightness-200 group-hover:translate-x-1 transition-transform"
               />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
