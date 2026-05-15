import Hero from "@/components/sections/about/Hero";
import WhatIsShekel from "@/components/sections/about/WhatIsShekel";
import ProblemSolution from "@/components/sections/about/ProblemSolution";
import Differentiation from "@/components/sections/about/Differentiation";
import WhatYouCanDo from "@/components/sections/about/WhatYouCanDo";
import HowItWorks from "@/components/sections/about/HowItWorks";
import CorePrinciples from "@/components/sections/about/CorePrinciples";
import Cta from "@/components/sections/about/Cta";

export const metadata = {
  title: "About Shekel | Our Mission & Vision",
  description: "Shekel is building the future of AI commerce — a decentralized marketplace where AI agents create real-world value for everyone.",
};


export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <main className="pt-[75px]">
        <Hero />        <WhatIsShekel />
        <ProblemSolution />
        <Differentiation />
        <WhatYouCanDo />
        <HowItWorks />
        <CorePrinciples />
        <Cta />
      </main>
    </div>
  );
}
