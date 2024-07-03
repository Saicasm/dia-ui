import React from "react";
import { Icons } from "../Icons/Icons";

interface UploadProps {
  /**
   * Optional click handler
   */
  onFileChange?: (file: any) => void;
  /**
   * The content of the button
   */
  children?: React.ReactNode;
  /**
   * Additional classes to be added to the button
   */
  className?: string;
  name?: string;
  subtext?: string;
  variant: string;
  uploadTypes?: string;
}

const Upload: React.FC<UploadProps> = ({
  onFileChange,
  children,
  className = "",
  name = "Upload",
  subtext = "",
  variant = "primary",
  uploadTypes = "",
}) => {
  function PrimaryVariant() {
    return (
      <>
        <label
          className="block mb-2 text-base font-medium text-light-text-primary "
          htmlFor="file_input"
        >
          {children}
        </label>
        <input
          className="rounded-lg   text-light-text-primary mx-4 py-2"
          onChange={onFileChange}
          id="file_input"
          type="file"
          style={{ background: "bg-light-bg-secondary" }}
          accept={uploadTypes}
        />
        <p
          className="mt-1 text-sm text-light-text-primary dark:text-gray-300"
          id="file_input_help"
        >
          {subtext}
        </p>
      </>
    );
  }
  function SecondaryVariant() {
    return (
      <>
        {" "}
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed text-light-text-primary rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Icons.upload />
              <p className="mb-2 text-sm ">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs ">{subtext}</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept={uploadTypes}
              className="hidden"
              onChange={onFileChange}
            />
          </label>
        </div>
      </>
    );
  }
  return (
    <div className="mx-4 my-2 dark:text-dark-bg-primary">
      {variant == "primary" ? <PrimaryVariant /> : <SecondaryVariant />}
    </div>
  );
};

export default Upload;
