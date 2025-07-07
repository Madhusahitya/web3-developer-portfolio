"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Heart, Github, Linkedin, Twitter } from "lucide-react";

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
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-6">
            <span className="text-primary-yellow">Contact</span> Me
          </h2>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto">
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
          <form 
            action="https://formspree.io/f/xzzgqgjz" 
            method="POST" 
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="New submission from portfolio contact form" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
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
                  name="email"
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
                name="message"
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

        {/* Social Media Icons + Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col items-center gap-4"
        >
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-2">
            <a href="https://github.com/Madhusahitya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-700 hover:bg-primary-yellow transition-colors border border-gray-600 hover:border-primary-yellow">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/madhu-sahitya-09432934b/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-700 hover:bg-primary-yellow transition-colors border border-gray-600 hover:border-primary-yellow">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="https://twitter.com/sahiityaa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-700 hover:bg-primary-yellow transition-colors border border-gray-600 hover:border-primary-yellow">
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
          <p className="text-gray-400 text-xs">
            © 2024 Madhu Sahitya. Built with{" "}
            <Heart className="inline w-4 h-4 text-primary-yellow mx-1" />
            and Next.js
          </p>
          <p className="text-gray-400 text-xs">
            Open source • Building in public
          </p>
        </motion.div>
      </div>
    </footer>
  );
}