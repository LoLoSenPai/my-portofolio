import React, { useState } from 'react';
import { LuCode2 } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";
import ProjectModal from './ProjectModal';
import { AnimatedTooltip } from './ui/animated-tooltip';

export default function ProjectsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Ogronex NFT Project",
            description: "Ogronex is a NFT project on the Solana & Polygon blockchains. Include NFT Raffles, Launchpad, DAO dapp and some discord bots.",
            icons: [
                '/icons/ogronex-logo.png',
                '/icons/nextjs-logo.svg',
                '/icons/tailwindcss-logo.svg',
                '/icons/prisma-logo.svg',
            ],
            technologies: ["NextJS", "Tailwind", "Prisma"],
            link: "https://ogronex.com",
            github: "https://github.com/LoLoSenPai/launchpad-ogronex",
            screenshots: [
                '/images/11.png',
                '/images/22.png',
                '/images/33.png',
                '/images/44.png'
            ]
        },
        {
            title: "Discord Alert Bot",
            description: "This bot fetch data from the BigTime marketplace, compare it with the database, and send a discord embed when the floor price of an item drops below a certain threshold.",
            icons: [
                '/icons/discord-logo.svg',
                '/icons/javascript-logo.svg',
                '/icons/discordjs-logo.svg',
            ],
            technologies: ["JS", "Discord.js"],
            github: "https://github.com/LoLoSenPai/Discord-Bot-BigTime",
            screenshots: [
                '/images/66.png'
            ]
        },
        {
            title: "E-Commerce Website",
            description: "E-Commerce website, integrating Stripe payments.",
            icons: [
                '/icons/oryon-logo.webp',
                '/icons/react-logo.svg',
                '/icons/express-logo.svg',
                '/icons/api-logo.svg',
            ],
            technologies: ["React", "Express", "API"],
            link: "https://oryon-merch.com",
            github: "https://github.com/LoLoSenPai/oryon-master",
            screenshots: [
                '/images/55.png'
            ]
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className='relative'>
            <div className='absolute top-0 flex justify-center w-full'>
                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
            </div>
            <div className='flex items-center justify-center h-full px-3 py-2 border rounded-md border-border-ui dark:border-dark-border-ui bg-bg-subtle dark:bg-dark-bg-subtle'>
                <div className="p-3 space-y-12 md:p-12 backdrop-blur-sm md:rounded-xl">
                    <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl font-bold text-center">Selected Projects</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={`${index * 100}`}
                                // tabIndex={0}
                                aria-label={`Open project ${project.title}`}
                                className="p-6 space-y-4 rounded-lg bg-bg-ui/40 dark:bg-dark-bg-ui hover:bg-bg-ui-hover dark:hover:bg-dark-bg-ui-hover">
                                <div className="flex items-center justify-between">
                                    <img src={project.icons[0]} alt='icon technology' className="w-auto h-[40px]" />
                                    <span className="flex space-x-5 text-2xl">
                                        {project.link &&
                                            <AnimatedTooltip text="Explore the Live Version" positionContext='icon'>
                                                <a href={project.link} target="_blank">
                                                    <TbWorldWww />
                                                </a>
                                            </AnimatedTooltip>
                                        }
                                        {project.github &&
                                            <AnimatedTooltip text="View the Code on GitHub" positionContext='icon'>
                                                <a href={project.github} target="_blank">
                                                    <LuCode2 />
                                                </a>
                                            </AnimatedTooltip>
                                        }
                                    </span>
                                </div>
                                <AnimatedTooltip text="Learn More About the Project" positionContext='title'>
                                    <button
                                        onClick={() => openModal(project)}
                                        onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
                                        className="text-2xl font-semibold cursor-pointer"
                                    >
                                        {project.title}
                                    </button>
                                </AnimatedTooltip>
                                <p className="text-text-low dark:text-dark-text-low">{project.description}</p>
                                <ul className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies.map((tech, idx) => (
                                        <li key={idx} className="tooltip group">
                                            <img src={project.icons[idx + 1]} alt={tech} className="w-[20px] h-[20px]" />
                                            <span className="tooltiptext">{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </div>
    );
}