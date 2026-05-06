"use client";

import React from "react";

import ProjcetCards from "./ProjcetCards";

export function Projects() {

    const projectDets = [
        {
            id: 1,
            img: "/tiles.png",
            name: "Tiles Gellary",
            des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta libero qui dolorem explicabo doloribus. Provident accusamus, pariatur illum, magnam, ratione eius voluptatem voluptatibus aliquam quibusdam itaque id similique totam laudantium?",
            tech: ["Javascript", "Tailwind Css", "NextJs", "MongoDB"],
            github: "https://github.com/HSBHasib/PH-ASSIGNMENT-08",
            live: "https://ph-assignment-08-nu.vercel.app/"

        },
        {
            id: 2,
            img: "/pixgen.png",
            name: "Pixgen",
            des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta libero qui dolorem explicabo doloribus. Provident accusamus, pariatur illum, magnam, ratione eius voluptatem voluptatibus aliquam quibusdam itaque id similique totam laudantium?",
            tech: ["Javascript", "Tailwind Css", "NextJs", "MongoDB"],
            github: "https://github.com/HSBHasib/NextJs-Pixgen-PJ",
            live: "https://next-js-pixgen-pj.vercel.app/"
        
        },
        {
            id: 3,
            img: "/bpl.png",
            name: "BPL Dream",
            des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta libero qui dolorem explicabo doloribus. Provident accusamus, pariatur illum, magnam, ratione eius voluptatem voluptatibus aliquam quibusdam itaque id similique totam laudantium?",
            tech: ["Javascript", "Tailwind Css", "React"],
            github: "https://github.com/HSBHasib/React-BPL-Dream-11-PJ",
            live: "https://react-bpl-dream-11-pj.vercel.app/"
           
        },
        {
            id: 4,
            name: "Pixgen",
            des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta libero qui dolorem explicabo doloribus. Provident accusamus, pariatur illum, magnam, ratione eius voluptatem voluptatibus aliquam quibusdam itaque id similique totam laudantium?",
            tech: ["Javascript", "Tailwind Css", "NextJs", "MongoDB"],
           
        },
        {
            id: 5,
            name: "Pixgen",
            des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta libero qui dolorem explicabo doloribus. Provident accusamus, pariatur illum, magnam, ratione eius voluptatem voluptatibus aliquam quibusdam itaque id similique totam laudantium?",
            tech: ["Javascript", "Tailwind Css", "NextJs", "MongoDB"],
            
        },
        {
            id: 6,
            name: "Pixgen",
            des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta libero qui dolorem explicabo doloribus. Provident accusamus, pariatur illum, magnam, ratione eius voluptatem voluptatibus aliquam quibusdam itaque id similique totam laudantium?",
            tech: ["Javascript", "Tailwind Css", "NextJs", "MongoDB"],

        },
    ]

  return (
    <div className="h-full md:mt-12 mt-6 md:max-w-5xl md:mx-auto mx-6">
      {/* Projects Heading */}
      <div className="space-y-2">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl md:text-4xl font-bold text-transparent">
          Projects
        </h2>
        <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-semibold text-transparent">
          Recent projects
        </p>
      </div>

      {/* Card */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-10">

        {
            projectDets.map(pj => <ProjcetCards key={pj.id} data={pj} /> )
        }

        



      </div>
    </div>
  );
}
