import CaseStudiesHero from "@/components/sections/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/sections/case-studies/CaseStudiesList";

export const metadata = {
  title: "Case Studies | Shekel",
  description: "Real-world examples of how businesses are leveraging Shekel AI agents to drive efficiency and innovation.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <CaseStudiesHero />
      <CaseStudiesList />
    </div>
  );
}
