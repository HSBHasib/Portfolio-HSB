"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// 1. TerminalSkeleton: Agger motoi thakbe, center-e anar jonno mx-auto use kora holo
const TerminalSkeleton = () => (
  <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl animate-pulse">
    <div className="bg-neutral-800 px-4 py-3 flex gap-1.5 items-center">
      <div className="h-3 w-3 rounded-full bg-neutral-700" />
      <div className="h-3 w-3 rounded-full bg-neutral-700" />
      <div className="h-3 w-3 rounded-full bg-neutral-700" />
    </div>
    <div className="p-5 space-y-4 h-[320px] overflow-hidden">
       <div className="h-4 w-32 bg-neutral-800 rounded" />
       <div className="space-y-3 ml-4">
         <div className="h-3 bg-neutral-800 rounded w-[85%]" />
         <div className="h-3 bg-neutral-800 rounded w-[70%]" />
         <div className="h-3 bg-neutral-800 rounded w-[40%]" />
       </div>
       <div className="h-4 w-40 bg-neutral-800 rounded mt-8" />
    </div>
  </div>
);

// 2. Dynamic Import: Loading prop-e Skeleton ta pass kora hoyeche. 
// Ati shudhu tokhon-i skeleton show korbe jokhon SkillsTerminal-ti actually load hochche.
const SkillsTeminal = dynamic(
  () => import('./SkillsTerminal').then(mod => mod.SkillsTeminal), 
  {
    ssr: false,
    loading: () => <TerminalSkeleton />
  }
);

const Skills = () => {
  return (
    <motion.div 
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="my-16 max-w-6xl mx-auto px-6 md:px-4 text-center"
    >
      <div className="space-y-1">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent">
          Skills
        </h2>
        <p className="text-neutral-500 text-sm font-medium italic">
          My Technical Level
        </p>
      </div>
      
      {/* Container - flex justify-center jate load hobar ag-por-shob somoy center-e thake */}
      <div className="mt-8 flex justify-center min-h-[320px]"> 
        <div className="w-full max-w-lg rounded-xl text-left overflow-hidden border border-white/5 shadow-2xl">
           <SkillsTeminal />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;