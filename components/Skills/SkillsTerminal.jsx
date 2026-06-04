"use client";
import { Terminal } from "../ui/terminal.";
import { motion } from "framer-motion";

export function SkillsTeminal({ isLoading }) {
  return (
    <section  className="w-full">
      {isLoading ? (
        // Terminal Skeleton Loading
        <div className="w-full h-[300px] bg-[#111] rounded-xl border border-white/5 p-4 animate-pulse">
          <div className="flex gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-white/10"></div>
            <div className="h-3 w-3 rounded-full bg-white/10"></div>
            <div className="h-3 w-3 rounded-full bg-white/10"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 w-1/3 bg-white/5 rounded"></div>
            <div className="h-4 w-1/2 bg-white/5 rounded"></div>
            <div className="h-4 w-1/4 bg-white/5 rounded"></div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Terminal
            commands={[
          "Hasib Development skills",
          "Frontend skills",
          "Backend skills",
        ]}
        outputs={{
          0: [
            "Frontend Skills",
            "Backend Skiils",
          ],
          1: [
            "✔ HTML5 / CSS3",
            "✔ Tailwind CSS & Bootstrap",
            "✔ JavaScript (ES6+)",
            "✔ React.js",
            "✔ Next.js",
          ],
          2: [
            "✔ Node.js ",
            "✔ Express.js",
            "✔ MongoDB",
            "✔ RESTful APIs & Auth",
            "✔ BetterAuth",
            "✔ JWT",
          ]
        }}
            typingSpeed={45}
            delayBetweenCommands={1000}
          />
        </motion.div>
      )}
    </section>
  );
}


