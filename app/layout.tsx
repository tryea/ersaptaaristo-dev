import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});
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
    <html lang="en" className={`${plusJakarta.variable} ${cinzel.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
