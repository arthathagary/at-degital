"use client";

import { useState } from "react";

interface AccordianProps {
  question: string;
  answer: string;
}

const Accordian = ({ question, answer }: AccordianProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#FAF8FF] p-6 rounded-[7px] mb-4">
      <div className="flex w-full justify-between">
        <p
          className={`${
            isOpen ? `text-primary-color` : `text-black`
          } font-medium`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
        </p>
        {isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus text-primary-color cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path d="M5 12h14" />
          </svg>
        )}
        {!isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>

      <div>
        {isOpen && (
          <p className={`text-[14px] text-[#6F6C90] mt-4`}>{answer}</p>
        )}
      </div>
    </div>
  );
};

export default Accordian;
