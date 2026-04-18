import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import NowSection from "@/components/NowSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="max-w-[640px] mx-auto px-6 pt-16 pb-16 space-y-16 md:ml-[calc(50%-340px+3vw)]">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <NowSection />
        <ContactSection />
      </main>
    </>
  );
}
