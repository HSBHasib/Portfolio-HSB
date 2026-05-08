"use client";

import React, { useState, useEffect } from "react";
import { BsCalendar2Week } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const QualificationSkeleton = () => (
  <div className="relative w-full max-w-4xl mx-auto animate-pulse py-10">
    {/* Center Line Skeleton */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/5"></div>
    
    {/* SSC Side Skeleton */}
    <div className="relative flex justify-between items-start mb-16 w-full">
      <div className="w-[45%] flex flex-col items-end gap-2 pr-4">
        <div className="h-4 w-12 bg-white/5 rounded"></div>
        <div className="h-3 w-32 bg-white/5 rounded"></div>
        <div className="h-3 w-20 bg-white/5 rounded mt-2"></div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/10 rounded-full border-2 border-black z-10"></div>
      <div className="w-[45%]"></div>
    </div>

    {/* HSC Side Skeleton */}
    <div className="relative flex justify-between items-start w-full">
      <div className="w-[45%]"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/10 rounded-full border-2 border-black z-10"></div>
      <div className="w-[45%] flex flex-col items-start gap-2 pl-4">
        <div className="h-4 w-12 bg-white/5 rounded"></div>
        <div className="h-3 w-32 bg-white/5 rounded"></div>
        <div className="h-3 w-20 bg-white/5 rounded mt-2"></div>
      </div>
    </div>
  </div>
);

const Qualification = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div id="qualification" className="min-h-[400px] md:my-14 mt-10 max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent leading-relaxed">
          Qualification
        </h2>
        <p className="text-neutral-500 text-sm font-medium italic">
           My personal journey
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto mt-4">
        <div className="flex justify-center items-center gap-2 mb-10">
          <span className="text-xl">🎓</span>
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-lg md:text-xl font-bold text-transparent">
             Education
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {!mounted ? (
            <motion.div key="skeleton" exit={{ opacity: 0 }}>
              <QualificationSkeleton />
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Vertical Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-600"
              />

              {/* Dots and Content (SSC) */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-black z-10 shadow-[0_0_15px_#7C3AED]"></div>
              
              <div className="relative flex justify-between items-start mb-16 pt-0 w-full">
                <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-[45%] text-right space-y-1 pr-3 md:p-0"
                >
                  <h3 className="text-neutral-100 text-[15px] md:text-lg font-bold">SSC</h3>
                  <p className="text-neutral-400 font-medium text-[10px] md:text-xs leading-normal">
                    Ashraful Ulum Islamia <br/> Dakhil Madrasha
                  </p>
                  <p className="flex items-center gap-2 text-neutral-500 text-[10px] md:text-xs justify-end mt-2">
                    <BsCalendar2Week size={12} color="white"/> 2021 - 2023
                  </p>
                </motion.div>
                <div className="w-[45%]"></div>
              </div>

              {/* HSC Section */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-black z-10 shadow-[0_0_15px_#7C3AED]"></div>

              <div className="relative flex justify-between items-start mb-2 w-full">
                <div className="w-[45%]"></div>
                <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-[45%] text-left space-y-1 pl-3 md:p-0"
                >
                  <h3 className="text-neutral-100 text-[15px] md:text-lg font-bold">HSC</h3>
                  <p className="text-neutral-400 font-medium text-[10px] md:text-xs leading-normal">
                    Nawab Habibullah Model<br/> School and College
                  </p>
                  <p className="flex items-center gap-2 text-neutral-500 text-[10px] md:text-xs justify-start mt-2">
                    <BsCalendar2Week size={12} color="white"/> 2023 - 2025
                  </p>
                </motion.div>
              </div>

              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-black z-10 shadow-[0_0_15px_#7C3AED]"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Qualification;