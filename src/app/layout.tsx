import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jubair Ibn Khaled | Full-Stack Developer",
  description:
    "Futuristic portfolio of Jubair Ibn Khaled, a Senior Full-Stack Developer specializing in Next.js, React, and Interactive Web Experiences.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Web Development",
    "Creative Developer",
  ],
};

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
