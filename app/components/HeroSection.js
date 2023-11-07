import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="container grid items-center gap-y-36 pb-8 lg:pb-20 pt-6 md:pt-40">
            <div className="relative p-12">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="relative space-y-6 lg:mt-20">
                        <p className="absolute -top-10 -left-3 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Hey there! I&apos;m</p>
                        <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 pb-4">Loic DLUGOSZ</h1>
                        <p className="text-3xl text-text-low dark:text-dark-text-low py-5">
                            FullStack Web Developer. Passionate by Web 3.0 and Blockchain.
                        </p>
                        <div className="grid grid-cols-2 sm:flex space-x-4 pt-10">
                            <a href="https://github.com/LoLoSenPai" target='_blank' className="rounded-full text-center max-w-[120px] sm:px-4 py-2 bg-bg-solid dark:bg-dark-bg-solid hover:bg-bg-solid-hover dark:hover:bg-dark-bg-solid-hover">Github</a>
                            <a href="https://twitter.com/LoicDlugosz" target='_blank' className="rounded-full text-center max-w-[120px] sm:px-4 py-2 bg-bg-solid dark:bg-dark-bg-solid hover:bg-bg-solid-hover dark:hover:bg-dark-bg-solid-hover">Twitter</a>
                            <a href="https://www.linkedin.com/in/lo%C3%AFc-dlugosz/" target='_blank' className="rounded-full text-center max-w-[120px] sm:px-4 py-2 bg-bg-solid dark:bg-dark-bg-solid hover:bg-bg-solid-hover dark:hover:bg-dark-bg-solid-hover">LinkedIn</a>
                            <a href="https://discord.gg/yKxqYYWS6n" target='_blank' className="rounded-full text-center max-w-[120px] sm:px-4 py-2 bg-bg-solid dark:bg-dark-bg-solid hover:bg-bg-solid-hover dark:hover:bg-dark-bg-solid-hover">Discord</a>
                        </div>
                    </div>
                    <div className="relative h-64 w-64 overflow-hidden rounded-full">
                        <Image src="/images/my-bitmoji-rounded.png" alt="Loic Dlugosz" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection