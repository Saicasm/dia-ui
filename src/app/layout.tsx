import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidenavbar from "@/components/SIdeNavbar/SideNavbar";

const inter = Inter({ subsets: ["latin"] });
interface RootLayoutProps {
  /**
   * The content for the layout to render
   */
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen mx-auto  bg-light-bg-tertiary dark:bg-dark-bg-primary flex flex-row">
      <Sidenavbar />
      <main className="max-h-full flex-1 ">{children}</main>
    </div>
  );
};
export default RootLayout;
