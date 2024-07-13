import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidenavbar from "@/components/SIdeNavbar/SideNavbar";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
interface RootLayoutProps {
  /**
   * The content for the layout to render
   */
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen mx-auto  bg-light-bg-primary dark:bg-dark-bg-primary flex flex-col md:flex-row">
      <div className="md:hidden">
        <Header title={"Diaconia"} />
      </div>
      <div className="hidden md:block">
        <Sidenavbar />
      </div>
      <main className="max-h-full flex-1 ">{children}</main>
    </div>
  );
};
export default RootLayout;
