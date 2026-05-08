import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";
import MyAgentsList from "@/components/sections/my-agents/MyAgentsList";
import { Plus } from "lucide-react";

export const metadata = {
  title: "My Agents | Shekel",
  description: "View and manage all your deployed AI agents on the Shekel network.",
};

export default function MyAgentsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] flex">
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <DashboardHeader 
          title="My Agents" 
          subtitle="Manage, monitor, and scale your agent fleet." 
        />

        <div className="mb-8 flex justify-end md:hidden">
           <button className="flex items-center gap-2 px-6 py-2.5 bg-[#2864e4] text-white font-bold rounded-xl hover:bg-[#2054c2] transition-colors shadow-lg shadow-[#2864e4]/20">
              <Plus size={18} /> Create New Agent
            </button>
        </div>

        <MyAgentsList />
      </main>
    </div>
  );
}
