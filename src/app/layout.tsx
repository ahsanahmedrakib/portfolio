import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/components/features/profile";
import {
  Background,
  Navbar,
  Footer,
  BackToTop,
} from "@/components/features/layout";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahsanahmedrakib.vercel.app"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description:
    "4+ years of experience building scalable, enterprise-grade web applications with React.js, Next.js, and TypeScript — with expertise in the travel, aviation, energy, and education industries.",
  authors: [{ name: profile.name }],
  keywords: [
    "Ahsan Ahmed Rakib",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Portfolio",
    "Bangladesh",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahsanahmedrakib.vercel.app",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Software Engineer building scalable web applications with React, Next.js, and TypeScript.",
    siteName: `${profile.name} Portfolio`,
    images: [{ url: profile.avatar, width: 460, height: 460, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Software Engineer building scalable web applications with React, Next.js, and TypeScript.",
    images: [profile.avatar],
  },
};

export const viewport: Viewport = {
  themeColor: "#04070d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-ink-950 min-h-full font-sans text-slate-200">
        <Background />
        <ScrollProgress />
        <Navbar />
        <BackToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}