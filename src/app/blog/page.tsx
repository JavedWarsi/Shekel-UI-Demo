// import { notFound } from "next/navigation";
import BlogPageSections from "@/components/sections/blog/BlogHero";
import TrendingAiAgents from "@/components/sections/connect-us/TrendingAiAgents";
import BlogGrid from "@/components/sections/blog/BlogGrid";

export const metadata = {
  title: "Blog | Shekel AI Agent Marketplace",
  description: "Read the latest articles and updates from the Shekel blog. Discover insights on AI agents, marketplace trends, and platform news.",
  keywords: "Shekel blog",
};

export default function BlogPage() {
  // notFound();
  return (
    <>
      <BlogPageSections />
      <BlogGrid/>
      <TrendingAiAgents />
    </>
  );
}
