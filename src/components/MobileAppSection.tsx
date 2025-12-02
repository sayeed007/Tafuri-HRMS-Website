// components/MobileAppSection.tsx
'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    containerVariants,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    hoverLift,
    tapScale
} from '@/lib/animations/variants'
import { useEffect, useState } from 'react'
import { GooglePlayAPIResponse, GooglePlayInfo } from '@/types/googlePlay'
import StarRating from './StarRating'

export default function MobileAppSection() {

    const [playStoreInfo, setPlayStoreInfo] = useState<GooglePlayInfo | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("/api/google-play-info")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load");
                return res.json();
            })
            .then((response: GooglePlayAPIResponse) => {
                if (response.data) {
                    setPlayStoreInfo(response.data);
                }
                if (response.error) {
                    console.warn("API returned with error:", response.error);
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to load app info");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    // if (error) {
    //     return <div className="text-sm text-red-500">{error}</div>;
    // }

    // if (!playStoreInfo) {
    //     return <div className="text-sm text-gray-500">Loading app info…</div>;
    // }

    // console.log(playStoreInfo)

    return (
        <section
            className="w-full"
            aria-labelledby="mobile-app-heading"
        >
            <div className='container w-full mx-auto px-5 md:px-20 py-10'>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 md:gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Content - Mobile Mockup */}
                    <motion.div
                        className="relative flex justify-center lg:justify-start col-span-1"
                        variants={fadeInLeft}
                    >
                        <Image
                            src="/icons/MobileAppView.png"
                            alt="Tafuri HR mobile app interface showcasing HR management features on smartphone"
                            width={2000}
                            height={1500}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-auto object-fill"
                            quality={100}
                        />
                    </motion.div>

                    {/* Right Content */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <motion.h2
                            id="mobile-app-heading"
                            className="text-4xl md:text-5xl font-merriweather font-bold text-black mb-6 leading-tight"
                            variants={fadeInUp}
                        >
                            Manage HR on the go with
                            <br />
                            the <span className="text-blue-600">Tafuri HR</span> mobile app.
                        </motion.h2>

                        <motion.p
                            className="text-base text-black mb-8 leading-relaxed"
                            variants={fadeInUp}
                        >
                            Embrace the future of flexible work—stay connected and productive from anywhere with the Tafuri HR mobile app.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap justify-between"
                            variants={fadeInRight}
                        >
                            {/* App Store - QR to download */}
                            {/* <motion.div
                                className="w-full flex flex-col items-center md:items-start md:w-1/2 space-y-4 mb-8"
                                variants={scaleIn}
                            >
                                <Image
                                    src="/icons/QRCode_AppStore.png"
                                    alt="QR code to download Tafuri HR app from Apple App Store"
                                    width={125}
                                    height={125}
                                    className="w-[125px] h-[125px]"
                                    loading="lazy"
                                />

                                <motion.button
                                    className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors"
                                    whileHover={hoverLift}
                                    whileTap={tapScale}
                                    aria-label="Download Tafuri HR app from App Store"
                                >
                                    <Download className="w-5 h-5" aria-hidden="true" />
                                    <div className="text-left">
                                        <div className="text-xs text-gray-300">Download on the</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </motion.button>

                                <div className="flex items-center space-x-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-black">4.8</div>
                                        <div className="flex items-center justify-center space-x-1 mb-1" role="img" aria-label="4.8 out of 5 stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-black">50K+</div>
                                        <div className="text-sm text-black">Downloads</div>
                                    </div>
                                </div>
                            </motion.div> */}

                            {/* Play Store - QR to download */}
                            <motion.div
                                className="w-full flex flex-col items-center md:items-start md:w-1/2 space-y-4 mb-8"
                                variants={scaleIn}
                            >
                                <Image
                                    src="/app_store/QRCode_PlayStore.png"
                                    alt="QR code to download Tafuri HR app from Google Play Store"
                                    width={125}
                                    height={125}
                                    className="w-[125px] h-[125px]"
                                    loading="lazy"
                                />

                                <motion.a
                                    className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors"
                                    whileHover={hoverLift}
                                    whileTap={tapScale}
                                    aria-label="Download Tafuri HR app from Google Play Store"
                                    // href='https://surl.lu/vacwvy'
                                    href={playStoreInfo?.url}
                                    target='_blank'
                                >
                                    <Download className="w-5 h-5" aria-hidden="true" />
                                    <div className="text-left">
                                        {/* <div className="text-xs text-gray-300">Download</div> */}
                                        <div className="text-xs text-gray-300">Get it on</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </motion.a>

                                <div className="flex items-center space-x-8">
                                    <div className="flex flex-col items-center">
                                        {isLoading ? (
                                            <div className="text-sm text-gray-500">Loading...</div>
                                        ) : (
                                            <StarRating
                                                rating={playStoreInfo?.rating || 4.8}
                                                size={16}
                                                showNumber={false}
                                            />
                                        )}
                                        <div className="text-2xl font-bold text-black mt-1">
                                            {playStoreInfo?.ratingText || '4.8'}
                                        </div>
                                        {playStoreInfo?.ratingsCount && (
                                            <div className="text-xs text-gray-600">
                                                ({playStoreInfo.ratingsCount.toLocaleString()} ratings)
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-black">
                                            {playStoreInfo?.installs || '10,000+'}
                                        </div>
                                        <div className="text-sm text-black">Downloads</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}