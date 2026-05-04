import HeroPage from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="text-5xl font-bold text-center text-red-10">
    <Navbar />
    <HeroPage />
   </div>
  );
}
