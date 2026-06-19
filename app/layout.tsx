import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ersaptaaristo.dev"),
  title: "Ersapta Aristo, Full-Stack Developer",
  description:
    "Full-stack developer who helps entrepreneurs turn ideas into real products and new businesses. AI and Web3 in the toolkit, built on Next.js, Supabase, and the modern web.",
  openGraph: {
    title: "Ersapta Aristo, Full-Stack Developer",
    description:
      "I help entrepreneurs turn ideas into real products and new businesses.",
    url: "https://ersaptaaristo.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
