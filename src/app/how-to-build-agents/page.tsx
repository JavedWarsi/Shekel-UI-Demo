import HowToBuildHero from "@/components/sections/how-to-build/Hero";
import GettingStarted from "@/components/sections/how-to-build/GettingStarted";
import CreateSteps from "@/components/sections/how-to-build/CreateSteps";
import AddCapabilities from "@/components/sections/how-to-build/AddCapabilities";
import ConfigSandbox from "@/components/sections/how-to-build/ConfigSandbox";
import PublishStep from "@/components/sections/how-to-build/PublishStep";
import CtaFaq from "@/components/sections/how-to-build/CtaFaq";
// import FinalCTA from "@/components/sections/how-to-build/FinalCTA";

export const metadata = {
  title: "How to Build Agents | Shekel Developer Portal",
  description: "Learn how to build, test, and deploy autonomous AI agents on the Shekel platform with our comprehensive developer guide.",
};

export default function HowToBuildPage() {
  return (
    <div className="min-h-screen bg-white">
      <HowToBuildHero />
      <GettingStarted />
      <CreateSteps />
      <AddCapabilities />
      <ConfigSandbox />
      <PublishStep />
      <CtaFaq />
      {/* <FinalCTA /> */}
    </div>
  );
}
