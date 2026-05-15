import Hero from "@/components/sections/developer-builder/Hero";
import ModularAgents from "@/components/sections/developer-builder/ModularAgents";
import HowItWorks from "@/components/sections/developer-builder/HowItWorks";
import EngineeredForPrecision from "@/components/sections/developer-builder/EngineeredForPrecision";
import SectionDeepDiveNodeVisual from "@/components/sections/developer-builder/SectionDeepDiveNodeVisual";
import TheArchitectsCanvas from "@/components/sections/developer-builder/TheArchitectsCanvas";
import CtaSection from "@/components/sections/developer-builder/CtaSection";

export const metadata = {
  title: "Build & Monetize AI Agents | Shekel Developers",
  description: "Join Shekel as a developer. Build AI agents, list them on the marketplace, and earn revenue with a transparent commission model.",
  keywords: "build AI agents for marketplace",
};

export default function DeveloperBuilder() {
  return (
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <Hero />
      <ModularAgents />
      <HowItWorks />
      <EngineeredForPrecision />
      <SectionDeepDiveNodeVisual />
      <TheArchitectsCanvas />
      {/* sections in Figma y-order */}
      <CtaSection />
    </div>
  );
}
