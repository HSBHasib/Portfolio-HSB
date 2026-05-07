"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillsTeminal } from "./SkillsTerminal";

const Skills = () => {
  return (
    <motion.div 
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="my-16"
    >
      <div className="space-y-1">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent">
          Skills
        </h2>
        <p className="text-neutral-500 text-sm font-medium italic">
          My Technical Level
        </p>
      </div>
      
      <div className="mt-8">
        {/* Terminal Effect Section */}
        <div className="rounded-xl text-left overflow-hidden border border-white/5 shadow-2xl">
           <SkillsTeminal />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;