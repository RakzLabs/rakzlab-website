"use client";

import { useState } from "react";
import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rakzlab.healthcalchub";

const links = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Calculators" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary-dark text-white shadow-[0_6px_14px_-6px_rgba(15,93,78,0.6)]">
            R
          </span>
          Rakzlab Apps
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary-dark"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_-10px_rgba(22,33,28,0.55)] transition-colors hover:bg-[#0d1712] sm:inline-flex"
          >
            Get the App
          </a>
          <button
            aria-label="Open menu"
            className="p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="mb-1 block h-0.5 w-5 rounded bg-ink" />
            <span className="mb-1 block h-0.5 w-5 rounded bg-ink" />
            <span className="block h-0.5 w-5 rounded bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-b border-line bg-paper px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2 text-sm font-medium text-ink-soft"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get the App
          </a>
        </div>
      )}
    </header>
  );
}
