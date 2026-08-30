import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rakzlab.healthcalchub";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-6 pt-10">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-8">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary-dark text-white">
              R
            </span>
            Rakzlab Apps
          </div>
          <p className="mt-3 text-sm text-ink-faint">
            We build modern mobile apps that help people make better
            decisions through accurate calculations, clean design, and an
            intuitive experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-14">
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-faint">
              Product
            </h4>
            <Link href="/" className="mb-2 block text-sm text-ink-soft hover:text-primary-dark">
              Home
            </Link>
            <Link href="/#features" className="mb-2 block text-sm text-ink-soft hover:text-primary-dark">
              Calculators
            </Link>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-faint">
              Company
            </h4>
            <Link href="/privacy-policy" className="mb-2 block text-sm text-ink-soft hover:text-primary-dark">
              Privacy Policy
            </Link>
            <Link href="/support" className="mb-2 block text-sm text-ink-soft hover:text-primary-dark">
              Support
            </Link>
            <Link href="/contact" className="mb-2 block text-sm text-ink-soft hover:text-primary-dark">
              Contact
            </Link>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-faint">
              Get the app
            </h4>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-ink-soft hover:text-primary-dark"
            >
              Health Calc Hub on Play
            </a>
            <span className="block text-sm text-ink-soft">rakzlab@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-between gap-2 border-t border-line pt-5 text-xs text-ink-faint">
        <span>Rakzlab Apps · © {new Date().getFullYear()} Rakzlab. All rights reserved.</span>
        <span>Results are for informational purposes only and are not medical advice.</span>
      </div>
    </footer>
  );
}
