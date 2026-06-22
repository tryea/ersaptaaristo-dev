import type { Metadata, Viewport } from "next";
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

const description =
  "Full-stack developer helping entrepreneurs turn ideas into real products and new businesses. AI and Web3 in the toolkit, built on Next.js and the modern web.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ersaptaaristo.dev"),
  title: "Ersapta Aristo, Full-Stack Developer",
  description,
  alternates: { canonical: "https://ersaptaaristo.dev" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Ersapta Aristo, Full-Stack Developer",
    description:
      "I help entrepreneurs turn ideas into real products and new businesses. AI and Web3 in the toolkit.",
    url: "https://ersaptaaristo.dev",
    siteName: "Ersapta Aristo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ersapta Aristo, Full-Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ersapta Aristo, Full-Stack Developer",
    description:
      "I help entrepreneurs turn ideas into real products and new businesses. AI and Web3 in the toolkit.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0e0c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Ersapta Aristo",
      url: "https://ersaptaaristo.dev",
      image: "https://ersaptaaristo.dev/portrait.webp",
      jobTitle: "Full-Stack Developer",
      email: "mailto:aristoersapta@gmail.com",
      sameAs: ["https://github.com/tryea"],
      knowsAbout: [
        "Full-Stack Development",
        "AI Engineering",
        "Web3",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
      ],
    },
    {
      "@type": "WebSite",
      name: "Ersapta Aristo",
      url: "https://ersaptaaristo.dev",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cinzel.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
