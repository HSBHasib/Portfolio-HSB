import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Button = ({children, className}) => {
  return (
    <>
      <HoverBorderGradient
        containerClassName="rounded-xl"
        as="div"
        className={`dark:bg-black bg-gradient-to-b from-neutral-50 to-neutral-400 hover:bg-gradient-to-b hover:from-neutral-100 hover:to-neutral-500 cursor-pointer text-black dark:text-white flex items-center justify-center space-x-2 active:scale-95 transition-all duration-500 ${className} `}
      >
        <div className="font-semibold text-[16px] flex items-center gap-2">
          {children}
        </div>
      </HoverBorderGradient>
    </>
  );
};

export default Button;