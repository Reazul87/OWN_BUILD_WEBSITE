"use client";

import ContactPage from "./contact/page";
import MySkills from "./skills/page";
import AboutMe from "./about/page";
import ProjectsSection from "./projects/page";
import Hero from "@/components/Hero";
import { useTheme } from "@/context/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans ${
        theme === "light" ? "bg-white" : theme === "dark" ? "bg-black" : ""
      }`}
    >
      <main className="max-w-7xl mx-auto w-full overflow-x-hidden">
        <Hero />
        <MySkills />
        <ProjectsSection />
        <AboutMe />
        <ContactPage />
      </main>
    </div>
  );
}
