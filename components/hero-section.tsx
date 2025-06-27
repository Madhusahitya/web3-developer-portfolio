"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import CryptoOrbit from "./crypto-orbit";

export default function HeroSection() {
  console.log("HeroSection component rendered");



  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-light-bg">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Welcome text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-primary-yellow font-semibold text-2xl tracking-wide">
              WELCOME !
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-text-dark leading-tight">
              Hey there, I'm 
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-text-dark leading-tight">
              Madhu Sahitya
            </h2>
            
            <p className="text-2xl text-text-gray max-w-2xl leading-relaxed">
              <span className="text-primary-yellow font-semibold">Web3 Developer in Progress</span>{" "}
              specializing in Rust, Go, Solana, DeFi Protocols, and Cross-Chain Infrastructure. 
              Building the future of decentralized technology through continuous learning and innovation.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary-yellow hover:bg-primary-orange text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              My Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Photo with yellow background and effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Crypto orbit animation behind the image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] z-10 pointer-events-none">
            <CryptoOrbit />
          </div>
          <div className="relative">
            {/* Light grey background behind the image */}
            <div className="absolute inset-0 w-80 h-80 rounded-full bg-light-gray shadow-lg -z-20" />
            {/* Glowing border effect */}
            <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-100 to-white blur-2xl opacity-80 -z-10" />
            {/* Profile image */}
            <div className="relative z-10 w-88 h-88 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center" style={{ width: '24rem', height: '24rem' }}>
              <div className="absolute inset-0 w-full h-full bg-[#e0e0e0]" />
              <img
                src="/retouch1.png"
                alt="Madhu Sahitya"
                className="w-full h-full object-cover object-top relative"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}