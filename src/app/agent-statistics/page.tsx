import CreateAgentCta from "@/components/sections/agent-statistics/CreateAgentCta";
import PerformanceCharts from "@/components/sections/agent-statistics/PerformanceCharts";

export const metadata = {
  title: "[Agent Name] Stats & Performance | Shekel",
  description: "View real-time usage stats, ratings, and performance metrics for [Agent Name] on Shekel marketplace.",
  keywords: "AI agent performance stats",
};

export default function AgentStatisticsPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <PerformanceCharts />
      <CreateAgentCta />
    </div>
  );
}
