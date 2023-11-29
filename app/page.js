'use client';

import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import HeroSection from './components/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import SVGBackground from './components/SVGBackground';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: false,
      easing: 'ease-in-out',
      delay: 50,
    });
  }, []);

  return (
    <>
      <SVGBackground />
      <main className="relative z-10 flex flex-col gap-10 max-w-[1200px] mx-auto p-4 md:pb-5 lg:pb-32">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  )
}
