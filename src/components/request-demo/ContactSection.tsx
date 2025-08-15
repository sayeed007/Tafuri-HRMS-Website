"use client"
// src\components\request - demo\ContactSection.tsx
import { motion } from "framer-motion"
import {
    containerVariants,
    headerVariants,
    contactCardVariants,
    defaultViewport,
    hoverLift,
    tapScale,
    textColorHover
} from "@/lib/animations/variants"

export default function ContactSection() {
    return (
        <motion.section
            className="px-5 md:px-20 py-10"
            aria-labelledby="contact-section"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={containerVariants}
        >
            {/* Header */}
            <motion.div
                className="text-center font-merriweather mb-12"
                variants={containerVariants}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-black mb-4"
                    variants={headerVariants}
                >
                    {`We'd love to hear`}
                </motion.h1>
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-black"
                    variants={headerVariants}
                >
                    from you
                </motion.h1>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
                className="grid md:grid-cols-2 justify-center gap-8 max-w-4xl mx-auto"
                variants={containerVariants}
            >
                {/* Contact Sales */}
                <motion.div
                    className="bg-white rounded-lg shadow-4 p-8 text-center max-w-[400px]"
                    variants={contactCardVariants}
                    whileHover={hoverLift}
                    whileTap={tapScale}
                >
                    <motion.h3
                        className="text-2xl font-merriweather font-bold text-black mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Contact Sales
                    </motion.h3>
                    <motion.p
                        className="text-lg text-grey-2 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Interested in Tafuri HR? Our sales team is available for
                        feature & pricing queries. Call
                    </motion.p>
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.a
                            href="tel:+8801755645081"
                            className="block text-blue hover:text-blue-600 font-bold text-lg"
                            whileHover={textColorHover}
                            whileTap={{ scale: 0.98 }}
                        >
                            +88 01755 645081
                        </motion.a>
                        <motion.a
                            href="mailto:sales@tafurihr.com"
                            className="block text-blue hover:text-blue-600 font-bold text-lg"
                            whileHover={textColorHover}
                            whileTap={{ scale: 0.98 }}
                        >
                            sales@tafurihr.com
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Contact Support */}
                <motion.div
                    className="bg-white rounded-lg shadow-4 p-8 text-center max-w-[400px]"
                    variants={contactCardVariants}
                    whileHover={hoverLift}
                    whileTap={tapScale}
                >
                    <motion.h3
                        className="text-2xl font-merriweather font-bold text-black mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Contact Support
                    </motion.h3>
                    <motion.p
                        className="text-lg text-grey-2 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Using Tafuri HR and need help?
                        Get instant support—just reach
                        out to us anytime!
                    </motion.p>
                    <motion.a
                        href="mailto:support@tafurihr.com"
                        className="block text-blue hover:text-blue-600 font-bold text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={textColorHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        support@tafurihr.com
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}