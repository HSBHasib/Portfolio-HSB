"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence add kora holo smooth transition-er jonno
import ProjcetCards from "./ProjcetCards";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// CSS Imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Project.css";

export function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectDets = [
    {
      id: 1,
      img: "/docApp.png",
      name: "DocAppointment",
      des: "A modern medical booking application, featuring dynamic specialist catalogs, seamless scheduling via interactive modals, and secure multi route user dashboard management.",
      tech: [
        "Next.js",
        "Javascript",
        "Node.js",
        "Express",
        "MongoDB",
        "BetterAuth",
        "SwiperJS",
      ],
      github: "https://github.com/HSBHasib/PH-ASSIGNMENT-09-Client-Side",
      live: "https://docappointment-client.vercel.app/",
    },
    {
      id: 2,
      img: "/tiles.png",
      name: "Tiles Gallery",
      des: "An editorial collection and showcase for premium interior surfaces, featuring dynamic real time search, interactive masonry layouts, and secure multi route user dashboard management.",
      tech: ["Next.js", "Javascript", "BetterAuth", "MongoDB", "SwiperJS"],
      github: "https://github.com/HSBHasib/Tiles-Gallery-A8",
      live: "https://tilesgallery-gbpq6kw46-hsbhasi.vercel.app/",
    },
    {
      id: 3,
      img: "/keenkeeper.png",
      name: "KeenKeeper",
      des: "A modern friendship management web application, featuring interactive data charts, robust metric trackers, and secure personalized profiles designed to visualize and organize connections seamlessly.",
      tech: ["React", "Javascript", "Tailwind CSS", "Recharts", "Context API"],
      github: "https://github.com/HSBHasib/KeenKeeper-A7",
      live: "https://keenkeeper-five.vercel.app/",
    },
    {
      id: 4,
      img: "/digitool.png",
      name: "Digitool Platform",
      des: "An authentication based image generation platform, featuring robust security layers, cloud database configurations, and dynamic asset dashboards designed to handle digital workflows seamlessly.",
      tech: [
        "Next.js",
        "Javascript",
        "BetterAuth",
        "MongoDB Atlas",
        "Tailwind CSS",
      ],
      github: "https://github.com/HSBHasib/Digital-Tools-A6",
      live: "https://digitaltools-one.vercel.app/",
    },
    {
      id: 5,
      img: "/book.png",
      name: "Book Vibe",
      des: "A modern digital library platform, featuring interactive book tracking lists, real time page-sort filters, and secure localStorage persistence designed to manage custom literature dashboards seamlessly.",
      tech: ["React", "Javascript", "Tailwind CSS", "Recharts"],
      github: "https://github.com/HSBHasib/React-Book-Vibe-PJ",
      live: "https://react-book-vibe-omega.vercel.app/",
    },
    {
      id: 6,
      img: "/bpl.png",
      name: "BPL Dream",
      des: "A dynamic cricket team selection platform, featuring responsive player auction cards, real time budget tracking constraints, and custom roster management filters for seamless squad building.",
      tech: ["React", "Javascript", "Tailwind CSS"],
      github: "https://github.com/HSBHasib/React-BPL-Dream-11-PJ",
      live: "https://bpl-dream-orpin.vercel.app/",
    },
    {
      id: 7,
      img: "/git.png",
      name: "Github Issue Tracker",
      des: "A responsive issues management dashboard, featuring dynamic multi tab pipeline filters, real time repository log search, and automated conditional border styling based on status tracking.",
      tech: ["HTML5", "Tailwind CSS", "Javascript"],
      github: "https://github.com/HSBHasib/Github-Issues-Tracker-A5",
      live: "https://githubissuetracker.vercel.app/",
    },
    {
      id: 8,
      img: "/english.png",
      name: "Enligsh Janala",
      des: "A dynamic language learning platform, featuring interactive text-to-speech pronunciation tools, live REST API data filtering, and responsive UI components for streamlined vocabulary tracking.",
      tech: ["HTML5", "Tailwind CSS", "Javascript"],
      github: "https://github.com/HSBHasib/PH-JS-English-Janala-PJ",
      live: "https://english-janala-lyart.vercel.app/",
    },
  ];

  return (
    <div
      id="projects"
      className="h-full md:mt-20 mt-10 md:max-w-6xl md:mx-auto mx-4 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-1 mb-10 px-2 flex justify-between items-end relative"
      >
        <div className="hidden md:block w-[100px]"></div>

        <div className="text-center flex-1">
          <h2 className="bg-gradient-to-b from-neutral-50 pb-1 to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent">
            Projects
          </h2>
          <p className="text-neutral-500 text-sm font-medium italic">
            Discover my journey — swipe to explore
          </p>
        </div>

        <div className="hidden md:flex gap-4 mb-2 w-[100px] justify-end">
          <button className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all project-prev text-white active:scale-90">
            <FiChevronLeft size={24} />
          </button>
          <button className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-all project-next text-white active:scale-90">
            <FiChevronRight size={24} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!mounted ? (
          // Natural Skeleton State
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-3 grid-cols-1 gap-6 animate-pulse px-2"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[450px] bg-white/5 rounded-2xl"></div>
            ))}
          </motion.div>
        ) : (
          // Actual Swiper Content
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group px-2"
          >
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={24}
              grabCursor={true}
              navigation={{
                nextEl: ".project-next",
                prevEl: ".project-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
                renderBullet: function (index, className) {
                  return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                  );
                },
              }}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
              className="mySwiper !pb-20"
            >
              {projectDets.map((pj) => (
                <SwiperSlide key={pj.id}>
                  <ProjcetCards data={pj} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
