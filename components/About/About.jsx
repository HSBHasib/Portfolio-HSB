"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Animation Variants
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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      id="about"
      className="min-h-screen py-12 px-6 md:px-0 max-w-5xl mx-auto overflow-hidden"
    >
      {/* About Heading - Fade In */}
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

      {/* Main Info Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-12">
        {/* Left: Logo/Profile Image - Slide from Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:flex-1 max-w-[350px] md:max-w-[400]"
        >
          <div className="aspect-square bg-[#111]/80 rounded-2xl hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-white/5 overflow-hidden">
            <Image
              src="/logohsb.png"
              alt="hasibLogo"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Personal Details & Description */}
        <div className="w-full md:flex-1 flex flex-col gap-8">
          {/* Stats Cards: Staggered Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { label: "Developer", sub: "MERN Stack", val: "" },
              { label: "10+", sub: "Projects", val: "" },
              { label: "Support", sub: "Online 24/7", val: "" },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#111] p-5 rounded-2xl hover:scale-105 transition-all duration-500 border border-white/5 flex flex-col items-center justify-center text-center"
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

          {/* Bio Text - Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[15px] md:text-base text-neutral-400 font-medium leading-relaxed italic space-y-4 text-center md:text-left px-2 md:px-0"
          >
            <p>
              I am a developer driven by the pursuit of visual excellence and
              functional perfection. My work merges minimalist design with
              state-of-the-art interactive aesthetics. I believe that every line
              of code should contribute to a seamless, premium user journey.
            </p>
            <p>
              With a focus on performance and clean architecture, I build
              applications that are not just tools, but experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
