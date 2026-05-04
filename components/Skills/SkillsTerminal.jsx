"use client";

import { Terminal } from "../ui/terminal.";

export function SkillsTeminal() {
  return (
    <section id="mainDiv" className="w-full ">
      <Terminal
        commands={[
          "Hasib skills",
          "Frontend skills",
          "Backend skills",
        ]}
        outputs={{
          0: [
            "Frontend Skills",
            "Backend Skiils",
          ],
          1: [
            "✔ HTML5",
            "✔ Css",
            "✔ Tailwind",
            "✔ Javascript",
            "✔ React",
            "✔ NextJS",
          ],
          2: [
            "✔ NodeJS",
            "✔ ExpressJS",
            "✔ MongoDB",
          ],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000} />
    </section>
  );
}
