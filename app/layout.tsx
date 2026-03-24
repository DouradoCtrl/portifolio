import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DouradoCtrl | Full Stack",
  description: "Portfólio de um Desenvolvedor Full Stack especializado em PHP, Python, React, Vue, e DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} font-sans antialiased text-neutral-800 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-950 transition-colors duration-300 overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
