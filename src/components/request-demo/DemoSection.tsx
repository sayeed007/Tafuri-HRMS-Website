// components/DemoSection.tsx
"use client"
import { containerVariants, defaultViewport } from '@/lib/animations/variants'
import { motion } from "framer-motion"
import DemoContent from './DemoContent'
import DemoForm from './DemoForm'

export default function DemoSection() {
    return (
        <motion.section
            className="bg-white"
            aria-labelledby="emo-section"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={containerVariants}
        >
            <div className="container mx-auto px-5 md:px-20 py-10 flex flex-col lg:flex-row gap-12 items-start">
                <DemoContent />
                <DemoForm />
            </div>
        </motion.section>
    )
}