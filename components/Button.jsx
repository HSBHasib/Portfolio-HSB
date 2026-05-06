import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Button = ({children, className}) => {
  return (
    <>
      <HoverBorderGradient
        containerClassName="rounded-xl"
        as="button"
        className={`dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 active:scale-95 transition-all duration-500 ${className} `}
      >
        <p className="font-semibold text-[16px] flex items-center gap-1">
          {children}
        </p>
      </HoverBorderGradient>
    </>
  );
};

export default Button;
