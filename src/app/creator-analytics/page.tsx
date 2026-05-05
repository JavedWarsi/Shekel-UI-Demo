import StartUsingAI from "@/components/sections/creator-analytics/StartUsingAI";
import GraphBarCounter from "@/components/sections/creator-analytics/GraphBarCounter";

export default function CreatorAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans overflow-x-clip selection:bg-blue-100 pb-20">
      <main className="max-w-[1400px] mx-auto w-full pt-40 pb-12 px-8 md:px-12 space-y-12">
        
        {/* Dashboard Header */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-[56px] font-bold text-[#111827] tracking-tighter leading-none">Creator Analytics</h1>
          <p className="text-[18px] text-gray-400 max-w-[540px] leading-relaxed">
            Real-time performance metrics and intelligent insights for your active AI agents.
          </p>
        </div>

        <GraphBarCounter />
        <StartUsingAI />
        
      </main>
    </div>
  );
}
