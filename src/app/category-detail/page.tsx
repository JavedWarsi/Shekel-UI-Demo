import ExploreAiAgentCategories from "@/components/sections/category-detail/ExploreAiAgentCategories";
import BrowseByCategory from "@/components/sections/category-detail/BrowseByCategory";
import FeaturedCategories from "@/components/sections/category-detail/FeaturedCategories";
import PopularAgents from "@/components/sections/category-detail/PopularAgents";
import HowItWorks from "@/components/sections/category-detail/HowItWorks";
import CtaCategory from "@/components/sections/category-detail/CtaCategory";


export const metadata = {
  title: "[Category Name] AI Agents | Shekel",
  description: "Discover the best [Category] AI agents on Shekel. Compare, deploy, and pay only for what you use.",
};

export default function CategoryDetailPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <ExploreAiAgentCategories />
      <BrowseByCategory />
      <FeaturedCategories />
      <PopularAgents />
      <HowItWorks />
      <CtaCategory />
    </div>
  );
}