"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import Image from "next/image";
import Button from "../Button/Button";

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
  return (
    <div className="h-16 border-b-4 bg-light-bg-primary flex flex-row justify-between items-center">
      <div className="flex">
        <div className="h2 pl-2 font-bold">{title}</div>
      </div>
    </div>
  );
};

export default Header;
