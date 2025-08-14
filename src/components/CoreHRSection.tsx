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

const features = [
    'A scalable employee information platform.',
    'Streamlined handling of employee cases.',
    'Smart HR process workflows.',
    'Simplified support ticket management for smooth service.',
    'Advanced and insightful analytics',
]



export default function CoreHRSection() {
    return (
        <section className="px-5 md:px-20 py-5">
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

                {/* Right Content - Image */}
                <motion.div
                    className="relative h-96 lg:h-[480px] bg-[url('/icons/CoreHRBG.png')] bg-contain bg-center bg-no-repeat rounded-2xl"
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 100
                            }
                        }}
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                        viewport={defaultViewport}
                    >
                        <Image
                            src={'/icons/CoreHRImage.png'}
                            alt={'Core HR Image for TafuriHR'}
                            width={1280}
                            height={600}
                            className="absolute w-[680px] top-[75px] md:right-[55px] h-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}