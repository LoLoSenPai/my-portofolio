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
            title: "Tasks reminder",
            description: "You can track existing airdrops, add your own projects & tasks, and set reminders for them.",
            icons: [
                '/icons/logo-t2a.png',
                '/icons/nextjs-logo.svg',
                '/icons/tailwindcss-logo.svg',
                '/icons/prisma-logo.svg',
                '/icons/mongodb3-logo.svg',
            ],
            technologies: ["NextJS", "Tailwind", "Prisma", "MongoDB"],
            link: "https://track2airdrop.lololabs.xyz/",
            github: "https://github.com/LoLoSenPai/track2airdrop-v2",
            screenshots: [
                '/images/t2a.png',
                '/images/t2a-2.png'
            ]
        },
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
            title: "E-Commerce Website",
            description: "E-Commerce website, integrating Stripe payments.",
            icons: [
                '/icons/oryon-logo.webp',
                '/icons/react-logo.svg',
                '/icons/express-logo.svg',
                '/icons/api-logo.svg',
            ],
            technologies: ["React", "Express", "API"],
            link: "https://oryon-merch.lololabs.xyz",
            github: "https://github.com/LoLoSenPai/oryon-master",
            screenshots: [
                '/images/55.png'
            ]
        },
        {
            title: "Discord Alert Bot",
            description: "This bot fetch data from the BigTime marketplace, compare it with the database, and send a discord embed when the floor price of an item drops below a certain threshold.",
            icons: [
                '/icons/discord-logo.svg',
                '/icons/javascript-logo.svg',
                '/icons/discordjs-logo.svg',
                '/icons/mongodb3-logo.svg',
            ],
            technologies: ["JS", "Discord.js", "MongoDB"],
            github: "https://github.com/LoLoSenPai/Discord-Bot-BigTime",
            screenshots: [
                '/images/66.png'
            ]
        },
        {
            title: "Web3 discovery",
            description: "A web3 discovery project, for first time users to learn about web3 and blockchain.",
            icons: [
                '/icons/crypto-noob.png',
                '/icons/nextjs-logo.svg',
                '/icons/tailwindcss-logo.svg',
            ],
            technologies: ["NextJS", "Tailwind"],
            link: "https://crypto-noob.lololabs.xyz/",
            github: "https://github.com/LoLoSenPai/project",
            screenshots: [
                '/images/web3-discovery.png'
            ]
        },
        {
            title: "NFT Launchpad (Solana & Abstract)",
            description: "NFT launchpads for Solana and Abstract, where users can mint, depending on the eligibility criteria.",
            mainIcons: [
                '/icons/toastdao-logo.png',
                '/icons/shadow-logo.svg',
            ],
            icons: [
                '/icons/nextjs-logo.svg',
                '/icons/tailwindcss-logo.svg',
                '/icons/web3js-logo.svg',
            ],
            technologies: ["NextJS", "Tailwind", "Web3.js"],
            links: [
                { label: "Toast DAO", url: "https://raffle.toast-dao.xyz/" },
                { label: "Shadow Ponzi", url: "https://nft-launch.shadowponzi.com/" }
            ],
            screenshots: [
                '/images/toastdao.png',
                '/images/shadow.png'
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
                                className="flex flex-col justify-between p-6 h-full min-h-[320px] rounded-lg bg-bg-ui/40 dark:bg-dark-bg-ui hover:bg-bg-ui-hover dark:hover:bg-dark-bg-ui-hover"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {(project.mainIcons ?? [project.icons[0]]).map((icon, i) => (
                                                <img key={i} src={icon} alt="project icon" className="w-auto h-[40px]" />
                                            ))}
                                        </div>
                                        <span className="relative flex space-x-5 text-2xl">
                                            {project.links ? (
                                                project.links.map((item, i) => (
                                                    <AnimatedTooltip key={i} text={item.label} positionContext="icon">
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                            <TbWorldWww />
                                                        </a>
                                                    </AnimatedTooltip>
                                                ))
                                            ) : project.link && (
                                                <AnimatedTooltip text="Explore the Live Version" positionContext="icon">
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <TbWorldWww />
                                                    </a>
                                                </AnimatedTooltip>
                                            )}
                                            {project.github && (
                                                <AnimatedTooltip text="View the Code on GitHub" positionContext="icon">
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                        <LuCode2 />
                                                    </a>
                                                </AnimatedTooltip>
                                            )}
                                        </span>
                                    </div>

                                    <AnimatedTooltip text="Learn More About the Project" positionContext='title'>
                                        <button
                                            onClick={() => openModal(project)}
                                            onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
                                            className="text-2xl font-semibold text-left cursor-pointer"
                                        >
                                            {project.title}
                                        </button>
                                    </AnimatedTooltip>

                                    <p className="text-text-low dark:text-dark-text-low">{project.description}</p>
                                </div>

                                <ul className="flex flex-wrap gap-2 mt-6">
                                    {(project.mainIcons ? project.icons : project.icons.slice(1)).map((icon, idx) => (
                                        <li key={idx} className="tooltip group">
                                            <img src={icon} alt={project.technologies[idx]} className="w-[20px] h-[20px] rounded" />
                                            <span className="tooltiptext">{project.technologies[idx]}</span>
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