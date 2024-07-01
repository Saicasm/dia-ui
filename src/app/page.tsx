"use client";

import Button from "@/components/Button/Button";
import { useState } from "react";
import Upload from "@/components/Upload/Upload";

export default function Home() {

  const handleClick = () => {
    console.log("Button clicked!");
  };
  const [file,setFile] = useState<File | null>(null);

  const handleFileChange = (file:File) =>{
console.log('FIle',file)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg-primary bg-opacity-90">
      <div className="flex flex-col">
      <Upload onFileChange={handleFileChange}>
        Upload Image
      </Upload>
      <Button onClick={handleClick} variant="primary">
       Submit
      </Button>
    
      </div>

    </main>
  );
}
