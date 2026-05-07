import AboutPage from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import HeroPage from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import Qualification from "@/components/Qualifications/Qualification";
import Technology from "@/components/Technology/Technology";


export default function Home() {
  return (
   <div className="text-5xl font-bold text-center text-red-10">
    <Navbar />
    <HeroPage />
    <AboutPage />
    <Technology />
    <Qualification />
    <Projects />
    <Contact />
    <Footer />
   </div>
  );
}
