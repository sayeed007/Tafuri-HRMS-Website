// components/CoreHRSection.tsx
'use client'

import {
    containerVariants,
    createFadeInWithDelay,
    defaultViewport,
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    featureItemVariants
} from '@/lib/animations/variants'
import { motion } from 'framer-motion'
import Image from "next/image"
import LaptopVideoFrame from './LaptopVideoFrame'

const features = [
    'A scalable employee information platform.',
    'Streamlined handling of employee cases.',
    'Smart HR process workflows.',
    'Simplified support ticket management for smooth service.',
    'Advanced and insightful analytics',
]

export default function CoreHRSection() {
    return (
        <section
            className="w-full"
            aria-labelledby="core-hr-section"
        >
            <div className='container w-full mx-auto px-5 md:px-20 py-5'>
                <div className="grid lg:grid-cols-2 md:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-merriweather font-bold text-black mb-6 leading-tight"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                        >
                            Streamlined Core HR
                        </motion.h2>

                        <motion.p
                            className="text-base text-grey-3 mb-8 leading-relaxed"
                            variants={createFadeInWithDelay(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                        >
                            Streamlining essential HR tasks with simplicity and efficiency, empowering teams to focus on people, not paperwork.
                        </motion.p>

                        {/* Feature List */}
                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    custom={index}
                                    variants={featureItemVariants}
                                    whileHover={{
                                        x: 10,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.div
                                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <Image
                                            src={'/icons/CoreHRPoint.png'}
                                            alt={'CoreHRPoint'}
                                            width={24}
                                            height={24}
                                        />
                                    </motion.div>
                                    <motion.span
                                        className="text-black text-base font-semibold leading-relaxed"
                                        whileHover={{
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {feature}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Laptop with Video */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="bg-[url('/icons/CoreHRBG.png')] bg-contain bg-center bg-no-repeat rounded-2xl p-4"
                    >
                        <LaptopVideoFrame
                            frameSrc="/icons/Laptop.png"
                            videoSrc="/videos/StreamlinedCoreHR.mp4"
                            frameWidth={1280}     // natural image width of /icons/Laptop.png
                            frameHeight={720}     // natural image height of /icons/Laptop.png
                            className="mx-auto max-w-[680px]"
                            screenInsets={{
                                // MOBILE-FIRST insets (percent strings)
                                // Example guesses—measure your actual asset for pixel-perfect fit:
                                top: '5%',
                                right: '11%',
                                bottom: '11%', // unused
                                left: '15%',
                            }}
                            screenInsetsMd={{
                                // Optional nudges for md+ if needed
                                top: '9%',
                                right: '12.5%',
                                bottom: '21%',
                                left: '12.5%',
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
