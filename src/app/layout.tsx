import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Kevin Montell - Credit Repair Services | Build, Rebuild & Repair Credit",
  description: "Professional credit repair services by Kevin Montell. Build, rebuild, and repair your credit with expert guidance. Credit report analysis, dispute resolution, and credit counseling. Follow @kevinjmontell on Instagram.",
  keywords: ["credit repair", "credit score", "credit counseling", "financial advisor", "credit report analysis", "dispute resolution", "kevin montell", "asesor financiero"],
  authors: [{ name: "Kevin Montell" }],
  openGraph: {
    title: "Kevin Montell - Credit Repair Services",
    description: "Professional credit repair services to build, rebuild, and repair your credit. Expert guidance from certified financial advisor Kevin Montell.",
    type: "website",
    url: "https://kevinmontell.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
