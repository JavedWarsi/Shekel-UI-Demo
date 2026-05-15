// import TermsOfService from "@/components/sections/terms-of-service/TermsOfService";
import TermsOfService from "@/components/sections/terms-of-service/TermsOfService";

export const metadata = {
  title: "Terms and Conditions | Shekel AI Marketplace",
  description: "Read Shekel's terms of service governing use of our AI agent marketplace, developer listings, and platform transactions.",
  keywords: "Shekel terms of service",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <main className="pt-[75px]">
        <TermsOfService />
      </main>
    </div>
  );

}
