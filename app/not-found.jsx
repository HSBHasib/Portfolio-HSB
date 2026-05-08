"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none z-0 opacity-30",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-10"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw] z-10"
        fill="purple"
      />

      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-extrabold bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 space-y-2"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-200">
            Lost in the terminal?
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto italic">
            The page you are looking for doesn&apos;t exist or has been moved to
            another coordinate.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-gradient-to-b from-neutral-50 to-neutral-500 text-black font-bold hover:opacity-90 transition-all active:scale-95 duration-300 inline-block"
          >
            Return to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          className="mt-8 font-mono text-[10px] md:text-xs bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent"
        >
          <p>{`// error_code: PAGE_NOT_FOUND`}</p>
          <p>{`// user: Hasibur_Rahman`}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
