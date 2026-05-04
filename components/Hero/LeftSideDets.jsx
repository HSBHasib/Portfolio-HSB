import React from "react";
import { TbLocation } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Button from "../Button";

const LeftSideDets = () => {
  // Text Generation
  const word = `⚡Building modern, high-performance, and responsive websites. | Transforming ideas into functional digital solutions. 🚀`;

  return (
    <>
      <p className=" bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent md:text-xl">
        Hey, I'm
      </p>
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl mt-0.5 md:mt-1">
        Hasibur Rahman
      </h1>
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl font-semibold text-transparent md:text-xl my-4">
        A Web Developer based in Bangladesh
      </h1>

      {/* Text Effects */}
      <p className="">
        <TextGenerateEffect
          className={"max-w-[500px] max-[768px]:mx-auto text-base font-semibold text-neutral-300"}
          words={word}
        />
      </p>

      <div className="mt-6 flex md:justify-start justify-center">
        {/* Button */}
        <Button> Say Hello <TbLocation /></Button>

        {/* Divider */}
        <div className="border opacity-20 mx-5 my-1.5"></div>

        {/* Linkedin and Github Links */}
        <div className="font-semibold text-xl flex items-center gap-3 ">
          {/* Linkedin Logo */}
          <Link
            href="https://www.linkedin.com/in/hasibur-rahman19/"
            target="_blank"
          >
            <IoLogoLinkedin className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300" />
          </Link>

          {/* Github Logo */}
          <Link
            href="https://github.com/HSBHasib"
            target="_blank"
          >
            <BsGithub className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSideDets;
