"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import TechIcons from "./TechIcons";
import Skills from "../Skills/Skills";

const Technology = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show skeleton loading
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const techStack = [
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "text-cyan-400" },
    { name: "Javascript", icon: "JS", color: "text-yellow-300 font-bold" },
    { name: "React", icon: <GrReactjs />, color: "text-cyan-400" },
    { name: "Next.js", icon: <RiNextjsLine />, color: "text-white" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "Express", icon: <SiExpress />, color: "text-neutral-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
    { name: "Github", icon: <FaGithub />, color: "text-white" },
  ];

  return (
    <div
      id="techstack"
      className="h-full mt-8 max-w-5xl mx-auto px-4"
    >
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-1"
      >
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent">
          Technologies
        </h2>
        <p className="text-neutral-500 text-sm font-medium italic">
          My Tech Stack
        </p>
      </motion.div>

      {/* Tech Grid */}
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {loading
          ? // Skeleton Loading State
            Array(9)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 animate-pulse"
                >
                  <div className="bg-white/5 h-14 w-14 rounded-full border border-white/5"></div>
                  <div className="h-2 w-10 bg-white/5 rounded"></div>
                </div>
              ))
          : // Actual Tech Icons
            techStack.map((tech, index) => (
              <TechIcons
                key={index}
                index={index}
                className={tech.color}
                icon={tech.icon}
              >
                {tech.name}
              </TechIcons>
            ))}
      </div>

      <Skills />
    </div>
  );
};

export default Technology;
