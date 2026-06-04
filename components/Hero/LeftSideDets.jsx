"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Button from "../Button";
import { MdEmail } from "react-icons/md";

const LeftSideDets = ({ isLoaded }) => {
  if (!isLoaded) {
    return (
      <div className="flex flex-col space-y-4 animate-pulse">
        <div className="h-8 md:h-10 bg-neutral-800 rounded-lg w-32 mx-auto md:mx-0"></div>
        <div className="h-12 md:h-16 bg-neutral-800 rounded-lg w-full max-w-md mx-auto md:mx-0"></div>
        <div className="h-6 md:h-8 bg-neutral-800 rounded-lg w-64 mx-auto md:mx-0"></div>
        <div className="h-20 bg-neutral-900 rounded-xl w-full max-w-lg mx-auto md:mx-0 mt-4"></div>
      </div>
    );
  }

  const word = `⚡Passionate Frontend Developer specializing in building scalable, user-centric web applications. I bridge the gap between complex backend logic and seamless frontend experiences using the MERN stack and Next.js.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <motion.p
        variants={itemVariants}
        className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent md:text-xl"
      >
        Hey, I'm
      </motion.p>
      <motion.h1
        variants={itemVariants}
        className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl mt-0.5 md:mt-1"
      >
        Hasibur Rahman
      </motion.h1>
      <motion.h1
        variants={itemVariants}
        className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl font-semibold text-transparent md:text-xl mt-4"
      >
        A Frontend Developer based in Bangladesh
      </motion.h1>
      <motion.div variants={itemVariants}>
        <TextGenerateEffect
          className="max-w-[500px] max-[768px]:mx-auto text-[15px] font-semibold"
          words={word}
        />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-6 flex md:justify-start justify-center"
      >
        <Link
          href="https://drive.google.com/file/d/1nOfb-_1BF-MNxmp3BnOd6MPLhanjXUn7/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="px-7 py-3">
            Get Resume <LuDownload size={16} />
          </Button>
        </Link>

        <div className="border border-white opacity-20 mx-5 my-1.5"></div>
        <div className="font-semibold text-2xl  flex items-center gap-3">
          {/* Linkedin */}
          <Link
            href="https://www.linkedin.com/in/hasibur-rahman19/"
            target="_blank"
          >
            <IoLogoLinkedin className="opacity-60 text-white hover:opacity-100 hover:scale-110 transition-all duration-300" />
          </Link>

          {/* Github */}
          <Link href="https://github.com/HSBHasib" target="_blank">
            <BsGithub className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 text-white" />
          </Link>

          {/* Email */}
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
          >
            <MdEmail className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 text-white" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftSideDets;

