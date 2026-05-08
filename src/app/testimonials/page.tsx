import TestimonialsHero, { TestimonialsGrid, TestimonialsStats, TestimonialsTrending, TestimonialsCTA } from "@/components/sections/testimonials/TestimonialsGrid";

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
