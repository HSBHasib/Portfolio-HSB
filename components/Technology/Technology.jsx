import React from "react";
import { FaBootstrap, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import TechIcons from "./TechIcons";
import Skills from "../Skills/Skills";

const Technology = () => {
  return (
    <div className="h-screen mt-15 max-w-5xl mx-auto">
      {/* Technologies Header */}
      <div className="space-y-0.5">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl md:text-4xl font-bold text-transparent leading-relaxed">
          Technogies
        </h2>
        <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-semibold text-transparent">
          My Tech Stack
        </p>
      </div>

      {/* Main Tech Content */}
      <div className="flex flex-wrap gap-5 justify-center mt-7">
        {/* Js */}
        <TechIcons className={`text-cyan-400`} icon={<RiTailwindCssFill />}>
          Tailwind
        </TechIcons>
        <TechIcons className={`text-yellow-300 font-semibold`} icon="JS">
          Javascript
        </TechIcons>
        <TechIcons className={`text-cyan-400`} icon={<GrReactjs size={24} />}>
          React
        </TechIcons>
        <TechIcons icon={<RiNextjsLine size={24} />}>Next.js</TechIcons>
        <TechIcons className={`text-green-600`} icon={<FaNodeJs size={24} />}>
          Node.js
        </TechIcons>
        <TechIcons icon={<SiExpress size={24} />}>Express</TechIcons>
        <TechIcons className={`text-green-600`} icon={<SiMongodb size={24} />}>
          MongoDB
        </TechIcons>
        <TechIcons className={`text-orange-600`} icon={<FaGitAlt size={24} />}>
          Git
        </TechIcons>
        <TechIcons icon={<FaGithub size={24} />}>Github</TechIcons>
      </div>

      {/* Skills Section */}
      <>
        <Skills />
      </>
    </div>
  );
};

export default Technology;
