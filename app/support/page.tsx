import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Rakzlab Apps",
  description: "Get support for Health Calc Hub and Rakzlab Apps.",
};

export default function Support() {
  const commonTopics = [
    "App crashes",
    "Incorrect calculation results",
    "Feature requests",
    "Bug reports",
    "General feedback",
  ];

  return (
    <div className="bg-[#FFFFFF] text-ink min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-24 sm:pt-20">
        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl font-light text-center text-[#00685B] tracking-tight">
          Support
        </h1>

        <div className="mt-12 space-y-8 font-body text-base text-ink/85 leading-relaxed">
          {/* Main Info */}
          <div className="space-y-3">
            <p className="font-medium text-ink">
              Thank you for using Health Calc Hub.
            </p>
            <p>
              If you experience any issues or have suggestions for improving the
              application, we&rsquo;d love to hear from you.
            </p>
            <p className="pt-2">
              <span className="font-medium text-ink">Support Email</span> :{" "}
              <a
                href="mailto:rakzlab@gmail.com"
                className="text-[#00685B] hover:underline"
              >
                rakzlab@gmail.com
              </a>
            </p>
            <p className="text-sm text-ink/65">
              We aim to respond within 3–5 business days.
            </p>
          </div>

          {/* Common Support Topics */}
          <section className="space-y-4 pt-6 border-t border-line/60">
            <h2 className="font-display text-2xl font-normal text-ink">
              Common Support Topics
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-ink/80">
              {commonTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
