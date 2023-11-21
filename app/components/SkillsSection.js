
export default function SkillsSection() {
  return (
    <div className="p-12 space-y-12 bg-bg-subtle dark:bg-dark-bg-subtle backdrop-blur-sm md:rounded-xl">
      <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl font-bold text-center">Skills</h2>

      <div className="grid grid-cols-2 justify-items-center lg:space-x-4 lg:gap-6 sm:grid-cols-4 lg:p-12">

        <div className="space-y-4" data-aos="fade-up" data-aos-delay="50">
          <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text">Design</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">🅱</span> Figma</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">≈</span> Tailwind</p>
          <p data-aos="fade-up" data-aos-delay="200"><span className="">≈</span> CSS</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
          <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text">Front-end</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">⚛</span> React</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">TS</span> Typescript</p>
          <p data-aos="fade-up" data-aos-delay="200"><span className="">🕸</span> NextJS</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="space-y-4">
          <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text">Back-end</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">🚂</span> Prisma</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">⚡</span> MongoDB</p>
          <p data-aos="fade-up" data-aos-delay="200"><span className="">⚡</span> Node.js</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
          <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text">Other</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">🔍</span> Git & GitHub</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">🔼</span> Vercel</p>
        </div>

      </div>
    </div>
  );
}