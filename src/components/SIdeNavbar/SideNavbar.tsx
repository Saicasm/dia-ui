"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { appRoute } from "@/config/routing/app-route";
const Sidenavbar = () => {
  const router = useRouter();
  return (
    <div className="top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 ">
      <div className="overflow-y-auto py-5 px-3 h-full bg-light-bg-primary border-r border-light-border-primary dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-start">
        <div className="flex m-5">
          <div className="text-center  border-2 border-gray-50">Diaconia</div>
        </div>
        <div className="flex flex-col  justify-center align-middle mx-4">
          {appRoute?.map((item, index) => (
            <div
              className="flex  justify-start items-center h-12  hover:cursor-pointer w-full text-base font-normal text-light-text-primary  rounded-lg transition duration-75 group hover:bg-light-bg-secondary dark:bg-dark-text-primary dark:hover:bg-dark-bg-secondary"
              onClick={() => router.push(item.routePath)}
              key={index}
            >
              <div className=" mx-2">{item.icon}</div>
              <span className="  text-center whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
