import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";

export const metadata = {
  title: "Blog | Shekel",
  description: "Insights, updates, and deep dives into the world of autonomous AI agents and decentralized intelligence.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <BlogGrid />
    </div>
  );
}
