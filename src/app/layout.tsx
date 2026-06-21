import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const viewport: Viewport = {
  themeColor: "#080b0a",
};

export const metadata: Metadata = {
  title: "Indian Operator | Master the Markets",
  description: "Live trading, pure price action, and no BS.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`} style={{ colorScheme: 'dark' }}>
      <body className="font-sans antialiased text-[var(--text)] bg-[var(--bg)] selection:bg-[var(--bull)]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
