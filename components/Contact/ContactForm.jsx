// "use client";

// import React from "react";
// import { FiSend } from "react-icons/fi";

// const ContactForm = () => {

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully! (Demo)");
//   };

//   return (
//     <div className="w-full max-w-md mx-auto md:mx-0">
//       <h2 className="text-xl font-bold mb-8 text-center md:text-left bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
//         Write me your project
//       </h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//         {/* Input Fields Wrapper */}
//         {[
//           { label: "Name", type: "text", placeholder: "Your Name" },
//           { label: "Email Address", type: "email", placeholder: "your@email.com" }
//         ].map((field, index) => (
//           <div key={index} className="flex flex-col gap-2 text-left">
//             <label className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase ml-2">
//               {field.label}
//             </label>
//             <input
//               required
//               type={field.type}
//               placeholder={field.placeholder}
//               className="w-full bg-[#111]/50 border border-neutral-800 rounded-2xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/50 transition-all duration-300 shadow-inner"
//             />
//           </div>
//         ))}

//         {/* Message Field */}
//         <div className="flex flex-col gap-2 text-left">
//           <label className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase ml-2">
//             Project Details
//           </label>
//           <textarea
//             required
//             rows="5"
//             placeholder="Tell me about your project..."
//             className="w-full bg-[#111]/50 border border-neutral-800 rounded-2xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/50 transition-all duration-300 resize-none shadow-inner"
//           ></textarea>
//         </div>

//         {/* Action Button */}
//         <button
//           type="submit"
//           className="bg-gradient-to-b from-neutral-50 to-neutral-400 text-black font-bold px-8 py-4 text-sm rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all w-full md:w-fit group mt-4 shadow-xl shadow-white/5"
//         >
//           Send Message
//           <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

"use client";

import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast, Toaster } from "react-hot-toast";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully! Check your inbox.");
        setFormData({ name: "", email: "", message: "" }); // Form reset
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto md:mx-0">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,

          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "12px",
            fontSize: "14px",
            padding: "12px 24px",
            maxWidth: "fit-content",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <h2 className="text-xl font-bold mb-8 text-center md:text-left bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
        Write me your project
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Input Fields Wrapper */}
        <div className="flex flex-col gap-2 text-left">
          <label className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase ml-2">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#111]/50 border border-neutral-800 rounded-2xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/50 transition-all duration-300 shadow-inner"
          />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase ml-2">
            Email Address
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="your@email.com"
            className="w-full bg-[#111]/50 border border-neutral-800 rounded-2xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/50 transition-all duration-300 shadow-inner"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2 text-left">
          <label className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase ml-2">
            Project Details
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Tell me about your project..."
            className="w-full bg-[#111]/50 border border-neutral-800 rounded-2xl p-4 text-sm text-white placeholder-neutral-700 outline-none focus:border-neutral-500 hover:border-neutral-700/50 transition-all duration-300 resize-none shadow-inner"
          ></textarea>
        </div>

        {/* Action Button */}
        <button
          disabled={loading}
          type="submit"
          className="bg-gradient-to-b from-neutral-50 to-neutral-400 text-black font-bold px-8 py-4 text-sm rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all w-full md:w-fit group mt-4 shadow-xl shadow-white/5 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
          {!loading && (
            <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
