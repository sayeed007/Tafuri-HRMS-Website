"use client"
// src\components\request-demo\ContactSection.tsx
import {
    contactInfoVariants,
    enhancedContactCardVariants,
    enhancedHoverLift,
    heroHeaderVariants,
    immediateContainerVariants,
    pulseAnimation,
    tapScale
} from "@/lib/animations/variants"
import { motion } from "framer-motion"



export default function ContactSection() {
    return (
        <motion.section
            className="px-5 md:px-20 py-10 relative overflow-hidden"
            aria-labelledby="contact-section"
            initial="hidden"
            animate="visible"
            variants={immediateContainerVariants}
        >
            {/* Subtle background animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Header */}
            <motion.div
                className="text-center font-merriweather mb-12 relative z-10"
                variants={immediateContainerVariants}
            >
                <motion.div
                    variants={heroHeaderVariants}
                    className="inline-block"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-black mb-2"
                        animate={pulseAnimation}
                    >
                        {`We'd love to hear`}
                    </motion.h1>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                    >
                        from you
                    </motion.h1>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 80, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                />
            </motion.div>

            {/* Contact Cards */}
            <motion.div
                className="grid md:grid-cols-2 justify-center gap-8 max-w-4xl mx-auto relative z-10"
                variants={immediateContainerVariants}
            >
                {/* Contact Sales */}
                <motion.div
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 text-center max-w-[400px] relative overflow-hidden border border-gray-100"
                    variants={enhancedContactCardVariants}
                    whileHover={enhancedHoverLift}
                    whileTap={tapScale}
                >
                    {/* Card background gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    />

                    <motion.h3
                        className="text-2xl font-merriweather font-bold text-black mb-4 relative z-10"
                        variants={contactInfoVariants}
                    >
                        Contact Sales
                    </motion.h3>
                    <motion.p
                        className="text-lg text-grey-2 mb-6 leading-relaxed relative z-10"
                        variants={contactInfoVariants}
                    >
                        Interested in Tafuri HR? Our sales team is available for
                        feature & pricing queries. Call
                    </motion.p>
                    <motion.div
                        className="space-y-3 relative z-10"
                        variants={contactInfoVariants}
                    >
                        <motion.a
                            href="tel:+8801755645081"
                            className="block text-blue hover:text-blue-600 font-bold text-lg transition-colors duration-200"
                            whileHover={{
                                scale: 1.05,
                                color: "#2563eb",
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            +88 01755 645081
                        </motion.a>
                        <motion.a
                            href="mailto:sales.global@neural-semiconductor.com"
                            className="block text-blue hover:text-blue-600 font-bold text-lg transition-colors duration-200"
                            whileHover={{
                                scale: 1.05,
                                color: "#2563eb",
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            sales.global@neural-semiconductor.com
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Contact Support */}
                <motion.div
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 text-center max-w-[400px] relative overflow-hidden border border-gray-100"
                    variants={enhancedContactCardVariants}
                    whileHover={enhancedHoverLift}
                    whileTap={tapScale}
                >
                    {/* Card background gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    />

                    <motion.h3
                        className="text-2xl font-merriweather font-bold text-black mb-4 relative z-10"
                        variants={contactInfoVariants}
                    >
                        Contact Support
                    </motion.h3>
                    <motion.p
                        className="text-lg text-grey-2 mb-6 leading-relaxed relative z-10"
                        variants={contactInfoVariants}
                    >
                        Using Tafuri HR and need help?
                        Get instant support—just reach
                        out to us anytime!
                    </motion.p>

                    <motion.div
                        className="space-y-3 relative z-10"
                        variants={contactInfoVariants}
                    >
                        <motion.a
                            href="tel:+8801708151698"
                            className="block text-blue hover:text-blue-600 font-bold text-lg transition-colors duration-200"
                            whileHover={{
                                scale: 1.05,
                                color: "#2563eb",
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            +880 1708 151698
                        </motion.a>
                        <motion.a
                            href="mailto:support@neural-semiconductor.com"
                            className="block text-blue hover:text-blue-600 font-bold text-lg relative z-10 transition-colors duration-200"
                            variants={contactInfoVariants}
                            whileHover={{
                                scale: 1.05,
                                color: "#2563eb",
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            support@neural-semiconductor.com
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}