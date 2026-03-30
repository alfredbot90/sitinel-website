import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sitinel — AI Safety Monitoring for Construction Sites",
  description:
    "On-premise AI that monitors your existing cameras for PPE violations and safety hazards. No video leaves your site.",
  metadataBase: new URL("https://sitinel.ca"),
  openGraph: {
    title: "Sitinel — AI Safety Monitoring for Construction Sites",
    description:
      "On-premise AI that monitors your existing cameras for PPE violations and safety hazards. No video leaves your site.",
    url: "https://sitinel.ca",
    siteName: "Sitinel",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sitinel — AI Safety, On Your Site.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitinel — AI Safety Monitoring for Construction Sites",
    description:
      "On-premise AI that monitors your existing cameras for PPE violations and safety hazards. No video leaves your site.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
