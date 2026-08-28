import { ShieldCheck, SmartphoneNfc, RefreshCw, LucideIcon } from "lucide-react";

type Prop = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const props: Prop[] = [
  {
    icon: ShieldCheck,
    title: "Verified formulas",
    description:
      "Every calculation is checked against established health and fitness formulas, so the numbers you see are ones you can rely on.",
  },
  {
    icon: SmartphoneNfc,
    title: "On-device privacy",
    description:
      "Your inputs and results stay on your device whenever possible — no accounts, no unnecessary data leaving your phone.",
  },
  {
    icon: RefreshCw,
    title: "Continuous improvement",
    description:
      "We regularly ship updates with new calculators, refinements, and fixes based on how people actually use the apps.",
  },
];

export default function ValueProps() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {props.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="rounded-2xl border border-line bg-white/60 p-6"
        >
          <Icon className="h-6 w-6 text-teal" strokeWidth={1.75} />
          <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}
