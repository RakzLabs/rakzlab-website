import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakzlab Apps — Health & Everyday Mobile Tools",
    description:
      "Health Calc Hub — all-in-one collection of health and fitness calculators designed to provide fast, accurate results.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#FFFFFF] font-body text-[#202124] antialiased flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
