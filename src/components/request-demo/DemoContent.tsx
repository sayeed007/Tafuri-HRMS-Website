"use client"
// src\components\request - demo\DemoContent.tsx

import Image from "next/image";
import PartnersCarouselSmall from "../PartnersCarouselSmall";
import { motion } from "framer-motion"
import {
    containerVariants,
    headerVariants,
    fadeInUp,
    featureItemVariants,
    defaultViewport,
    iconHover
} from "@/lib/animations/variants"

export default function DemoContent() {

    const demoIncluded = [
        'Hands-on demo with live guidance',
        'Learn how TafuriHR can improve employee management',
        'Helping you make the right plan choice'
    ];

    return (
        <motion.div
            className="w-full lg:w-1/2 lg:pr-12"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={containerVariants}
        >
            {/* Main Heading */}
            <motion.div
                className="mb-8"
                variants={headerVariants}
            >
                <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-black leading-tight">
                    Find your ideal match with{' '}
                    <motion.span
                        className="text-primary"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    >
                        TafuriHR.
                    </motion.span>
                </h2>
            </motion.div>

            {/* Description */}
            <motion.p
                className="text-black text-xl mb-8 leading-relaxed"
                variants={fadeInUp}
            >
                From onboarding to offboarding, Tafuri Hr brings your
                HR workflow together in one intuitive hub.
            </motion.p>

            {/* What's included in the demo */}
            <motion.div
                className="mb-10"
                variants={containerVariants}
            >
                <motion.h3
                    className="text-2xl font-bold text-black mb-6"
                    variants={fadeInUp}
                >
                    {`What's included in the demo?`}
                </motion.h3>
                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                >
                    {demoIncluded.map((demo, index) => (
                        <motion.div
                            className="flex items-center space-x-3"
                            key={demo}
                            variants={featureItemVariants}
                            custom={index}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <motion.div
                                whileHover={iconHover}
                            >
                                <Image
                                    src={'/icons/BlueCheck.png'}
                                    alt={'BlueCheck'}
                                    width={32}
                                    height={32}
                                />
                            </motion.div>
                            <motion.span
                                className="text-gray-700"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                {demo}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Key partners */}
            <motion.div
                variants={fadeInUp}
            >
                <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Key partners in our journey
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                    <PartnersCarouselSmall />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}