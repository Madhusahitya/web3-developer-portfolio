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
    { name: "Blog", href: "#blog", highlight: false },
    { name: "Learning", href: "#learning" },
    { name: "More", href: "#", dropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-gray/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation Links in one row */}
          <div className="flex items-center gap-10">
            <span className="text-lg">😺</span>
            <h1 className="text-xl font-bold font-poppins text-primary-yellow">
              sahitya.labs
            </h1>
            <div className="hidden md:flex items-center gap-8 ml-6">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <a href={item.href} className="nav-link text-text-dark cursor-pointer">
                      {item.name} <span className="ml-1">▼</span>
                    </a>
                    <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href="/Madhu_Sahitya_Web3_Resume.pdf" target="_blank" rel="noopener noreferrer" download className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">Resume</a>
                      <a href="#contact" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">Contact</a>
                      
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.highlight
                        ? "nav-link text-primary-yellow font-semibold hover:underline hover:text-primary-orange transition-colors"
                        : "nav-link text-text-dark"
                    }
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
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