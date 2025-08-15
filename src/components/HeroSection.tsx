// components/HeroSection.tsx
'use client'

import {
    createFadeInWithDelay,
    hoverScale,
    scaleIn,
    tapScale
} from '@/lib/animations/variants'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function HeroSection() {
    return (
        <section
            className="relative bg-hero-gradient overflow-hidden"
            aria-labelledby="hero-section"
        >
            <div className='container  w-full mx-auto px-5 md:px-20'>
                <div className="flex flex-col items-center justify-center py-8">
                    {/* Main Heading with staggered word animation */}


                    <motion.div
                        className="text-5xl font-merriweather font-bold text-black text-center mb-3"
                        variants={createFadeInWithDelay(0.1)}
                        initial="hidden"
                        animate="visible"
                    >
                        Transform your business
                    </motion.div>
                    <motion.div
                        className="text-5xl font-merriweather font-bold text-black text-center mb-3"
                        variants={createFadeInWithDelay(0.2)}
                        initial="hidden"
                        animate="visible"
                    >
                        with AI-powered
                    </motion.div>
                    <motion.div
                        className="text-5xl font-merriweather font-bold text-black text-center mb-3"
                        variants={createFadeInWithDelay(0.3)}
                        initial="hidden"
                        animate="visible"
                    >
                        HR Management Software
                        <span
                            className="text-5xl font-merriweather font-bold text-center mb-3 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"

                        >
                            {' '}#TAFURIHR
                        </span>
                    </motion.div>

                    {/* </motion.h1> */}

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl text-grey-2 my-6 mb-4"
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
            </div>
        </section>
    )
}