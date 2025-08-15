"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
    containerVariants,
    headerVariants,
    cardVariants,
    fadeInUp,
    defaultViewport,
    hoverLift,
    tapScale
} from "@/lib/animations/variants"

export default function AttendanceManagementSection() {
    const benefits = [
        {
            title: "Increased Accuracy",
            description: "Automated Time Tracking Reduces Errors Associated With Manual Entry."
        },
        {
            title: "Improved Compliance",
            description: "Ensure Adherence To Company Policies And Labor Laws With Detailed Attendance Data."
        },
        {
            title: "Enhanced Productivity",
            description: "With Easy Time Tracking, Attendance Records, Managers Can Make Better Decisions And Allocate Resources More Effectively."
        },
        {
            title: "Data-Driven Decisions",
            description: "Use Attendance Trends And Insights To Make Informed Decisions Around Staffing, Productivity, And Employee Engagement."
        },
        {
            title: "Employee Self-Service",
            description: "Empower Employees To View And Manage Their Attendance, Requesting Admin Work And Keeping Them On Top Of Their Schedules."
        },
        {
            title: "Easy Integration",
            description: "Seamlessly Integrate With Your Existing HR And Payroll Systems For Smooth Operations."
        }
    ]

    return (
        <motion.section
            className="container mx-auto py-10 px-5 md:px-20"
            aria-labelledby="attendance-management-section"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={containerVariants}
        >
            <motion.div
                className="flex flex-wrap justify-between mb-6 md:mb-12"
                variants={containerVariants}
            >
                <motion.h2
                    className="w-full md:w-1/2 text-3xl lg:text-4xl font-merriweather font-bold text-black mb-4"
                    variants={headerVariants}
                >
                    Attendance Management
                    <br />
                    Made Simple
                </motion.h2>
                <motion.div
                    className="w-full md:w-1/2"
                    variants={fadeInUp}
                >
                    <p className="text-base text-grey-2 max-w-3xl">
                        Transform the way you manage attendance—simplify the process, gain insights, and
                        empower your team. Let our Attendance Management system be your solution for a
                        more efficient, compliant, and productive workspace.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8"
                variants={containerVariants}
            >
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={hoverLift}
                        whileTap={tapScale}
                        custom={index}
                    >
                        <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                            <CardContent className="space-y-3 p-0">
                                <h3 className="text-xl font-bold text-black">{benefit.title}</h3>
                                <p className="text-base text-grey-2 leading-relaxed">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}