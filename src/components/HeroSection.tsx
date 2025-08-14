// components/HeroSection.tsx
'use client'

import {
    createFadeInWithDelay,
    defaultViewport,
    fadeInUp,
    hoverScale,
    scaleIn,
    tapScale
} from '@/lib/animations/variants'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function HeroSection() {
    return (
        <section className="relative bg-hero-gradient overflow-hidden w-full px-5 md:px-20">
            <div className="flex flex-col items-center justify-center py-8">
                {/* Main Heading with staggered word animation */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-black leading-tight mb-6"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    viewport={defaultViewport}
                >
                    <motion.span
                        variants={createFadeInWithDelay(0.1)}
                        initial="hidden"
                        animate="visible"
                    >
                        Transform your business
                    </motion.span>
                    <br />
                    <motion.span
                        variants={createFadeInWithDelay(0.3)}
                        initial="hidden"
                        animate="visible"
                    >
                        with AI-powered
                    </motion.span>
                    <br />
                    <motion.span
                        variants={createFadeInWithDelay(0.5)}
                        initial="hidden"
                        animate="visible"
                    >
                        HR Management Software{' '}
                    </motion.span>
                    <motion.span
                        className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"
                        variants={createFadeInWithDelay(0.7)}
                        initial="hidden"
                        animate="visible"
                    >
                        #TAFURIHR
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-xl text-grey-2 mb-4"
                    variants={createFadeInWithDelay(0.9)}
                    initial="hidden"
                    animate="visible"
                >
                    Take the Hassle Out of HR- Automate, Manage, and Grow
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    variants={createFadeInWithDelay(1.1)}
                    initial="hidden"
                    animate="visible"
                >
                    <a href={'/request-demo'}>
                        <motion.div
                            whileHover={hoverScale}
                            whileTap={tapScale}
                        >
                            <Button
                                size="lg"
                                className="cursor-pointer bg-button-gradient hover:bg-button-gradient-hover text-white px-12 py-8 rounded-full text-lg font-semibold mb-8"
                            >
                                Request Demo
                            </Button>
                        </motion.div>
                    </a>
                </motion.div>

                {/* Promo Video */}
                <motion.div
                    className="relative lg:ml-8 w-full md:w-9/10 md:h-[550px] rounded-lg overflow-hidden mb-6"
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.3, duration: 0.8 }}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                >
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-label="TafuriHR promotional video showcasing HR management features"
                    >
                        <source src="/videos/Tafurihrms_promo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    )
}