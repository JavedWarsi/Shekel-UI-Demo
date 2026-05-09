import SearchResultHero from "@/components/sections/search-result/SearchResultHero";
import SearchResultGrid from "@/components/sections/search-result/SearchResultGrid";
import WorkflowCTA from "@/components/sections/search-result/WorkflowCTA";
import TrendingAgents from "@/components/sections/search-result/TrendingAgents";
import CtaFaq from "@/components/sections/search-result/CtaFaq";

export const metadata = {
  title: "Search Results | Shekel",
  description: "Find the perfect autonomous AI agent for your specific needs on the Shekel marketplace.",
};

export default function SearchResultPage() {
  return (
    <div className="min-h-screen bg-white">
      <SearchResultHero />
      <SearchResultGrid />
      <WorkflowCTA />
      <TrendingAgents />
      <CtaFaq />
    </div>
  );
}

