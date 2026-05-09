import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail, MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-800 text-left">
      <div className="px-6 py-16 md:pt-12 pb-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Name */}
          <div className="md:col-span-4">
            <h2 className="text-xl font-bold tracking-tighter mb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Hasibur Rahman
            </h2>
            <p className="text-sm opacity-88 leading-relaxed font-medium max-w-[45%] text-neutral-400">
              Frontend Developer passionate about creating beautiful and functional web experience
            </p>
          </div>

            {/* Socail Links */}
            <div className="col-span-1">
              <h3 className="text-[16px] font-bold uppercase mb-3 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm font-medium ml-0.5 opacity-88 text-neutral-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:underline transition-opacity flex gap-2"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="hover:underline transition-opacity flex gap-2"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="hover:underline transition-opacity flex gap-2 pl-0.5"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:underline transition-opacity flex gap-2 pl-0.5"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-span-1">
              <h3 className="text-[16px] font-bold uppercase mb-3 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                Contact Us
              </h3>
              <div className="text-sm flex gap-4 ml-0.5">
                {/* Linkedin */}
                <Link
                  href="https://www.linkedin.com/in/hasibur-rahman19/"
                  target="_blank"
                >
                  <IoLogoLinkedin
                    size={20}
                    className="opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </Link>

                {/* Github */}
                <Link href="https://github.com/HSBHasib" target="_blank">
                  <BsGithub
                    size={20}
                    className="opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </Link>

                {/* Email */}
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                >
                  <MdEmail
                    size={21}
                    className="opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div>
          <p className="flex justify-center border-t-[1.2px] border-gray-800 opacity-60 mt-10 pt-6 font-medium gap-1.5 items-center text-[8px] uppercase tracking-widest">
            <MdOutlineCopyright size={13} /> 2026 Hasibur Rahman. All rights reserved. Build with Next.js and Tailwind CSS.
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

