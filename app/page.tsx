import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import BlogSection from "@/components/blog-section";
import LearningSection from "@/components/learning-section";
import SkillsSection from "@/components/skills-section";
import Footer from "@/components/footer";

export default function Home() {
  console.log("Home page rendered");
  
  return (
    <div className="min-h-screen bg-light-bg">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <LearningSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
