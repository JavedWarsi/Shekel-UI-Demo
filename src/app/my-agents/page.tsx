import MyAgentsHeader from "@/components/sections/my-agents/Header";
import MyAgentsGrid from "@/components/sections/my-agents/AgentGrid";
import MyAgentsEmptyState from "@/components/sections/my-agents/EmptyState";
// import DashboardSidebar from "@/components/shared/DashboardSidebar";

export const metadata = {
  title: "My Agents | Shekel User Dashboard",
  description: "Manage your deployed and saved AI agents. Track usage, update configurations, and monitor performance on Shekel.",
  keywords: "AI agents",
};

export default function MyAgentsPage() {
  return (
    <div className="min-h-screen relative bg-[#FAFAFA] dark:bg-[#05070C] flex flex-col md:flex-row">
      {/* <DashboardSidebar /> */}
      
      <div className="flex-1 relative">
        {/* Soft Blue Top Gradient */}
        <div 
          className="absolute top-0 left-0 w-full h-[600px] pointer-events-none opacity-40 dark:opacity-10"
          style={{
            background: "linear-gradient(180deg, #D4E1FE 0%, rgba(212, 225, 254, 0.4) 40%, transparent 100%)"
          }}
        />
        
        <main className="relative z-10 pt-[100px] pb-20">
          <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
            <MyAgentsHeader />
            <MyAgentsGrid />
            <MyAgentsEmptyState />
          </div>
        </main>
      </div>
    </div>
  );
}
