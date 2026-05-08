import CreateAgentCta from "@/components/sections/agent-statistics/CreateAgentCta";
import PerformanceCharts from "@/components/sections/agent-statistics/PerformanceCharts";

export const metadata = {
  title: "Agent Statistics | Shekel",
  description: "View real-time performance metrics and statistics for autonomous AI agents on the Shekel marketplace.",
};

export default function AgentStatisticsPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <PerformanceCharts />
      <CreateAgentCta />
    </div>
  );
}
