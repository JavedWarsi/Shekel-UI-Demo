import TestimonialsHero, { TestimonialsGrid, TestimonialsStats} from "@/components/sections/testimonials/TestimonialsGrid";
import { TestimonialsCTA } from "@/components/sections/testimonials/TestimonialsCTA";
import TrendingAgents from "@/components/sections/search-result/TrendingAgents";
export const metadata = {
  title: "Testimonials | Shekel",
  description: "Read what industry leaders and developers are saying about the Shekel AI Agent platform.",
  keywords: "Shekel testimonials",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#05070C] transition-colors duration-300">
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsStats />
      {/* <TestimonialsTrending /> */}
      <TrendingAgents />
      <TestimonialsCTA />
    </div>
  );
}
