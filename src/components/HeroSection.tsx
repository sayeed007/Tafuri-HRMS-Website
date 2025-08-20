// components/HeroSection.tsx
'use client'

import { createFadeInWithDelay, hoverScale, scaleIn, tapScale } from '@/lib/animations/variants'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)

    // Track scroll progress across this hero section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    // Custom hook for responsive opacity
    function useResponsiveOpacity(motionValue: MotionValue<number>) {
        const [isMobile, setIsMobile] = useState(false)

        useEffect(() => {
            const checkMobile = () => setIsMobile(window.innerWidth < 768)
            checkMobile()
            window.addEventListener('resize', checkMobile)
            return () => window.removeEventListener('resize', checkMobile)
        }, [])

        return isMobile ? 1 : motionValue
    }

    // Continuous scaling without gaps
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 3])
    const headlineOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0])

    // Responsive opacity - full opacity on mobile, scroll-based on desktop
    const responsiveHeadlineOpacity = useResponsiveOpacity(headlineOpacity)

    useEffect(() => {
        const unsub = scrollYProgress.on('change', (v) => {
            // Only use fullscreen for final positioning, not for visual transition
            if (v >= 0.9 && !isFullscreen) {
                setIsFullscreen(true)
                document.body.style.overflow = 'hidden'
            }
            if (v < 0.1 && isFullscreen) {
                setIsFullscreen(false)
                document.body.style.overflow = 'auto'
            }
        })

        return () => {
            unsub()
            document.body.style.overflow = 'auto'
        }
    }, [scrollYProgress, isFullscreen])

    return (
        <>
            {/* Your original section with proper height */}
            <section
                ref={containerRef}
                className="relative bg-hero-gradient overflow-hidden md:h-[180vh]"
                // style={{ height: '190vh' }} // Added proper height for scroll effect
                aria-labelledby="hero-section"
            >
                <div className="container w-full mx-auto px-5 md:px-20">
                    {/* Your original headline - unchanged */}
                    <div className="flex flex-col relative">
                        <motion.div className="pt-4" style={{ opacity: responsiveHeadlineOpacity }}>
                            <div className="text-5xl font-merriweather font-bold text-black text-center leading-normal">
                                Transform your business
                                <br />
                                with AI-powered
                                <br />
                                <span className="text-5xl font-merriweather font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                                    {' '}#TAFURIHR
                                </span>
                            </div>

                            {/* Subtitle */}
                            <motion.p
                                className="text-lg text-center md:text-xl text-grey-2 my-6 mb-4"
                                variants={createFadeInWithDelay(0.1)}
                                initial="hidden"
                                animate="visible"
                            >
                                Take the Hassle Out of HR- Automate, Manage, and Grow
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                variants={createFadeInWithDelay(0.2)}
                                initial="hidden"
                                animate="visible"
                                className='text-center'
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
                        </motion.div>
                    </div>

                    {/* Promo Video - for mobile */}
                    <motion.div
                        className="relative md:hidden lg:ml-8 w-full md:w-9/10 md:h-[550px] rounded-lg overflow-hidden mb-6"
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
                            <track
                                kind="captions"
                                src="/videos/Tafurihrms_promo.vtt"
                                srcLang="en"
                                label="English Captions"
                                default
                            />
                        </video>
                    </motion.div>

                    {/* Fixed video wrapper - for big screen */}
                    <motion.div
                        className='hidden sticky top-16 h-[calc(100vh-8%)] md:flex items-center justify-center'
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.3, duration: 0.8 }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="relative z-10 w-full flex items-center justify-center">
                            {/* Your scaled container - fixed positioning */}
                            <motion.div
                                style={{ scale }}
                                className="relative flex w-full items-center justify-center"
                            >
                                {/* Fixed the container classes */}
                                <div
                                    className={`
                                        transition-all duration-500 ease-out overflow-hidden
                                        ${isFullscreen
                                            ? 'fixed inset-0 w-screen h-screen rounded-none z-50'
                                            : 'w-full max-w-5xl aspect-video rounded-xl shadow-xl'
                                        }
                                    `}
                                >
                                    <video
                                        ref={videoRef}
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
                                        <track
                                            kind="captions"
                                            src="/videos/Tafurihrms_promo.vtt"
                                            srcLang="en"
                                            label="English Captions"
                                            default
                                        />
                                    </video>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section >
        </>
    )
}