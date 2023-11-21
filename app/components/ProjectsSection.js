import { LuCode2 } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Ogronex NFT Project",
            description: "Learn coding can be fun. I create my own platform to learn that I use to teach my students.",
            icons: ["🎲", "⚡", "🐘", "🔼"],
            technologies: ["NextJS", "Tailwind", "Prisma"],
            link: "https://ogronex.com",
            github: "https://github.com/LoLoSenPai/ogronex-solana"
        },
        {
            title: "Discord Alert Bot",
            description: "Transform your words into code. He create a Playground where you can edit the generated AI Code.",
            icons: ["🤖", "⚛", "⚡", "🔼"],
            technologies: ["JS", "Discord.js", "MongoDB"],
            github: "https://github.com/LoLoSenPai/Discord-Bot-BigTime"
        },
        {
            title: "E-Commerce Website",
            description: "Create open question that will be automatically corrected with AI.",
            icons: ["❓", "⚛", "⚡", "🔼"],
            technologies: ["React", "Express", "API"],
            link: "https://oryon-merch.com",
            github: "https://github.com/LoLoSenPai/oryon-master"
        }
    ];

    return (
        <div className="p-12 space-y-12 bg-bg-subtle dark:bg-dark-bg-subtle backdrop-blur-sm md:rounded-xl">
            <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl font-bold text-center">Projects</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {projects.map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="p-6 space-y-4 rounded-lg bg-bg-ui dark:bg-dark-bg-ui hover:bg-bg-ui-hover dark:hover:bg-dark-bg-ui-hover">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl">{project.icons[0]}</span>
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
                        <ul className="flex mt-4 space-x-2">
                            {project.technologies.map((tech, idx) => (
                                <li key={idx} className="">
                                    <div className='inline-flex items-center justify-center py-1 pl-1 pr-3 text-xs font-medium border rounded-full border-border-ui dark:border-dark-border-ui bg-bg-solid dark:bg-dark-bg-solid backdrop-blur-3xl'>
                                        <div className='space-x-1'>
                                            <span className="">{project.icons[idx + 1]}</span>
                                            <span className="">{tech}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}