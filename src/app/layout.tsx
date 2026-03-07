import type { Metadata } from "next";
import { Cinzel, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Magical serif font for headings
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

// Monospace for terminal/code elements
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MK | Developer's Grimoire",
  description: "Software Engineer crafting magical code and infrastructure spells. Where wizardry meets infrastructure.",
  keywords: ["software engineer", "portfolio", "developer", "infrastructure", "devops"],
  authors: [{ name: "MK" }],
  openGraph: {
    title: "MK | Developer's Grimoire",
    description: "Software Engineer crafting magical code and infrastructure spells",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${cinzel.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
