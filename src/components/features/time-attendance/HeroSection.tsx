"use client"
import { Button } from "@/components/ui/button"
import {
    buttonVariants,
    containerVariants,
    fadeInRight,
    fadeInUpHeroSection
} from "@/lib/animations/variants"
import { motion } from "framer-motion"
import Image from "next/image"

// Hero Section Component
export default function HeroSection() {
    return (
        <motion.section
            className="bg-body-gradient"
            aria-labelledby="features-attendance-hero-section"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto py-6 px-5 md:px-20">
                <div className="grid lg:grid-cols-2 md:gap-12 items-center">
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                    >
                        <motion.h1
                            className="text-4xl lg:text-5xl font-merriweather font-bold text-black leading-tight"
                            variants={fadeInUpHeroSection}
                        >
                            Organize and track your
                            <br />
                            {`team's time—all in one`}
                            <br />
                            platform.
                        </motion.h1>

                        <motion.p
                            className="text-base text-grey-2 leading-relaxed"
                            variants={fadeInUpHeroSection}
                        >
                            Eliminate manual data entry and separate scheduling tools. Track time,
                            manage attendance, create schedules, and sync hours to payroll—all in one
                            platform.
                        </motion.p>

                        <motion.div variants={buttonVariants}>
                            <a href={'/request-demo'}>
                                <Button
                                    size="lg"
                                    className="cursor-pointer bg-button-gradient hover:bg-button-gradient-hover text-white px-8 py-6 rounded-full text-lg font-semibold mb-8"
                                >
                                    Schedule a Demo
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative w-full flex justify-end"
                        variants={fadeInRight}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Image
                                src={'/features/AttendanceHeroBanner.png'}
                                alt={'AttendanceHeroBanner'}
                                width={1200}
                                height={600}
                                className="w-[550px] h-[480px]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="absolute right-[-20px] md:right-[-50px] top-4/6"
                        >
                            <Image
                                src={'/gif/CheckInOut.gif'}
                                alt={'CheckInOut'}
                                width={200}
                                height={100}
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}