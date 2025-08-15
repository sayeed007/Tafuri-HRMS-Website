// components/FAQPageClient.tsx (Client Component)
'use client';

import FAQPage from '@/components/FAQPage';
import {
    contactCardVariants,
    containerVariants,
    fadeInLeft,
    fadeInUp,
    headerContainerVariants,
    hoverLift,
    tapScale
} from '@/lib/animations/variants';
import { motion } from 'framer-motion';

// Types (should match your FAQ data structure)
interface FAQ {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    slug: string;
    faqs: FAQ[];
}

interface FAQPageClientProps {
    data: FAQSection[];
}


export default function FAQPageClient({ data }: FAQPageClientProps) {
    return (
        <motion.div
            className="min-h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header Section */}
            <motion.div
                className="flex flex-wrap justify-between mb-4"
                variants={headerContainerVariants}
            >
                <motion.div
                    className='w-full md:w-1/2'
                    variants={fadeInLeft}
                >
                    <motion.h1
                        className="text-5xl font-bold font-merriweather text-black mb-4"
                        variants={fadeInUp}
                    >
                        Frequently<br />
                        Asked Questions (FAQs)
                    </motion.h1>

                    <motion.p
                        className="text-grey-2 text-xl font-semibold max-w-md"
                        variants={fadeInUp}
                    >
                        {`Our Customers Love Us and so Will You! But Don't Take Our Word for It.`}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="bg-white md:w-[550px] h-[160px] rounded-[30px] p-3 md:p-6 my-4 md:my-0 flex justify-between items-center"
                    variants={contactCardVariants}
                    whileHover={hoverLift}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className='flex flex-col justify-between'>
                        <motion.p
                            className="text-2xl text-black font-merriweather font-bold mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Still have questions?
                        </motion.p>
                        <motion.p
                            className="text-base text-grey-4 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            Talk with the sales team
                        </motion.p>
                    </div>

                    <motion.button
                        className="cursor-pointer px-6 py-2 border border-brand rounded-[30px] text-base font-merriweather font-semibold text-brand hover:bg-gray-50 transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.8,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(0,0,0,0.05)"
                        }}
                        whileTap={tapScale}
                    >
                        Contact Sales
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* FAQ Content with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                }}
            >
                <FAQPage data={data} />
            </motion.div>
        </motion.div>
    );
}