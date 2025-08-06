'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
    {
        id: 1,
        name: 'Sadman Safiul',
        role: 'Senior Product Manager',
        company: 'Chhaya Technologies Limited',
        content: 'Tafuri HRMS has significantly streamlined our organizational workflows by centralizing employee management and automating attendance tracking. Its intuitive platform helps us efficiently monitor our field sales force, enhancing accountability and operational transparency.',
        rating: 5,
        avatar: 'SR',
        profileImage: '/Testimonials/SadmanSafiul.png',
        cardType: 'green'
    },
    {
        id: 2,
        name: 'Khurram Abbasi',
        role: 'COO',
        company: 'Intellexis',
        content: 'Curls Blocks has completely transformed the way we approach design at our company. The versatility and flexibility of the library have allowed us to create consistent and beautiful designs across all our platforms. Highly recommended!',
        rating: 5,
        avatar: 'MA',
        profileImage: '/Testimonials/KhurramAbbasi.png',
        cardType: 'white'
    },
    {
        id: 3,
        name: 'Sarah Johnson',
        role: 'Operations Manager',
        company: 'Innovation Hub',
        content: 'Outstanding platform with intuitive design. The kiosk integration has made our office completely paperless, and employee satisfaction has increased significantly.',
        rating: 5,
        avatar: 'SJ',
        profileImage: '/Testimonials/SadmanSafiul.png',
        cardType: 'green'
    },
    {
        id: 2,
        name: 'Khurram Abbasi',
        role: 'COO',
        company: 'Intellexis',
        content: 'Curls Blocks has completely transformed the way we approach design at our company. The versatility and flexibility of the library have allowed us to create consistent and beautiful designs across all our platforms. Highly recommended!',
        rating: 5,
        avatar: 'MA',
        profileImage: '/Testimonials/KhurramAbbasi.png',
        cardType: 'white'
    },
]

export default function TestimonialsSection() {
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
        <section className="py-10 bg-white">
            <div className="flex flex-col mx-10 lg:flex-row gap-8">
                {/* Left Side - Title (20% width) */}
                <div className="lg:w-1/5 flex flex-col justify-center">
                    <h4 className='font-semibold text-lg uppercase spacing-md tracking-[6px] text-primary'>
                        Testimonials
                    </h4>
                    <h2 className="text-4xl md:text-5xl  text-black mb-6 leading-tight">
                        What our<br />
                        clients say
                    </h2>
                </div>

                {/* Right Side - Testimonials (80% width) */}
                <div className="lg:w-4/5">
                    <div className="flex gap-4 mb-8">
                        {/* Current Testimonial - 70% */}
                        <div className="w-[70%]">
                            <div className={`flex flex-col justify-between rounded-2xl px-8 py-12 h-full shadow-lg transition-all duration-500 ${current.cardType === 'green'
                                ? `bg-[url('/icons/TestimonialsGreenBG.png')] bg-cover bg-center bg-no-repeat text-white`
                                : `bg-[url('/icons/TestimonialsLightBG.png')] bg-cover bg-center bg-no-repeat text-black`
                                }`}>

                                {/* Testimonial Content */}
                                <blockquote className={`text-xl font-semibold leading-relaxed ${current.cardType === 'green' ? 'text-white' : 'text-black'
                                    }`}>
                                    {current.content}
                                </blockquote>

                                <div className="flex gap-6 mt-8">
                                    {/* Avatar */}
                                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-lg font-bold bg-white/20 text-white border-2 border-white/30`}>
                                        <Image
                                            src={current.profileImage}
                                            alt={current.name}
                                            width={71}
                                            height={71}
                                            className='rounded-full'
                                        />
                                    </div>

                                    {/* Author Info */}
                                    <div className="">
                                        <h3 className={`font-semibold text-xl mb-1 ${current.cardType === 'green' ? 'text-white' : 'text-black'
                                            }`}>
                                            {current.name}
                                        </h3>
                                        <p className={`text-base mb-1 ${current.cardType === 'green' ? 'text-white' : 'text-black'
                                            }`}>
                                            {current.role}, {current.company}
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Next Testimonial Preview - 30% */}
                        <div className="w-[30%]">
                            <div className={`flex flex-col justify-between rounded-2xl px-8 py-12 h-full shadow-lg transition-all duration-500 cursor-pointer 
                                ${next.cardType === 'green'
                                    ? `bg-[url('/icons/TestimonialsGreenBG.png')] bg-cover bg-center bg-no-repeat text-white`
                                    : `bg-[url('/icons/TestimonialsLightBG.png')] bg-cover bg-center bg-no-repeat text-black`
                                }`}
                                onClick={nextTestimonial}>

                                {/* Testimonial Content */}
                                <blockquote className={`text-base font-semibold leading-relaxed ${next.cardType === 'green' ? 'text-white' : 'text-black'
                                    }`}>
                                    {next.content.substring(0, 80)}{'...'}
                                </blockquote>

                                <div className="flex gap-4 mt-8 items-center">
                                    {/* Avatar */}
                                    <div className={`w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold bg-white/20 text-white border-2 border-white/30`}>
                                        <Image
                                            src={next.profileImage}
                                            alt={next.name}
                                            width={64}
                                            height={64}
                                            className='rounded-full max-w-[120%]'
                                        />
                                    </div>

                                    {/* Author Info */}
                                    <div className="">
                                        <h3 className={`font-semibold text-xl mb-1 ${next.cardType === 'green' ? 'text-white' : 'text-black'
                                            }`}>
                                            {next.name}
                                        </h3>
                                        <p className={`text-base mb-1 ${next.cardType === 'green' ? 'text-white' : 'text-black'
                                            }`}>
                                            {next.role}, {next.company}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls Below */}
                    <div className="flex justify-between items-center">
                        {/* Counter */}
                        <div className="text-gray-600 font-medium">
                            {String(currentTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={prevTestimonial}
                                className="cursor-pointer w-10 h-10 bg-navigation-indicator shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>

                            <button
                                onClick={nextTestimonial}
                                className="cursor-pointer w-10 h-10 bg-navigation-indicator shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

