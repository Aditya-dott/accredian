import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Corporate Training Solutions",
  description:
    "Cultivate high-performance teams through expert learning. Tailored corporate training programs by Accredian for enterprise teams.",
  keywords:
    "corporate training, enterprise learning, skill development, professional development, Accredian",
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Corporate Training Solutions",
    description:
      "Cultivate high-performance teams through expert learning. Tailored corporate training programs.",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
