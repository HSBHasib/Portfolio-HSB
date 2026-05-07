import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    // min-h-screen ensure korbe jeno background content-er sathe boro hoy
    <div id="about" className="min-h-screen py-12 px-6 md:px-0 max-w-5xl mx-auto">
      {/* About Heading */}
      <div className="space-y-2 text-center">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
          About
        </h2>
        <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-semibold text-transparent">
          My Introduction
        </p>
      </div>

      {/* Main Info Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-12">
        
        {/* Left: Logo/Profile Image */}
        <div className="w-full md:flex-1 max-w-[350px] md:max-w-[400]">
          <div className="aspect-square bg-[#111]/80 rounded-2xl hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-white/5 overflow-hidden">
            <Image
              src="/logohsb.png"
              alt="hasibLogo"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Personal Details & Description */}
        <div className="w-full md:flex-1 flex flex-col gap-8">
          
          {/* Stats Cards: Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Developer Card */}
            <div className="bg-[#111] p-5 rounded-2xl hover:scale-105 transition-all duration-500 border border-white/5 flex flex-col items-center justify-center text-center">
               <p className="text-neutral-300 text-xl font-bold">Developer</p>
               <p className="text-neutral-500 text-xs mt-1 font-semibold">MERN Stack</p>
            </div>

            {/* Projects Card */}
            <div className="bg-[#111] p-5 rounded-2xl hover:scale-105 transition-all duration-500 border border-white/5 flex flex-col items-center justify-center text-center">
               <p className="text-neutral-300 text-2xl font-bold">10+</p>
               <p className="text-neutral-500 text-xs mt-1 font-semibold">Projects</p>
            </div>

            {/* Support Card */}
            <div className="bg-[#111] p-5 rounded-2xl hover:scale-105 transition-all duration-500 border border-white/5 flex flex-col items-center justify-center text-center">
               <p className="text-neutral-300 text-xl font-bold">Support</p>
               <p className="text-neutral-500 text-xs mt-1 font-semibold">Online 24/7</p>
            </div>
          </div>

          {/* Bio Text */}
          <div className="text-[15px] md:text-base text-neutral-400 font-medium leading-relaxed italic space-y-4 text-center md:text-left px-2 md:px-0">
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
