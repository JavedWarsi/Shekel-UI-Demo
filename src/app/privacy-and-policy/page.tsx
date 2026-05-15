
import PrivacyPolicy from "@/components/sections/privacy-and-policy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | Shekel AI Agent Marketplace",
  description: "Learn how Shekel collects, stores, and protects your data. Your privacy is our priority on the AI agent platform.",
  keywords: "Shekel privacy policy",
};

export default function PrivacyPolicyPage() {
return (
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <main className="pt-[75px]">
       <PrivacyPolicy/>
      </main>
    </div>
  );
}
