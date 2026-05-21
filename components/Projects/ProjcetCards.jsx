"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectModal from "./ProjectDetailsModal";

const ProjcetCards = ({ data }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-[#111111] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#111] dark:border-white/[0.1] border-black/[0.1] w-full h-auto min-h-[550px] rounded-2xl p-4 border flex flex-col justify-between transition-all duration-300">
        {/* Image and project details */}
        <div className="w-full">
          {/* Image */}
          <CardItem
            translateZ="40"
            className="w-full mb-5 relative overflow-hidden rounded-xl"
          >
            {!imgLoaded && (
              <div className="absolute inset-0 bg-neutral-900 z-10 flex items-center justify-center">
                <div className="w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full" />
              </div>
            )}

            <Image
              src={data.img || "/"}
              height={600}
              width={600}
              onLoadingComplete={() => setImgLoaded(true)} // Natural load logic
              className={cn(
                "h-52 md:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/5 transition-opacity duration-700",
                imgLoaded ? "opacity-100" : "opacity-0",
              )}
              alt={data.name}
              priority={data.id <= 3}
            />
          </CardItem>

          {/* Text Content */}
          <div className="px-1">
            <CardItem
              translateZ="20"
              className="text-xl font-bold text-neutral-300 dark:text-white"
            >
              {data.name}
            </CardItem>

            <CardItem
              as="p"
              translateZ="20"
              className="text-neutral-400 text-[13px] font-medium text-left mt-3 dark:text-neutral-400 leading-relaxed line-clamp-4"
            >
              {data.des}
            </CardItem>

            {/* Tech Stack Badges */}
            <CardItem translateZ="10" className="flex flex-wrap gap-2 pt-5">
              {data.tech.map((tc, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border border-white/10 bg-white/5 rounded-md text-[10px] md:text-xs font-medium text-neutral-300 transition-colors hover:bg-white/10"
                >
                  {tc}
                </span>
              ))}
            </CardItem>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6">
          <CardItem className="w-full flex justify-between items-center gap-2" translateZ="10">

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-black bg-white/80 hover:bg-neutral-200 transition-all active:scale-95 duration-300 cursor-pointer"
            >
              Project Details
            </button>

            {/* GitHub & Live Links */}
            <div className="flex items-center gap-2">
              <Link
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-1.5 px-3.5 py-1.5 border border-white/10 rounded-lg text-xs font-medium text-neutral-300 bg-transparent hover:bg-white/5 transition-all active:scale-95 duration-300 cursor-pointer">
                  <FaGithub size={16} />
                  GitHub
                </button>
              </Link>

              <Link href={data.live} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-1.5 px-3.5 py-1.5 border border-white/10 rounded-lg text-xs font-medium text-neutral-300 bg-transparent hover:bg-white/5 transition-all active:scale-95 duration-300 cursor-pointer">
                  <ArrowUpRightFromSquare size={14} />
                  Live
                </button>
              </Link>
            </div>

          </CardItem>
        </div>
      </CardBody>

      {/* Project Modal Component */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={data}
      />

      {/* Shimmer CSS */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </CardContainer>
  );
};

export default ProjcetCards;

