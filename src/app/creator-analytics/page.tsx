import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";
import GraphBarCounter from "@/components/sections/creator-analytics/GraphBarCounter";
import StartUsingAI from "@/components/sections/creator-analytics/StartUsingAI";

export const metadata = {
  title: "Creator Analytics | Shekel",
  description: "Real-time performance metrics and intelligent insights for your active AI agents.",
};

export default function CreatorAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] flex">
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <DashboardHeader 
          title="Creator Analytics" 
          subtitle="Real-time performance metrics and intelligent insights for your active AI agents." 
        />

        <div className="space-y-12">
          <GraphBarCounter />
          <StartUsingAI />
        </div>
      </main>
    </div>
  );
}
