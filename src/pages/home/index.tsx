"use client";
import { CreateData, CreateDataResponseType } from "@/util/types/index";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import Upload from "@/components/Upload/Upload";
import RootLayout from "@/app/layout";
import Textarea from "@/components/Textarea/Textarea";
import { createImage } from "@/service/home/homeService";
import Loader from "@/components/Loader/Loader";
import { CopyBlock, nord } from "react-code-blocks";
import { Icons } from "@/components/Icons/Icons";
import Alert from "@/components/Alerts/Alert";
import { Models } from "@/util/enums";
import Toggle from "@/components/Toggle/Toggle";
export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<CreateDataResponseType>({ result: [] });
  const [prompt, setPrompt] = useState<string>("");
  const [isAlertvisible, setIsAlertVisible] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const handleFileChange = async (file: File) => {
    await setFile(file);
    await setIsAlertVisible(true);
    await setAlertMessage(
      file ? `Image ${file} has been sucessfully uploaded` : ""
    );
  };
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  const handleAlertVisibility = () => {
    setIsAlertVisible(!isAlertvisible);
  };
  const handleClick = async () => {
    if (file != null) {
      const userData: CreateData = {
        question: prompt,
        image: file,
        model: Models.VILT,
      };
      try {
        setIsLoading(true);
        const response: CreateDataResponseType = await createImage(userData);
        setAnswer(response);
        setIsLoading(false);
        // setSuccess(`User created successfully with ID: ${response.id}`);
      } catch (error) {
        setIsLoading(false);
        // setError('Error creating user. Please try again.');
      }
    }
  };
  const code = `
    // Code
   ${JSON.stringify(answer)}
  `;

  return (
    <RootLayout>
      <Alert
        duration={3000}
        isVisbile={isAlertvisible}
        message={"Image has been successfully uploaded"}
        onDismiss={handleAlertVisibility}
      />
      <main className="flex min-h-screen flex-col items-center justify-between 	 bg-light-bg-primary dark:bg-dark-bg-primary bg-opacity-90">
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
                showPreview={true}
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
              <div className="m-4">
                <Toggle />
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
                {isLoading ? (
                  <Loader text="Loading" />
                ) : (
                  <div className="w-full">
                    <CopyBlock
                      text={code}
                      language="java"
                      theme={nord}
                      wrapLongLines
                      customStyle={{
                        height: "auto",
                        overflow: "scroll",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
