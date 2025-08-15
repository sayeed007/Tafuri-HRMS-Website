"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    containerVariants,
    fadeInLeft,
    fadeInRight,
    featureItemVariants,
    headerVariants,
    defaultViewport,
    iconHover
} from "@/lib/animations/variants"

export default function ScheduleManagementSection() {
    const features = [
        "Easily assign shifts with a simple drag-and-drop interface.",
        "Allow employees to view and swap shifts, reducing admin workload.",
        "Prevent scheduling conflicts and overtime issues automatically.",
        "Sync schedules seamlessly with attendance tracking and payroll processing."
    ]

    return (
        <motion.section
            className="bg-white"
            aria-labelledby="schedule-management-section"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={containerVariants}
        >
            <div className="container mx-auto py-10 px-5 md:px-20">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
                    <motion.div
                        className="flex justify-start relative"
                        variants={fadeInLeft}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Image
                                src={'/features/ScheduleManagement.png'}
                                alt={'ScheduleManagement'}
                                width={1200}
                                height={600}
                                className="w-[550px] h-[325px]"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={fadeInRight}
                    >
                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                        >
                            <motion.h2
                                className="text-3xl lg:text-4xl font-merriweather font-bold text-black"
                                variants={headerVariants}
                            >
                                Quickly create and manage employee schedules with ease.
                            </motion.h2>
                            <motion.p
                                className="text-base text-grey-2"
                                variants={featureItemVariants}
                            >
                                Easily create, update, and manage employee schedules in minutes,
                                not hours.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-3"
                                    variants={featureItemVariants}
                                    custom={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        whileHover={iconHover}
                                    >
                                        <Image
                                            src={'/icons/CoreHRPoint.png'}
                                            alt={'CoreHRPoint'}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                        />
                                    </motion.div>
                                    <motion.p
                                        className="font-semibold text-black"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        {feature}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </motion.section>
    )
}