"use client";

import { motion } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";
import { View } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Hero = () => {
  const words = ["A Full Stack Developer.", "A Mern Stack Developer."];
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="overflow-hidden text-white/70 px-4 sm:px-6 py-8 md:py-14">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <div className="relative flex items-center justify-center w-60 h-60 sm:w-70 sm:h-70 md:w-74 md:h-74">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-[8px] sm:border-[10px] border-orange-200 border-t-orange-500 will-change-transform"
          />

          {/* Image */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-white">
            <Image
              src="/profile.jpg"
              alt="Md Reazul Hasan"
              className="w-full h-full object-cover"
              draggable={false}
              height={240}
              width={240}
            />
          </div>
        </div>

        {/* Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col space-y-5 text-center md:text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Hello, I'm <span className="text-orange-500">Md Reazul Hasan</span>
          </motion.h1>

          <div className="text-xl md:text-2xl font-medium font-swap">
            <div className="App">
              <Typewriter
                words={words}
                loop={0}
                cursor
                cursorColor="purple"
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={800}
              />
            </div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-sm text-left sm:text-base max-w-xl mx-auto md:mx-0"
          >
            I’m a Full-Stack Developer focused on building fast, scalable and
            user-friendly web applications with modern technologies.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
          >
            <a
              href="https://drive.google.com/file/d/1PLHLzziKQsbhDBqOXdtoXP4o_CdjuD2p/view"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-orange-500 text-white/90 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              <View size={18} /> View Resume
            </a>

            <Link
              href="#projects"
              className="flex items-center justify-center gap-2 border border-orange-300 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition"
            >
              <HiOutlineEye size={18} /> Explore Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
