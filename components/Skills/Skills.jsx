import React from "react";
import { SkillsTeminal } from "./SkillsTerminal";
import './Skiil.css'

const Skills = () => {
  return (
    <div className={`h-[90vh] mt-4 `}>
      {/* Skill Header */}
      <div>
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl md:text-4xl font-bold text-transparent leading-relaxed">
          Skills
        </h2>
        <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-semibold text-transparent">
          My Technical Level
        </p>
      </div>
      <div className="mt-4 text-left">
        <SkillsTeminal />
      </div>
    </div>
  );
};

export default Skills;
