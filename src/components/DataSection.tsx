// components/DataSection.tsx
'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import DailyAttendanceCard from '@/components/DailyAttendanceCard'
import EmployeePerformanceCard from '@/components/EmployeePerformanceCard'
import EmployeeGrowthCard from '@/components/EmployeeGrowthCard'
import {
    containerVariants,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    featureItemVariants,
    defaultViewport
} from '@/lib/animations/variants'

const features = [
    'Track employee performance with metrics like KPIs, ratings, and progress',
    'Visualize employee satisfaction with survey results.',
    'Visualize employee goal achievement rates.',
    'Track feedback scores over the probation period to assess job confirmation readiness.',
]

export default function DataSection() {
    return (
        <section
            className="w-full"
            aria-labelledby="data-section"
        >
            <div className='container w-full mx-auto px-5 md:px-20 py-5'>
                <motion.div
                    className="grid lg:grid-cols-2 gap-10 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Content */}
                    <motion.div variants={fadeInLeft}>
                        <motion.h2
                            id="data-section-heading"
                            className="text-3xl md:text-4xl font-merriweather font-bold text-black mb-6 leading-tight"
                            variants={fadeInUp}
                        >
                            Empower Decision-Making with Data
                        </motion.h2>

                        {/* Feature List */}
                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    custom={index}
                                    variants={featureItemVariants}
                                    whileHover={{
                                        x: 10,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.div
                                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <Image
                                            src="/icons/CoreHRPoint.png"
                                            alt=""
                                            width={24}
                                            height={24}
                                            aria-hidden="true"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                    <motion.span
                                        className="text-black text-base font-semibold leading-relaxed"
                                        whileHover={{
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {feature}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Multiple Design Options */}
                    <motion.div
                        className="flex flex-col justify-center items-center gap-4 relative md:h-[550px] bg-[url('/icons/DataSectionBG.png')] bg-contain bg-center bg-no-repeat rounded-2xl overflow-x-clip"
                        variants={fadeInRight}
                        role="img"
                        aria-label="Data visualization dashboard showing employee performance metrics"
                    >
                        <DailyAttendanceCard />
                        <EmployeePerformanceCard />
                        <EmployeeGrowthCard />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}