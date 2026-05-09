import AnalyticsStats from "@/components/sections/creator-analytics/Stats";
import AnalyticsUsageChart from "@/components/sections/creator-analytics/UsageChart";
import AnalyticsTopAgents from "@/components/sections/creator-analytics/TopAgents";
import AnalyticsCategoryReach from "@/components/sections/creator-analytics/CategoryReach";
import AnalyticsCuratedIntelligence from "@/components/sections/creator-analytics/CuratedIntelligence";
import AnalyticsBottomCTA from "@/components/sections/creator-analytics/BottomCTA";

export const metadata = {
  title: "Creator Analytics | Shekel Workspace",
  description: "Real-time performance metrics and intelligent insights for your active AI agents.",
};

export default function CreatorAnalyticsPage() {
  return (
    <div className="min-h-screen relative bg-[#F8FAFC]">
      {/* Soft Blue Top Gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-[800px] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #D4E1FE 0%, rgba(212, 225, 254, 0.4) 30%, #F8FAFC 100%)"
        }}
      />
      
      <main className="relative z-10 pt-[100px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
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
          
          {/* Extra spacing before Bottom CTA */}
          <div className="h-20" />
        </div>
        
        {/* Full width bottom CTA */}
        <AnalyticsBottomCTA />
      </main>
    </div>
  );
}
