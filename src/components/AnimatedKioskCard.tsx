// components/AnimatedKioskCard.tsx
'use client'

import {
    defaultViewport,
    fadeInLeft,
    fadeInRight,
    scaleIn
} from '@/lib/animations/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedKioskCard() {
    return (
        <section
            className="w-full"
            aria-labelledby="animated-kiosk"
        >
            <div className='container  w-full mx-auto px-5 md:px-20 py-10'>
                <motion.div
                    className="h-[330px] rounded-4xl bg-[url('/icons/KioskCardBG.png')] bg-cover bg-center bg-no-repeat"
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.3 }
                    }}
                >
                    <div className="relative rounded-4xl overflow-hidden shadow-2xl w-full min-h-[330px] flex items-center">
                        {/* Main Content */}
                        <motion.div
                            className="relative flex flex-col z-10 px-8 md:p-8 lg:p-12 w-2/3 lg:w-3/4"
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                        >
                            <motion.h2
                                className="text-white text-2xl lg:text-4xl font-bold leading-tight mb-6"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6, delay: 0.2 }
                                }}
                                viewport={defaultViewport}
                            >
                                Use our Tafuri HRMS Integrated Kiosk<br />
                                to make your office hassle-free and<br />
                                more efficient.
                            </motion.h2>

                            <motion.button
                                className="text-left text-white font-semibold font-poppins underline underline-offset-4 hover:underline-offset-8 transition-all duration-300 text-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6, delay: 0.4 }
                                }}
                                whileHover={{
                                    x: 10,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                viewport={defaultViewport}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        {/* Animated Kiosk Container */}
                        <motion.div
                            className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-1/4 overflow-hidden"
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                        >
                            {/* Sliding Background */}
                            <motion.div
                                className="absolute inset-0 backdrop-blur-70 bg-[url('/icons/KioskCardImageBG.png')] bg-contain bg-center bg-no-repeat"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 0.8, delay: 0.3 }
                                }}
                                viewport={defaultViewport}
                            />

                            {/* Kiosk Image with floating animation */}
                            <motion.div
                                className="absolute right-4 top-[200px] md:top-[300px] -translate-y-1/2"
                                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 100
                                    }
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, 5, -5, 0],
                                    transition: { duration: 0.5 }
                                }}
                                viewport={defaultViewport}
                            >
                                <Image
                                    src={'/icons/Kiosk.png'}
                                    alt={'TafuriHR Kiosk Device for HR Automation'}
                                    width={200}
                                    height={200}
                                    className='object-contain'
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}