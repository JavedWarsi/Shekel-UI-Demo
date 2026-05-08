import CaseStudyHeader from "@/components/sections/case-study-detail/CaseStudyHeader";
import CaseStudyContent from "@/components/sections/case-study-detail/CaseStudyContent";

// Mock data
const CASE_STUDIES_DATA: Record<string, any> = {
  "nexus-analytics-data-automation": {
    company: "Nexus Analytics",
    title: "Automating Global Market Research with 500+ Autonomous Agents",
    description: "How Nexus Analytics reduced their data processing time by 85% while increasing accuracy across multi-language markets.",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=1200",
    color: "#2864e4"
  },
  "growthstack-marketing-scaling": {
    company: "GrowthStack",
    title: "Scaling Personalized Marketing Campaigns at Infinite Velocity",
    description: "GrowthStack utilized Shekel's marketing agents to generate 10,000+ unique ad variants daily, optimized by real-time performance data.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    color: "#56ccf2"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA[slug];
  if (!study) return { title: "Case Study | Shekel" };
  return {
    title: `${study.company} Case Study | Shekel`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA[slug];
  
  const displayStudy = study || {
    company: "Enterprise Partner",
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    description: "A detailed look at how Shekel transformed operations for one of our enterprise partners.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    color: "#2864e4"
  };

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHeader study={displayStudy} />
      <CaseStudyContent study={displayStudy} />
    </div>
  );
}
