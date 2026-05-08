"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";

// 1. Skeleton Component for Contact Section
const ContactSkeleton = () => (
  <div className="mt-10 flex flex-col md:flex-row justify-center items-start gap-10 animate-pulse">
    {/* Left Side Skeleton (Cards) */}
    <div className="w-full md:w-[35%] space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-28 bg-white/5 rounded-2xl border border-white/5" />
      ))}
    </div>

    {/* Right Side Skeleton (Form) */}
    <div className="flex-1 w-full space-y-6">
      <div className="h-12 bg-white/5 rounded-xl border border-white/5" />
      <div className="h-12 bg-white/5 rounded-xl border border-white/5" />
      <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
      <div className="h-12 w-32 bg-white/10 rounded-xl border border-white/5" />
    </div>
  </div>
);

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      id="contact"
      className="h-full py-12 px-6 md:px-0 max-w-3xl mx-auto overflow-hidden"
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

      <AnimatePresence mode="wait">
        {!mounted ? (
          <motion.div key="skeleton" exit={{ opacity: 0 }}>
            <ContactSkeleton />
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col md:flex-row justify-center items-start gap-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[35%]  "
            >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;