import Hero from "@/components/sections/workflows/Hero";
import HowItWorks from "@/components/sections/workflows/HowItWorks";
import DragConnectRun from "@/components/sections/workflows/DragConnectRun";
import CoreWorkflowCanvas from "@/components/sections/workflows/CoreWorkflowCanvas";
import ExecutionPreview from "@/components/sections/workflows/ExecutionPreview";
import UseCases from "@/components/sections/workflows/UseCases";
import DeployAndEarn from "@/components/sections/workflows/DeployAndEarn";
import TrustReliability from "@/components/sections/workflows/TrustReliability";
import CtaSection from "@/components/sections/workflows/CtaSection";
import ImpactWorkflows from "@/components/sections/workflows/ImpactWorkflows";

export const metadata = {
  title: "AI Agent Workflows | Automate with Shekel",
  description: "Design and manage multi-step AI workflows on Shekel. Combine agents to automate complex tasks end-to-end.",
  keywords: "AI agent workflow",
};


export default function WorkflowsPage() {
  return (
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <Hero />
      <HowItWorks />
      <DragConnectRun />
      <CoreWorkflowCanvas />
      <ExecutionPreview />
      <UseCases />
      <ImpactWorkflows />
      <DeployAndEarn />
      <TrustReliability />
      <CtaSection />
    </div>
  );
}
