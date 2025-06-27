import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Madhu Sahitya - Web3 Developer",
  description: "Web3 Developer in Progress specializing in Rust, Go, Solana, DeFi Protocols, and Cross-Chain Infrastructure",
  keywords: "Web3, Blockchain, Solana, DeFi, Smart Contracts, Rust, Go, Cross-Chain",
  authors: [{ name: "Madhu Sahitya" }],
  openGraph: {
    title: "Madhu Sahitya - Web3 Developer",
    description: "Building the future of Web3 through continuous learning and innovative projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhu Sahitya - Web3 Developer",
    description: "Building the future of Web3 through continuous learning and innovative projects",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}