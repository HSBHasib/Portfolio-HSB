"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from './hero.module.css';
import { cn } from "@/lib/utils";

const RightSideDets = ({ isLoaded }) => {
  const [imgIsLoaded, setImgIsLoaded] = useState(false);
  const showSkeleton = !isLoaded || !imgIsLoaded;

  return (
    <div className="w-full flex items-center justify-center py-10 md:py-0">
      <div className="relative group">
        <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition duration-1000"></div>

        <div className={cn(styles.blob_container, "relative")}>
          {showSkeleton && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-900 overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <div className="w-8 h-8 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
            </div>
          )}

          <Image 
            src="/hasib.webp" 
            alt="Hasib Profile"
            width={400}
            height={400}
            priority
            onLoadingComplete={() => setImgIsLoaded(true)}
            className={cn(
              "w-full h-full object-cover scale-110 transition-opacity duration-1000 ease-in-out",
              imgIsLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        <div className="absolute -bottom-3 -right-2 bg-[#171717]/30 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-2xl shadow-2xl z-30">
           <p className="text-[10px] uppercase tracking-widest font-semibold text-purple-400">
             Frontend Developer
           </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default RightSideDets;