"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { appRoute } from "@/config/routing/app-route";

interface HeaderProps {
  /**
   * The Title of the APP
   */
  title: string;
  /**
   * Additional classes to be added to the Header
   */
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Diaconia",
  className = "",
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="h-16 border-b-4 bg-light-bg-primary flex flex-row justify-between items-center">
      <div className="flex items-center divide-x-2 divide-light-border-primary">
        <div className=" h2 pl-2 font-bold ">{title}</div>
        <div className="flex ml-2">
          {appRoute?.map((item, index) => {
            const isActive = pathname === `/${item.routePath}`;
            return (
              <div
                className={`flex justify-center items-center h-12 hover:cursor-pointer  transition duration-75 group ${
                  isActive
                    ? " text-light-text-primary font-semibold  dark:text-dark-text-primary"
                    : "text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover"
                }`}
                onClick={() => router.push(item.routePath)}
                key={index}
              >
                <div className="mx-2">{item.icon}</div>
                <span className="text-center whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
