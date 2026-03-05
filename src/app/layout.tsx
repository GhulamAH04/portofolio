import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
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
  title: "Ghulam Al Hafizh",
  description: "Ghulam personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900`}>
        <div className="relative min-h-screen">
          {/* Subtle background accents (calm, HR-friendly) */}
          <div className="pointer-events-none absolute -top-24 left-[-140px] h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-[-140px] h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

          {/* Content */}
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}
