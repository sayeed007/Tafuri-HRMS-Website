// components/TestimonialsSection.tsx
'use client'

import {
    containerVariants,
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    hoverLift,
    tapScale
} from '@/lib/animations/variants'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import TestimonialData from '../data/testimonials/testimonials.json';


export default function TestimonialsSection() {
    const testimonials = TestimonialData.testimonials;
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const current = testimonials[currentTestimonial]
    const next = testimonials[(currentTestimonial + 1) % testimonials.length]

    return (
        <section
            className="w-full bg-white"
            aria-labelledby="testimonials-heading"
        >
            <div className='container  w-full mx-auto px-5 md:px-20 py-10'>
                <motion.div
                    className="flex flex-col lg:flex-row gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Side - Title (20% width) */}
                    <motion.div
                        className="lg:w-1/5 flex flex-col justify-center"
                        variants={fadeInLeft}
                    >
                        <p className='font-semibold text-lg uppercase spacing-md tracking-[6px] text-primary'>
                            Testimonials
                        </p>
                        <h2
                            id="testimonials-heading"
                            className="text-4xl md:text-5xl font-merriweather text-black md:mb-6 leading-tight"
                        >
                            What our<br />
                            clients say
                        </h2>
                    </motion.div>

                    {/* Right Side - Testimonials (80% width) */}
                    <motion.div
                        className="lg:w-4/5"
                        variants={fadeInRight}
                    >
                        <div className="flex flex-wrap md:flex-nowrap gap-4 mb-8">
                            {/* Current Testimonial - 70% */}
                            <motion.div
                                className="md:w-[70%]"
                                key={`current-${current.id}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <article className="flex flex-col justify-between rounded-2xl px-4 md:px-8 py-6 md:py-12 h-full shadow-lg transition-all duration-500 bg-[url('/icons/TestimonialsGreenBG.png')] bg-cover bg-center bg-no-repeat text-white">
                                    {/* Testimonial Content */}
                                    <blockquote className="text-xl font-semibold leading-relaxed text-white">
                                        {`"${current.content}"`}
                                    </blockquote>

                                    <footer className="flex gap-6 mt-8">
                                        {/* Avatar */}
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center text-lg font-bold bg-white/20 text-white border-2 border-white/30 flex-shrink-0">
                                            <Image
                                                src={current.profileImage}
                                                alt={`Profile photo of ${current.name}`}
                                                width={71}
                                                height={71}
                                                className='rounded-full'
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Author Info */}
                                        <div className="">
                                            <cite className="font-semibold text-xl mb-1 text-white not-italic">
                                                {current.name}
                                            </cite>
                                            <p className="text-base mb-1 text-white">
                                                {current.role}, {current.company}
                                            </p>
                                            <div role="img" aria-label={`${current.rating} out of 5 stars`} className="sr-only">
                                                {current.rating} stars
                                            </div>
                                        </div>
                                    </footer>
                                </article>
                            </motion.div>

                            {/* Next Testimonial Preview - 30% */}
                            <motion.div
                                className="md:w-[30%]"
                                key={`next-${next.id}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <motion.article
                                    className="flex flex-col justify-between rounded-2xl px-4 md:px-8 py-6 md:py-12 h-full shadow-lg transition-all duration-500 cursor-pointer bg-[url('/icons/TestimonialsLightBG.png')] bg-cover bg-center bg-no-repeat text-black"
                                    onClick={nextTestimonial}
                                    whileHover={hoverLift}
                                    whileTap={tapScale}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Preview testimonial from ${next.name}. Click to view full testimonial.`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault()
                                            nextTestimonial()
                                        }
                                    }}
                                >
                                    {/* Testimonial Content */}
                                    <blockquote className="text-base font-semibold leading-relaxed text-black">
                                        {`"${next.content.substring(0, 80)}..."`}
                                    </blockquote>

                                    <footer className="flex gap-4 mt-8 items-center">
                                        {/* Avatar */}
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold bg-white/20 text-white border-2 border-white/30">
                                            <Image
                                                src={next.profileImage}
                                                alt={`Profile photo of ${next.name}`}
                                                width={64}
                                                height={64}
                                                className='rounded-full max-w-[120%]'
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Author Info */}
                                        <div className="">
                                            <cite className="font-semibold text-xl mb-1 text-black not-italic">
                                                {next.name}
                                            </cite>
                                            <p className="text-base mb-1 text-black">
                                                {next.role}, {next.company}
                                            </p>
                                        </div>
                                    </footer>
                                </motion.article>
                            </motion.div>
                        </div>

                        {/* Controls Below */}
                        <motion.div
                            className="flex justify-between items-center"
                            variants={fadeInUp}
                        >
                            {/* Counter */}
                            <div className="text-grey-2 font-medium" aria-live="polite">
                                {String(currentTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-2" role="group" aria-label="Testimonial navigation">
                                <motion.button
                                    onClick={prevTestimonial}
                                    className="cursor-pointer w-10 h-10 bg-navigation-indicator shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                                    aria-label="Previous testimonial"
                                    whileHover={hoverLift}
                                    whileTap={tapScale}
                                >
                                    <ChevronLeft className="w-5 h-5 text-grey-2" aria-hidden="true" />
                                </motion.button>

                                <motion.button
                                    onClick={nextTestimonial}
                                    className="cursor-pointer w-10 h-10 bg-navigation-indicator shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                                    aria-label="Next testimonial"
                                    whileHover={hoverLift}
                                    whileTap={tapScale}
                                >
                                    <ChevronRight className="w-5 h-5 text-grey-2" aria-hidden="true" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}