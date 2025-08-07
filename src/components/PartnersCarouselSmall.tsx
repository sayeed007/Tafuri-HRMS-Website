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

export default function PartnersCarouselSmall() {
    const [isPaused, setIsPaused] = useState(false)

    // Duplicate partners array for seamless loop
    const duplicatedPartners = [...partners, ...partners]

    return (
        <div className="overflow-hidden">
            <div
                className="flex space-x-4 animate-scroll-small gap-8 items-center"
                style={{
                    animationPlayState: isPaused ? 'paused' : 'running'
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {duplicatedPartners.map((partner, index) => (
                    <div
                        key={`${partner.name}-${index}`}
                        className="flex-shrink-0 group opacity-60 hover:opacity-100 transition-opacity duration-300"
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            width={80}
                            height={30}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll-small {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll-small {
                    animation: scroll-small 40s linear infinite;
                }
                
                @media (max-width: 768px) {
                    .animate-scroll-small {
                        animation: scroll-small 25s linear infinite;
                    }
                }
            `}</style>
        </div>
    )
}