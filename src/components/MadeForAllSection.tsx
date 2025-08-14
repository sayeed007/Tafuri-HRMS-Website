// components/MadeForAllSection.tsx
'use client'

import {
    containerVariants,
    defaultViewport,
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    featureItemVariants
} from '@/lib/animations/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
    'Easily request for manual attendance, apply for leave, view and download pay slip.',
    'Approve leaves and monitor team performance.',
    'Get accurate payroll data, tax calculations, and salary reports in one place.',
    'View shift schedules, track attendance.',
    'Access holiday calendars and ensure smooth workforce planning.'
]



export default function MadeForAllSection() {
    return (
        <section
            className="w-full"
            aria-labelledby="made-for-all-section"
        >
            <div className='max-w-[1528px] w-full mx-auto px-5 md:px-20 py-5'>
                <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center">
                    {/* Left Content - Mobile/Video */}
                    <motion.div
                        className="relative z-10 h-full flex flex-col justify-center items-center overflow-x-clip"
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                    >
                        <motion.div
                            className="relative w-[330px] max-w-full h-[350px]"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Background Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.6 }
                                }}
                                viewport={defaultViewport}
                            >
                                <Image
                                    src={'/icons/MadeForAllBG.png'}
                                    alt={'MadeForAll'}
                                    fill
                                    sizes="330px"
                                    className="absolute inset-0"
                                />
                            </motion.div>

                            {/* Phone Container with Video */}
                            <motion.div
                                className='w-[149px] h-[350px] bg-white absolute inset-0 left-[91px] top-[0px] rounded-[20px] border-2 border-black'
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.3,
                                        type: "spring",
                                        stiffness: 120
                                    }
                                }}
                                // whileHover={{
                                //     y: -10,
                                //     rotateY: 5,
                                //     transition: { duration: 0.3 }
                                // }}
                                viewport={defaultViewport}
                            >
                                <motion.video
                                    width={350}
                                    height={350}
                                    autoPlay
                                    loop
                                    muted
                                    className="object-cover opacity-80 w-[149px] h-[350px] rounded-[20px]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{
                                        opacity: 0.8,
                                        transition: { duration: 1, delay: 0.5 }
                                    }}
                                    viewport={defaultViewport}
                                >
                                    <source src="/videos/MadeForAll.mp4" type="video/mp4" />
                                </motion.video>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Text */}
                    <motion.div
                        variants={fadeInRight}
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
                            Made for all, not only HR
                        </motion.h2>

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
                                    className="flex items-start space-x-4 py-2"
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
                                            color: "#2563eb",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {feature}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}