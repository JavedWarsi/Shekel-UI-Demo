import DashboardHero from "@/components/sections/dashboard/Hero";
import DashboardStats from "@/components/sections/dashboard/Stats";
import DashboardQuickActions from "@/components/sections/dashboard/QuickActions";
import DashboardActivity from "@/components/sections/dashboard/Activity";
import DashboardTrending from "@/components/sections/dashboard/Trending";

export const metadata = {
  title: "Dashboard Overview | Shekel",
  description: "View your AI workflows, agent statistics, and recent activity.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen relative bg-[#F8FAFC]">
      {/* Background Gradient matching the Figma design */}
      <div 
        className="absolute top-0 left-0 w-full h-[600px] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #E0E7FF 0%, rgba(224, 231, 255, 0.4) 40%, #F8FAFC 100%)"
        }}
      />
      
      <main className="relative z-10 pt-[75px]">
        <DashboardHero />
        <DashboardStats />
        
        {/* Main 2-column layout */}
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <DashboardQuickActions />
            </div>
            <div className="lg:col-span-7">
              <DashboardActivity />
            </div>
          </div>
        </div>

        <DashboardTrending />
      </main>
    </div>
  );
}
