import Hero from "@/components/sections/developer-builder/Hero";
import ModularAgents from "@/components/sections/developer-builder/ModularAgents";
import HowItWorks from "@/components/sections/developer-builder/HowItWorks";
import EngineeredForPrecision from "@/components/sections/developer-builder/EngineeredForPrecision";
import SectionDeepDiveNodeVisual from "@/components/sections/developer-builder/SectionDeepDiveNodeVisual";
import TheArchitectsCanvas from "@/components/sections/developer-builder/TheArchitectsCanvas";
import CtaSection from "@/components/sections/developer-builder/CtaSection";

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
