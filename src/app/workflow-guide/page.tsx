import WorkflowGuideHero from "@/components/sections/workflow-guide/Hero";
import WorkflowDefinition from "@/components/sections/workflow-guide/Definition";
import WorkflowFoundations from "@/components/sections/workflow-guide/Foundations";
import WorkflowExecution from "@/components/sections/workflow-guide/Execution";
import WorkflowTemplates from "@/components/sections/workflow-guide/Templates";
import WorkflowFinalCTA from "@/components/sections/workflow-guide/FinalCTA";

import CtaSection from "@/components/sections/explore-agent/CtaSection";

export const metadata = {
  title: "Workflow Guide | Shekel AI Agent Chaining",
  description: "Master the art of agent orchestration. Learn how to design, build, and deploy complex multi-agent workflows on the Shekel network.",
};

export default function WorkflowGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkflowGuideHero />
      <WorkflowDefinition />
      <WorkflowFoundations />
      <WorkflowExecution />
      <WorkflowTemplates />
      {/* <WorkflowFinalCTA /> */}
      {/* <TrendingAisAgents /> */}
      <CtaSection />
    </div>
  );
}
