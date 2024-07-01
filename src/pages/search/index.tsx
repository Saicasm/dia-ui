"use client";

import Button from "@/components/Button/Button";
import { useState } from "react";
import Upload from "@/components/Upload/Upload";
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
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg-primary bg-opacity-90">
        <div className="flex flex-col">Search</div>
      </main>
    </RootLayout>
  );
}
