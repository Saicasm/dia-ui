import React, { useState, useEffect } from "react";
type AlertType = {
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: React.ReactNode;
};

type AlertTypes = {
  [key: string]: AlertType;
};

interface AlertProps {
  type?: string;
  message: string;
  closeIconText?: string;
  onDismiss: () => void;
  isVisbile: boolean;
  duration: number;
}

const Alert: React.FC<AlertProps> = ({
  message,
  duration = 3000,
  type = "success",
  onDismiss,
  isVisbile,
}) => {
  const alertTypes: AlertTypes = {
    success: {
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-800",
      icon: (
        <svg
          className="flex-shrink-0 size-4 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    error: {
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      icon: (
        <svg
          className="flex-shrink-0 size-4 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      ),
    },
  };

  const alertType = alertTypes[type] || alertTypes.success; // Default to 'success' if type not found

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${alertType.bgColor} ${alertType.textColor} p-4 rounded shadow-lg flex items-center transition-opacity duration-${duration} duration-75 ${isVisbile ? "opacity-100" : "opacity-0"}`}
      style={{ visibility: isVisbile ? "visible" : "hidden" }}
    >
      <span className="flex-1">{message}</span>
      <button className="ml-4 text-xl font-bold" onClick={onDismiss}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
