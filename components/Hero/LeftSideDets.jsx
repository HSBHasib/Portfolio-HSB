// import React from "react";
// import { TbLocation } from "react-icons/tb";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { BsGithub } from "react-icons/bs";
// import Link from "next/link";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";
// import { TextGenerateEffect } from "../ui/text-generate-effect";
// import Button from "../Button";

// const LeftSideDets = () => {
//   // Text Generation
//   const word = `⚡Building modern, high-performance, and responsive websites. | Transforming ideas into functional digital solutions. 🚀`;

//   return (
//     <>
//       <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent md:text-xl">
//         Hey, I'm
//       </p>
//       <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl mt-0.5 md:mt-1">
//         Hasibur Rahman
//       </h1>
//       <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl font-semibold text-transparent md:text-xl my-4">
//         A Web Developer based in Bangladesh
//       </h1>

//       {/* Text Effects */}
//       <p className="">
//         <TextGenerateEffect
//           className={"max-w-[500px] max-[768px]:mx-auto text-base font-semibold text-neutral-300"}
//           words={word}
//         />
//       </p>

//       <div className="mt-6 flex md:justify-start justify-center">
//         {/* Button */}
//         <Button className='px-7 py-3'> Say Hello <TbLocation /></Button>

//         {/* Divider */}
//         <div className="border opacity-20 mx-5 my-1.5"></div>

//         {/* Linkedin and Github Links */}
//         <div className="font-semibold text-xl flex items-center gap-3 ">
//           {/* Linkedin Logo */}
//           <Link
//             href="https://www.linkedin.com/in/hasibur-rahman19/"
//             target="_blank"
//           >
//             <IoLogoLinkedin className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300" />
//           </Link>

//           {/* Github Logo */}
//           <Link
//             href="https://github.com/HSBHasib"
//             target="_blank"
//           >
//             <BsGithub className="opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300" />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeftSideDets;













"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbLocation } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Button from "../Button";

const LeftSideDets = () => {
  const word = `⚡Building modern, high-performance, and responsive websites. | Transforming ideas into functional digital solutions. 🚀`;

  // Entrance animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Protiti element 0.2s por por asbe
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
        className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl font-semibold text-transparent md:text-xl my-4"
      >
        A Frontend Developer based in Bangladesh
      </motion.h1>

      <motion.div variants={itemVariants}>
        <TextGenerateEffect
          className="max-w-[500px] max-[768px]:mx-auto text-base font-semibold text-neutral-300"
          words={word}
        />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mt-6 flex md:justify-start justify-center"
      >
        <Button className='px-7 py-3'> Say Hello <TbLocation /></Button>

        <div className="border border-white opacity-20 mx-5 my-1.5"></div>

        <div className="font-semibold text-xl flex items-center gap-3">
          <Link href="https://www.linkedin.com/in/hasibur-rahman19/" target="_blank">
            <IoLogoLinkedin className="opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 text-white" />
          </Link>
          <Link href="https://github.com/HSBHasib" target="_blank">
            <BsGithub className="opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 text-white" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftSideDets;