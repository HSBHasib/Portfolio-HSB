import React from "react";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="h-full md:mt-12 mt-6 max-w-5xl mx-auto">
      {/* About Heading */}
      <div className="space-y-2">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl md:text-4xl font-bold text-transparent">
          Get in Touch
        </h2>
        <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-semibold text-transparent">
          Contact Me
        </p>
      </div>

      {/* Main content */}
      <div className="min-h-screen text-white p-6 md:p-20 flex flex-col md:flex-row justify-center items-start gap-11 font-sans">
        {/* Left Side: Talk to me */}
        <ContactCards />

        {/* Right Side: Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
