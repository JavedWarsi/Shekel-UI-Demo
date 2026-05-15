import Hero from "@/components/sections/agent-detail/Hero";
import TryThisAgent from "@/components/sections/agent-detail/TryThisAgent";
import ProvenResults from "@/components/sections/agent-detail/ProvenResults";
import HowItWorks from "@/components/sections/agent-detail/HowItWorks";
import DesignedFor from "@/components/sections/agent-detail/DesignedFor";
import PricingOptions from "@/components/sections/agent-detail/PricingOptions";
import UserReviews from "@/components/sections/agent-detail/UserReviews";
import SimilarAgents from "@/components/sections/agent-detail/SimilarAgents";
import CtaAgent from "@/components/sections/agent-detail/CtaAgent";


export const metadata = {
  title: "[Agent Name] — AI Agent | Shekel",
  description: "Use [Agent Name] on Shekel to [primary function]. Pay per use or subscribe. Deploy in seconds, no setup needed.",
  keywords: "enterprise ai platforms",
};


export default function AgentDetailPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-black dark:text-white bg-white dark:bg-slate-900 transition-colors duration-300 selection:bg-blue-500/30">
      <main className="flex flex-col gap-12 md:gap-24 pb-24">
        <Hero />
        <TryThisAgent />
        <ProvenResults />
        <HowItWorks />
        <DesignedFor />
        <PricingOptions />
        <UserReviews />
        <SimilarAgents />
        <CtaAgent />
      </main>
    </div>
  );
}
