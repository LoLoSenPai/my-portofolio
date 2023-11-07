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
        <div className="space-y-12 bg-bg-subtle dark:bg-dark-bg-subtle backdrop-blur-sm rounded-xl p-12">
            <h2 data-aos="fade-up" data-aos-delay="50" className="text-center text-4xl font-bold">Projects</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {projects.map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="space-y-4 rounded-lg p-6 bg-bg-ui dark:bg-dark-bg-ui hover:bg-bg-ui-hover dark:hover:bg-dark-bg-ui-hover">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl">{project.icons[0]}</span>
                            <span className="flex text-2xl space-x-5">
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
                        <ul className="mt-4 flex space-x-2">
                            {project.technologies.map((tech, idx) => (
                                <li key={idx} className="">
                                    <div className='inline-flex items-center justify-center rounded-full border border-border-ui dark:border-dark-border-ui bg-bg-solid dark:bg-dark-bg-solid pl-1 pr-3 py-1 text-xs font-medium backdrop-blur-3xl'>
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