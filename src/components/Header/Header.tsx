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

interface SearchComponentProps {
  artist_name: string;
  _id: string;
  track_name: string;
  trackId: string;
}

const UserProfile = () => {
  return (
    <div className="pr-2">
      {/* <Image
        priority
        src={UserIcon}
        height={32}
        width={32}
        alt="User Settings"
      />{" "} */}
    </div>
  );
};
const Header: React.FC<HeaderProps> = ({
  title = "Diaconia",
  className = "",
}) => {
  return (
    <div className="h-16 border-b-2 bg-light-bg-primary flex flex-row justify-between items-center">
      <div className="flex">
        {/* <Image
          priority
    
          height={32} 
          width={32}
          alt="Diaconi"
        /> */}
        
        <div className="h2 pl-2 font-bold	font-mono ">{title}</div>
        
      </div>
    </div>
  );
};

export default Header;