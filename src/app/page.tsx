import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        {/* Top row: Hero (left) + About & Stats (right) */}
        <div id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <HeroSection />
          <div id="about">
            <AboutSection />
          </div>
        </div>

        {/* Middle row: Experience (left) + Projects & Skills (right) */}
        <div
          id="experience"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
        >
          <ExperienceSection />
          <div id="projects" className="space-y-4">
            <ProjectsSection />
            <SkillsSection />
          </div>
        </div>

        {/* Bottom row: Courses (full width) */}
        <div className="mb-4">
          <CoursesSection />
        </div>

        {/* Contact */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
