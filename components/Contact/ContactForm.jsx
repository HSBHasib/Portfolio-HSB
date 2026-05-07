// import React from "react";
// import { FiSend } from "react-icons/fi";
// import Button from "../Button";
// import Link from "next/link";

// const ContactForm = () => {
//   return (
//     <div className="w-full max-w-md mx-auto px-4 md:px-0">
//       {/* Title */}
//       <h2 className="text-xl font-bold mb-8 text-center bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
//         Write me your project
//       </h2>

//       <form className="flex flex-col gap-6">
//         {/* Name Input */}
//         <div className="flex flex-col gap-2 text-left">
//           <label className="text-xs font-semibold text-neutral-400 tracking-wider uppercase ml-2">
//             Name
//           </label>
//           <input
//             type="text"
//             placeholder="name"
//             className="w-full bg-[#111]/50 border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/80 transition-all duration-300 shadow-inner"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="flex flex-col gap-2 text-left">
//           <label className="text-xs font-semibold text-neutral-400 tracking-wider uppercase ml-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             placeholder="email address"
//             className="w-full bg-[#111]/50 border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/80 transition-all duration-300 shadow-inner"
//           />
//         </div>

//         {/* Project Textarea */}
//         <div className="flex flex-col gap-2 text-left">
//           <label className="text-xs font-semibold text-neutral-400 tracking-wider uppercase ml-1">
//             Project Details
//           </label>
//           <textarea
//             rows="5"
//             placeholder="write your project details..."
//             className="w-full bg-[#111]/50 border border-neutral-800 rounded-xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/80 transition-all duration-300 resize-none shadow-inner"
//           ></textarea>
//         </div>

//         {/* Send Button */}
//         <Link href="/">
//           <button className="ml-1 bg-gradient-to-b from-neutral-50 to-neutral-400 text-black font-semibold px-6 py-3.5 text-[15px] rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 active:scale-95 transition-all w-full md:w-fit group mt-2 shadow-lg shadow-white/5">
//             Send Message
//             <FiSend className="text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;





"use client";
import React from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  // Ekhane EmailJS ba API use kore real functionality add korte parben
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Demo)");
  };

  return (
    <div className="w-full max-w-md mx-auto md:mx-0">
      <h2 className="text-xl font-bold mb-8 text-center md:text-left bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
        Write me your project
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Input Fields Wrapper */}
        {[
          { label: "Name", type: "text", placeholder: "Your Name" },
          { label: "Email Address", type: "email", placeholder: "your@email.com" }
        ].map((field, index) => (
          <div key={index} className="flex flex-col gap-2 text-left">
            <label className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase ml-2">
              {field.label}
            </label>
            <input
              required
              type={field.type}
              placeholder={field.placeholder}
              className="w-full bg-[#111]/50 border border-neutral-800 rounded-2xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/50 transition-all duration-300 shadow-inner"
            />
          </div>
        ))}

        {/* Message Field */}
        <div className="flex flex-col gap-2 text-left">
          <label className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase ml-2">
            Project Details
          </label>
          <textarea
            required
            rows="5"
            placeholder="Tell me about your project..."
            className="w-full bg-[#111]/50 border border-neutral-800 rounded-2xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/50 transition-all duration-300 resize-none shadow-inner"
          ></textarea>
        </div>

        {/* Action Button */}
        <button 
          type="submit"
          className="bg-gradient-to-b from-neutral-50 to-neutral-400 text-black font-bold px-8 py-4 text-sm rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all w-full md:w-fit group mt-4 shadow-xl shadow-white/5"
        >
          Send Message
          <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;