"use client";

import ContactPage from "./contact/page";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MySkills from "./skills/page";
import AboutMe from "./about/page";
import ProjectsSection from "./projects/page";
import Hero from "@/components/Hero";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <main className="max-w-7xl mx-auto w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <MySkills />
        <ProjectsSection />
        <AboutMe />
        <ContactPage />
        <Footer />
      </main>
    </div>
  );
}
