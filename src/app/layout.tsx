import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidenavbar from "@/components/SIdeNavbar/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diaconia Image Analyzer MVP",
  description:
    "Takes in the Image and analyzes key components responsible for search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidenavbar />
        {children}
      </body>
    </html>
  );
}
