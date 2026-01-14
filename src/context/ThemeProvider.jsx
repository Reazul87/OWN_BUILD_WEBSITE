"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Apply theme to <html>
  const applyTheme = (value) => {
    const html = document.documentElement;
    let resolved =
      value === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : value;

    html.classList.remove("light", "dark");
    html.classList.add(resolved);
    html.setAttribute("data-theme", value);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  const updateTheme = (value) => {
    setTheme(value);
    localStorage.setItem("theme", value);
    applyTheme(value);
  };

  if (!mounted) return null; // DON'T render until theme is applied

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
