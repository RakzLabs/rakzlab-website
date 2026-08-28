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
  title: "Rakzlab Apps",
  description:
    "Rakzlab Apps develops modern Mobile applications that help people make better decisions through accurate calculations, clean design, and an intuitive user experience. Health Calc Hub.",
  openGraph: {
    title: "Rakzlab Apps",
    description:
      "Health Calc Hub - all-in-one collection of health and fitness calculators.",
    url: "https://www.rakzlab.com/",
    siteName: "Rakzlab Apps",
    type: "website",
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
