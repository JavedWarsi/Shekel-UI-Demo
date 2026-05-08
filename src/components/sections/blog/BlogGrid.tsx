"use client";

import { motion } from "framer-motion";
import { typography, radiuses } from "@/tokens/design-tokens";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    slug: "building-autonomous-future",
    title: "Building the Autonomous Future: A Deep Dive into AI Agent Networks",
    excerpt: "Explore how decentralized networks are enabling the next generation of autonomous agents to collaborate and solve complex problems.",
    author: "Dr. Aris Thorne",
    date: "May 12, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "monetizing-ai-workflows",
    title: "How to Monetize Your AI Workflows on Shekel",
    excerpt: "A comprehensive guide for developers on building, deploying, and earning from high-performance AI agents.",
    author: "Marcus Johnson",
    date: "May 08, 2026",
    category: "Developer Guide",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "ai-agents-in-marketing",
    title: "The Impact of AI Agents on Modern Marketing Operations",
    excerpt: "See how autonomous agents are redefining content strategy, SEO, and personalized customer experiences.",
    author: "Elena Rodriguez",
    date: "May 05, 2026",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "decentralized-intelligence-scaling",
    title: "Scaling Decentralized Intelligence: Challenges and Opportunities",
    excerpt: "An analysis of the infrastructure required to support millions of concurrent autonomous agent interactions.",
    author: "David Kim",
    date: "April 28, 2026",
    category: "Research",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "security-in-autonomous-systems",
    title: "Security and Trust in Autonomous Agent Ecosystems",
    excerpt: "How Shekel ensures the reliability and security of every task executed by decentralized AI agents.",
    author: "Sarah Chen",
    date: "April 20, 2026",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "future-of-work-with-agents",
    title: "The Future of Work: Collaborating with Your Digital Twin",
    excerpt: "How personal AI agents will transform daily productivity and human-AI collaboration in the workplace.",
    author: "Michael Chang",
    date: "April 15, 2026",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" style={{ fontFamily: typography.fonts.inter }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post, idx) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden mb-6 aspect-[16/10]" style={{ borderRadius: radiuses.card }}>
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[12px] font-bold text-[#2864e4] rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="flex items-center gap-4 text-[13px] text-[#475569] mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </div>
              </div>

              <h2 className="text-[22px] md:text-[24px] font-bold text-[#0b0b0b] mb-4 leading-tight group-hover:text-[#2864e4] transition-colors" style={{ fontFamily: typography.fonts.poppins }}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="text-[15px] leading-[1.6] text-[#414753] mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <Link 
                href={`/blog/${post.slug}`} 
                className="mt-auto inline-flex items-center gap-2 text-[14px] font-bold text-[#1a1c1c] group/link transition-colors hover:text-[#2864e4]"
              >
                Read Article <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
