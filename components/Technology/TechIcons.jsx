import React from "react";

const TechIcons = ({children, className, icon}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-white/10 h-12 w-12 flex justify-center items-center border border-gray-50/30 hover:scale-110 transition-all duration-400 rounded-full">
        <div>
          <p className={`text-lg ${className}`}>{icon}</p>
        </div>
      </div>
      <p className="text-[10px] font-medium">{children}</p>
    </div>
  );
};

export default TechIcons;
