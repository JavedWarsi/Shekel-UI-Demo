import ExploreAiAgents from "@/components/sections/explore-agent/ExploreAiAgents";
import FeaturedAgents from "@/components/sections/explore-agent/FeaturedAgents";
import TrendingNow from "@/components/sections/explore-agent/TrendingNow";
import BrowseByCategory from "@/components/sections/explore-agent/BrowseByCategory";
import MainAgentGrid from "@/components/sections/explore-agent/MainAgentGrid";
import CtaSection from "@/components/sections/explore-agent/CtaSection";
// Section imports will be added here as each section is completed

export const metadata = {
  title: "Explore AI Agents | Discover Top Performers",
  description: "Explore top-rated AI agents across every category on Shekel. Find the right agent for your task — instantly.",
};

export default function ExploreAgentPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <main className="pt-[75px] bg-white">
        <ExploreAiAgents />
        <FeaturedAgents />
        <TrendingNow />
        <BrowseByCategory />
        <MainAgentGrid />
        <CtaSection />
        {/* Sections will be added here in order */}
      </main>
    </div>
  );
}
