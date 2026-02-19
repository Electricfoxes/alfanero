"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const navSections = [
  {
    label: "Overview",
    items: [
      { href: "/history", label: "History & Provenance" },
      { href: "/technical", label: "Technical Specifications" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    label: "Living Spaces",
    items: [
      { href: "/master-cabin", label: "Master Cabin" },
      { href: "/guest-accommodations", label: "Guest Accommodations" },
      { href: "/crew-spaces", label: "Crew Spaces" },
      { href: "/entertainment", label: "Entertainment" },
      { href: "/dining", label: "Dining" },
      { href: "/wellness", label: "Wellness & Spa" },
    ],
  },
  {
    label: "Design & Build",
    items: [
      { href: "/exterior-designer", label: "Nuvolari Lenard (Exterior)" },
      { href: "/interior-designer", label: "Alberto Pinto (Interior)" },
      { href: "/oceanco", label: "Oceanco (Builder)" },
    ],
  },
  {
    label: "Outdoor & Adventure",
    items: [
      { href: "/outdoor-living", label: "Outdoor Living" },
      { href: "/deck-space", label: "Deck Spaces" },
      { href: "/water-toys", label: "Water Toys & Garage" },
    ],
  },
];

const topNavLinks = [
  { href: "/history", label: "History" },
  { href: "/technical", label: "Specifications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/exterior-designer", label: "Design" },
  { href: "/master-cabin", label: "Accommodation" },
  { href: "/broker", label: "Enquire" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-3"
            : "bg-gradient-to-b from-black/50 to-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span
                className={`text-2xl tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                ALFA NERO
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {topNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] tracking-[0.15em] uppercase transition-colors duration-300 border-b pb-1 ${
                    pathname === link.href
                      ? isScrolled
                        ? "text-red-600 border-red-600"
                        : "text-white border-white"
                      : isScrolled
                        ? "text-black/70 hover:text-red-600 border-transparent"
                        : "text-white/80 hover:text-white border-transparent"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5"
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-px transition-all duration-300 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } ${
                    isMenuOpen
                      ? i === 0
                        ? "rotate-45 translate-y-[7px]"
                        : i === 1
                          ? "opacity-0"
                          : "-rotate-45 -translate-y-[7px]"
                      : ""
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="text-xl tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
                ALFA NERO
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center" aria-label="Close menu">
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            {navSections.map((section) => (
              <div key={section.label} className="px-6 mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-3 font-medium">
                  {section.label}
                </p>
                {section.items.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm font-light transition-colors ${
                      pathname === link.href ? "text-red-600" : "text-black/70 hover:text-red-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-6 pt-4 border-t border-black/10">
              <Link
                href="/broker"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-light text-black/70 hover:text-red-600 transition-colors"
              >
                Acquisition Enquiry
              </Link>
              <Link
                href="/full-tour"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-light text-black/70 hover:text-red-600 transition-colors"
              >
                Full Video Tour
              </Link>
            </div>
          </div>

          <div className="p-6 border-t border-black/10">
            <p className="text-xs text-black/40 text-center">
              YEAR 2007 · REFIT 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
