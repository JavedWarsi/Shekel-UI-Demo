import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";
import EarningsChart from "@/components/sections/creator/EarningsChart";
import EarningsTransactions from "@/components/sections/creator/Transactions";

export const metadata = {
  title: "Earnings & Revenue | Shekel Creator",
  description: "Track your agent revenue, manage payouts, and analyze your financial performance on the Shekel marketplace.",
};

export default function CreatorEarningsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] flex">
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <DashboardHeader 
          title="Earnings & Revenue" 
          subtitle="Manage your payouts and track your financial growth." 
        />

        <div className="space-y-12">
          <EarningsChart />
          <EarningsTransactions />
        </div>
      </main>
    </div>
  );
}
