import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SiteHeader from "./components/SiteHeader";
import SkillsSection from "./components/SkillsSection";
import { WavyBackground } from "./components/ui/wavy-background";

export default function Home() {
  return (
    <>
      <WavyBackground />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
