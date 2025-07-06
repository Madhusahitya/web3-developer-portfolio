"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function HeroSection() {
  console.log("HeroSection component rendered");

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace the endpoint below with your own Formspree endpoint
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzzgqgjz';
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        }),
      });
      if (res.ok) {
        toast({ title: 'Message sent!', description: 'I will get back to you soon.' });
        setForm({ name: '', email: '', message: '' });
        setOpen(false);
      } else {
        toast({ title: 'Error', description: 'Failed to send message.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Error', description: 'Failed to send message.', variant: 'destructive' });
    }
  };

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
            
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold font-poppins text-text-dark leading-tight">
              Hey there, I'm 
            </h1>
            <h2>
              <span className="text-primary-yellow font-semibold text-5xl tracking-wide">
                Madhu Sahitya
              </span>
            </h2>
            <h3 className="text-2xl text-text-gray max-w-2xl leading-relaxed">
              A Hands-On Web3 Developer focused on building Secure, Cross-Chain, and DeFi-centric applications.
            </h3>
            
            <p className="text-2xl text-text-gray max-w-2xl leading-relaxed">
            I architect and develop robust decentralized solutions, leveraging expertise in Rust, Go, and Solidity. 
            My focus is on crafting scalable dApps, ensuring secure smart contract development, and building
            resilient decentralized infrastructure. I am driven by continuous learning and innovation in the Web3 
            space.

              {/* <span className="text-primary-yellow font-semibold">Web3 Developer in Progress</span>{" "} */}
              {/* specializing in Rust, Go, Solana, DeFi Protocols, and Cross-Chain Infrastructure.  */}
              {/* Building the future of decentralized technology through continuous learning and innovation. */}
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
              onClick={() => setOpen(true)}
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
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] z-10 pointer-events-none">
            <CryptoOrbit />
          </div> */}
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
            <DialogFooter>
              <Button type="submit" className="bg-primary-yellow hover:bg-primary-orange text-white">
                Send Message
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}