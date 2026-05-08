import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";
import PublishedAgentsList from "@/components/sections/creator/PublishedAgentsList";
import { Plus } from "lucide-react";

export const metadata = {
  title: "My Published Agents | Shekel Creator",
  description: "Manage your published AI agents, monitor performance, and track community adoption on the Shekel marketplace.",
};

export default function CreatorPublishedAgentsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] flex">
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <DashboardHeader 
          title="My Published Agents" 
          subtitle="Monitor your impact on the Shekel ecosystem." 
        />

        <div className="mb-8 flex justify-end md:hidden">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#2864e4] text-white font-bold rounded-xl hover:bg-[#2054c2] transition-colors shadow-lg shadow-[#2864e4]/20">
              <Plus size={18} /> Publish New Agent
            </button>
        </div>

        <PublishedAgentsList />
      </main>
    </div>
  );
}
