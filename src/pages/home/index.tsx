import Button from "@/components/Button/Button";
import { useState } from "react";
import Upload from "@/components/Upload/Upload";
import RootLayout from "@/app/layout";
import Textarea from "@/components/Textarea/Textarea";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.SyntheticEvent) => {
    console.log("FIle", e.target.value);
  };
  const handlePromptChange = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      prompt: { value: string };
    };
    console.log("Prompt", e.target.value);
  };
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 	 bg-light-bg-primary bg-opacity-90">
        <div className="flex shadow-md  flex-col items-center justify-between	w-full ">
          <div className="flex flex-col justify-evenly w-full ">
            <div className=" border-b-2 font-mono m-4">Image Search Engine</div>
            <div className="m-4">
              <div className=" h-10 font-semibold">Upload Image</div>
              <Upload
                onFileChange={handleFileChange}
                subtext="SVG, PNG or JPG"
                variant="secondary"
                uploadTypes=".png,jpg,.jpeg,.tiff,.heic,.bmp"
              >
                Upload Image
              </Upload>
            </div>
            <div className="m-4 flex flex-col  items-center">
              <div className="m-4 w-full">
                <Textarea
                  name="Prompt"
                  subtitle="Enter the prompt that you want to search against the image"
                  rowLength={2}
                  onChange={handlePromptChange}
                />
              </div>
              <div className="m-4 ">
                <Button onClick={handleClick} variant="primary">
                  Submit
                </Button>
              </div>
              <div className="m-4 flex w-full flex-col  items-center">
                <div className="w-full text-sm font-medium leading-6 text-light-text-primary">
                  Result
                </div>
                <div className="w-full border-2 h-14">
                  The Image contains red dot
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
