"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Code, Briefcase, BookOpen, Award, Rocket } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

const stats = [
  { icon: Briefcase, value: 1, suffix: "+", label: "Years Experience" },
  { icon: Rocket, value: 11, suffix: "+", label: "Projects Completed" },
  { icon: Code, value: 22, suffix: "+", label: "Technologies" },
  { icon: Award, value: 0, suffix: "", label: "Awards" },
];

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B00]">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className={`relative py-16 sm:py-10 overflow-hidden ${
        theme === "dark" ? "text-white/70" : "text-black/90"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]"
            : ""
        } rounded-xl`}
      />
      <div
        className={`absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 ${
          theme === "dark" ? "bg-[#FF6B00]/25 " : ""
        }  rounded-full blur-[100px]`}
      />
      <div
        className={`absolute bottom-0 right-1/4 w-64 sm:w-80 h-64 sm:h-80 ${
          theme === "dark" ? "bg-[#00f0ff]/25 " : ""
        } rounded-full blur-[80px]`}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            About <span className="text-[#FF6B00]">Me</span>
          </h2>
          <div className="w-20 h-1 sm:w-24 bg-gradient-to-r from-[#FF6B00] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative px-2"
          >
            <div
              className={`relative px-2 py-3 sm:p-6 md:p-8 rounded-3xl ${
                theme === "dark"
                  ? "bg-[#111111]/80"
                  : theme === "light"
                  ? "bg-gray-100"
                  : ""
              }  border border-white/10 backdrop-blur-sm`}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-1 rounded-3xl blur-xl opacity-50`}
              />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Md Reazul Hasan"
                    className="w-full h-full object-cover"
                    width={200}
                    height={180}
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                      theme === "dark"
                        ? "text-white/90"
                        : theme === "light"
                        ? "text-gray-800"
                        : ""
                    } mb-1`}
                  >
                    Md Reazul Hasan
                  </h3>
                  <p className="text-[#FF6B00] text-sm sm:text-base font-medium mb-2">
                    Junior JavaScript / Full-Stack Developer
                  </p>

                  <div
                    className={`flex items-center justify-center gap-2 ${
                      theme === "dark"
                        ? "text-gray-400"
                        : theme === "light"
                        ? "text-black/90"
                        : ""
                    } mb-4 text-sm`}
                  >
                    <MapPin className="w-4 h-4 text-[#FF6B00]" />
                    <span>Bangladesh</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "JavaScript Expert",
                      "React Lover",
                      "Real-time Apps",
                      "Clean Code",
                      "Great UX",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className={`${
                          theme === "dark"
                            ? "text-gray-400 bg-white/5 border-white/10"
                            : theme === "light"
                            ? "text-black/70 bg-white/90 border-gray-400"
                            : ""
                        } px-3 py-1.5 rounded-full border text-xs sm:text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`${
                theme === "dark"
                  ? "border-[#FF6B00]/20"
                  : theme === "light"
                  ? "border-[#FF6B00]/60"
                  : ""
              } absolute -top-2 md:-top-5 md:-right-2 -right-0 w-8 sm:w-16 h-8 sm:h-16 border  rounded-full`}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className={`${
                theme === "dark"
                  ? "border-[#00f0ff]/20"
                  : theme === "light"
                  ? "border-[#00f0ff]/60"
                  : ""
              } absolute md:-bottom-4 md:-left-3 -bottom-2 -left-1 w-8  sm:w-16 h-8 sm:h-16 border  rounded-full`}
            />
          </motion.div>

          {/* Right - Description & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div
              className={`space-y-4 text-sm sm:text-base px-2  ${
                theme === "dark"
                  ? "text-white/65"
                  : theme === "light"
                  ? "text-black/80"
                  : ""
              }`}
            >
              <p className={`leading-relaxed`}>
                I'm a passionate{" "}
                <span className="text-[#FF6B00] font-medium">
                  JavaScript developer
                </span>{" "}
                from Bangladesh, creating modern, interactive web experiences. I
                build{" "}
                <span className="text-[#00f0ff]">real-time applications</span>{" "}
                and elegant interfaces.
              </p>
              <p className="leading-relaxed">
                I specialize in the{" "}
                <span className=" font-medium">React ecosystem</span>, including
                Next.js for SSR and Node.js for backend development.
              </p>
              <p className="leading-relaxed">
                Outside coding, I write blogs, explore new JS libraries, and
                contribute to open-source projects.
              </p>
            </div>

            {/* Stats */}
            <div
              ref={ref}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 md:px-0 px-2"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-4 rounded-2xl ${
                      theme === "dark"
                        ? "bg-white/5"
                        : theme === "light"
                        ? "bg-gray-100"
                        : ""
                    } border border-white/20 backdrop-blur-sm text-center hover:border-[#FF6B00]/30 transition-all`}
                  >
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF6B00] mx-auto mb-2" />
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                    <p
                      className={`text-xs sm:text-sm ${
                        theme === "dark"
                          ? "text-gray-500"
                          : theme === "light"
                          ? "text-black/60"
                          : ""
                      } mt-1`}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
