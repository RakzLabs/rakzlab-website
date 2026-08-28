import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-[#FFFFFF] py-8 text-center">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-sm text-ink/65">
        <div>
          <span className="font-display font-medium text-ink">Rakzlab Apps</span>
          <span className="mx-2">•</span>
          <span>© {new Date().getFullYear()} Rakzlab. All rights reserved.</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <Link href="/privacy-policy" className="hover:text-teal transition-colors">
            Privacy Policy
          </Link>
          <Link href="/support" className="hover:text-teal transition-colors">
            Support
          </Link>
          <Link href="/contact" className="hover:text-teal transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
