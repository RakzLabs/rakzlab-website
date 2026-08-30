import {
  ShieldCheck,
  CheckCircle2,
  Timer,
  Activity,
  Flame,
  Scale,
  Percent,
  Ruler,
  Smartphone,
  Sparkles,
} from "lucide-react";
import BmiGauge from "@/components/BmiGauge";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rakzlab.healthcalchub";

const calculators = [
  {
    icon: Activity,
    name: "BMI Calculator",
    desc: "Instant Body Mass Index with metric & imperial units and clear classification bands.",
  },
  {
    icon: Flame,
    name: "BMR Calculator",
    desc: "Your Basal Metabolic Rate — the energy your body needs at complete rest.",
  },
  {
    icon: Timer,
    name: "TDEE Calculator",
    desc: "Total Daily Energy Expenditure, factoring in activity level and lifestyle.",
  },
  {
    icon: Scale,
    name: "Calorie Calculator",
    desc: "Daily calorie targets for weight loss, maintenance, or healthy weight gain.",
  },
  {
    icon: Percent,
    name: "Body Fat Calculator",
    desc: "Estimate body fat percentage using proven circumference-based methods.",
  },
  {
    icon: Ruler,
    name: "Ideal Weight Calculator",
    desc: "A healthy target weight range based on your height and frame.",
  },
];

const whyCards = [
  {
    icon: ShieldCheck,
    title: "Privacy-focused",
    desc: "Your calculation data stays on your device whenever possible.",
  },
  {
    icon: CheckCircle2,
    title: "Verified formulas",
    desc: "Calculation formulas are designed for reliable, accurate results.",
  },
  {
    icon: Sparkles,
    title: "Always improving",
    desc: "We regularly improve our applications with new features and enhancements.",
  },
  {
    icon: Smartphone,
    title: "Made for Android",
    desc: "A clean, intuitive interface tuned for a fast, native feel.",
  },
];

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Health Calc Hub",
  operatingSystem: "Android",
  applicationCategory: "HealthApplication",
  description:
    "Health Calc Hub is an all-in-one collection of health and fitness calculators designed to provide fast, accurate, and easy-to-understand results on-device.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  installUrl: PLAY_STORE_URL,
  downloadUrl: PLAY_STORE_URL,
  featureList: [
    "BMI Calculator",
    "BMR Calculator",
    "TDEE Calculator",
    "Calorie Calculator",
    "Body Fat Calculator",
    "Ideal Weight Calculator",
  ],
  author: {
    "@type": "Organization",
    name: "Rakzlab Apps",
    url: "https://www.rakzlab.com",
  },
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {/* ================= HERO ================= */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-16 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now live on Google Play
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Know your numbers.
            <br />
            Own your <span className="text-primary">health.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Health Calc Hub is an all-in-one collection of health and fitness
            calculators designed to provide fast, accurate, and
            easy-to-understand results.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_-10px_rgba(255,90,54,0.6)] transition-colors hover:bg-[#e64d2b]"
            >
              Get it on Google Play
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink-soft"
            >
              See what&apos;s inside
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-6 text-sm font-medium text-ink-faint">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Privacy-focused
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> No sign-up required
            </span>
            <span className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-primary" /> Results in seconds
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[250px] rounded-[38px] bg-gradient-to-br from-[#1c2b25] to-[#0c1310] p-3 shadow-pop">
            <div className="relative flex h-[484px] flex-col overflow-hidden rounded-[28px] bg-white">
              <div className="absolute left-1/2 top-2 z-10 h-4 w-[70px] -translate-x-1/2 rounded-full bg-[#0c1310]" />
              <div className="px-5 pb-2 pt-7 font-display text-sm font-semibold">
                BMI Calculator
                <span className="mt-0.5 block font-sans text-xs font-medium text-ink-faint">
                  Health Calc Hub
                </span>
              </div>
              <div className="mx-5 mt-3 flex rounded-full bg-paper-alt p-1 text-xs font-semibold">
                <span className="flex-1 rounded-full bg-white py-2 text-center text-primary-dark shadow-sm">
                  Metric
                </span>
                <span className="flex-1 py-2 text-center text-ink-faint">
                  Imperial
                </span>
              </div>
              <div className="mx-5 mt-3 flex gap-2.5">
                <div className="flex-1 rounded-xl bg-paper-alt px-3 py-2.5">
                  <label className="block text-[10px] font-semibold uppercase tracking-wide text-ink-faint">
                    Height
                  </label>
                  <div className="tnum font-display text-sm font-semibold">172 cm</div>
                </div>
                <div className="flex-1 rounded-xl bg-paper-alt px-3 py-2.5">
                  <label className="block text-[10px] font-semibold uppercase tracking-wide text-ink-faint">
                    Weight
                  </label>
                  <div className="tnum font-display text-sm font-semibold">66 kg</div>
                </div>
              </div>

              <div className="px-5 pt-2">
                <BmiGauge />
              </div>

              <div className="mx-5 mb-5 mt-auto rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white">
                Recalculate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRIP ================= */}
      <div className="bg-ink py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-around gap-6 px-6 text-center">
          <div>
            <b className="font-display text-2xl font-bold">6</b>
            <span className="block text-xs text-[#B9C4BC]">Calculators in v1.0</span>
          </div>
          <div>
            <b className="font-display text-2xl font-bold">0</b>
            <span className="block text-xs text-[#B9C4BC]">Sign-ups required</span>
          </div>
          <div>
            <b className="font-display text-2xl font-bold">On-device</b>
            <span className="block text-xs text-[#B9C4BC]">Calculations, whenever possible</span>
          </div>
          <div>
            <b className="font-display text-2xl font-bold">2</b>
            <span className="block text-xs text-[#B9C4BC]">Unit systems supported</span>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            What&apos;s inside
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            One hub, every health number that matters.
          </h2>
          <p className="mt-4 text-ink-soft">
            Health Calc Hub is an all-in-one collection of health and fitness
            calculators. More calculators will be added through future
            updates — right into the same app, no extra downloads.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="relative rounded-2xl border border-line bg-white p-6 transition-transform hover:-translate-y-1 hover:border-primary-light"
            >
              <span className="absolute right-4 top-4 rounded-full bg-[#E8F6EE] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-good">
                Live
              </span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-paper-alt text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Why Rakzlab Apps
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Built to be trusted, not just installed.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6">
              <Icon className="mb-3.5 h-6 w-6 text-primary" />
              <h3 className="font-display text-sm font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[28px] bg-gradient-to-br from-primary-dark to-primary p-10 text-white sm:p-14">
          <div>
            <h2 className="max-w-xs font-display text-2xl font-semibold sm:text-3xl">
              Get Health Calc Hub free on Google Play.
            </h2>
            <p className="mt-3 max-w-md text-[#CFE7DF]">
              All six calculators, no sign-up, no clutter — with more on the
              way at no extra cost.
            </p>
          </div>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="leading-tight">
              <small className="block text-[10px] text-[#cfcfcf]">GET IT ON</small>
              <strong className="font-display text-base">Google Play</strong>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
