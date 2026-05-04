import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="h-full md:mt-12 mt-6 max-w-5xl mx-auto">
      {/* About Heading */}
      <div className="space-y-2">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl md:text-4xl font-bold text-transparent">
          About
        </h2>
        <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-semibold text-transparent">
          My Introduction
        </p>
      </div>

      {/* Main Info */}
      <div className="md:flex md:justify-between gap-10 mt-10 max-[500px]:mx-4 max-[500px]:space-y-8 ">
        {/* Logo */}
        <div className="md:flex-1">
          <div className="w-full h-full bg-[#111]/80 rounded-xl hover:scale-105 transition-all duration-500 shadow">
            <Image
              src="/logohsb.png"
              alt="hasibLogo"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Personal Details */}
        <div className="md:flex-1 text-left">
          <div className="flex justify-between items-center gap-3">
            {/* Developer */}
            <div className="bg-[#111] flex-1 rounded-xl hover:scale-105 transition-all duration-500 shadow border-2 border-gray-300/10">
              <div className="flex flex-col justify-center items-center h-30 space-y-1">
                <p className="text-neutral-300 text-2xl">Developer</p>
                <p className="text-neutral-300 text-sm font-semibold">
                  Mern Stack
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-[#111] flex-1 rounded-xl hover:scale-105 transition-all duration-500 shadow border-2 border-gray-300/10">
              <div className="flex flex-col justify-center items-center space-y-1 h-30">
                <p className="text-neutral-300 text-3xl">10+</p>
                <p className="text-neutral-300 text-sm font-semibold">
                  Projects
                </p>
              </div>
            </div>

            <div className="bg-[#111] flex-1 rounded-xl hover:scale-105 transition-all duration-500 shadow border-2 border-gray-300/10">
              <div className="flex flex-col justify-center items-center h-30 space-y-1">
                <p className="text-neutral-300 text-2xl">Support</p>
                <p className="text-neutral-300 text-sm font-semibold">
                  Online 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Text-Infos */}
          <div className="text-[15px] text-neutral-300 w-[90%] font-medium leading-7 mt-5 ml-1 italic">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
