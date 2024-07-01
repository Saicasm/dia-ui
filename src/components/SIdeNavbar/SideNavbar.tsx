"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/Icons/Icons";

const Sidenavbar = () => {
  const router = useRouter();

  return (
    <div
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidenav"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <ul className="space-y-2">
          <li>
            <span className="ml-3">Diaconia</span>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
              onClick={() => router.push("/home")}
            >
              <Icons.home />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Home
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-sales"
              data-collapse-toggle="dropdown-sales"
              onClick={() => router.push("/search")}
            >
              <Icons.search />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Search
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700"></div>
    </div>
  );
};

export default Sidenavbar;
