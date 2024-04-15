import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="bg-secondary-color text-white font-bold uppercase px-5 py-3 text-[14px]">
      {label}
    </button>
  );
};

export default Button;
