"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProjcetCards = ({ data }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#111] dark:border-white/[0.1] border-black/[0.1] w-full h-auto min-h-[550px] rounded-2xl p-5 border flex flex-col justify-between transition-all duration-300">
        
        <div className="w-full">
          {/* Image Section with Shimmer Loading */}
          <CardItem translateZ="60" className="w-full mb-5 relative overflow-hidden rounded-xl">
            {/* Real-time Skeleton Overlay */}
            {!imgLoaded && (
              <div className="absolute inset-0 bg-neutral-900 z-10 flex items-center justify-center">
                 <div className="w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full" />
              </div>
            )}
            
            <Image
              src={data.img || "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"}
              height={600}
              width={600}
              onLoadingComplete={() => setImgLoaded(true)} // Natural load logic
              className={cn(
                "h-52 md:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/5 transition-opacity duration-700",
                imgLoaded ? "opacity-100" : "opacity-0"
              )}
              alt={data.name}
              priority={data.id <= 3}
            />
          </CardItem>

          {/* Text Content */}
          <div className="px-1">
            <CardItem
              translateZ="40"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {data.name}
            </CardItem>
            
            <CardItem
              as="p"
              translateZ="30"
              className="text-neutral-700 text-[13px] font-medium text-left mt-3 dark:text-neutral-400 leading-relaxed line-clamp-4"
            >
              {data.des}
            </CardItem>

            {/* Tech Stack Badges */}
            <CardItem
              translateZ="20"
              className="flex flex-wrap gap-2 pt-5"
            >
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
          <CardItem
            className="flex items-center gap-2"
            translateZ="40"
          >
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-white/10 rounded-xl text-xs font-semibold text-neutral-300 bg-[#1a1a1a] hover:bg-neutral-800 transition-all active:scale-95">
                <FaGithub size={16} />
                GitHub
              </button>
            </a>
            
            <a
              href={data.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-white/10 rounded-xl text-xs font-semibold text-neutral-300 bg-[#1a1a1a] hover:bg-neutral-800 transition-all active:scale-95">
                <ArrowUpRightFromSquare size={14} />
                Live
              </button>
            </a>
          </CardItem>
        </div>
      </CardBody>

      {/* Shimmer CSS */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </CardContainer>
  );
};

export default ProjcetCards;