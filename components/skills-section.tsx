"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Wrench, Zap, Shield } from "lucide-react";

export default function SkillsSection() {
  console.log("SkillsSection component rendered");

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Rust", "Go", "Solidity", "TypeScript", "JavaScript", "Python"],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      title: "Blockchain & Web3",
      icon: Shield,
      skills: ["Solana", "Ethereum", "Smart Contracts", "DeFi", "Cross-Chain", "Chainlink"],
      color: "text-primary-yellow",
      bgColor: "bg-primary-yellow/10",
      borderColor: "border-primary-yellow/20",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
      color: "text-green-600",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "IPFS", "Redis", "Firebase"],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Docker", "Kubernetes", "Git", "GitHub Actions", "AWS", "Google Cloud"],
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
    },
    {
      title: "Automation & AI",
      icon: Zap,
      skills: ["n8n", "AI Integration", "Workflow Automation", "API Integration"],
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold font-poppins mb-6 text-text-dark">
            <span className="text-primary-yellow">Skills</span>
          </h2>
          <p className="text-2xl text-text-gray max-w-3xl mx-auto">
            My technical stack and areas of expertise in blockchain and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-white border ${category.borderColor} hover:border-primary-yellow/50 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${category.bgColor} ${category.borderColor} border`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-text-dark">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-sm border-gray-200 text-text-gray hover:border-primary-yellow hover:text-primary-yellow transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}