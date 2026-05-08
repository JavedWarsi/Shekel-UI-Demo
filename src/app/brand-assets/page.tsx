import BrandAssetsHero from "@/components/sections/brand-assets/Hero";
import BrandAssetsLogos from "@/components/sections/brand-assets/Logos";
import BrandAssetsColors from "@/components/sections/brand-assets/Colors";

export const metadata = {
  title: "Brand Assets | Shekel Brand Guidelines",
  description: "Official brand assets, logos, and color palettes for the Shekel platform. Download our brand kit for your marketing and product needs.",
};

export default function BrandAssetsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BrandAssetsHero />
      <BrandAssetsLogos />
      <BrandAssetsColors />
    </div>
  );
}
