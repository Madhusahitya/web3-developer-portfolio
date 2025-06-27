"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Heart } from "lucide-react";

export default function Footer() {
  console.log("Footer component rendered");

  return (
    <footer id="contact" className="bg-text-dark text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
            <span className="text-primary-yellow">Contact</span> Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss opportunities in Web3 development, 
            collaboration, or just have a conversation about the future of decentralized technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Your Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-yellow focus:ring-primary-yellow"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-yellow focus:ring-primary-yellow"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-300">
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, ideas, or just say hello..."
                rows={6}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary-yellow focus:ring-primary-yellow resize-none"
              />
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-primary-yellow hover:bg-primary-orange text-white font-semibold px-12 py-3 rounded-full transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Submit Message
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Madhu Sahitya. Built with{" "}
            <Heart className="inline w-4 h-4 text-primary-yellow mx-1" />
            and Next.js
          </p>
          <p className="text-gray-400 text-sm">
            Open source • Building in public
          </p>
        </motion.div>
      </div>
    </footer>
  );
}