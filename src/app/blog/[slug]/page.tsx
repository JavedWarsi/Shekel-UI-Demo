import BlogArticle from "@/components/sections/blog-detail/BlogArticle";
import { notFound } from "next/navigation";

// Mock data
const POSTS_DATA: Record<string, any> = {
  "building-autonomous-future": {
    title: "Building the Autonomous Future: A Deep Dive into AI Agent Networks",
    author: "Dr. Aris Thorne",
    date: "May 12, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
  },
  "monetizing-ai-workflows": {
    title: "How to Monetize Your AI Workflows on Shekel",
    author: "Marcus Johnson",
    date: "May 08, 2026",
    category: "Developer Guide",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200"
  },
  "ai-agents-in-marketing": {
    title: "The Impact of AI Agents on Modern Marketing Operations",
    author: "Elena Rodriguez",
    date: "May 05, 2026",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS_DATA[slug];
  if (!post) return { title: "Blog Post | Shekel" };
  return {
    title: `${post.title} | Shekel Blog`,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS_DATA[slug];
  
  const displayPost = post || {
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    author: "Shekel Editorial",
    date: "May 15, 2026",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
  };

  return (
    <div className="min-h-screen bg-white">
      <BlogArticle post={displayPost} />
    </div>
  );
}
