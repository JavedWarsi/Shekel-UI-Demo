import FaqHero from "@/components/sections/faq/FaqHero";
import SearchFilter from "@/components/sections/faq/SearchFilter";
import FaqCategories from "@/components/sections/faq/FaqCategories";
import CtaFaq from "@/components/sections/faq/CtaFaq";

export const metadata = {
  title: "FAQ | Shekel AI Marketplace Help Center",
  description: "Got questions? Find answers about Shekel's AI agent marketplace — pricing, listings, commissions, and developer tools.",
  keywords: "Shekel FAQ",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <main className="pt-[75px]">
        <FaqHero />
        <SearchFilter />
        <FaqCategories />
        <CtaFaq />
      </main>
    </div>
  );
}
