"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const ICONS = {
  gettingStarted: "/section-2-faq/gettingstrt.svg",
  aiAgents: "/section-2-faq/aiagent.svg",
  workflows: "/section-2-faq/wf.svg",
  usage: "/section-2-faq/usage.svg",
  whatsappchat: "/section-2-faq/wpm.svg",
};

export default function FaqCategories() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 transition-colors duration-300 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-[1024px] mx-auto flex flex-col gap-16 md:gap-24">

        {/* Top Grid: Getting Started & AI Agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col gap-8">
            <CategoryHeader iconSrc={ICONS.gettingStarted} title="Getting Started" />
            <div className="flex flex-col gap-4">
              <QuestionRow question="What is Shekel?" />
              <QuestionRow question="Technical knowledge required?" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <CategoryHeader iconSrc={ICONS.aiAgents} title="AI Agents" />
            <div className="flex flex-col gap-4">
              <QuestionRow question="What are AI agents?" />
              <QuestionRow question="Creating own agents?" />
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="relative p-8 md:p-16 rounded-[40px] bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 text-center lg:text-left max-w-lg">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: typography.fonts.jakarta }}>
                Still need help?
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                If you couldn't find your answer, our team of AI specialists is here to assist you with technical integration or billing.
              </p>
            </div>

            <div className="grid w-full max-w-xl grid-cols-2 gap-4">
              <button className="w-full px-8 py-4 rounded-2xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 font-bold text-slate-900 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                Contact Support
              </button>

              <button className="w-full px-8 py-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 text-white font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 hover:opacity-90 transition-all">
                <Image
                  src={ICONS.whatsappchat}
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Workflows & Usage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col gap-8">
            <CategoryHeader iconSrc={ICONS.workflows} title="Workflows" />
            <div className="flex flex-col gap-4">
              <QuestionRow question="What is a workflow?" isPlus />
              <QuestionRow question="How they work?" isPlus />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <CategoryHeader iconSrc={ICONS.usage} title="Usage" />
            <div className="flex flex-col gap-4">
              <QuestionRow question="Running agents" isPlus />
              <QuestionRow question="Connecting agents" isPlus />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function CategoryHeader({ iconSrc, title }: { iconSrc: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
        <Image src={iconSrc} alt="" width={24} height={24} className="dark:brightness-200" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: typography.fonts.jakarta }}>
        {title}
      </h3>
    </div>
  );
}

function QuestionRow({ question, isPlus = false }: { question: string; isPlus?: boolean }) {
  return (
    <div className="group flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-md">
      <span className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {question}
      </span>
      {isPlus ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-400 group-hover:text-blue-500 transition-colors">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-400 group-hover:text-blue-500 transition-colors">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}