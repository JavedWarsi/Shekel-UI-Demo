import SearchResultHero from "@/components/sections/search-result/SearchResultHero";
import SearchResultGrid from "@/components/sections/search-result/SearchResultGrid";

export const metadata = {
  title: "Search Results | Shekel",
  description: "Find the perfect autonomous AI agent for your specific needs on the Shekel marketplace.",
};

export default function SearchResultPage() {
  return (
    <div className="min-h-screen bg-white">
      <SearchResultHero />
      <SearchResultGrid />
    </div>
  );
}
