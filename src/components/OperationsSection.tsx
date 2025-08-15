// components/OperationsSection.tsx
'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
    containerVariants,
    cardVariants,
    headerVariants,
    hoverLift,
    iconHover,
    tapScale,
    textColorHover,
    defaultViewport,
    partialViewport
} from "@/lib/animations/variants"

const operations = [
    { icon: '/icons/EmployeeOnboarding.png', title: 'Employee Onboarding' },
    { icon: '/icons/TimeTracking.png', title: 'Time Tracking' },
    { icon: '/icons/LeaveManagement.png', title: 'Leave Management' },
    { icon: '/icons/PayrollManagement.png', title: 'Payroll Management' },
    { icon: '/icons/HelpDesk.png', title: 'Help Desk' },
    { icon: '/icons/CustomizeReport.png', title: 'Customize Report' },

    { icon: '/icons/PerformanceTracking.png', title: 'Performance Tracking' },
    { icon: '/icons/HRLetterGeneration.png', title: 'Automated HR Letter Generation' },
    { icon: '/icons/ShiftManagement.png', title: 'Workforce Scheduling & Shift Management' },
    { icon: '/icons/FoodManagement.png', title: 'Food Management' },
    { icon: '/icons/OrganizationHierarchy.png', title: 'Organization & Hierarchy' },
    { icon: '/icons/RealTimeNotification.png', title: 'Real-time Notifications' },

    { icon: '/icons/TransportBenefitManagement.png', title: 'Car/Bike Benefit Management' },
    { icon: '/icons/RecruitmentManagement.png', title: 'Recruitment Management' },
    { icon: '/icons/DocumentManagement.png', title: 'Digital Document Management' },
    { icon: '/icons/EmployeeTracking.png', title: 'Employee Tracking' },
    { icon: '/icons/GratuityManagement.png', title: 'Gratuity Management' },
    { icon: '/icons/ProvidentFundManagement.png', title: 'Provident Fund Management' },

    { icon: '/icons/SimManagement.png', title: 'Corporate Sim Management' },
    { icon: '/icons/AIPoweredAssistance.png', title: 'AI-powered Assistance' },
    { icon: '/icons/PickAndDropManagement.png', title: 'Pick & Drop Management' },
    { icon: '/icons/EmployeeOffboarding.png', title: 'Employee Offboarding' },
]

export default function OperationsSection() {
    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        // Delay to ensure smooth transition
        const timer = setTimeout(() => setIsHydrated(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Fallback static content for SSR
    const StaticCard = ({ operation }: { operation: typeof operations[0] }) => (
        <div className="group flex flex-col items-center justify-between min-w-[155px] min-hh-[175px] p-6 rounded-xl bg-white border border-card-border cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-xl">
            <div className="relative w-16 h-16">
                <Image
                    src={operation.icon}
                    alt={`${operation.title} Icon for TafuriHR`}
                    fill
                    sizes="64px"
                    className="object-contain"
                />
            </div>
            <h3 className="mt-4 text-base text-grey-2 font-semibold text-center leading-tight">
                {operation.title}
            </h3>
        </div>
    )

    return (
        <section
            className="bg-operation w-full"
            aria-labelledby="operations-section"
        >
            <div className='max-w-[1528px] w-full mx-auto px-5 md:px-20 py-10 '>
                <div className="mx-auto sm:px-6 lg:px-8">
                    {/* Section Header */}
                    {isHydrated ? (
                        <motion.div
                            className="text-center mv-4 md:mb-16"
                            variants={headerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                        >
                            <h2 className="text-3xl md:text-4xl font-merriweather font-normal text-black mb-4">
                                All your operations. All in one place
                            </h2>
                        </motion.div>
                    ) : (
                        <div className="text-center mv-4 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-merriweather font-normal text-black mb-4">
                                All your operations. All in one place
                            </h2>
                        </div>
                    )}

                    {/* Operations Grid */}
                    {isHydrated ? (
                        <motion.div
                            className="md:mx-25 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={partialViewport}
                        >
                            {operations.map((operation) => (
                                <motion.div
                                    key={operation.title}
                                    variants={cardVariants}
                                    whileHover={hoverLift}
                                    whileTap={tapScale}
                                    className="group flex flex-col items-center justify-between min-w-[155px] min-hh-[175px] p-6 rounded-xl bg-white border border-card-border cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-xl"
                                >
                                    <motion.div
                                        className="relative w-16 h-16"
                                        whileHover={iconHover}
                                    >
                                        <Image
                                            src={operation.icon}
                                            alt={`${operation.title} Icon for TafuriHR`}
                                            fill
                                            sizes="64px"
                                            className="object-contain"
                                        />
                                    </motion.div>
                                    <motion.h3
                                        className="mt-4 text-base text-grey-2 font-semibold text-center leading-tight"
                                        whileHover={textColorHover}
                                    >
                                        {operation.title}
                                    </motion.h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="md:mx-25 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
                            {operations.map((operation) => (
                                <StaticCard key={operation.title} operation={operation} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}