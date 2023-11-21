import Image from "next/image";

export default function SkillsSection() {
  return (
    <div className='relative'>
      <div className='absolute top-0 flex justify-center w-full'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex items-center justify-center h-full px-3 py-2 border rounded-md border-border-ui dark:border-dark-border-ui bg-bg-subtle dark:bg-dark-bg-subtle'>
        <div className="p-12 space-y-12 backdrop-blur-sm md:rounded-xl">
          <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl font-bold text-center">Skills</h2>

          <div className="grid grid-cols-2 gap-y-8 justify-items-center lg:space-x-4 lg:gap-6 sm:grid-cols-4 lg:p-12">

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="50">
              <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-slate-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 bg-clip-text">Design</h3>
              <p data-aos="fade-up" data-aos-delay="100" className="flex items-center"><Image src='/icons/figma-logo.svg' alt="Figma Logo" width={20} height={20} className="mr-2" /> Figma</p>
              <p data-aos="fade-up" data-aos-delay="150" className="flex items-center"><Image src='/icons/tailwindcss-logo.svg' alt="TailwindCSS Logo" width={25} height={25} className="mr-2" /> TailwindCSS</p>
              <p data-aos="fade-up" data-aos-delay="200" className="flex items-center"><Image src='/icons/css-logo.svg' alt="CSS Logo" width={25} height={25} className="mr-2" /> CSS</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
              <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-slate-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 bg-clip-text">Front-end</h3>
              <p data-aos="fade-up" data-aos-delay="100" className="flex items-center"><Image src='/icons/react-logo.svg' alt="React Logo" width={25} height={25} className="mr-2" /> React</p>
              <p data-aos="fade-up" data-aos-delay="150" className="flex items-center"><Image src='/icons/typescript-logo.svg' alt="Typescript Logo" width={25} height={25} className="mr-2" /> Typescript</p>
              <p data-aos="fade-up" data-aos-delay="200" className="flex items-center"><Image src='/icons/nextjs-logo.svg' alt="NextJS Logo" width={25} height={25} className="mr-2" /> NextJS</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" className="space-y-4">
              <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-slate-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 bg-clip-text">Back-end</h3>
              <p data-aos="fade-up" data-aos-delay="100" className="flex items-center"><Image src='/icons/prisma-logo.svg' alt="Prisma Logo" width={20} height={20} className="mr-2" /> Prisma</p>
              <p data-aos="fade-up" data-aos-delay="150" className="flex items-center"><Image src='/icons/mongodb-logo.svg' alt="MongoDB Logo" width={25} height={25} className="mr-2" /> MongoDB</p>
              <p data-aos="fade-up" data-aos-delay="200" className="flex items-center"><Image src='/icons/nodejs-logo.svg' alt="NodeJS Logo" width={25} height={25} className="mr-2" /> NodeJS</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
              <h3 data-aos="fade-up" data-aos-delay="50" className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-r from-slate-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 bg-clip-text">Other</h3>
              <p data-aos="fade-up" data-aos-delay="100" className="flex items-center"><Image src='/icons/github-logo.svg' alt="GitHub Logo" width={20} height={20} className="mr-2" /> Git & GitHub</p>
              <p data-aos="fade-up" data-aos-delay="150" className="flex items-center"><Image src='/vercel.svg' alt="Vercel Logo" width={35} height={35} className="mr-2" /> Vercel</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}