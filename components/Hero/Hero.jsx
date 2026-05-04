"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";

import RightSideDets from "./RightSideDets";
import LeftSideDets from "./LeftSideDets";

const HeroPage = () => {
  
  return (
    <div>
      <div className="relative flex h-100% w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />

        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl p-4 pt-18 md:pt-10 lg:flex lg:justify-between lg:items-center">
          {/* Personal Info */}
          <div className="lg:w-[60%] md:text-left text-center w-[96%]">
            <LeftSideDets />
          </div>
          {/* Locatoin and Personal Image */}
          <div className="flex-1">
            <RightSideDets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
