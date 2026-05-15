import AnalyticsStats from "@/components/sections/creator-analytics/Stats";
import AnalyticsUsageChart from "@/components/sections/creator-analytics/UsageChart";
import AnalyticsTopAgents from "@/components/sections/creator-analytics/TopAgents";
import AnalyticsCategoryReach from "@/components/sections/creator-analytics/CategoryReach";
import AnalyticsCuratedIntelligence from "@/components/sections/creator-analytics/CuratedIntelligence";
import AnalyticsBottomCTA from "@/components/sections/creator-analytics/BottomCTA";
// import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";

export const metadata = {
  title: "Creator Analytics | Shekel Agent Insights",
  description: "Deep-dive into your AI agent performance. Track views, conversions, revenue, and user engagement in Shekel's creator dashboard.",
  keywords: "AI creator analytics",
};

export default function CreatorAnalyticsPage() {
  return (
    <div className="min-h-screen relative bg-[#F8FAFC] dark:bg-[#05070C] flex flex-col md:flex-row">
      {/* <DashboardSidebar /> */}
      
      <div className="flex-1 relative">
        {/* Soft Blue Top Gradient */}
        <div 
          className="absolute top-0 left-0 w-full h-[800px] pointer-events-none opacity-40 dark:opacity-10"
          style={{
            background: "linear-gradient(180deg, #D4E1FE 0%, rgba(212, 225, 254, 0.4) 30%, transparent 100%)"
          }}
        />
        
        <main className="relative z-10 pt-[75px] pb-20">
          <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12">
            <DashboardHeader 
              title="Creator Analytics" 
              subtitle="Real-time performance metrics and intelligent insights for your active AI agents." 
            />

            {/* Top Row: Stats */}
            <AnalyticsStats />
            
            {/* Middle Row: Usage Chart */}
            <AnalyticsUsageChart />
            
            {/* Bottom Grid: Top Agents + Category Reach */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <AnalyticsTopAgents />
              </div>
              <div className="lg:col-span-1">
                <AnalyticsCategoryReach />
              </div>
            </div>
            
            {/* Curated Intelligence Banner */}
            <AnalyticsCuratedIntelligence />
          </div>
        </main>
        
        {/* Full width bottom CTA - adjusted for sidebar */}
        <AnalyticsBottomCTA />
      </div>
    </div>
  );
}
