"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowLeft, FileText, ArrowRight } from "lucide-react";

interface SearchResultItem {
  pageTitle: string;
  url: string;
  snippet: string;
  matchScore: number;
}

const siteContent = [
  {
    title: "Home",
    url: "/",
    content:
      "Welcome to Rakzlab Apps. Rakzlab Apps develops modern Mobile applications that help people make better decisions through accurate calculations, clean design, and an intuitive user experience. Our applications focus on health, fitness, productivity, and practical everyday tools. We are committed to delivering reliable, user-friendly, and privacy-focused mobile applications. Health Calc Hub is an all-in-one collection of health and fitness calculators designed to provide fast, accurate, and easy-to-understand results. Version 1.0 includes BMI Calculator, BMR Calculator, TDEE Calculator, Calorie Calculator, Body Fat Calculator, Ideal Weight Calculator. More health calculators will be added through future updates. Verified calculation formulas designed for reliable results. Your calculation data stays on your device whenever possible. We regularly improve our applications with new features and enhancements.",
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
    content:
      "Privacy Policy. Effective Date: July 22, 2026. Health Calc Hub the App is developed and published by Rakzlab. This Privacy Policy explains how information is collected, used, and protected when you use our application. Information We Collect: Health Calc Hub is designed to perform health calculations directly on your device. The application may collect the information you enter, including Age, Gender, Height, Weight, Activity Level, Health-related calculation inputs. This information is processed locally on your device to generate calculation results. We do not sell your personal information. Data Storage: Calculation inputs and preferences may be stored locally on your device to improve your experience. We do not transmit your health information to our servers. Third-Party Services: The application may use Google services such as Google Play Services. Future versions may include services such as Firebase Analytics or Google AdMob. Permissions: The application only requests permissions required for its intended functionality. Data Security: We take reasonable measures to protect your information. Children's Privacy: Health Calc Hub is not specifically directed toward children under the age of 13. Medical Disclaimer: Health Calc Hub provides health-related calculations for informational and educational purposes only. The application does not provide medical advice, diagnosis, or treatment. Developer Rakzlab Application Health Calc Hub Package Name com.rakzlab.healthcalchub Email rakzlab@gmail.com.",
  },
  {
    title: "Support",
    url: "/support",
    content:
      "Support. Thank you for using Health Calc Hub. If you experience any issues or have suggestions for improving the application, we'd love to hear from you. Support Email : rakzlab@gmail.com. We aim to respond within 3–5 business days. Common Support Topics: App crashes, Incorrect calculation results, Feature requests, Bug reports, General feedback.",
  },
  {
    title: "Contact",
    url: "/contact",
    content:
      "Contact. Developer : Rakzlab. Application : Health Calc Hub. Support Email : rakzlab@gmail.com. Business inquiries are welcome.",
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const terms = trimmed.split(/\s+/).filter(Boolean);
    const searchResults: SearchResultItem[] = [];

    siteContent.forEach((item) => {
      const lowerContent = item.content.toLowerCase();
      const lowerTitle = item.title.toLowerCase();

      let matchCount = 0;
      let firstIndex = -1;

      terms.forEach((term) => {
        if (lowerTitle.includes(term)) {
          matchCount += 5;
        }
        const idx = lowerContent.indexOf(term);
        if (idx !== -1) {
          matchCount += 1;
          if (firstIndex === -1 || idx < firstIndex) {
            firstIndex = idx;
          }
        }
      });

      if (matchCount > 0) {
        const start = Math.max(0, firstIndex - 40);
        const end = Math.min(item.content.length, firstIndex + 140);
        let snippet = item.content.slice(start, end);
        if (start > 0) snippet = "..." + snippet;
        if (end < item.content.length) snippet = snippet + "...";

        searchResults.push({
          pageTitle: item.title,
          url: item.url,
          snippet,
          matchScore: matchCount,
        });
      }
    });

    return searchResults.sort((a, b) => b.matchScore - a.matchScore);
  }, [query]);

  if (!isOpen) return null;

  const highlightMatch = (text: string, queryText: string) => {
    const terms = queryText.trim().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return text;

    const regex = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <strong key={i} className="font-semibold text-teal-800 underline decoration-teal/40">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Search dialog"
      onClick={onClose}
    >
      <div
        className="w-full bg-white shadow-xl animate-fadeUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3 rounded-lg border border-line bg-gray-50/70 px-4 py-2.5 focus-within:border-teal focus-within:bg-white focus-within:ring-2 focus-within:ring-teal/20 transition-all">
            <button
              onClick={onClose}
              className="text-ink/60 hover:text-ink transition-colors p-1"
              aria-label="Close search"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <Search className="h-5 w-5 text-ink/50 shrink-0" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search this site..."
              className="w-full bg-transparent font-body text-base text-ink placeholder:text-ink/45 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-ink/50 hover:text-ink transition-colors p-1"
                aria-label="Clear query"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className="mx-auto w-full max-w-4xl flex-1 overflow-y-auto px-4 py-6 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {query.trim() ? (
          <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
            <div className="border-b border-line pb-3 text-xs font-mono uppercase tracking-wider text-ink/60">
              Results from this site ({results.length})
            </div>

            {results.length > 0 ? (
              <div className="divide-y divide-line/60">
                {results.map((res) => (
                  <Link
                    key={res.url}
                    href={res.url}
                    onClick={onClose}
                    className="group block py-4 transition-colors hover:bg-mint/10 -mx-3 px-3 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-teal" />
                        <h4 className="font-display text-lg font-medium text-teal group-hover:underline">
                          {highlightMatch(res.pageTitle, query)}
                        </h4>
                      </div>
                      <ArrowRight className="h-4 w-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-teal" />
                    </div>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">
                      {highlightMatch(res.snippet, query)}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-ink/60">
                <p className="font-body text-sm">No results matching &ldquo;{query}&rdquo; found.</p>
                <p className="mt-1 font-body text-xs text-ink/40">Try searching for keywords like &ldquo;Health&rdquo;, &ldquo;Calculators&rdquo;, &ldquo;Privacy&rdquo;, or &ldquo;Support&rdquo;.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-line bg-white/90 p-6 text-center text-ink/60 shadow-sm">
            <p className="font-body text-sm text-ink/70">Type in a term above to search all pages and content across Rakzlab Apps.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 font-body text-xs text-ink/60">
              <span>Quick links:</span>
              <Link href="/" onClick={onClose} className="text-teal hover:underline">Home</Link>
              <span>•</span>
              <Link href="/privacy-policy" onClick={onClose} className="text-teal hover:underline">Privacy Policy</Link>
              <span>•</span>
              <Link href="/support" onClick={onClose} className="text-teal hover:underline">Support</Link>
              <span>•</span>
              <Link href="/contact" onClick={onClose} className="text-teal hover:underline">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
