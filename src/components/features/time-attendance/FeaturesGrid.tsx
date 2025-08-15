"use client"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    gridContainerVariants,
    featureCardVariants,
    defaultViewport,
    hoverScale,
    tapScale,
    iconHover
} from "@/lib/animations/variants"

export default function FeaturesGrid() {
    const features = [
        {
            icon: '/icons/Calendar.png',
            title: "Clear Insights",
            description: "Provides clear insights into employee absences and attendance patterns."
        },
        {
            icon: '/icons/Clock.png',
            title: "Overtime Tracking",
            description: "Tracks and analyzes employee overtime efficiently."
        },
        {
            icon: '/icons/PayrollManagement.png',
            title: "Payroll Integration",
            description: "Simplifies and automates payroll calculations."
        },
        {
            icon: '/icons/TrackEmployee.png',
            title: "Location Tracking",
            description: "Tracks employee attendance seamlessly from any location."
        }
    ];

    return (
        <motion.section
            className="bg-body-gradient"
            aria-labelledby="features-section"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={gridContainerVariants}
        >
            <div className="container mx-auto py-6 px-5 md:px-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={featureCardVariants}
                                custom={index}
                                whileHover={hoverScale}
                                whileTap={tapScale}
                            >
                                <Card className="bg-white rounded-2xl text-center p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                                    <CardContent className="space-y-4 p-0">
                                        <motion.div
                                            className="w-22 h-22 mx-auto flex items-center justify-center"
                                            whileHover={iconHover}
                                        >
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={85}
                                                height={85}
                                            />
                                        </motion.div>
                                        <motion.p
                                            className="text-lg text-grey-2 leading-relaxed"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.section>
    )
}