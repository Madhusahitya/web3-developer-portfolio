"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Trophy, Zap, Code2 } from "lucide-react";

export default function ProjectsSection() {
  console.log("ProjectsSection component rendered");

  const projects = [
    {
      title: "MetaCard YieldFlow",
      description: "Advanced yield farming protocol with automated strategies and MetaMask integration",
      hackathon: "MetaMask Card Dev Cook-Off",
      tags: ["Solidity", "Go", "IPFS", "n8n", "AI Automation"],
      status: "UI Done, Backend in Progress",
      statusColor: "primary-orange",
      github: "#",
      demo: null,
      icon: Trophy,
    },
    {
      title: "Solana Catalyst",
      description: "Decentralized exchange and aggregator built on Solana with advanced trading features",
      hackathon: null,
      tags: ["Rust", "Anchor", "React", "Solana Web3.js"],
      status: "Research Phase",
      statusColor: "blue-500",
      github: "#",
      demo: null,
      icon: Zap,
    },
    {
      title: "Nexus Bridge",
      description: "Cross-chain interoperability solution connecting EVM networks with Solana",
      hackathon: null,
      tags: ["Rust", "Chainlink", "Go", "Cross-Chain"],
      status: "Planning",
      statusColor: "green-500",
      github: "#",
      demo: null,
      icon: Code2,
    },
  ];

  const getStatusColorClass = (color: string) => {
    switch (color) {
      case "primary-orange":
        return "bg-primary-orange/10 text-primary-orange border-primary-orange/20";
      case "blue-500":
        return "bg-blue-100 text-blue-600 border-blue-200";
      case "green-500":
        return "bg-green-100 text-green-600 border-green-200";
      default:
        return "bg-gray-100 text-text-gray border-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold font-poppins mb-6 text-text-dark">
            <span className="text-primary-yellow">Projects</span>
          </h2>
          <p className="text-2xl text-text-gray max-w-3xl mx-auto">
            Explore my hands-on projects in Web3, DeFi, and blockchain development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white border border-gray-200 hover:border-primary-yellow/50 hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary-yellow/10 border border-primary-yellow/20">
                      <project.icon className="w-6 h-6 text-primary-yellow" />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="icon" 
                        variant="ghost"
                        className="h-8 w-8 text-text-gray hover:text-text-dark"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      {project.demo && (
                        <Button 
                          size="icon" 
                          variant="ghost"
                          className="h-8 w-8 text-text-gray hover:text-text-dark"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-xl font-semibold text-text-dark group-hover:text-primary-yellow transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.hackathon && (
                      <Badge className="bg-green-100 text-green-600 border-green-200">
                        <Trophy className="w-3 h-3 mr-1" />
                        {project.hackathon}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-text-gray leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-text-dark mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs border-gray-200 text-text-gray hover:border-primary-yellow hover:text-primary-yellow transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-text-dark mb-2">Status</h4>
                      <Badge className={getStatusColorClass(project.statusColor)}>
                        {project.status}
                      </Badge>
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