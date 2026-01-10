"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Code, Briefcase, BookOpen, Award, Rocket } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-16 sm:py-10 overflow-hidden text-white/70"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] rounded-xl" />
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF6B00]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-[#00f0ff]/5 rounded-full blur-[80px]" />

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
            <div className="relative px-2 py-3 sm:p-6 md:p-8 rounded-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-sm">
              {/* Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF6B00]/20 to-[#00f0ff]/20 blur-xl opacity-50" />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Md Reazul Hasan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mb-1">
                    Md Reazul Hasan
                  </h3>
                  <p className="text-[#FF6B00] text-sm sm:text-base font-medium mb-2">
                    Junior JavaScript / Full-Stack Developer
                  </p>

                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-4 text-sm">
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
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-400"
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
              className="absolute -top-2 md:-top-5 md:-right-2 -right-0 w-8 sm:w-16 h-8 sm:h-16 border border-[#FF6B00]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute md:-bottom-4 md:-left-3 -bottom-2 -left-1 w-8  sm:w-16 h-8 sm:h-16 border border-[#00f0ff]/20 rounded-full"
            />
          </motion.div>

          {/* Right - Description & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4 text-sm sm:text-base px-2">
              <p className="text-white/65 leading-relaxed">
                I'm a passionate{" "}
                <span className="text-[#FF6B00] font-medium">
                  JavaScript developer
                </span>{" "}
                from Bangladesh, creating modern, interactive web experiences. I
                build{" "}
                <span className="text-[#00f0ff]">real-time applications</span>{" "}
                and elegant interfaces.
              </p>
              <p className="text-white/65 leading-relaxed">
                I specialize in the{" "}
                <span className=" font-medium">React ecosystem</span>, including
                Next.js for SSR and Node.js for backend development.
              </p>
              <p className="text-white/65 leading-relaxed">
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
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-[#FF6B00]/30 transition-all"
                  >
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF6B00] mx-auto mb-2" />
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
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
