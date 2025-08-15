// components/FeaturesSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
    containerVariants,
    cardSlideUp,
    hoverLift,
    tapScale,
    partialViewport
} from '@/lib/animations/variants'

const features = [
    {
        icon: '/gif/Customization.gif',
        width: 160,
        height: 100,
        title: 'Customization',
        description: 'Configure the features based on your organizational requirements or request one.',
    },
    {
        icon: '/gif/TrainingAndImplementation.gif',
        width: 138,
        height: 138,
        title: 'Training & Implementation',
        description: 'Boost HRM efficiency with concise training and seamless support, ensuring quick adoption and effective use.',
    },
    {
        icon: '/gif/TechnicalSupport.gif',
        width: 114,
        height: 114,
        title: 'Technical Support',
        description: `Tech glitches? We've got your back.Fast, reliable support for seamless operations.`,
    }
]

export default function FeaturesSection() {
    return (
        <section
            className="px-5 md:px-20 py-10"
            aria-labelledby="feature-section"
        >
            <div className='container  w-full mx-auto px-5 md:px-20 py-10'>
                <motion.div
                    className="flex flex-wrap justify-evenly gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={partialViewport}
                >
                    {features.map((feature, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={cardSlideUp}
                                whileHover={hoverLift}
                                whileTap={tapScale}
                                className="flex flex-col p-4 rounded-2xl items-center justify-start group md:w-[320px] h-[315px] bg-white shadow-elevation-4 cursor-pointer"
                            >
                                {/* Icon Container with hover animation */}
                                <motion.div
                                    className='h-[160px] w-full flex items-center justify-center'
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <Image
                                        src={feature.icon}
                                        alt={`${feature.title} Animation for TafuriHR`}
                                        width={feature.width}
                                        height={feature.height}
                                        style={{ width: feature.width, height: feature.height }}
                                        className={`object-contain`}
                                        unoptimized
                                    />
                                </motion.div>

                                {/* Content Container */}
                                <div className="flex flex-col items-center text-center">
                                    <motion.h3
                                        className="text-xl font-bold text-black mb-2 flex items-center"
                                        whileHover={{
                                            color: "#2563eb",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {feature.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-grey-2 leading-relaxed text-center text-sm"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{
                                            opacity: 1,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {feature.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}