import type { Metadata } from "next";
import {
  Database,
  ShieldCheck,
  Globe2,
  KeyRound,
  Lock,
  Baby,
  Stethoscope,
  RefreshCcw,
  Mail,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Health Calc Hub by Rakzlab — what information is collected, how it's stored, and which third-party services are used.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Rakzlab Apps",
    description:
      "Privacy Policy for Health Calc Hub and mobile applications developed and published by Rakzlab Apps.",
    url: "/privacy-policy",
  },
};

const toc = [
  { href: "#info-collect", label: "Information We Collect" },
  { href: "#data-storage", label: "Data Storage" },
  { href: "#third-party", label: "Third-Party Services" },
  { href: "#permissions", label: "Permissions" },
  { href: "#security", label: "Data Security" },
  { href: "#children", label: "Children's Privacy" },
  { href: "#disclaimer", label: "Medical Disclaimer" },
  { href: "#changes", label: "Changes to this Policy" },
  { href: "#contact", label: "Contact" },
];

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 border-b border-line py-6 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="flex items-center gap-3 font-display text-xl font-semibold">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-paper-alt text-primary">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] text-ink-soft [&_a]:font-semibold [&_a]:text-primary-dark [&_li]:flex [&_li]:gap-2.5 [&_ul]:mt-1 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Legal
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-ink-faint">
          Effective Date: <b className="text-ink-soft">July 22, 2026</b> ·
          Applies to <b className="text-ink-soft">Health Calc Hub</b>{" "}
          (com.rakzlab.healthcalchub), developed and published by Rakzlab.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 md:grid-cols-[220px_1fr]">
        <nav aria-label="On this page" className="hidden md:sticky md:top-24 md:block md:h-fit">
          <span className="mb-2.5 block text-xs font-bold uppercase tracking-wide text-ink-faint">
            On this page
          </span>
          <div className="flex flex-col gap-0.5">
            {toc.map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-paper-alt hover:text-primary-dark"
              >
                {t.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10">
          <p className="pb-6 text-ink-soft">
            Health Calc Hub (&ldquo;the App&rdquo;) is developed and published
            by Rakzlab. This Privacy Policy explains how information is
            collected, used, and protected when you use our application.
          </p>

          <Section id="info-collect" icon={Database} title="Information We Collect">
            <p>
              Health Calc Hub is designed to perform health calculations
              directly on your device. The application may collect the
              information you enter, including:
            </p>
            <ul>
              <li>Age</li>
              <li>Gender</li>
              <li>Height</li>
              <li>Weight</li>
              <li>Activity Level</li>
              <li>Health-related calculation inputs</li>
            </ul>
            <p>
              This information is processed locally on your device to
              generate calculation results. We do not sell your personal
              information.
            </p>
          </Section>

          <Section id="data-storage" icon={Lock} title="Data Storage">
            <p>
              Calculation inputs and preferences may be stored locally on
              your device to improve your experience. We do not transmit
              your health information to our servers.
            </p>
          </Section>

          <Section id="third-party" icon={Globe2} title="Third-Party Services">
            <p>The application uses the following Google services:</p>
            <ul>
              <li>
                <span>
                  <b className="text-ink">Google Play Services</b> — required
                  for the app to run on Android.
                </span>
              </li>
              <li>
                <span>
                  <b className="text-ink">Firebase Analytics</b> — helps us
                  understand how the app is used (e.g. which calculators are
                  opened, app performance and crash data) so we can improve
                  it. This data is aggregated and not linked to your health
                  calculation inputs.
                </span>
              </li>
              <li>
                <span>
                  <b className="text-ink">Google AdMob</b> — used to display
                  ads within the app. AdMob may collect device identifiers
                  (such as your Advertising ID), approximate location, and
                  app usage data to show and measure ads.
                </span>
              </li>
            </ul>
            <p>
              These services may collect information such as device
              identifiers, IP address, and general usage data under their
              own privacy policies. You can review Google&apos;s practices in
              the{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
              , and manage ad personalization at any time via your
              device&apos;s <b className="text-ink">Settings → Privacy → Ads</b>{" "}
              (or Google Settings on older Android versions).
            </p>
            <div className="mt-1 flex gap-3 rounded-xl border border-[#FFD9CB] bg-[#FFF6F3] p-4 text-sm text-[#7A2E1B]">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-accent" />
              <span>
                Health Calc Hub contains ads. Your health calculation inputs
                (age, height, weight, etc.) are never shared with Firebase
                Analytics, AdMob, or any advertising partner — they stay on
                your device.
              </span>
            </div>
          </Section>

          <Section id="permissions" icon={KeyRound} title="Permissions">
            <p>
              The application only requests permissions required for its
              intended functionality.
            </p>
          </Section>

          <Section id="security" icon={ShieldCheck} title="Data Security">
            <p>
              We take reasonable measures to protect your information.
              However, no method of electronic storage is completely secure.
            </p>
          </Section>

          <Section id="children" icon={Baby} title="Children's Privacy">
            <p>
              Health Calc Hub is not specifically directed toward children
              under the age of 13.
            </p>
          </Section>

          <Section id="disclaimer" icon={Stethoscope} title="Medical Disclaimer">
            <p>
              Health Calc Hub provides health-related calculations for
              informational and educational purposes only. The application
              does not provide medical advice, diagnosis, or treatment.
              Always consult a qualified healthcare professional before
              making medical decisions.
            </p>
          </Section>

          <Section id="changes" icon={RefreshCcw} title="Changes to this Policy">
            <p>
              We may update this Privacy Policy from time to time. Any
              changes will be published on this page.
            </p>
          </Section>

          <Section id="contact" icon={Mail} title="Contact">
            <div className="grid gap-3 rounded-xl bg-paper-alt p-5 sm:grid-cols-2">
              <div>
                <b className="block text-[10px] font-bold uppercase tracking-wide text-ink-faint">
                  Developer
                </b>
                Rakzlab
              </div>
              <div>
                <b className="block text-[10px] font-bold uppercase tracking-wide text-ink-faint">
                  Application
                </b>
                Health Calc Hub
              </div>
              <div>
                <b className="block text-[10px] font-bold uppercase tracking-wide text-ink-faint">
                  Package Name
                </b>
                com.rakzlab.healthcalchub
              </div>
              <div>
                <b className="block text-[10px] font-bold uppercase tracking-wide text-ink-faint">
                  Email
                </b>
                <a href="mailto:rakzlab@gmail.com" className="text-primary-dark hover:underline">
                  rakzlab@gmail.com
                </a>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
