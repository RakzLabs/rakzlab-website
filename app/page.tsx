import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const versionFeatures = [
    "BMI Calculator",
    "BMR Calculator",
    "TDEE Calculator",
    "Calorie Calculator",
    "Body Fat Calculator",
    "Ideal Weight Calculator",
  ];

  return (
    <div className="bg-[#FFFFFF] text-ink min-h-screen">
      {/* Top Welcome Section */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#00685B]">
          Welcome to Rakzlab Apps
        </h1>

        <div className="mx-auto mt-8 max-w-3xl space-y-4 font-body text-base sm:text-lg leading-relaxed text-ink/80 text-left sm:text-center">
          <p>
            Rakzlab Apps develops modern Mobile applications that help people make
            better decisions through accurate calculations, clean design, and an
            intuitive user experience.
          </p>
          <p>
            Our applications focus on health, fitness, productivity, and
            practical everyday tools.
          </p>
          <p>
            We are committed to delivering reliable, user-friendly, and
            privacy-focused mobile applications.
          </p>
        </div>
      </section>

      {/* App Feature: Health Calc Hub */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-line/60 bg-[#F9FAF9] p-8 sm:p-12 shadow-sm transition-all hover:shadow-md">
          <div className="grid items-center gap-10 md:grid-cols-[340px_1fr]">
            {/* Logo Graphic */}
            <div className="flex justify-center">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-line/40 flex items-center justify-center">
                <Image
                  src="/health-calc-hub.png"
                  alt="Health Calc Hub Logo"
                  width={280}
                  height={280}
                  priority
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#00685B]">
                Health Calc Hub
              </h2>

              <p className="mt-4 font-body text-base leading-relaxed text-ink/85">
                Health Calc Hub is an all-in-one collection of health and fitness
                calculators designed to provide fast, accurate, and
                easy-to-understand results.
              </p>

              <div className="mt-6">
                <p className="font-body font-medium text-ink">
                  Version 1.0 includes:
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {versionFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 font-body text-sm text-ink/80"
                    >
                      <span className="text-[#00685B] font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 font-body text-sm italic text-ink/65">
                More health calculators will be added through future updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions - 3 Column Layout */}
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl border border-line/60 bg-[#F9FAF9] p-6 text-center sm:text-left transition-all hover:border-[#00685B]/40 hover:shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-light leading-snug text-[#00685B]">
              Verified calculation formulas designed for reliable results.
            </h3>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-line/60 bg-[#F9FAF9] p-6 text-center sm:text-left transition-all hover:border-[#00685B]/40 hover:shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-light leading-snug text-[#00685B]">
              Your calculation data stays on your device whenever possible.
            </h3>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-line/60 bg-[#F9FAF9] p-6 text-center sm:text-left transition-all hover:border-[#00685B]/40 hover:shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl font-light leading-snug text-[#00685B]">
              We regularly improve our applications with new features and enhancements.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
