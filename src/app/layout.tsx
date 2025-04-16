import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { RootLayoutProps } from "../types/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WordPress Blog Viewer",
  description: "A Next.js application that displays WordPress posts and pages",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
