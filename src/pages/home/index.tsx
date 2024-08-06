"use client";
import {
  CreateData,
  CreateDataResponseType,
  CreateDataResponseTypeRetina,
} from "@/util/types/index";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import Upload from "@/components/Upload/Upload";
import RootLayout from "@/app/layout";
import Textarea from "@/components/Textarea/Textarea";
import { createImage, getRetinaResponse } from "@/service/home/homeService";
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
  const [retinaResponse, setRetinaResponse] =
    useState<CreateDataResponseTypeRetina>({ result: "" });
  const [prompt, setPrompt] = useState<string>("");
  const [isAlertvisible, setIsAlertVisible] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(true);
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
        model: isChecked ? Models.RETINA : Models.VILT,
      };
      try {
        setIsLoading(true);
        console.log(isChecked);
        if (isChecked) {
          const response: CreateDataResponseType = await createImage(userData);
          setAnswer(response);
        } else {
          const response: CreateDataResponseTypeRetina =
            await getRetinaResponse(userData);
          setRetinaResponse(response);
        }
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

  const handleToggleChange = async () => {
    setIsChecked(!isChecked);
  };

  return (
    <RootLayout>
      <Alert
        duration={3000}
        isVisbile={isAlertvisible}
        message={"Image has been successfully uploaded"}
        onDismiss={handleAlertVisibility}
      />
      <main className="flex  flex-col items-center justify-between 	 bg-light-bg-primary dark:bg-dark-bg-primary ">
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
                  name="Question"
                  subtitle=""
                  rowLength={3}
                  onChange={handlePromptChange}
                  placeholder="Ask your question...."
                />
              </div>
              <div className="m-4">
                <Toggle
                  isChecked={isChecked}
                  onChange={handleToggleChange}
                  toggleItems={["RETINA", "VILT"]}
                  disabled={false}
                />
              </div>
              <div className="m-4 ">
                <Button onClick={handleClick} variant="primary">
                  Submit
                </Button>
              </div>

              <div className="m-4 flex w-full flex-col  items-center text-black">
                <div className="w-full text-sm font-medium leading-6 ">
                  Result
                </div>
                {isLoading ? (
                  <Loader text="Loading" />
                ) : isChecked ? (
                  <div className="w-full">
                    <CopyBlock
                      text={code}
                      language="java"
                      theme={nord}
                      wrapLongLines
                      customStyle={{
                        height: "auto",
                        overflow: "overlay",
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full">
                    <CopyBlock
                      text={` ${JSON.stringify(retinaResponse.result)}`}
                      language="text"
                      theme={nord}
                      wrapLongLines
                      customStyle={{
                        height: "auto",
                        overflow: "overlay",
                      }}
                      copied={false}
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
