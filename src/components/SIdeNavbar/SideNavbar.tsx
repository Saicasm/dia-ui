"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { appRoute } from "@/config/routing/app-route";
const Sidenavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="top-0 left-0 z-40 w-48 h-full transition-transform -translate-x-full sm:translate-x-0 ">
      <div className="overflow-y-auto py-5 px-3 h-full bg-custom-gradient border-r border-black dark:bg-dark-bg-primary dark:border-dark-border-primary flex flex-col justify-start">
        <div className="flex  border-b-2 m-4 justify-center align-middle border-black">
          <div className="text-start h-12 font-bold">Diaconia</div>
        </div>
        <div className="flex flex-col my-4 justify-center align-middle mx-4">
          {appRoute?.map((item, index) => {
            const isActive = pathname === `/${item.routePath}`;
            const isDisabled = item.isDisabled === true; // Ensure it's a boolean

            return (
              <div
                className={`flex justify-start items-center h-12  w-full text-base font-normal rounded-lg transition duration-75 group ${
                  isActive
                    ? "bg-light-accent-primary text-light-text-primary font-semibold dark:bg-dark-accent-primary dark:text-dark-text-primary"
                    : isDisabled
                      ? "cursor-not-allowed	"
                      : "text-white dark:text-dark-text-primary hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover hover:cursor-pointer cursor-pointer"
                }`}
                onClick={() => !isDisabled && router.push(item.routePath)}
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

export default Sidenavbar;
