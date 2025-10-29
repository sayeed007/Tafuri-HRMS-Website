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

export default function PartnersCarouselSmall() {
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
        <div className="overflow-hidden">
            <motion.div
                ref={containerRef}
                className="flex space-x-4 gap-8 items-center"
                style={{ x }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {duplicatedPartners.map((partner, index) => (
                    <div
                        key={`${partner.name}-${index}`}
                        className="flex-shrink-0 group hover:opacity-100 transition-opacity duration-300"
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            className="w-[80px] h-[50px] object-contain group-hover:scale-105 transition-transform duration-300"
                            width={80}
                            height={50}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}