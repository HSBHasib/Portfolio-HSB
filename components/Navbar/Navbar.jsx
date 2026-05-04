"use client";
import React from "react";
import { IconHome, IconMessage } from "@tabler/icons-react";
import { PiGraduationCap } from "react-icons/pi";
import { GoStack } from "react-icons/go";


import { FloatingNav } from "../ui/floating-navbar";
import { TbLocation } from "react-icons/tb";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tech Stack",
      link: "/techstack",
      icon: <GoStack className="h-4 w-4 text-neutral-500 dark:text-white" />,
      
    },
    {
      name: "Qualification",
      link: "/qualification",
      icon: <PiGraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/project",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact Me",
      link: "/contact",
      icon: (
        <TbLocation className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    }
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
