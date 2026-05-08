import TestimonialsHero, { TestimonialsGrid, TestimonialsStats, TestimonialsTrending } from "@/components/sections/testimonials/TestimonialsGrid";
import { TestimonialsCTA } from "@/components/sections/testimonials/TestimonialsCTA";

export const metadata = {
  title: "Testimonials | Shekel",
  description: "Read what industry leaders and developers are saying about the Shekel AI Agent platform.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsStats />
      <TestimonialsTrending />
      <TestimonialsCTA />
    </div>
  );
}
