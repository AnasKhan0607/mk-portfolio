import type { Metadata } from "next";
import { Cinzel, Crimson_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display font for headings - medieval/fantasy feel
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Serif font for body text - elegant, book-like
const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

// Monospace for code/terminal elements
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Khan | The Developer's Grimoire",
  description: "Software Engineer crafting magical code and infrastructure spells. A tome of projects, experiences, and arcane knowledge.",
  keywords: ["software engineer", "portfolio", "LLM", "AI", "distributed systems", "backend", "cloud", "devops", "Toronto"],
  authors: [{ name: "Muhammad Khan" }],
  openGraph: {
    title: "Muhammad Khan | The Developer's Grimoire",
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
        className={`${cinzel.variable} ${crimsonText.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
