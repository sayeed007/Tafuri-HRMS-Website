// components/FeaturesPageClient.tsx (Client Component)
'use client';

import {
    containerVariants,
    defaultViewport,
    fadeInUp,
    featureCardVariants,
    gridContainerVariants,
    headerVariants,
    learnMoreVariants,
    subtitleVariants,
    tapScale,
    titleVariants
} from '@/lib/animations/variants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Types for the features data
interface Feature {
    name: string;
    slug: string;
    description: string;
}

interface FeaturesData {
    features: Feature[];
}

interface FeaturesPageClientProps {
    data: FeaturesData;
}



export default function FeaturesPageClient({ data }: FeaturesPageClientProps) {
    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header Section */}
            <div className="container mx-auto px-5 md:px-20 py-10">
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                    viewport={defaultViewport}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold font-merriweather text-black mb-6"
                        variants={titleVariants}
                    >
                        Powerful HR Features
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-3 max-w-3xl mx-auto leading-relaxed"
                        variants={subtitleVariants}
                    >
                        Discover our comprehensive suite of HR management tools designed to streamline
                        your workforce operations and boost productivity across your organization.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {data.features.map((feature, index) => (
                        <motion.div
                            key={feature.slug}
                            custom={index}
                            variants={featureCardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                            whileTap={tapScale}
                        >
                            <Link
                                href={`/features/${feature.slug}`}
                                className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group h-full"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={containerVariants}
                                >
                                    {/* Feature Content */}
                                    <motion.h3
                                        className="text-xl font-bold font-merriweather text-black mb-3 group-hover:text-blue-600 transition-colors duration-300"
                                        variants={fadeInUp}
                                    >
                                        {feature.name}
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-3 text-sm leading-relaxed mb-4"
                                        variants={fadeInUp}
                                    >
                                        {feature.description}
                                    </motion.p>

                                    {/* Learn More Link */}
                                    <motion.div
                                        className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300"
                                        variants={learnMoreVariants}
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    >
                                        <span>Learn more</span>
                                        <motion.div
                                            className="ml-2"
                                            whileHover={{
                                                x: 4,
                                                scale: 1.1
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 17
                                            }}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}