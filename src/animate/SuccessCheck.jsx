import React from "react";

const SuccessCheck = () => {
  return (
    <div className="flex flex-col items-center justify-center text-green-500">
      <svg
        className="w-16 h-16 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <p className="mt-4 text-lg font-semibold">Message Sent Successfully!</p>
    </div>
  );
};

export default SuccessCheck;