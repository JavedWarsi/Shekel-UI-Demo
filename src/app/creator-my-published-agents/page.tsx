import CreatorStats from "@/components/sections/creator-my-published-agents/Stats";
import CreatorActiveAgents from "@/components/sections/creator-my-published-agents/ActiveAgents";
import CreatorBuildMore from "@/components/sections/creator-my-published-agents/BuildMore";
import CreatorTopPerformer from "@/components/sections/creator-my-published-agents/TopPerformer";
import CreatorQuickInsights from "@/components/sections/creator-my-published-agents/QuickInsights";
import CreatorSuggestion from "@/components/sections/creator-my-published-agents/Suggestion";
// import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";

export const metadata = {
  title: "My Published Agents | Creator Dashboard",
  description: "View performance metrics and insights for your published AI agents.",
};

export default function CreatorMyPublishedAgentsPage() {
  return (
    <div className="min-h-screen relative bg-[#FAFAFA] dark:bg-[#05070C] flex flex-col md:flex-row">
      {/* <DashboardSidebar /> */}
      
      <div className="flex-1 relative">
        {/* Background Gradient */}
        <div 
          className="absolute top-0 left-0 w-full h-[700px] pointer-events-none opacity-40 dark:opacity-10"
          style={{
            background: "linear-gradient(180deg, #DCE6FF 0%, rgba(220, 230, 255, 0.5) 35%, transparent 100%)"
          }}
        />
        
        <main className="relative z-10 pt-[75px] pb-24">
          <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 mt-10">
            <DashboardHeader 
              title="Published Agents" 
              subtitle="View performance metrics and insights for your published AI agents." 
            />

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
    </div>
  );
}
