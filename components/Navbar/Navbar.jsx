"use client";
import React from "react";
import { IconHome, IconMessage } from "@tabler/icons-react";
import { GoStack } from "react-icons/go";
import { TbLocation } from "react-icons/tb";
import Image from "next/image";
import ThemeToggle from "./ToggleTheme";
import { FloatingNav } from "../ui/floating-navbar";

export function Navbar() {
  const navItems = [
    { name: "Home", link: "#home", icon: <IconHome className="h-4 w-4" /> },
    { name: "Tech Stack", link: "#techstack", icon: <GoStack className="h-4 w-4" /> },
    { name: "Projects", link: "#project", icon: <IconMessage className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <TbLocation className="h-4 w-4" /> }
  ];

  return (
    <nav className="fixed top-3 md:top-5 inset-x-0 z-[5000] flex items-center justify-between max-w-6xl mx-auto px-4 md:px-8 pointer-events-none">
      <div className="pointer-events-auto ">
        <Image 
          src='/logohsb.png'
          alt='hsbLogo'
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>

      {/* Center: Floating Menu - Spacing adjustment */}
      <div className="pointer-events-auto mx-1">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Right: Theme Toggle - Hidden below 420px */}
      <div className="pointer-events-auto flex-shrink-0 min-[420px]:block hidden">
        <ThemeToggle />
      </div>
    </nav>
  );
}
