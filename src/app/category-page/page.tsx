import CategoryHero from "@/components/sections/category-page/CategoryHero";
import MarketingAgentCatalog from "@/components/sections/category-page/MarketingAgentCatalog";
import NextGenInfra from "@/components/sections/category-page/NextGenInfra";
import CategorySimilarAgents from "@/components/sections/category-page/CategorySimilarAgents";
// import CategoryCta from "@/components/sections/category-page/CategoryCta";
import CtaSection from "@/components/sections/category-page/CtaSection";

export default function CategoryPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <main className="pt-[75px] flex flex-col">
        <CategoryHero />
        <MarketingAgentCatalog />
        <div className="mt-12 md:mt-16">
          <NextGenInfra />
        </div>
        <div className="mt-12 md:mt-16">
          <CategorySimilarAgents />
        </div>
        {/* <div className="mt-12 md:mt-16">
          <CategoryCta />
        </div> */}
        
          <CtaSection />
       
      </main>
    </div>
  );
}
