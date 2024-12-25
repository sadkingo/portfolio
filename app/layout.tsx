import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import UpArrow from "./components/up-arrow/UpArrow";
import Background from "./components/background";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sadking portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="shortcut icon"
          href="./images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body
        className={`${inter.className} flex flex-col h-screen bg-slate-300 dark:bg-inherit antialiased md:overflow-hidden selection:bg-amber-600 dark:selection:bg-purple-500`}
      >
        <Background />
        <UpArrow />
        <main
          id="main"
          className="relative 2xl:px-36 mb-6 max-md:pb-16 max-md:h-fit h-5/6 w-full flex justify-center"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
