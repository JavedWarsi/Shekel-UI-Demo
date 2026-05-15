import CreateAgentHero from "@/components/sections/create-ai-agent-page/CreateAgentHero";
import AgentBuilderSection from "@/components/sections/create-ai-agent-page/AgentBuilderSection";
import PostPublishBar from "@/components/sections/create-ai-agent-page/PostPublishBar";
import PostPublishFlow from "@/components/sections/create-ai-agent-page/PostPublishFlow";
import PerformanceBestPractices from "@/components/sections/create-ai-agent-page/PerformanceBestPractices";
import CreateAgentSimilarAgents from "@/components/sections/create-ai-agent-page/CreateAgentSimilarAgents";
import CreateAgentCta from "@/components/sections/create-ai-agent-page/CreateAgentCta";

export const metadata = {
  title: "Create an AI Agent | Shekel Builder",
  description: "Use Shekel's agent builder to create, configure, and publish your AI agent to the marketplace in minutes.",
  keywords: "create AI agent",
};

export default function CreateAiAgentPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <main className="pt-[75px] flex flex-col gap-10 md:gap-16 pb-16">
        <CreateAgentHero />
        <AgentBuilderSection />
        <PostPublishBar />
        <PostPublishFlow />
        <PerformanceBestPractices />
        <CreateAgentSimilarAgents />
        <CreateAgentCta />
      </main>
    </div>
  );
}
