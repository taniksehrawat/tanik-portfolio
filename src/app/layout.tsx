// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// NOTE: after you deploy (Phase 16), replace this URL with your real one.
const SITE_URL = "https://taniksehrawat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tanik Sehrawat — Software Engineer · AI Builder · DSA Mentor",
    template: "%s · Tanik Sehrawat",
  },
  description:
    "Portfolio of Tanik Sehrawat — Software Engineer building backend systems and AI agents, and teaching data structures and algorithms. 400+ DSA problems, 30+ REST APIs shipped.",
  keywords: [
    "Tanik Sehrawat",
    "Software Engineer",
    "Backend Engineer",
    "AI Engineer",
    "Spring Boot",
    "LangGraph",
    "RAG",
    "Data Structures and Algorithms",
    "Chandigarh University",
    "Portfolio",
  ],
  authors: [{ name: "Tanik Sehrawat", url: "https://github.com/taniksehrawat" }],
  creator: "Tanik Sehrawat",
  publisher: "Tanik Sehrawat",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Tanik Sehrawat",
    title: "Tanik Sehrawat — Software Engineer · AI Builder · DSA Mentor",
    description:
      "Backend systems, AI agents, and teaching. 400+ DSA problems, 30+ REST APIs shipped, TCS Prime offer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanik Sehrawat — Software Engineer · AI Builder · DSA Mentor",
    description:
      "Backend systems, AI agents, and teaching. 400+ DSA problems, 30+ REST APIs shipped.",
    creator: "@taniksehrawat", // update if you get a Twitter/X handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f2f0eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}