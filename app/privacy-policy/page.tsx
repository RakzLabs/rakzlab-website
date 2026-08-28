import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Rakzlab Apps",
  description: "Privacy Policy for Health Calc Hub developed and published by Rakzlab.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FFFFFF] text-ink min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-24 sm:pt-20">
        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl font-light text-center text-[#00685B] tracking-tight">
          Privacy Policy
        </h1>

        <div className="mt-12 space-y-8 font-body text-base text-ink/85 leading-relaxed">
          {/* Effective Date & Intro */}
          <div>
            <p className="font-semibold text-ink">
              Effective Date: <span className="font-normal">July 22, 2026</span>
            </p>
            <p className="mt-3">
              Health Calc Hub (&ldquo;the App&rdquo;) is developed and published by Rakzlab.
            </p>
            <p className="mt-2">
              This Privacy Policy explains how information is collected, used, and protected when you use our application.
            </p>
          </div>

          {/* Section: Information We Collect */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Information We Collect
            </h2>
            <p>
              Health Calc Hub is designed to perform health calculations directly on your device.
            </p>
            <p>
              The application may collect the information you enter, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>Age</li>
              <li>Gender</li>
              <li>Height</li>
              <li>Weight</li>
              <li>Activity Level</li>
              <li>Health-related calculation inputs</li>
            </ul>
            <p className="pt-1">
              This information is processed locally on your device to generate calculation results.
            </p>
            <p className="font-medium text-ink">
              We do not sell your personal information.
            </p>
          </section>

          {/* Section: Data Storage */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Data Storage
            </h2>
            <p>
              Calculation inputs and preferences may be stored locally on your device to improve your experience.
            </p>
            <p>
              We do not transmit your health information to our servers.
            </p>
          </section>

          {/* Section: Third-Party Services */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Third-Party Services
            </h2>
            <p>
              The application may use Google services such as:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>Google Play Services</li>
            </ul>
            <p className="pt-1">
              Future versions may include services such as Firebase Analytics or Google AdMob. If these are added, this Privacy Policy will be updated accordingly.
            </p>
          </section>

          {/* Section: Permissions */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Permissions
            </h2>
            <p>
              The application only requests permissions required for its intended functionality.
            </p>
          </section>

          {/* Section: Data Security */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your information. However, no method of electronic storage is completely secure.
            </p>
          </section>

          {/* Section: Children's Privacy */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Children&rsquo;s Privacy
            </h2>
            <p>
              Health Calc Hub is not specifically directed toward children under the age of 13.
            </p>
          </section>

          {/* Section: Medical Disclaimer */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Medical Disclaimer
            </h2>
            <p>
              Health Calc Hub provides health-related calculations for informational and educational purposes only. The application does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making medical decisions.
            </p>
          </section>

          {/* Section: Changes to this Policy */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-normal text-ink">
              Changes to this Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time.
            </p>
            <p>
              Any changes will be published on this page.
            </p>
          </section>

          {/* Section: Contact */}
          <section className="space-y-3 pt-4 border-t border-line/60">
            <h2 className="font-display text-2xl font-normal text-ink">
              Contact
            </h2>
            <div className="space-y-1.5 text-ink/85">
              <p><span className="font-medium text-ink">Developer</span> : Rakzlab</p>
              <p><span className="font-medium text-ink">Application</span> : Health Calc Hub</p>
              <p><span className="font-medium text-ink">Package Name</span> : com.rakzlab.healthcalchub</p>
              <p>
                <span className="font-medium text-ink">Email</span> :{" "}
                <a href="mailto:rakzlab@gmail.com" className="text-[#00685B] hover:underline">
                  rakzlab@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
