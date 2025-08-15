"use client"
import {
    answerVariants,
    containerVariants,
    defaultViewport,
    fadeInLeft,
    fadeInRight,
    headerVariants,
    hoverScale,
    tapScale
} from "@/lib/animations/variants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SmartAttendanceSection() {
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0])); // First item expanded by default

    const toggleItem = (index: number) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedItems(newExpanded);
    };

    const accordionItems = [
        {
            title: "Ensure Accurate Records.",
            content: "Time Tracking Is Effortless With Tafuri HR. View Work Hours, Spot Errors, And Automate Timesheet Reminders. Generate Detailed Attendance Reports And Export Them To Payroll With Ease."
        },
        {
            title: "Kiosk Setup",
            content: "Set up dedicated kiosk stations for employees to clock in and out. Easy configuration with biometric or card-based authentication for secure and accurate time tracking."
        },
        {
            title: "Attendance Adjustment",
            content: "Make quick adjustments to attendance records when needed. Handle exceptions, late arrivals, and early departures with proper approval workflows and audit trails."
        },
        {
            title: "Access Attendance Anywhere",
            content: "Cloud-based access allows managers and employees to view attendance data from anywhere. Mobile-friendly interface ensures you stay connected on the go."
        }
    ];

    return (
        <motion.section
            className="container mx-auto py-10 px-5 md:px-20"
            aria-labelledby="smart-attendance-section"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={containerVariants}
        >
            <div className="grid lg:grid-cols-2 md:gap-12 items-center">
                <motion.div
                    className="space-y-8"
                    variants={fadeInLeft}
                >
                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-merriweather font-bold text-black"
                            variants={headerVariants}
                        >
                            Smart Attendance Tracking for a More Efficient Workforce.
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                    >
                        {accordionItems.map((item, index) => {
                            const isExpanded = expandedItems.has(index);
                            return (
                                <motion.div
                                    key={index}
                                    className="border-b border-border-color overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <div className="w-full text-left transition-colors duration-200">
                                        {/* HEADER */}
                                        <motion.button
                                            className="flex items-center justify-between w-full p-4 hover:shadow-md transition-shadow"
                                            whileHover={hoverScale}
                                            whileTap={tapScale}
                                        >
                                            <span className="font-bold text-black">{item.title}</span>

                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                onClick={() => toggleItem(index)}
                                            >
                                                <Image
                                                    src="/icons/ArrowDownLight.png"
                                                    alt={'toggleItem'}
                                                    width={20}
                                                    height={20}
                                                    className="w-5 h-5 cursor-pointer"
                                                />
                                            </motion.div>
                                        </motion.button>

                                        {/* CONTENT */}
                                        <AnimatePresence initial={false}>
                                            {isExpanded && (
                                                <motion.div
                                                    variants={answerVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-4 pt-4 pb-2">
                                                        <p className="text-grey-4 leading-relaxed">
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex justify-end p-6"
                    variants={fadeInRight}
                >
                    <motion.div
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <Image
                            src={'/features/SmartAttendance.png'}
                            alt={'SmartAttendance'}
                            width={1200}
                            height={600}
                            className="w-[550px] h-[430px]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}