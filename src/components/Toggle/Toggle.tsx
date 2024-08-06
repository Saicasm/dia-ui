import React, { useState } from "react";
interface ToggleProps {
  /**
   * Optional click handler
   */
  onChange?: () => void;
  /**
   * The content of the button
   */
  children?: React.ReactNode;
  /**
   * Additional classes to be added to the button
   */
  toggleItems: [string, string];
  isChecked: boolean;
  disabled: boolean;
}
const Toggle: React.FC<ToggleProps> = ({
  onChange,
  isChecked,
  toggleItems = ["VILT", "RETINA"],
  disabled = false,
}) => {
  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
          disabled={disabled}
        />
        <span className="label flex items-center text-sm font-medium text-black dark:text-dark-text-primary">
          {toggleItems[0]}
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-light-accent-primary" : "bg-light-bg-tertiary"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-black dark:text-dark-text-primary">
          {toggleItems[1]}
        </span>
      </label>
    </>
  );
};

export default Toggle;
