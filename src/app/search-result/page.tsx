import SearchResultHero from "@/components/sections/search-result/SearchResultHero";
import SearchResultGrid from "@/components/sections/search-result/SearchResultGrid";
import WorkflowCTA from "@/components/sections/search-result/WorkflowCTA";
import TrendingAgents from "@/components/sections/search-result/TrendingAgents";
import CtaFaq from "@/components/sections/search-result/CtaFaq";

export const metadata = {
  title: "Search Results for [Query] | Shekel",
  description: "Showing AI agents for [query] on Shekel. Find the right AI tool fast — browse, compare, and deploy instantly.",
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

