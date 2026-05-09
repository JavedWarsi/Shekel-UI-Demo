import CreatorStats from "@/components/sections/creator-my-published-agents/Stats";
import CreatorActiveAgents from "@/components/sections/creator-my-published-agents/ActiveAgents";
import CreatorBuildMore from "@/components/sections/creator-my-published-agents/BuildMore";
import CreatorTopPerformer from "@/components/sections/creator-my-published-agents/TopPerformer";
import CreatorQuickInsights from "@/components/sections/creator-my-published-agents/QuickInsights";
import CreatorSuggestion from "@/components/sections/creator-my-published-agents/Suggestion";

export const metadata = {
  title: "My Published Agents | Creator Dashboard",
  description: "View performance metrics and insights for your published AI agents.",
};

export default function CreatorMyPublishedAgentsPage() {
  return (
    <div className="min-h-screen relative bg-[#FAFAFA] pb-24">
      {/* Background Gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-[700px] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #DCE6FF 0%, rgba(220, 230, 255, 0.5) 35%, #FAFAFA 100%)"
        }}
      />
      
      <main className="relative z-10 pt-[75px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 mt-10">
          
          {/* Top Stats Row */}
          <div className="mb-10">
            <CreatorStats />
          </div>
          
          {/* Main 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column (Approx 65%) */}
            <div className="lg:col-span-8 flex flex-col">
              <CreatorActiveAgents />
              <CreatorBuildMore />
            </div>
            
            {/* Right Column (Approx 35%) */}
            <div className="lg:col-span-4 flex flex-col">
              <CreatorTopPerformer />
              <CreatorQuickInsights />
              <CreatorSuggestion />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
