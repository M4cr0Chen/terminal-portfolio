import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-8">
        {/* Top row: Hero (left) + About & Stats (right) */}
        <div id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
          <HeroSection />
          <div id="about">
            <AboutSection />
          </div>
        </div>

        {/* Middle row: Experience (left) + Projects & Skills (right) */}
        <div
          id="experience"
          className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3"
        >
          <ExperienceSection />
          <div id="projects" className="space-y-3">
            <ProjectsSection />
            <SkillsSection />
          </div>
        </div>

        {/* Bottom row: Courses (full width) */}
        {/* <div className="mb-3">
          <CoursesSection />
        </div> */}

        {/* Contact */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
