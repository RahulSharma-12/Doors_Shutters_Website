import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Door & Shutter Services | Professional Door Installation & Repair",
  description: "Professional door and shutter installation, maintenance, and repair services. Automatic doors, industrial shutters, garage doors, fire doors, and more. 24/7 emergency call-out available.",
  keywords: [
    "door installation",
    "shutter services",
    "automatic doors",
    "industrial shutters",
    "garage doors",
    "fire doors",
    "shop fronts",
    "glass work",
    "door repair",
    "door maintenance",
    "emergency door service",
    "commercial doors",
    "roller shutters",
    "sectional doors"
  ],
  authors: [{ name: "Door & Shutter Services" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Door & Shutter Services",
    description: "Professional door and shutter installation, maintenance, and repair services. 24/7 emergency support available.",
    url: "https://doorshutterservices.com",
    siteName: "Door & Shutter Services",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Door & Shutter Services",
    description: "Professional door and shutter installation, maintenance, and repair services.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
