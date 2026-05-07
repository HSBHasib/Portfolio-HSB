"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen py-12 px-6 md:px-0 max-w-3xl mx-auto overflow-hidden"
    >
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-2 text-center "
      >
        <div>
          <h2 className="bg-gradient-to-b from-neutral-50 pb-1 to-neutral-400 bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
            Get in Touch
          </h2>
          <p className="text-neutral-500 text-sm font-medium italic">
            Contact Me
          </p>
        </div>
      </motion.div>

      {/* Main Content Layout */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Left Side: Staggered Fade-in */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[35%]  "
        >
          {/* md:w-auto */}
          <ContactCards />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
