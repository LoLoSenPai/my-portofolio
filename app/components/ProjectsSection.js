import { LuCode2 } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Ogronex NFT Project",
            description: "Learn coding can be fun. I create my own platform to learn that I use to teach my students.",
            icons: [
                '/icons/ogronex-logo.png',
                '/icons/nextjs-logo.svg',
                '/icons/tailwindcss-logo.svg',
                '/icons/prisma-logo.svg',
            ],
            technologies: ["NextJS", "Tailwind", "Prisma"],
            link: "https://ogronex.com",
            github: "https://github.com/LoLoSenPai/ogronex-solana"
        },
        {
            title: "Discord Alert Bot",
            description: "Transform your words into code. He create a Playground where you can edit the generated AI Code.",
            icons: [
                '/icons/discord-logo.svg',
                '/icons/javascript-logo.svg',
                '/icons/discordjs-logo.svg',
            ],
            technologies: ["JS", "Discord.js"],
            github: "https://github.com/LoLoSenPai/Discord-Bot-BigTime"
        },
        {
            title: "E-Commerce Website",
            description: "Create open question that will be automatically corrected with AI.",
            icons: [
                '/icons/oryon-logo.webp',
                '/icons/react-logo.svg',
                '/icons/express-logo.svg',
                '/icons/api-logo.svg',
            ],
            technologies: ["React", "Express", "API"],
            link: "https://oryon-merch.com",
            github: "https://github.com/LoLoSenPai/oryon-master"
        }
    ];

    return (
        <div className='relative'>
            <div className='absolute top-0 flex justify-center w-full'>
                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
            </div>
            <div className='flex items-center justify-center h-full px-3 py-2 border rounded-md border-border-ui dark:border-dark-border-ui bg-bg-subtle dark:bg-dark-bg-subtle'>
                <div className="p-12 space-y-12 backdrop-blur-sm md:rounded-xl">
                    <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl font-bold text-center">Projects</h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {projects.map((project, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="p-6 space-y-4 rounded-lg bg-bg-ui dark:bg-dark-bg-ui hover:bg-bg-ui-hover dark:hover:bg-dark-bg-ui-hover">
                                <div className="flex items-center justify-between">
                                    <img src={project.icons[0]} className="w-auto h-[40px]" />
                                    <span className="flex space-x-5 text-2xl">
                                        {project.link &&
                                            <a href={project.link} target="_blank">
                                                <TbWorldWww />
                                            </a>}
                                        {project.github &&
                                            <a href={project.github} target="_blank">
                                                <LuCode2 />
                                            </a>}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-semibold">{project.title}</h3>
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
            </div>
        </div>
    );
}