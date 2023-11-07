
export default function SkillsSection() {
  return (
    <div className="space-y-12 p-12 bg-bg-subtle dark:bg-dark-bg-subtle backdrop-blur-sm rounded-xl">
      <h2 data-aos="fade-up" data-aos-delay="50" className="text-center text-4xl font-bold">Skills</h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 justify-between space-x-4 p-6 md:p-12">

        <div className="space-y-4" data-aos="fade-up" data-aos-delay="50">
          <h3 data-aos="fade-up" data-aos-delay="50" className="text-2xl font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Design</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">🅱</span> Figma</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">≈</span> Tailwind</p>
          <p data-aos="fade-up" data-aos-delay="200"><span className="">≈</span> CSS</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
          <h3 data-aos="fade-up" data-aos-delay="50" className="text-2xl font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Front-end</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">⚛</span> React</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">TS</span> Typescript</p>
          <p data-aos="fade-up" data-aos-delay="200"><span className="">🕸</span> NextJS</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="space-y-4">
          <h3 data-aos="fade-up" data-aos-delay="50" className="text-2xl font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Back-end</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">🚂</span> Prisma</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">⚡</span> MongoDB</p>
          <p data-aos="fade-up" data-aos-delay="200"><span className="">⚡</span> Node.js</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
          <h3 data-aos="fade-up" data-aos-delay="50" className="text-2xl font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Other</h3>
          <p data-aos="fade-up" data-aos-delay="100"><span className="">🔍</span> Git & GitHub</p>
          <p data-aos="fade-up" data-aos-delay="150"><span className="">🔼</span> Vercel</p>
        </div>

      </div>
    </div>
  );
}