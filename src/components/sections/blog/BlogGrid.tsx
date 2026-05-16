"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { typography } from "@/tokens/design-tokens";

const POSTS = [
  {
    slug: "neural-bridge",
    title: "Securing the Neural Bridge: Post-Quantum AI Safety",
    excerpt:
      "Defending the evolved intelligence against the emerging threats of quantum cyberwarfare.",
    date: "OCT 10, 2024",
    category: "SECURITY",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "directed-intent",
    title: "Beyond Prompting: The New Era of Directed Intent",
    excerpt:
      "Why the future of AI isn't about the words you use, but the architectural intent you provide to autonomous systems.",
    date: "OCT 10, 2024",
    category: "CREATIVITY",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "quantized-economy",
    title: "The Shekel Whitepaper: Decoding the Curated Economy",
    excerpt:
      "An executive summary of the protocol that allows humans and autonomous systems to trade value in intelligent marketplaces.",
    date: "OCT 08, 2024",
    category: "PROTOCOL 3.0",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
  },
];

const trendingPosts = [
  {
    title: "Shekel's New Proof of Insight Algorithm Explained",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "How AI Curators Are Reclaiming the 4-Hour Work Week",
    image:
      "https://images.unsplash.com/photo-1526378800651-c66dfb4d5f02?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Liquidity of Knowledge: A New Asset Class",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlogGrid() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F4F5F7] py-16 dark:bg-[#05070C]"
      style={{ fontFamily: typography.fonts.inter }}
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#7BA4FF]/20 blur-[120px]" />
        <div className="absolute right-[-140px] top-[120px] h-[320px] w-[320px] rounded-full bg-pink-200/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8 lg:px-10">
        {/* TOP FEATURED SECTION */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/50 bg-gradient-to-br from-[#F8ECF2] via-[#F7F8FD] to-[#EEF5FF] p-5 shadow-[0_10px_50px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-[#0B0E15] md:p-7">
          {/* WAVE BACKGROUND */}
          <div className="absolute inset-0 opacity-70">
            <div className="absolute bottom-[-120px] left-[-40px] h-[260px] w-[620px] rounded-full border-[40px] border-[#9AD7FF]/30 blur-[2px]" />
            <div className="absolute bottom-[-140px] left-[120px] h-[300px] w-[700px] rounded-full border-[50px] border-[#C9B6FF]/20 blur-[4px]" />
          </div>

          <div className="relative z-10 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT FEATURE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[22px] border border-black/5 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                {/* IMAGE */}
                <div className="relative min-h-[320px]">
                  {/* <Image
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1400&auto=format&fit=crop"
                    alt=""
                    fill
                    className="object-cover"
                  /> */}
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <span className="inline-flex rounded-full bg-[#DCE7FF] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4B73FF]">
                      AI RESEARCH
                    </span>

                    <h2
                      className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#111827] dark:text-white"
                      style={{ fontFamily: typography.fonts.poppins }}
                    >
                      The Singularity of Aesthetics:
                      <br />
                      Generative Models in 2025
                    </h2>

                    <p className="mt-5 text-[14px] leading-[1.8] text-[#5B6475] dark:text-slate-300">
                      An in-depth analysis of how large-scale latent
                      diffusion is reshaping the landscape of professional
                      digital creativity.
                    </p>
                  </div>

                  {/* AUTHOR */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      {/* <Image
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                        alt=""
                        fill
                        className="object-cover"
                      /> */}
                    </div>

                    <div>
                      <p className="text-[13px] font-semibold text-[#111827] dark:text-white">
                        Marcus Vance
                      </p>

                      <p className="text-[11px] uppercase tracking-[0.12em] text-[#8B93A6]">
                        Fictional Researcher • Curator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TRENDING INSIGHTS */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="mb-6 flex items-center gap-2">
                <div className="h-4 w-[2px] rounded-full bg-[#4B73FF]" />

                <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-[#111827] dark:text-white">
                  Trending Insights
                </h3>
              </div>

              <div className="space-y-5">
                {trendingPosts.map((post, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="group flex items-start gap-4"
                  >
                    <div className="relative h-[72px] w-[72px] overflow-hidden rounded-[14px]">
                      {/* <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      /> */}
                    </div>

                    <div className="flex-1 pt-1">
                      <p className="text-[13px] font-medium leading-[1.6] text-[#111827] transition-colors group-hover:text-[#4B73FF] dark:text-white">
                        {post.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* LATEST CURATIONS */}
        <div className="mt-16">
          {/* HEADING */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2
                className="text-[42px] font-semibold tracking-[-0.04em] text-[#111827] dark:text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Latest Curations
              </h2>

              <p className="mt-2 text-[14px] text-[#6B7280] dark:text-slate-400">
                The pulse of the digital ecosystem, updated daily.
              </p>
            </div>

            <button className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B7280] transition-colors hover:text-[#4B73FF] md:block dark:text-slate-400">
              View All Archives +
            </button>
          </div>

          {/* BLOG CARDS */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {POSTS.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0B0E15]"
              >
                {/* IMAGE */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  {/* <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  /> */}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* CONTENT */}
                <div className="p-5">
                  <h3
                    className="text-[24px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#111827] transition-colors group-hover:text-[#4B73FF] dark:text-white"
                    style={{ fontFamily: typography.fonts.poppins }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-4 line-clamp-3 text-[14px] leading-[1.8] text-[#5B6475] dark:text-slate-300">
                    {post.excerpt}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#8B93A6]">
                      {post.date}
                    </span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[12px] font-medium text-[#8EA5FF] transition-all hover:gap-2"
                    >
                      Read Article
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}