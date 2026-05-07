import React from 'react'
import { FiSend } from "react-icons/fi";
import Button from '../Button';


const ContactForm = () => {
  return (
    <div className="w-full max-w-md mx-auto px-4 md:px-0">
          {/* Title */}
          <h2 className="text-xl font-bold mb-8 text-center bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
            Write me your project
          </h2>

          <form className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-semibold text-neutral-400 tracking-wider uppercase ml-2">
                Name
              </label>
              <input
                type="text"
                placeholder="name"
                className="w-full bg-[#111]/50 border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/80 transition-all duration-300 shadow-inner"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-semibold text-neutral-400 tracking-wider uppercase ml-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="email address"
                className="w-full bg-[#111]/50 border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/80 transition-all duration-300 shadow-inner"
              />
            </div>

            {/* Project Textarea */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-semibold text-neutral-400 tracking-wider uppercase ml-1">
                Project Details
              </label>
              <textarea
                rows="5"
                placeholder="write your project details..."
                className="w-full bg-[#111]/50 border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/80 transition-all duration-300 resize-none shadow-inner"
              ></textarea>
            </div>

            {/* Send Button */}
            <button className="ml-1 bg-gradient-to-b from-neutral-50 to-neutral-400 text-black font-semibold px-6 py-3.5 text-[15px] rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 active:scale-95 transition-all w-full md:w-fit group mt-2 shadow-lg shadow-white/5">
              Send Message
              <FiSend className="text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </form>
        </div>
  )
}

export default ContactForm
