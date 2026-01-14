"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Cloud,
  Wrench,
  MoreHorizontal,
} from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

const categories = [
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Server },
  { id: "devops", name: "DevOps", icon: Cloud },
  { id: "database", name: "Database", icon: Database },
  { id: "tools", name: "Tools", icon: Wrench },
  { id: "other", name: "Other", icon: MoreHorizontal },
];

const skills = {
  frontend: [
    { name: "JavaScript", level: 95, color: "#F7DF1E", featured: true },
    { name: "React", level: 92, color: "#61DAFB", featured: true },
    { name: "Next.js", level: 85, color: "#546c6e", featured: true },
    { name: "Tailwind CSS", level: 90, color: "#06B6D4", featured: true },
    { name: "HTML5", level: 95, color: "#E34F26" },
    { name: "CSS3", level: 92, color: "#1572B6" },
    { name: "Framer Motion", level: 80, color: "#FF0B35" },
    { name: "Shadcn UI", level: 85, color: "#29cad9" },
  ],
  backend: [
    { name: "Node.js", level: 85, color: "#339933", featured: true },
    { name: "Express.js", level: 82, color: "#6b79c7" },
    // { name: "Socket.IO", level: 78, color: "#010101", featured: true },
    { name: "REST APIs", level: 88, color: "#FF6B00" },
  ],
  devops: [
    { name: "Vercel", level: 90, color: "#ffffff", featured: true },
    { name: "Netlify", level: 88, color: "#00C7B7" },
    { name: "AWS Basics", level: 65, color: "#FF9900" },
  ],
  database: [
    { name: "Firebase", level: 85, color: "#FFCA28", featured: true },
    { name: "MongoDB", level: 80, color: "#47A248" },
    { name: "MySQL", level: 72, color: "#4479A1" },
  ],
  tools: [
    { name: "Git", level: 90, color: "#F05032", featured: true },
    { name: "VS Code", level: 95, color: "#007ACC", featured: true },
    { name: "Figma", level: 75, color: "#F24E1E" },
    { name: "Postman", level: 85, color: "#FF6C37" },
    { name: "npm/yarn", level: 90, color: "#CB3837" },
  ],
  other: [
    { name: "Problem Solving", level: 90, color: "#00f0ff" },
    { name: "UI/UX Design", level: 75, color: "#8B5CF6" },
    { name: "Clean Code", level: 88, color: "#10B981" },
  ],
};

export default function SkillsSection() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section
      id="skills"
      className={`relative py-2 md:py-8 overflow-hidden ${
        theme === "dark"
          ? "text-white/70"
          : theme === "light"
          ? "text-black/90"
          : ""
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          {/* Tech Constellation */}
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="constellationGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="url(#constellationGrad)" />
            {/* Orbital rings */}
            <circle
              cx="200"
              cy="200"
              r="80"
              fill="none"
              stroke="#FF6B00"
              strokeOpacity="0.1"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#00f0ff"
              strokeOpacity="0.1"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="#8B5CF6"
              strokeOpacity="0.1"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-[#FF6B00]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent mx-auto rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto px-4">
            A comprehensive toolkit centered around the JavaScript ecosystem,
            enabling me to build modern, scalable web applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  theme === "dark"
                    ? "text-white/70 bg-white/5 border-white/10 hover:border-[#FF6B00]/30 hover:text-white/95"
                    : theme === "light"
                    ? "text-black/80 border-gray-300  bg-gray-100 hover:border-[#FF6B00]/30 hover:text-black/95"
                    : ""
                } flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all border ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white/90 shadow-lg shadow-orange-500/30"
                    : ""
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2"
          >
            {skills[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group relative p-4 rounded-2xl backdrop-blur-sm transition-all cursor-default border ${
                  skill.featured
                    ? "bg-gradient-to-br from-[#FF6B00]/20 to-transparent border-[#FF6B00]/30"
                    : "bg-white/5 border-black/10 hover:border-[#FF6B00]/30"
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Skill Icon/Badge */}
                  <div
                    className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center text-lg font-bold"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                      border: `1px solid ${skill.color}30`,
                    }}
                  >
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>

                  {/* Skill Name */}
                  <h3
                    className={`font-semibold ${
                      theme === "dark"
                        ? "text-white/80"
                        : theme === "light"
                        ? "text-black/80"
                        : ""
                    } text-sm mb-2`}
                  >
                    {skill.name}
                    {/* {skill.name === "Shadcn UI" ? " learning" : ""} */}
                  </h3>

                  {/* Progress Bar */}
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      }}
                    />
                  </div>

                  {/* Level Indicator */}
                  <span
                    className={`text-xs ${
                      theme === "dark"
                        ? "text-white/70"
                        : theme === "light"
                        ? "text-black/70"
                        : ""
                    } mt-1 block`}
                  >
                    {skill.level}%
                  </span>

                  {/* Featured Badge */}
                  {skill.featured && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF6B00] shadow-lg shadow-orange-500/50" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
