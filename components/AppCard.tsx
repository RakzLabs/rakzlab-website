import { Check } from "lucide-react";

type AppCardProps = {
  name: string;
  version: string;
  description: string;
  features: string[];
  note?: string;
};

export default function AppCard({
  name,
  version,
  description,
  features,
  note,
}: AppCardProps) {
  return (
    <div className="grid gap-8 rounded-2xl border border-line bg-white/60 p-8 sm:p-10 md:grid-cols-[1.1fr_1fr]">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal font-display text-lg text-paper">
            HC
          </div>
          <div>
            <h3 className="font-display text-2xl text-ink">{name}</h3>
            <span className="font-mono text-xs uppercase tracking-widest text-teal">
              {version}
            </span>
          </div>
        </div>
        <p className="mt-5 font-body leading-relaxed text-ink/70">
          {description}
        </p>
        {note ? (
          <p className="mt-4 font-body text-sm italic text-ink/50">{note}</p>
        ) : null}
      </div>
      <ul className="grid content-start gap-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 rounded-lg bg-mint/50 px-4 py-3 font-body text-sm text-ink/80"
          >
            <Check className="h-4 w-4 shrink-0 text-teal" strokeWidth={2.5} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
