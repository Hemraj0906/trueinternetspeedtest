import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trueinternetspeedtest.com"),
  title: {
    default:
      "Internet Speed Test – Check Your WiFi Speed Instantly | trueinternetspeedtest",
    template: "%s | trueinternetspeedtest.com",
  },
  description:
    "Test your internet speed instantly with trueinternetspeedtest. Get accurate download speed, upload speed, ping, and jitter results. Free broadband speed test online.",
  keywords: [
    "internet speed test",
    "speed test online",
    "wifi speed test",
    "check internet speed",
    "broadband speed test",
    "ping test",
    "download speed test",
    "upload speed test",
  ],
  authors: [{ name: "trueinternetspeedtest" }],
  creator: "trueinternetspeedtest",
  publisher: "trueinternetspeedtest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trueinternetspeedtest.com",
    siteName: "trueinternetspeedtest",
    title: "Internet Speed Test – Check Your WiFi Speed Instantly",
    description:
      "Test your internet speed instantly with trueinternetspeedtest. Free broadband speed test.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "trueinternetspeedtest - Internet Speed Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Speed Test – trueinternetspeedtest",
    description: "Check your WiFi speed instantly. Free online speed test.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "VtNtQmPuOSderu4aizMsv0sEnGNPTZT1C39FdFc3E4o",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://trueinternetspeedtest.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://flagcdn.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
