"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/shared/Button";
import ThemeToggle from "@/components/shared/ThemeToggle";

// Figma node 500:21978 — Frame 2147225667 (1280 × 75)
// fill: #000000, logo at x=47 y=21, nav at x=369 gap=32, search at x=802, button at x=1092

const NAV_LINKS = [
  { label: "Browse", href: "/marketplace" },
  { label: "Solutions", href: "/workflows" },
  { label: "Pricing", href: "/pricing" },
  { label: "Developers", href: "/developer-builder" },
] as const;

export default function Header() {
  const pathname = usePathname();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const inHeader = headerRef.current?.contains(target);
      const inDrawer = drawerRef.current?.contains(target);
      if (!inHeader && !inDrawer) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeOverlays = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header is ALWAYS dark — wrapped in .always-dark in layout.tsx */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 h-[75px] border-b border-white/10 bg-black/90 backdrop-blur-md transition-all duration-300"
      >
        <div className="flex h-full w-full items-center px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center">
            <Link href="/" aria-label="Shekel home" className="shrink-0">
              <Image
                src="/shared/header-logo.svg"
                alt="Shekel"
                width={127}
                height={34}
                className="transition-all duration-300"
                priority
              />
            </Link>
          </div>

          <div className="hidden min-w-0 flex-1 justify-center px-8 lg:flex xl:px-12">
            <nav className="flex w-full max-w-[520px] items-center justify-center gap-10 xl:max-w-[620px] xl:gap-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-[#b7b7b8] transition-[color,opacity] duration-200 ease-out hover:text-white hover:opacity-100"
                  style={{
                    fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "22px",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex-1 lg:hidden" />

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="nav">Get Started</Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[5px] border border-white/10 text-[#c6c6c7] transition-colors hover:border-white/20 hover:text-white"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <aside
        ref={drawerRef}
        id="mobile-nav-drawer"
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-[75px] z-50 h-[calc(100vh-75px)] w-[290px] max-w-[85vw] border-l border-white/10 bg-black px-6 py-8 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={`mobile-${link.label}`}
              href={link.href}
              onClick={closeOverlays}
              className="text-[18px] font-medium leading-7 text-[#b7b7b8] transition-colors duration-200 ease-out hover:text-white"
              style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 pt-10 border-t border-white/5">
          <Link href="/connect-us" onClick={closeOverlays} className="block w-full">
            <Button variant="nav" className="w-full">
              Get Started
            </Button>
          </Link>
        </div>
      </aside>    </>
  );
}
