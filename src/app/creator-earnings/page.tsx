import EarningsHeader from "@/components/sections/creator-earnings/Header";
import EarningsStats from "@/components/sections/creator-earnings/Stats";
import EarningsChart from "@/components/sections/creator-earnings/RevenueChart";
import EarningsTransactions from "@/components/sections/creator-earnings/Transactions";
import EarningsBottomCTA from "@/components/sections/creator-earnings/BottomCTA";
// import DashboardSidebar from "@/components/shared/DashboardSidebar";

export const metadata = {
  title: "Creator Earnings | Revenue Dashboard | Shekel",
  description: "Track your earnings from AI agent sales on Shekel. View payout history, commission breakdown, and revenue trends.",
  keywords: "AI agent creator earnings",
};

export default function CreatorEarningsPage() {
  return (
    <div className="min-h-screen relative bg-[#F8FAFC] dark:bg-[#05070C] flex flex-col md:flex-row">
      {/* <DashboardSidebar /> */}
      
      <div className="flex-1 relative">
        {/* Soft Blue Top Gradient */}
        <div 
          className="absolute top-0 left-0 w-full h-[800px] pointer-events-none opacity-40 dark:opacity-10"
          style={{
            background: "linear-gradient(180deg, #D4E1FE 0%, rgba(212, 225, 254, 0.4) 30%, transparent 100%)"
          }}
        />
        
        <main className="relative z-10 pt-[100px] pb-20">
          <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
            <EarningsHeader />
            <EarningsStats />
            <EarningsChart />
            <EarningsTransactions />
          </div>
        </main>
        
        {/* Full width bottom CTA */}
        <EarningsBottomCTA />
      </div>
    </div>
  );
}
