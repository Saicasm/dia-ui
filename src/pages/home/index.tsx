"use client";
import Button from "@/components/Button/Button";
import { useState } from "react";
import Upload from "@/components/Upload/Upload";
import RootLayout from "@/app/layout";
import Textarea from "@/components/Textarea/Textarea";
import { createImage, CreateData } from "@/service/home/homeService";
import Loader from "@/components/Loader/Loader";
import { CopyBlock } from "react-code-blocks";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("Nothing yet");
  const [prompt, setPrompt] = useState<string>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("File", e.target.files[0]);
      setFile(e.target.files[0]);
    } else {
      console.log("No file selected");
    }
  };
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Prompt", e.target.value);
    setPrompt(e.target.value);
  };
  const handleClick = async () => {
    if (file != null) {
      const userData: CreateData = {
        question: prompt,
        image: file,
      };
      try {
        setIsLoading(true);
        const response = await createImage(userData);
        console.log("asnwer", response.answer[0]);
        setAnswer(response.answer[0]);
        setIsLoading(false);
        // setSuccess(`User created successfully with ID: ${response.id}`);
      } catch (error) {
        setIsLoading(false);
        // setError('Error creating user. Please try again.');
      }
    }
  };
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between 	 bg-light-bg-primary bg-opacity-90">
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
                {isLoading ? <Loader text="Loading" /> : ""}
                {/* <div className="w-full border-2 h-14">{answer}</div> */}
                {/* <CopyBlock
                  text={JSON.stringify(answer)}
                  language={"java"}
                  wrapLongLines={true}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
