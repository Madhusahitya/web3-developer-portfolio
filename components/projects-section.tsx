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
      description:"Advanced DeFi Yield Farming Protocol integrating automated strategies and on-chain reputation for optimized spending. Features secure smart contract interactions and seamless MetaMask integration.",
      hackathon: "MetaMask Card Dev Cook-Off",
      tags: ["Solidity", "n8n", "Metamask SDK", "Ether.js", "React", "Typescript", "Javascript", "LI.FI SDK"],
      status: "Completed",
      statusColor: "primary-orange",
      github: "https://github.com/Madhusahitya/MetacardYieldflow",
      demo: "https://metacard-yieldflow-7cv6zho9k.vercel.app/",
      icon: Trophy,
    },
    {
      title: "Solana Lottery Game dApp",
      description: "Decentralized lottery application on Solana enabling users to buy tickets, participate in fair random draws, and claim on-chain rewards. Features secure smart contract logic, real-time game updates, and seamless wallet integration.",
      hackathon: null,
      tags: ["Rust", "Anchor", "Solana", "React", "TypeScript", "Solana Wallet Adapter"],
      status: "Completed & Extended",
      statusColor: "blue-500",
      github: "https://github.com/Madhusahitya/LottoSolana",
      demo: null,
      icon: Zap,
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
          <h2 className="text-4xl sm:text-4xl font-bold font-poppins mb-6 text-text-dark">
            <span className="text-text-dark">Projects</span>
          </h2>
          <p className="text-2xl text-text-gray max-w-3xl mx-auto">
            Explore my hands-on projects in Web3, DeFi, and blockchain development.
          </p>
        </motion.div>

        {/* Responsive layout: center two projects, grid for three+ */}
        {projects.length === 2 ? (
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group w-full md:w-1/2 max-w-md"
              >
                <Card className="h-full bg-white border border-gray-200 hover:border-primary-yellow/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-primary-yellow/10 border border-primary-yellow/20">
                        <project.icon className="w-6 h-6 text-primary-yellow" />
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
                        <div className="flex gap-3 mt-4">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-colors">
                              <Github className="w-4 h-4 text-text-gray hover:text-text-dark" />
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-colors">
                              <ExternalLink className="w-4 h-4 text-text-gray hover:text-text-dark" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
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
                        <div className="flex gap-3 mt-4">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-colors">
                              <Github className="w-4 h-4 text-text-gray hover:text-text-dark" />
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-colors">
                              <ExternalLink className="w-4 h-4 text-text-gray hover:text-text-dark" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}