import React from 'react'
import Image from 'next/image'
import ButtonAnimatedGradient from './ButtonAnimatedGradient'

const HeroSection = () => {
    return (
        <section className="container grid items-center pt-6 pb-8 md:pt-20 gap-y-36 lg:pb-20 xl:pt-40">
            <div className="relative px-8 pt-20 md:p-12">
                <div className="flex flex-col-reverse items-center md:flex-row">
                    <div className="relative space-y-5 lg:px-6 lg:mt-20">
                        <p className="absolute text-2xl font-bold text-transparent -top-10 -left-3 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Hey there! I&apos;m</p>
                        <h1 className="pb-4 text-4xl font-extrabold transparent md:text-6xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Loic DLUGOSZ</h1>
                        <p className="py-5 text-2xl md:text-xl lg:text-3xl text-text-low dark:text-dark-text-low">
                            FullStack Web Developer. Passionate by Web 3.0 and Blockchain.
                        </p>
                        <div className="flex flex-wrap gap-3 lg:gap-0 lg:space-y-0 lg:space-x-2 md:pt-10 ">
                            <ButtonAnimatedGradient href="https://github.com/LoLoSenPai">Github</ButtonAnimatedGradient>
                            <ButtonAnimatedGradient href="https://twitter.com/LoicDlugosz">Twitter</ButtonAnimatedGradient>
                            <ButtonAnimatedGradient href="https://www.linkedin.com/in/lo%C3%AFc-dlugosz/">LinkedIn</ButtonAnimatedGradient>
                            <ButtonAnimatedGradient href="https://discord.gg/yKxqYYWS6n">Discord</ButtonAnimatedGradient>
                        </div>
                    </div>
                    <div className="relative hidden overflow-hidden rounded-full md:flex">
                        <Image src="/images/my-photo.jpg" alt="Loic Dlugosz" objectFit="cover" width={250} height={250} className='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection