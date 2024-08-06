"use client";

import React from "react";

interface TextAreaProps {
  /**
   * Optional click handler
   */
  onChange?: (file: any) => void;
  /**
   * The content of the button
   */
  children?: React.ReactNode;
  /**
   * Additional classes to be added to the button
   */
  className?: string;
  rowLength?: number;
  name?: string;
  subtitle?: string;
  placeholder?: string;
}
const Textarea: React.FC<TextAreaProps> = ({
  onChange,
  subtitle = "",
  name = "",
  rowLength = 3,
  placeholder = "Ask your question...",
}) => {
  return (
    <>
      {" "}
      <div className="">
        <label
          htmlFor="about"
          className=" text-sm font-medium leading-6 text-black"
        >
          {name}
        </label>
        <div className="mt-2 bg-gradient-to-br from-green-800 to-red-500 p-0.5 rounded-md ">
          <textarea
            id="about"
            name="about"
            rows={rowLength}
            placeholder={placeholder}
            onChange={onChange}
            className="outline-none rounded	block w-ful w-full px-2  py-1.5  shadow-sm ring-inset ring-gray-300 placeholder:text-black  sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        <p className="mt-3 text-sm leading-6 ">{subtitle}</p>
      </div>
    </>
  );
};
export default Textarea;
