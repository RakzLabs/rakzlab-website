"use client";

import { useEffect, useState } from "react";

type Metric = {
  label: string;
  value: string;
  unit: string;
};

const metrics: Metric[] = [
  { label: "BMI", value: "22.4", unit: "kg/m²" },
  { label: "BMR", value: "1,680", unit: "kcal/day" },
  { label: "TDEE", value: "2,350", unit: "kcal/day" },
  { label: "Body Fat", value: "18.2", unit: "%" },
  { label: "Ideal Weight", value: "68.0", unit: "kg" },
];

export default function CalculatorReadout() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % metrics.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const current = metrics[index];

  return (
    <div className="relative w-full max-w-sm rounded-2xl border border-line bg-ink p-6 shadow-[0_20px_60px_-20px_rgba(18,33,29,0.45)]">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-mint/60">
        <span>Health Calc Hub</span>
        <span className="inline-flex h-2 w-2 rounded-full bg-amber animate-blink" />
      </div>

      <div className="mt-8 mb-2 font-mono text-xs uppercase tracking-widest text-mint/50">
        {current.label}
      </div>
      <div
        key={current.label}
        className="flex items-baseline gap-2 animate-fadeUp"
      >
        <span className="font-mono text-5xl font-medium text-paper sm:text-6xl">
          {current.value}
        </span>
        <span className="font-mono text-sm text-mint/60">{current.unit}</span>
      </div>

      <div className="mt-8 flex gap-1.5">
        {metrics.map((m, i) => (
          <span
            key={m.label}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i === index ? "bg-amber" : "bg-mint/15"
            }`}
          />
        ))}
      </div>

      <p className="mt-6 font-body text-xs leading-relaxed text-mint/50">
        Six calculators. One tap. Results computed on your device.
      </p>
    </div>
  );
}
