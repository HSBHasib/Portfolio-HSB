"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative pointer-events-auto">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all duration-300"
      >
        <FaMoon className="h-4 w-4" />
      </button>

      {/* Glassy Tooltip Message */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-3 right-0 whitespace-nowrap z-[6000]"
          >
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl shadow-2xl">
              <p className="text-[11px] font-medium text-neutral-300">
                Light mode coming soon... 💡
              </p>
              {/* Choto arrow (Optional) */}
              <div className="absolute -top-1 right-4 w-2 h-2 bg-black border-l border-t border-white/10 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;