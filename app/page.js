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
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 -z-10">
        <svg className="w-full h-full filter blur-2xl" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="25%"
            className="fill-light-blue-svg dark:fill-dark-blue-svg">
            <animate attributeName="r" values="25%;30%;25%" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <main className="relative z-10 flex flex-col gap-10 max-w-[1200px] mx-auto p-4 md:pb-5 lg:pb-32">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  )
}
