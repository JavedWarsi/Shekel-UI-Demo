import BrandAssetsHero from "@/components/sections/brand-assets/Hero";
import BrandAssetsIdentity from "@/components/sections/brand-assets/Identity";
import BrandAssetsLogos from "@/components/sections/brand-assets/Logos";
import BrandAssetsMascot from "@/components/sections/brand-assets/Mascot";
import BrandAssetsColors from "@/components/sections/brand-assets/Colors";
import BrandAssetsTypography from "@/components/sections/brand-assets/Typography";
import BrandAssetsUsage from "@/components/sections/brand-assets/Usage";
// import BrandAssetsCTA from "@/components/sections/brand-assets/CTA";
import CtaSection from "@/components/sections/explore-agent/CtaSection";

export const metadata = {
  title: "Brand Assets | Shekel Brand Guidelines",
  description: "Official brand assets, logos, and color palettes for the Shekel platform. Download our brand kit for your marketing and product needs.",
};

export default function BrandAssetsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-[75px]">
        <BrandAssetsHero />
        <BrandAssetsIdentity />
        <BrandAssetsLogos />
        <BrandAssetsMascot />
        <BrandAssetsColors />
        <BrandAssetsTypography />
        <BrandAssetsUsage />
        {/* <BrandAssetsCTA /> */}
        <CtaSection />
      </main>
    </div>
  );
}
