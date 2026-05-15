import NotFoundSection from "@/components/sections/404page/404page";

export const metadata = {
  title: "Page Not Found | Shekel AI Marketplace",
  description: "Oops! The page you're looking for doesn't exist. Head back to the Shekel marketplace to explore AI agents.",
  keywords: "Shekel 404",
};



export default function NotFoundPage() {
return (
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <main className="pt-[75px]">
        <NotFoundSection />
      </main>
    </div>
  );
}