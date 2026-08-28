"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import SearchModal from "./SearchModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-[#FFFFFF] shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl font-light tracking-wide text-[#202124] hover:text-teal transition-colors"
          >
            Rakzlab Apps
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-6 font-body text-[15px]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative py-1 transition-colors ${
                        isActive
                          ? "font-medium text-teal"
                          : "text-ink/80 hover:text-teal"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-teal" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center p-2 text-ink/70 hover:text-teal hover:bg-mint/40 rounded-full transition-colors"
              aria-label="Search site"
              title="Search this site"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-ink/70 hover:text-teal transition-colors"
              aria-label="Search site"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ink/70 hover:text-teal transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="border-t border-line bg-white px-6 py-4 md:hidden animate-fadeUp">
            <ul className="flex flex-col gap-3 font-body text-base">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 rounded-md px-3 transition-colors ${
                        isActive
                          ? "bg-mint/50 font-medium text-teal"
                          : "text-ink/80 hover:bg-gray-50 hover:text-teal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>

      {/* Site Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
