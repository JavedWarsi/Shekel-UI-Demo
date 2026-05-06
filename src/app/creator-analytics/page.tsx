import StartUsingAI from "@/components/sections/creator-analytics/StartUsingAI";
import GraphBarCounter from "@/components/sections/creator-analytics/GraphBarCounter";
import DashboardHeader from "@/components/sections/creator-analytics/DashboardHeader";

export default function CreatorAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-transparent flex flex-col font-sans overflow-x-clip selection:bg-blue-100 pb-20">
      <main className="max-w-[1400px] mx-auto w-full pt-40 pb-12 px-8 md:px-12 space-y-12">
        <DashboardHeader />
        <GraphBarCounter />
        <StartUsingAI />
      </main>
    </div>
  );
}
