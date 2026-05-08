import HowToBuildHero from "@/components/sections/how-to-build/Hero";
import HowToBuildSteps from "@/components/sections/how-to-build/Steps";
import HowToBuildResources from "@/components/sections/how-to-build/Resources";

export const metadata = {
  title: "How to Build Agents | Shekel Developer Portal",
  description: "Learn how to build, test, and deploy autonomous AI agents on the Shekel platform with our comprehensive developer guide.",
};

export default function HowToBuildPage() {
  return (
    <div className="min-h-screen">
      <HowToBuildHero />
      <HowToBuildSteps />
      <HowToBuildResources />
    </div>
  );
}
