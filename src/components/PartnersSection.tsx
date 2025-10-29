'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'

const partners = [
    { name: 'SHODESH', logo: '/partners/Shodesh.jpg' },
    { name: 'intellexis', logo: '/partners/Intellxis.png' },
    { name: 'Moriom', logo: '/partners/Moriom.png' },
    { name: 'LAXFO', logo: '/partners/Laxfo.png' },
    { name: 'Media365', logo: '/partners/Media365.jpg' },
    { name: 'EcoThreads', logo: '/partners/EcoThreads.png' },
    { name: 'EUDBAccessories', logo: '/partners/EUDBAccessories.png' },
    { name: 'Chhaya', logo: '/partners/Chhaya.png' },
]

export default function PartnersSection() {
    const [isPaused, setIsPaused] = useState(false)
    const x = useMotionValue(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const [baseWidth, setBaseWidth] = useState(0)

    // Duplicate partners array three times for seamless loop
    const duplicatedPartners = [...partners, ...partners, ...partners]

    useEffect(() => {
        if (containerRef.current) {
            // Measure width of one set of partners
            const singleSetWidth = containerRef.current.scrollWidth / 3
            setBaseWidth(singleSetWidth)
        }
    }, [])

    useAnimationFrame((time, delta) => {
        if (isPaused || baseWidth === 0) return

        // Move left at constant speed (pixels per millisecond)
        const speed = baseWidth / 60000 // completes one loop in 60 seconds
        const newX = x.get() - speed * delta

        // Reset position seamlessly when we've scrolled one full set
        if (Math.abs(newX) >= baseWidth) {
            x.set(newX + baseWidth)
        } else {
            x.set(newX)
        }
    })

    return (
        <section
            className="w-full bg-white overflow-hidden"
            aria-labelledby="partners-section"
        >
            <div className='container w-full mx-auto px-5 md:px-20 py-10'>
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-4xl font-merriweather font-bold text-black mb-4">
                        Key partners in our journey
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    <motion.div
                        ref={containerRef}
                        className="flex space-x-6 md:space-x-8 md:gap-20 gap-8 items-center"
                        style={{ x }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 group"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-[120px] h-[80px] object-contain group-hover:scale-105 transition-transform duration-300"
                                    width={120}
                                    height={80}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
