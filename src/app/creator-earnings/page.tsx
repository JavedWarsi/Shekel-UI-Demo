import EarningsHeader from "@/components/sections/creator-earnings/Header";
import EarningsStats from "@/components/sections/creator-earnings/Stats";
import EarningsChart from "@/components/sections/creator-earnings/RevenueChart";
import EarningsTransactions from "@/components/sections/creator-earnings/Transactions";
import EarningsBottomCTA from "@/components/sections/creator-earnings/BottomCTA";

export const metadata = {
  title: "Earnings | Creator Dashboard",
  description: "Monitor your revenue flow and payout status.",
};

export default function CreatorEarningsPage() {
  return (
    <div className="min-h-screen relative bg-[#F8FAFC]">
      {/* Soft Blue Top Gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-[800px] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #D4E1FE 0%, rgba(212, 225, 254, 0.4) 30%, #F8FAFC 100%)"
        }}
      />
      
      <main className="relative z-10 pt-[100px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <EarningsHeader />
          <EarningsStats />
          <EarningsChart />
          <EarningsTransactions />
        </div>
        
        {/* Full width bottom CTA */}
        <EarningsBottomCTA />
      </main>
    </div>
  );
}
