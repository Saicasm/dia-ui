import React from "react";

interface ButtonProps {
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
}

const Upload: React.FC<ButtonProps> = ({
  onFileChange,
  children,
  className = "",
  name = "Upload",
  subtext = "",
}) => {
  let buttonClasses = "px-4 py-2 rounded focus:outline-none ";

  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        {children}
      </label>
      <input
        className="rounded-lg block bg-light-bg-primary text-light-text-secondary px-4 py-2 "
        onChange={onFileChange}
        id="file_input"
        type="file"
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        {subtext}
      </p>
    </div>
  );
};

export default Upload;
