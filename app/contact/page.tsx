import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rakzlab Apps for inquiries, developer support, or questions regarding Health Calc Hub and our mobile apps.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Rakzlab Apps",
    description:
      "Contact Rakzlab Apps for inquiries, developer support, or questions regarding Health Calc Hub.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="bg-[#FFFFFF] text-ink min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-24 sm:pt-20">
        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl font-light text-center text-[#00685B] tracking-tight">
          Contact
        </h1>

        <div className="mt-12 space-y-6 font-body text-base text-ink/85 leading-relaxed">
          <div className="space-y-2">
            <p>
              <span className="font-medium text-ink">Developer</span> : Rakzlab
            </p>
            <p>
              <span className="font-medium text-ink">Application</span> : Health Calc Hub
            </p>
            <p>
              <span className="font-medium text-ink">Support Email</span> :{" "}
              <a
                href="mailto:rakzlab@gmail.com"
                className="text-[#00685B] hover:underline"
              >
                rakzlab@gmail.com
              </a>
            </p>
          </div>

          <p className="pt-2 text-ink/75">
            Business inquiries are welcome.
          </p>
        </div>
      </div>
    </div>
  );
}
