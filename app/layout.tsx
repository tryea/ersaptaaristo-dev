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
  title: "Ersapta Aristo — AI Integration Engineer",
  description:
    "AI Integration Engineer. I ship production AI into real products: RAG, agents, vision, and automation, built on Next.js, Supabase, and the LLM stack.",
  openGraph: {
    title: "Ersapta Aristo — AI Integration Engineer",
    description: "I ship production AI into real products.",
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
