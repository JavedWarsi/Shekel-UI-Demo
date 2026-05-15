import WorkflowGuideHero from "@/components/sections/workflow-guide/Hero";
import WorkflowDefinition from "@/components/sections/workflow-guide/Definition";
import WorkflowFoundations from "@/components/sections/workflow-guide/Foundations";
import WorkflowExecution from "@/components/sections/workflow-guide/Execution";
import WorkflowTemplates from "@/components/sections/workflow-guide/Templates";
import WorkflowFinalCTA from "@/components/sections/workflow-guide/FinalCTA";

import CtaSection from "@/components/sections/explore-agent/CtaSection";

export const metadata = {
  title: "Learn how to set up powerful AI workflows on Shekel. Combine agents, set triggers, and automate your operations.",
  description: "Learn how to set up powerful AI workflows on Shekel. Combine agents, set triggers, and automate your operations.",
  keywords: "AI workflow guide",
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
