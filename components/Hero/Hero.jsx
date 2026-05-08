"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import RightSideDets from "./RightSideDets";
import LeftSideDets from "./LeftSideDets";

const HeroPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="home" className="relative w-full overflow-hidden">
      <div className="relative flex min-h-screen w-full antialiased items-center justify-center pt-20 pb-10 ">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />

          {/* White */}
        <Spotlight 
          className="top-[-5%] left-[5%] md:left-[10%] md:top-[5%]" 
          fill="white" 
        />

          {/* Purple */}
        <Spotlight className=" top-10 left-full h-[80vh] w-[50vw]" fill="purple" /> 

        <div className="relative z-10 mx-auto w-full max-w-6xl p-4 lg:flex lg:justify-between lg:items-center gap-10">
          {/* Personal Info */}
          <div className="lg:w-[60%] md:text-left text-center w-full">
            <LeftSideDets isLoaded={mounted} />
          </div>

          {/* Image / Right Side */}
          <div className="flex-1 w-full flex justify-center items-center mt-10 lg:mt-0">
            <RightSideDets isLoaded={mounted} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
