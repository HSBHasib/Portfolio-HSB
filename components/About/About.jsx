"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkeletonAbout = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-12 animate-pulse">
    <div className="w-full md:flex-1 max-w-[350px] md:max-w-[400px] aspect-square bg-[#1a1a1a] rounded-2xl border border-white/5" />
    <div className="w-full md:flex-1 flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-24 bg-[#1a1a1a] rounded-2xl border border-white/5"
          />
        ))}
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-[#1a1a1a] rounded-md w-full" />
        <div className="h-4 bg-[#1a1a1a] rounded-md w-[90%]" />
        <div className="h-4 bg-[#1a1a1a] rounded-md w-[80%]" />
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div
      id="about"
      className="relative h-auto py-20 px-6 md:px-0 max-w-5xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="space-y-2 text-center"
      >
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
          About
        </h2>
        <p className="text-neutral-500 text-sm font-medium italic">
          My Introduction
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!mounted ? (
          <motion.div key="skeleton" exit={{ opacity: 0 }}>
            <SkeletonAbout />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-12"
          >
            <div className="w-full md:flex-1 max-w-[320px] md:max-w-[400px]">
              <div className="relative aspect-square bg-gradient-to-br from-[#1a1a1a90] to-[#0a0a0a90] rounded-2xl hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-white/5 overflow-hidden">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                    <div className="w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full" />
                  </div>
                )}
                <Image
                  src="/logohsb.png"
                  alt="hasibLogo"
                  width={500}
                  height={500}
                  onLoadingComplete={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>

            <div className="w-full md:flex-1 flex flex-col gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[
                  { label: "Developer", sub: "MERN Stack" },
                  { label: "Consistency", sub: "100% Daily Hustle" },
                  { label: "10+", sub: "Projects" },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center shadow-lg"
                  >
                    <p className="text-neutral-300 text-xl font-bold">
                      {card.label}
                    </p>
                    <p className="text-neutral-500 text-xs mt-1 font-semibold">
                      {card.sub}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[15px] md:text-base text-neutral-400 font-medium leading-relaxed italic space-y-4 text-center md:text-left px-2 md:px-0"
              >
                <p>
                  I’m a Frontend Developer who loves turning ideas into reality
                  using code. I spend most of my time building fast and clean
                  websites with Next.js and Tailwind CSS, always making sure my components are reusable and my architecture is solid.
                </p>
                <p>
                  I really care about how a website looks and feels for the users. Right now, I’m
                  focused on mastering the MERN stack to become a better
                  Full stack developer.
                </p>
                <p>
                  My plan is to keep building great projects, gain some real world experience, and eventually dive
                  deep into DSA to make my code even more efficient. I’m always
                  learning and always pushing myself to build better digital
                  experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
