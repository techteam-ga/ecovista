import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoVista | Premium Living in Dhanbad",
  description:
    "Discover EcoVista in Dhanbad, located at Sriram Complex, Hotel Mayur, 4th Floor, Nawadih, Hirak Road, next to Omkar Market. Explore the lifestyle, amenities and experience EcoVista has to offer.",
  keywords: [
    "EcoVista",
    "EcoVista Dhanbad",
    "EcoVista Nawadih",
    "plots in Dhanbad",
    "residential plots Dhanbad",
    "premium plots Dhanbad",
    "real estate Dhanbad",
    "Nawadih Hirak Road",
  ],
  authors: [{ name: "EcoVista" }],
  creator: "EcoVista",
  publisher: "EcoVista",

  openGraph: {
    title: "EcoVista | Premium Living in Dhanbad",
    description:
      "A thoughtfully planned community in Dhanbad — where life meets nature.",
    type: "website",
    locale: "en_IN",
    siteName: "EcoVista",
  },

  twitter: {
    card: "summary_large_image",
    title: "EcoVista | Premium Living in Dhanbad",
    description:
      "Discover EcoVista — a thoughtfully planned community in Dhanbad.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
