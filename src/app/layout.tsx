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
    <div className=" min-h-screen mx-auto bg-opacity-90 bg-light-bg-primary">
      <Sidenavbar />
      <main className="max-h-full">{children}</main>

      {/* <Footer /> */}
    </div>
  );
};
export default RootLayout;
