"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Building2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechVision Bangladesh",
    role: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    period: "2024 - Present",
    description:
      "Leading development of modern web applications using React and Next.js. Implemented real-time features with Socket.IO, improving user engagement by 40%.",
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Socket.IO",
      "Tailwind CSS",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Digital Solutions Ltd",
    role: "Frontend Developer",
    location: "Remote",
    period: "2023 - 2024",
    description:
      "Built responsive, accessible web interfaces for enterprise clients. Collaborated with design teams to implement pixel-perfect UI components using React and Tailwind.",
    technologies: ["JavaScript", "React", "Redux", "Tailwind CSS", "REST APIs"],
    current: false,
  },
  {
    id: 3,
    company: "Startup Hub BD",
    role: "Junior Web Developer",
    location: "Bogura, Bangladesh",
    period: "2022 - 2023",
    description:
      "Developed and maintained multiple client websites. Gained expertise in JavaScript fundamentals, React ecosystem, and modern CSS frameworks.",
    technologies: ["JavaScript", "React", "Bootstrap", "Firebase", "Git"],
    current: false,
  },
  {
    id: 4,
    company: "Freelance",
    role: "Web Developer",
    location: "Remote",
    period: "2021 - 2022",
    description:
      "Started my journey as a freelance developer, building custom websites and web applications for small businesses and startups.",
    technologies: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#FF6B00]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-transparent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey in web development, building impactful
            digital solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B00] via-[#FF6B00]/50 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 transform md:-translate-x-1/2 -translate-y-1">
                  <div
                    className={`w-full h-full rounded-full ${
                      exp.current
                        ? "bg-[#FF6B00] shadow-lg shadow-orange-500/50 animate-pulse"
                        : "bg-[#1a1a1a] border-2 border-[#FF6B00]/50"
                    }`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative p-6 rounded-2xl bg-[#111111]/80 border border-white/10 backdrop-blur-sm hover:border-[#FF6B00]/30 transition-all"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Building2 className="w-5 h-5 text-[#FF6B00]" />
                            <h3 className="text-lg font-bold text-white">
                              {exp.company}
                            </h3>
                          </div>
                          <p className="text-[#FF6B00] font-medium">
                            {exp.role}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-[#FF6B00]/30 hover:text-[#FF6B00] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#FF6B00]/10 to-transparent" />
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}