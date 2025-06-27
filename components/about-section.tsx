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
      label: "Blockchain Ecosystems",
      items: ["Solana", "Ethereum", "Polygon", "Chainlink"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl font-bold font-poppins text-text-dark">
                About{" "}
                <span className="text-primary-yellow">Me</span>
              </h2>
              
              <div className="space-y-4 text-2xl leading-relaxed">
                <p className="text-text-dark">
                  I'm <span className="text-primary-yellow font-semibold">Madhu Sahitya</span> — a curious, 
                  consistent, and impact-driven developer learning to build real-world solutions 
                  using Web3 technologies.
                </p>
                
                <p className="text-text-gray">
                  I build as I learn. From DeFi protocols to cross-chain infrastructure, 
                  I believe in{" "}
                  <span className="text-primary-orange font-semibold">working in public</span>, 
                  staying accountable, and growing with the community.
                </p>
                
                <p className="text-text-gray">
                  My journey combines deep technical learning with practical implementation, 
                  always aiming to contribute meaningful solutions to the decentralized ecosystem.
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
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-200 hover:border-primary-yellow/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-text-dark mb-4">
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