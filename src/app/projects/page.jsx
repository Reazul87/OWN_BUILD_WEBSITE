"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Layers } from "lucide-react";
import Image from "next/image";

/* -------------------- DATA -------------------- */

const projects = [
  {
    id: 1,
    title: "Green Nest",
    description:
      "A modern plant-store web app built with React, Firebase Auth, and Tailwind CSS.",
    image: "https://i.ibb.co.com/nqF0kfSz/green-nest.png",
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS", "Node.js"],
    category: "fullstack",
    demoUrl: "https://green-nest-org.netlify.app",
    githubUrl: "https://github.com/Reazul87/GlobalNexus-Frontend",
    featured: true,
  },
  {
    id: 2,
    title: "CS Ticket System",
    description:
      "Customer support ticket dashboard with real-time status tracking.",
    image: "https://i.ibb.co.com/YKS2FTZ/support-ticket.png",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    category: "frontend",
    demoUrl: "https://customer-support-zone-one.netlify.app",
    githubUrl: "https://github.com/Reazul87/REACT_ASSIGNMENT_B12A07",
    featured: true,
  },
  {
    id: 3,
    title: "HERO IO",
    description:
      "Client-side app manager with local storage and dynamic sorting.",
    image: "https://i.ibb.co.com/HLC35s7V/Hero.png",
    technologies: ["React", "Tailwind CSS"],
    category: "frontend",
    demoUrl: "https://hero-io-10.netlify.app",
    githubUrl: "https://github.com/Reazul87/REACT_ASSIGNMENT_B12A08",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "fullstack", name: "Full Stack" },
];

/* -------------------- COMPONENT -------------------- */

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-10 overflow-hidden text-white/70"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            My <span className="text-[#FF6B00]">Projects</span>
          </h2>
          <p className="text-white/70 mt-3">
            A showcase of my work – from interactive frontends to full-stack
            applications with real-time features.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2 md:px-5 py-2 rounded-xl text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white/90 shadow-lg shadow-orange-500/30"
                  : "bg-white/5  text-white/70 border border-white/10 hover:border-[#FF6B00]/30 hover:text-white/95"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl bg-[#111]/80 border border-white/10 overflow-hidden"
              >
                {/* Featured */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#FF6B00] text-xs text-white/90 rounded-full flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    Featured
                  </div>
                )}
                {/* Image (desktop hover only) */}
                <div className="relative h-48 group/image overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                  />

                  {/* Desktop overlay */}
                  <div className="hidden sm:flex absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="w-11 h-11 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white/85"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/85"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  {/* Title + MOBILE links */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white/80">
                      {project.title}
                    </h3>

                    {/* Mobile links */}
                    <div className="flex gap-2 sm:hidden">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-white/80"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-white/80"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-white/70 mt-2 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Details */}
                <div className="px-5 pb-5">
                  <a
                    href={`/projects/${project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1 text-sm text-[#FF6B00]"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
