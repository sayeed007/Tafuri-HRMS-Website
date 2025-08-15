'use client'

import Image from 'next/image'
import { useState } from 'react'

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

    // Triple partners array for better seamless loop on mobile
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

    return (
        <section
            className="w-full bg-white overflow-hidden"
            aria-labelledby="partners-section"
        >
            <div className='container  w-full mx-auto px-5 md:px-20 py-10'>
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-4xl font-merriweather font-bold text-black mb-4">
                        Key partners in our journey
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative flex space-x-6 md:space-x-8 animate-scroll md:gap-20 gap-8 justify-start md:justify-center items-center"
                    style={{
                        animationPlayState: isPaused ? 'paused' : 'running'
                    }}
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
                                className="w-[120px] h-[50px] object-contain group-hover:scale-105 transition-transform duration-300"
                                width={120}
                                height={50}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }
                
                .animate-scroll {
                    animation: scroll 45s linear infinite;
                }
                
                @media (max-width: 768px) {
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                }
            `}</style>
        </section>
    )
}
