import type { Metadata } from "next";
import { Inter, Poppins, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  // title: "Shekel — The AI Agent Marketplace",
  title: "Shekel — Decentralized AI Agent Marketplace",
  description: "Discover, deploy, and monetize AI agents on Shekel — the decentralized marketplace for autonomous AI tools built for every industry.",
  // description: "Discover, deploy, and monetize high-performance decentralized intelligence. The premier ecosystem for chaining autonomous workflows across industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${plusJakartaSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Header always stays dark – scoped via always-dark wrapper */}
          <div className="always-dark">
            <Header />
          </div>
          <main className="flex-grow">
            {children}
          </main>
          {/* Footer always stays dark – scoped via always-dark wrapper */}
          <div className="always-dark">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
