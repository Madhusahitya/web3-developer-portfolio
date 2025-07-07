"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Calendar, FileText } from "lucide-react";

export default function AboutSection() {
  console.log("AboutSection component rendered");

  const highlights = [
    {
      label: "Focus Areas",
      items: ["DeFi Protocols", "Cross-Chain Infrastructure", "Smart Contract Development"],
    },
    {
      label: "Languages & Tools",
      items: ["Rust", "Go", "Solidity", "TypeScript", "React"],
    },
    {
      label: "Blockchain Ecosystems & Protocols",
      items: ["Solana", "Ethereum", "Polygon", "Chainlink"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-white">
      <div className="max-w-7xl mx-auto">
        {/* Centered About Heading */}
        <h2 className="text-2xl sm:text-2xl font-bold font-poppins text-text-dark text-center mb-12">About</h2>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-stretch">
          {/* Left side - About content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full space-y-8 bg-light-gray border border-gray-200 rounded-xl shadow-sm p-10"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-poppins text-text-dark mb-2">About me</h3>
              <div className="space-y-4 text-xl leading-relaxed">
                <p className="text-text-dark">
                I'm Madhu Sahitya — a 4th-year B.Tech Computer Science Engineering student specializing in Blockchain Technology, driven by a passion for building the future of Web3.
                </p>
                <p className="text-text-dark">
                My academic foundation is powerfully complemented by a hands-on philosophy: I build as I learn. This approach has led me to actively develop real-world solutions across DeFi protocols, cross-chain infrastructure, and secure smart contract development. I believe in working in public, staying accountable, and contributing meaningfully to the decentralized ecosystem.
                </p>
                <p className="text-text-dark">
                My journey combines deep technical learning with practical implementation, focusing on architecting robust, scalable, and secure decentralized applications. I am eager to translate this dedication and my growing expertise into impactful contributions within a leading blockchain organization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Highlights cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full space-y-6 bg-light-gray border border-gray-200 rounded-xl shadow-sm p-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent border-0 shadow-none">
                  <CardContent className="p-0">
                    <h3 className="text-sm font-semibold text-text-dark mb-4">
                      {highlight.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {highlight.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-primary-yellow/10 border border-primary-yellow/20 rounded-full text-sm text-text-dark"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            {/* Additional info cards */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}