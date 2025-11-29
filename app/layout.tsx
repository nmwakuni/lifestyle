import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PHProvider } from "@/components/providers/posthog-provider";
import { PostHogPageView } from "@/components/providers/posthog-pageview";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lifestyle Blog - Live Your Best Life",
  description: "A beautiful lifestyle blog featuring inspiring stories, wellness tips, travel adventures, and personal growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={null}>
              <PostHogPageView />
            </Suspense>
            {children}
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
