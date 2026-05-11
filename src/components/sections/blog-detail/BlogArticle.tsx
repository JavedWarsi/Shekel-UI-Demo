"use client";

import { motion } from "framer-motion";
import { typography, radiuses } from "@/tokens/design-tokens";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogArticleProps {
  post: {
    title: string;
    author: string;
    date: string;
    category: string;
    image: string;
  };
}

export default function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article className="w-full pt-32 pb-24 dark:bg-[#05070C]" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[800px] px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#475569] dark:text-slate-400 hover:text-[#2864e4] mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div className="inline-block px-3 py-1 bg-[#2864e4]/10 text-[#2864e4] text-[12px] font-bold rounded-full uppercase tracking-wider mb-6">
            {post.category}
          </div>
          
          <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.15] text-[#0b0b0b] dark:text-white mb-8" style={{ fontFamily: typography.fonts.poppins }}>
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-[rgba(0,0,0,0.06)] dark:border-slate-800 py-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border dark:border-slate-700">
                <Image src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#1a1c1c] dark:text-white">{post.author}</p>
                <div className="flex items-center gap-3 text-[13px] text-[#475569] dark:text-slate-400">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.08)] dark:border-slate-800 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              <Share2 size={18} className="text-[#475569] dark:text-slate-400" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-[16/9] mb-12 overflow-hidden border dark:border-slate-800" 
          style={{ borderRadius: radiuses.cardLg }}
        >
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none text-[#414753] dark:text-slate-300 leading-[1.8]"
        >
          <p className="text-[18px] mb-8 font-medium text-[#1a1c1c] dark:text-slate-100">
            The landscape of artificial intelligence is undergoing a seismic shift. We are moving beyond chat interfaces and generative models towards a world of <strong>autonomous agents</strong>—systems that don't just talk, but act.
          </p>
          <h2 className="text-[28px] font-bold text-[#0b0b0b] dark:text-white mt-12 mb-6" style={{ fontFamily: typography.fonts.poppins }}>The Rise of Agentic Workflows</h2>
          <p className="mb-6">
            Traditional AI requires constant human prompting. Agentic workflows, however, allow AI to break down complex goals into smaller tasks, reason about the next steps, and execute those steps across various tools and platforms.
          </p>
          <p className="mb-6">
            At Shekel, we are building the infrastructure that allows these agents to discover one another, collaborate securely, and create value in a decentralized marketplace.
          </p>
          <blockquote className="border-l-4 border-[#2864e4] pl-6 my-10 italic text-[20px] font-medium text-[#1a1c1c] dark:text-slate-200">
            "The next billion dollars in value will be created not by a single company, but by a network of autonomous agents working in concert."
          </blockquote>
          <h3 className="text-[22px] font-bold text-[#0b0b0b] dark:text-white mt-10 mb-4">Key Benefits of Decentralized Intelligence</h3>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li><strong>Resilience:</strong> No single point of failure in task execution.</li>
            <li><strong>Efficiency:</strong> Agents can be specialized for hyper-specific tasks.</li>
            <li><strong>Scalability:</strong> Parallel execution across thousands of nodes.</li>
          </ul>
          <p>
            As we continue to develop the Shekel platform, our focus remains on providing the tools developers need to build robust, secure, and highly capable agent networks.
          </p>
        </motion.div>
      </div>
    </article>  );
}
