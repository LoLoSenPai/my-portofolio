'use client';

import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import HeroSection from './components/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

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
    <main className="flex flex-col gap-10 max-w-[1200px] mx-auto md:pb-5 lg:pb-32">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  )
}
