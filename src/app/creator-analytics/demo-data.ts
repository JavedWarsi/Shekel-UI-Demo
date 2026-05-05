export const ANALYTICS_STATS = [
  { title: "Total Users", value: "3,200", trend: "+12%", trendType: "positive" as const },
  { title: "Total Runs", value: "12,840", trend: "+8.4%", trendType: "positive" as const },
  { title: "Conversion Rate", value: "6.2%", trend: "Optimal", trendType: "neutral" as const },
  { title: "Avg Session Time", value: "4m 20s", trend: "Stable", trendType: "neutral" as const },
];

export const USAGE_CHART_DATA = [
  { day: "Mon", height: "40%", highlighted: false },
  { day: "Tue", height: "55%", highlighted: false },
  { day: "Wed", height: "50%", highlighted: false },
  { day: "Thu", height: "85%", highlighted: true },
  { day: "Fri", height: "70%", highlighted: false },
  { day: "Sat", height: "35%", highlighted: false },
  { day: "Sun", height: "45%", highlighted: false },
];

export const TOP_AGENTS = [
  {
    name: "SEO Content Generator",
    category: "Marketing",
    runs: "2,140",
    revenue: "$1,200",
    icon: "/shared/google-icon.svg",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    name: "Email Workflow Pro",
    category: "Automation",
    runs: "1,890",
    revenue: "$945",
    icon: "/shared/header-logo.svg",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    name: "Visual Prompt Architect",
    category: "Design",
    runs: "1,420",
    revenue: "$710",
    icon: "/shared/astronaut.png",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export const CATEGORY_REACH = [
  { label: "Marketing", percentage: 52, color: "bg-[#0061C1]" },
  { label: "Automation", percentage: 34, color: "bg-blue-300" },
  { label: "Design", percentage: 14, color: "bg-blue-100" },
];
