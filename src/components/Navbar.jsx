"use client";

import { Check, Monitor, Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import { socialIcons } from "@/data/socials";
import NavLink from "./NavLink";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = ["Home", "Skills", "About", "Projects", "Contact"];

  /* ---------------------------
     Apply theme
  ---------------------------- */
  const applyTheme = (selectedTheme) => {
    const html = document.documentElement;

    let resolvedTheme = selectedTheme;
    if (selectedTheme === "system") {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    html.classList.remove("light", "dark");
    html.classList.add(resolvedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  const handleThemeChange = (value) => {
    setTheme(value);
    applyTheme(value);
    setIsOpen(false);
  };

  /* ---------------------------
     Close dropdowns on outside click
  ---------------------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close theme dropdown if clicked outside
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 mt-2 md:mt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-full border border-white/20 backdrop-blur-md px-5 py-3 ${
            theme === "dark"
              ? "bg-black/70"
              : theme === "light"
              ? "bg-black/40"
              : ""
          }`}
        >
          <div className="flex items-center justify-between brightness-125">
            {/* Logo */}
            <Link href="/">
              <Image src={"/logo.png"} height={32} width={32} alt="logo" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  href={`#${item === "Home" ? "/" : item.toLowerCase()}`}
                  className={`transition hover:text-orange-500 ${
                    theme === "dark"
                      ? "text-gray-400"
                      : theme === "light"
                      ? "text-black/95"
                      : ""
                  }`}
                >
                  {item}
                </NavLink>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Desktop Socials */}
              <div className="hidden lg:flex items-center gap-3">
                {socialIcons.map((icon) => (
                  <Link
                    key={icon.link}
                    href={icon.link}
                    target="_blank"
                    className={`rounded-full ${
                      theme === "dark"
                        ? "bg-white/20 hover:bg-white/10 border-white/20"
                        : theme === "light"
                        ? "border-white/30 bg-black/10 hover:bg-black/20"
                        : ""
                    } border  p-2 transition  brightness-150`}
                  >
                    <Image
                      src={`/${icon.img}.png`}
                      alt={icon.img}
                      width={18}
                      height={18}
                    />
                  </Link>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="relative" ref={themeRef}>
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={`p-2 ${
                    theme === "dark"
                      ? "text-gray-400"
                      : theme === "light"
                      ? "text-black/95"
                      : ""
                  } hover:text-white/90 cursor-pointer`}
                >
                  {theme === "light" && <Sun size={20} />}
                  {theme === "dark" && <Moon size={20} />}
                  {/* {theme === "system" && <Monitor size={20} />} */}
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-3 w-40 rounded-xl border border-white/10 bg-[#121212] p-1 shadow-2xl z-50">
                    <ThemeOption
                      active={theme === "light"}
                      onClick={() => handleThemeChange("light")}
                      icon={<Sun size={16} />}
                      label="Light"
                    />
                    <ThemeOption
                      active={theme === "dark"}
                      onClick={() => handleThemeChange("dark")}
                      icon={<Moon size={16} />}
                      label="Dark"
                      color="text-orange-500"
                    />
                    {/* <ThemeOption
                      active={theme === "system"}
                      onClick={() => handleThemeChange("system")}
                      icon={<Monitor size={16} />}
                      label="System"
                      color="text-green-500"
                    /> */}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="md:hidden p-2 text-black/95 hover:text-white"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div
              ref={mobileMenuRef} // <-- Attach ref here
              className="fixed top-20 inset-x-2 z-999 md:hidden"
            >
              <div className="rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md p-4 space-y-4">
                <nav className="flex flex-col gap-3 text-gray-300">
                  {navItems.map((item) => (
                    <NavLink
                      key={item}
                      href={`#${item === "Home" ? "/" : item.toLowerCase()}`}
                      className={`transition hover:text-orange-500 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {item}
                    </NavLink>
                  ))}
                </nav>

                <div className="flex gap-3 pt-2">
                  {socialIcons.map((icon) => (
                    <Link
                      key={icon.img}
                      href={icon.link}
                      className="shrink-0 rounded-full bg-white/5 border border-white/10 p-2"
                    >
                      <Image
                        src={`/${icon.img}.png`}
                        alt={icon.img}
                        width={18}
                        height={18}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---------------------------
   Theme option component
---------------------------- */
const ThemeOption = ({
  active,
  onClick,
  icon,
  label,
  color = "text-gray-300",
}) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${
      active ? "bg-white/10" : "hover:bg-white/5"
    }`}
  >
    <div
      className={`flex items-center gap-3 ${active ? color : "text-gray-400"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
    {active && <Check size={14} className={color} />}
  </button>
);
