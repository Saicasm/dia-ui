"use client";

import { useState } from "react";
import RootLayout from "@/app/layout";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (file: File) => {
    console.log("FIle", file);
  };
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between 	 bg-light-bg-primary bg-opacity-90">
        <div className="flex shadow-md  flex-col items-center justify-between	w-full ">
          <div className="flex flex-col justify-evenly w-full ">
            <div className=" border-b-2 font-mono m-4">Settings</div>
          </div>
          <div className="m-4">
            <div className=" h-10 font-semibold">Select Analysis Type</div>
          </div>
          <div className="m-4">
            <div className=" h-10 font-semibold">Change default prompts</div>
          </div>{" "}
        </div>
      </main>
    </RootLayout>
  );
}
