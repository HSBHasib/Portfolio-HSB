"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { LuArrowDown } from "react-icons/lu";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const moreItems = [
    { name: "About-Me", link: "#about" },
    { name: "Qualification", link: "#qualification" },
    { name: "Skills", link: "#skills" },
  ];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          className={cn(
            "flex items-center justify-center gap-4 rounded-full border border-white/10 bg-black/60 px-4 py-2 shadow-2xl backdrop-blur-lg dark:bg-transparent",
            className,
          )}
        >
          <div className="flex items-center gap-2">
            {navItems?.map((navItem, idx) => (
              <a
                key={`link-${idx}`}
                href={navItem.link} // Direct ID reference
                className="relative flex items-center gap-1 px-3 py-1 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                <span>{navItem.icon}</span>
                <span className="hidden sm:block text-xs">{navItem.name}</span>
              </a>
            ))}

            {/* More Button with Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                <LuArrowDown
                  className={cn(
                    "h-3 w-3 transition-transform",
                    showMore && "rotate-180",
                  )}
                />
                <span className="hidden sm:block text-xs">More</span>
              </button>

              {/* Glassy Dropdown */}
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute top-full mt-4 right-0 w-48 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-2 shadow-2xl"
                  >
                    {moreItems.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        onClick={() => setShowMore(false)}
                        className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
