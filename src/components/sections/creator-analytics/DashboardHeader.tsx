import React from "react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-[56px] font-bold text-[#111827] dark:text-white tracking-tighter leading-none">Creator Analytics</h1>
      <p className="text-[18px] text-gray-400 max-w-[540px] leading-relaxed">
        Real-time performance metrics and intelligent insights for your active AI agents.
      </p>
    </div>
  );
}
