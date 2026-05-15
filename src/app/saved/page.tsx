import Saved from "@/components/sections/saved/Saved";

// --- Mock Data ---


export const metadata = {
  title: "Saved Agents | Shekel Marketplace",
  description: "View your saved AI agents on Shekel. Revisit favorites and deploy them anytime with one click.",
  keywords: "Saved AI agents",
};



// --- Main Page Component ---

export default function SavedPage() {
  
  return (
   
    <div className="min-h-screen overflow-x-clip transition-colors duration-300">
      <main className="pt-[75px]">
       <Saved/>
      </main>
    </div>
  
  );
}
