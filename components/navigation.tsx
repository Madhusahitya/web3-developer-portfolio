"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navigation() {
  console.log("Navigation component rendered");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Learning", href: "#learning" },
    { name: "More", href: "#", dropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-bg/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation Links in one row */}
          <div className="flex items-center gap-10">
            <span className="text-2xl">😺</span>
            <h1 className="text-2xl font-bold font-poppins text-primary-yellow">
              sahitya.labs
            </h1>
            <div className="hidden md:flex items-center gap-8 ml-6">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <a href={item.href} className="nav-link cursor-pointer">
                      {item.name} <span className="ml-1">▼</span>
                    </a>
                    <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href="#resume" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resume</a>
                      <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ThemeToggle component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Set custom body class on theme change
  useEffect(() => {
    const body = document.body;
    if (theme === "light") {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else if (theme === "dark") {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    } else {
      // System: match prefers-color-scheme
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      body.classList.toggle("dark-mode", isDark);
      body.classList.toggle("light-mode", !isDark);
    }
  }, [theme]);

  return (
    <div className="flex gap-2 items-center border rounded-full px-2 py-1 bg-white/80 shadow-sm">
      <button
        aria-label="Light mode"
        className={`p-1 rounded-full ${theme === "light" ? "bg-yellow-200" : ""}`}
        onClick={() => setTheme("light")}
      >
        <span role="img" aria-label="Light">🌞</span>
      </button>
      <button
        aria-label="Dark mode"
        className={`p-1 rounded-full ${theme === "dark" ? "bg-gray-300" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <span role="img" aria-label="Dark">🌚</span>
      </button>
      <button
        aria-label="System mode"
        className={`p-1 rounded-full ${theme === "system" ? "bg-gray-200" : ""}`}
        onClick={() => setTheme("system")}
      >
        <span role="img" aria-label="System">💻</span>
      </button>
    </div>
  );
}