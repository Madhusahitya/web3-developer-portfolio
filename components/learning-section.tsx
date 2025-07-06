"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, CheckCircle } from "lucide-react";

export default function LearningSection() {
  console.log("LearningSection component rendered");

  const courses = [
    {
      title: "Learn Everything About Solidity",
      platform: "RiseIn",
      progress: 100,
      status: "completed",
      certificate: "Certificates-Learn everything about Solidity-Madhu Sahitya Mangali.pdf",
    },
    {
      title: "Rust Programming for Smart Contracts",
      platform: "RiseIn", 
      progress: 85,
      status: "in-progress",
      certificate: null,
    },
    {
      title: "Learn Everything About Solana",
      platform: "RiseIn",
      progress: 90,
      status: "in-progress", 
      certificate: null,
    },
    {
      title: "REST APIs with Go & Cloud Run",
      platform: "Google Cloud Skills Boost",
      progress: 100,
      status: "in-progress",
      certificate: null,
    },
    {
      title: "Docker for Developers",
      platform: "Google Cloud Skills Boost",
      progress: 100,
      status: "completed",
      certificate: "docker-cert.pdf",
    },
    {
      title: "Go",
      platform: "Google Cloud Skills Boost",
      progress: 80,
      status: "in-progress",
      certificate: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-primary-yellow/10 text-primary-orange border-primary-yellow/20";
      default:
        return "bg-gray-100 text-text-gray border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Not Started";
    }
  };

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-4xl font-bold font-poppins mb-6 text-text-dark">
            Learning Journey
          </h2>
          <p className="text-2xl text-text-gray max-w-3xl mx-auto">
            Tracking my continuous learning journey in Web3 development, 
            blockchain technologies, and modern development practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border border-gray-200 hover:border-primary-yellow/50 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-primary-yellow border-primary-yellow/50 bg-primary-yellow/5">
                        {course.platform}
                      </Badge>
                      <div className="flex items-center gap-2">
                        {course.certificate && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="h-8 border-green-500 text-green-600 hover:bg-green-50 p-2"
                            asChild
                          >
                            <a href={`/${course.certificate}`} download>
                            <Download className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="h-8 w-8 text-text-gray hover:text-text-dark p-0"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg font-semibold text-text-dark leading-tight">
                      {course.title}
                    </CardTitle>
                    
                    <Badge className={getStatusColor(course.status)}>
                      {course.status === "completed" && (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      )}
                      {getStatusText(course.status)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-gray">Progress</span>
                      <span className="text-text-dark font-medium">{course.progress}%</span>
                    </div>
                    <Progress 
                      value={course.progress} 
                      className="h-2 bg-gray-200"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary-yellow hover:bg-primary-orange text-white font-semibold px-8 py-3 rounded-full"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View My Live Learning Tracker
          </Button>
        </motion.div>
      </div>
    </section>
  );
}