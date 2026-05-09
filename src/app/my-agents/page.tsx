import MyAgentsHeader from "@/components/sections/my-agents/Header";
import MyAgentsGrid from "@/components/sections/my-agents/AgentGrid";
import MyAgentsEmptyState from "@/components/sections/my-agents/EmptyState";

export const metadata = {
  title: "My Agents | Shekel Workspace",
  description: "Curate and manage your autonomous intelligence workforce.",
};

export default function MyAgentsPage() {
  return (
    <div className="min-h-screen relative bg-[#FAFAFA]">
      {/* Soft Blue Top Gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-[600px] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #D4E1FE 0%, rgba(212, 225, 254, 0.4) 40%, #FAFAFA 100%)"
        }}
      />
      
      <main className="relative z-10 pt-[100px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <MyAgentsHeader />
          <MyAgentsGrid />
          <MyAgentsEmptyState />
        </div>
      </main>
    </div>
  );
}
