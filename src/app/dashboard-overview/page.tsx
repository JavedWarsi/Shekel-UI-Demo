import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";
import DashboardStats from "@/components/sections/dashboard/Stats";
import DashboardActivity from "@/components/sections/dashboard/Activity";

export const metadata = {
  title: "Dashboard Overview | Shekel",
  description: "Manage your AI agents, track performance, and monitor earnings all in one place.",
};

export default function DashboardOverviewPage() {
  return (
    <div className="min-h-screen bg-[#f8fafd] flex">
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <DashboardHeader 
          title="Welcome back, Alex!" 
          subtitle="Here's what's happening with your agents today." 
        />

        <div className="space-y-8">
          <DashboardStats />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DashboardActivity />
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.06)] rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#0b0b0b] mb-6">Network Health</h3>
              <div className="space-y-6">
                {[
                  { label: "API Latency", value: "42ms", percent: 92, color: "#2864e4" },
                  { label: "Uptime", value: "99.99%", percent: 100, color: "#10b981" },
                  { label: "Resource Usage", value: "64%", percent: 64, color: "#7c4dff" }
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-[13px] font-bold mb-2">
                      <span className="text-[#475569]">{item.label}</span>
                      <span className="text-[#0b0b0b]">{item.value}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.percent}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-[#f8fafd] rounded-xl border border-[rgba(0,0,0,0.04)]">
                <p className="text-[12px] font-medium text-[#475569] leading-relaxed">
                  All systems are operational. No critical issues detected in your active agent fleet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
