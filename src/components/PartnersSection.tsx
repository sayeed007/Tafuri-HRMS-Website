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

    // Duplicate partners array for seamless loop
    const duplicatedPartners = [...partners, ...partners]

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="mx-10 overflow-hidden">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                        Key partners in our journey
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div
                        className="flex space-x-8 animate-scroll gap-20 justify-center items-center"
                        style={{
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 group gap-10"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    width={175}
                                    height={60}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                
                @media (max-width: 768px) {
                    .animate-scroll {
                        animation: scroll 20s linear infinite;
                    }
                }
            `}</style>
        </section>
    )
}


















// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'

// const partners = [
//     { name: 'SHODESH', logo: '/partners/Shodesh.jpg' },
//     { name: 'intellexis', logo: '/partners/Intellxis.png' },
//     { name: 'Moriom', logo: '/partners/Moriom.png' },
//     { name: 'LAXFO', logo: '/partners/Laxfo.png' },
//     { name: 'Media365', logo: '/partners/Media365.jpg' },
//     { name: 'EcoThreads', logo: '/partners/EcoThreads.png' },
//     { name: 'EUDBAccessories', logo: '/partners/EUDBAccessories.png' },
//     { name: 'Chhaya', logo: '/partners/Chhaya.png' },
// ]

// export default function PartnersSection() {
//     const [isPaused, setIsPaused] = useState(false)

//     // Duplicate partners array for seamless loop
//     const duplicatedPartners = [...partners, ...partners]

//     return (
//         <section className="py-16 bg-gray-50 overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
//                         Key partners in our journey
//                     </h2>
//                 </div>

//                 {/* Carousel Container */}
//                 <div className="relative">
//                     <div
//                         className={`flex space-x-8 ${isPaused ? '' : 'animate-scroll'}`}
//                         onMouseEnter={() => setIsPaused(true)}
//                         onMouseLeave={() => setIsPaused(false)}
//                     >
//                         {duplicatedPartners.map((partner, index) => (
//                             <div
//                                 key={`${partner.name}-${index}`}
//                                 className="flex-shrink-0 group"
//                             >
//                                 <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-48 h-28">
//                                     <div className="text-center flex items-center justify-center w-full">
//                                         {/* Use actual images */}
//                                         <div className="relative w-20 h-12 flex items-center justify-center">
//                                             <Image
//                                                 src={partner.logo}
//                                                 alt={partner.name}
//                                                 fill
//                                                 className="object-contain group-hover:scale-105 transition-transform duration-300"
//                                                 sizes="80px"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="text-center mt-3">
//                                     <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
//                                         {partner.name}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Gradient Overlays */}
//                     <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
//                     <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
//                 </div>
//             </div>
//         </section>
//     )
// }