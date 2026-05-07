import React from "react";
import Link from "next/link";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactCards = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-xs mx-auto">
      <h2 className="text-xl font-bold mb-2 text-center bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
        Talk to me
      </h2>

      {/* Email Card */}
      <Link
        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
        target="_blank"
        className="group relative"
      >
        <div className="h-full border border-neutral-800 bg-[#0a0a0a] p-5 rounded-[2rem] flex flex-col items-center gap-2 transition-all duration-300 hover:border-neutral-600 hover:bg-[#111] shadow-2xl">
          <div className="p-3 rounded-2xl bg-red-500/10 mb-2">
            <HiOutlineMail className="text-3xl text-red-500/80" />
          </div>
          <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            Email
          </h3>
          <p className="text-sm text-neutral-200 font-medium">
            hasibhsb19@gmail.com
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
            Write me
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>

      {/* LinkedIn Card */}
      <Link
        href="https://www.linkedin.com/in/hasibur-rahman19/"
        target="_blank"
        className="group relative"
      >
        <div className="h-full border border-neutral-800 bg-[#0a0a0a] p-5 rounded-[2rem] flex flex-col items-center gap-2 transition-all duration-300 hover:border-neutral-600 hover:bg-[#111] shadow-2xl">
          <div className="p-3 rounded-2xl bg-blue-500/10 mb-2">
            <FaLinkedin className="text-3xl text-blue-400" />
          </div>
          <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            LinkedIn
          </h3>
          <p className="text-sm text-neutral-200 font-medium">Hasibur Rahman</p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
            Write me
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>

      {/* </div> */}
    </div>
  );
};

export default ContactCards;
