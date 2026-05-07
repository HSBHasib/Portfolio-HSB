"use client";

import React from "react";
import { motion } from "framer-motion";

const TechIcons = ({ children, className, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1, // Protiti icon alada somoye asbe
        ease: "easeOut" 
      }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="bg-white/5 h-14 w-14 flex justify-center items-center border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 rounded-2xl md:rounded-full">
        <div className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${className}`}>
          {icon}
        </div>
      </div>
      <p className="text-[11px] font-medium text-neutral-400 group-hover:text-white transition-colors">
        {children}
      </p>
    </motion.div>
  );
};

export default TechIcons;