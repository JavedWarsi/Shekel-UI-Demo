import WorkflowGuideHero from "@/components/sections/workflow-guide/Hero";
import WorkflowUseCases from "@/components/sections/workflow-guide/UseCases";

export const metadata = {
  title: "Workflow Guide | Shekel AI Agent Chaining",
  description: "Master the art of agent orchestration. Learn how to design, build, and deploy complex multi-agent workflows on the Shekel network.",
};

export default function WorkflowGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkflowGuideHero />
      <WorkflowUseCases />
    </div>
  );
}
