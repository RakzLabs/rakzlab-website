import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rakzlab.com"),
  title: {
    default: "Rakzlab Apps — Health & Everyday Mobile Tools",
    template: "%s | Rakzlab Apps",
  },
  description:
    "Rakzlab Apps develops modern mobile applications that help people make better decisions through accurate calculations, clean design, and an intuitive user experience. Featuring Health Calc Hub.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rakzlab Apps — Health & Everyday Mobile Tools",
    description:
      "Health Calc Hub — all-in-one collection of health and fitness calculators designed to provide fast, accurate results.",
    url: "https://www.rakzlab.com",
    siteName: "Rakzlab Apps",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/health-calc-hub.png",
        width: 512,
        height: 512,
        alt: "Health Calc Hub Logo by Rakzlab Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakzlab Apps — Health & Everyday Mobile Tools",
    description:
      "Health Calc Hub — all-in-one collection of health and fitness calculators designed to provide fast, accurate results.",
    images: ["/health-calc-hub.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.rakzlab.com/#organization",
      "name": "Rakzlab Apps",
      "url": "https://www.rakzlab.com",
      "logo": "https://www.rakzlab.com/health-calc-hub.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "rakzlab@gmail.com",
        "contactType": "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rakzlab.com/#website",
      "url": "https://www.rakzlab.com",
      "name": "Rakzlab Apps",
      "publisher": {
        "@id": "https://www.rakzlab.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased flex flex-col justify-between">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
