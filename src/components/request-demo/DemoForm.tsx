"use client"
// src\components\request - demo\DemoForm.tsx

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { toast } from 'sonner'
import { motion, AnimatePresence } from "framer-motion"
import {
    containerVariants,
    fadeInUp,
    buttonVariants,
    defaultViewport,
    hoverScale,
    tapScale
} from "@/lib/animations/variants"

interface FormErrors {
    name?: string
    companyName?: string
    email?: string
    phone?: string
    message?: string
}

const initialFormData = {
    name: '',
    companyName: '',
    email: '',
    countryCode: '+8801',
    phone: '',
    message: '',
    employeeCount: '1-50'
};

export default function DemoForm() {
    const [formData, setFormData] = useState({ ...initialFormData })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters'
        }

        // Company name validation
        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company name is required'
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        // Phone validation
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required'
        } else if (formData.phone.startsWith('+8801')) {
            // Bangladesh mobile number validation
            // Format: +8801XXXXXXXXX (total 14 characters)
            // Example: +8801934939844
            if (formData.phone.length !== 14) {
                newErrors.phone = 'Bangladesh mobile number must be 14 characters (+8801XXXXXXXXX)'
            } else if (!/^\+8801[0-9]{9}$/.test(formData.phone)) {
                newErrors.phone = 'Invalid Bangladesh mobile number format'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }))
        }
    }

    const handlePhoneChange = (value: string | undefined) => {
        setFormData(prev => ({
            ...prev,
            phone: value || ''
        }))

        // Clear phone error when user starts typing
        if (errors.phone) {
            setErrors(prev => ({
                ...prev,
                phone: undefined
            }))
        }
    }

    const handleEmployeeCountChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            employeeCount: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            toast.error("Validation Failed", {
                description: "Please fill in all required fields correctly.",
                icon: <AlertTriangle className="h-5 w-5" />,
            })
            return
        }

        setIsSubmitting(true)

        try {
            // Show loading toast
            const loadingToast = toast.loading("Submitting your form...", {
                description: "Please wait while we process your information.",
            })

            // Prepare the data for submission
            const submissionData = {
                ...formData,
                submittedAt: new Date().toISOString()
            }

            // Call your API route
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            })

            // Dismiss loading toast
            toast.dismiss(loadingToast)

            if (response.ok) {
                // Reset form on success
                setFormData({ ...initialFormData })

                // Beautiful success toast
                toast.success("🎉 Success!", {
                    description: "Your form has been submitted successfully. We'll get back to you soon!",
                    icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
                    duration: 6000,
                    action: {
                        label: "View Details",
                        onClick: () => console.log("View submission details"),
                    },
                    style: {
                        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                        borderColor: '#16a34a',
                        color: '#15803d',
                    },
                })
            } else {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Failed to submit form')
            }
        } catch (error) {
            console.error('Error submitting form:', error)

            // Beautiful error toast
            toast.error("⌐ Submission Failed", {
                description: error instanceof Error
                    ? error.message
                    : "Something went wrong. Please check your connection and try again.",
                icon: <XCircle className="h-5 w-5 text-red-600" />,
                duration: 8000,
                action: {
                    label: "Try Again",
                    onClick: () => handleSubmit(e),
                },
                style: {
                    background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                    borderColor: '#dc2626',
                    color: '#dc2626',
                },
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <motion.form
                onSubmit={handleSubmit}
                className="w-full lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={containerVariants}
            >
                {/* Name */}
                <motion.div
                    className="mb-6"
                    variants={fadeInUp}
                >
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-2">
                        Name <span className='text-red-500'>*</span>
                    </label>
                    <div className="relative">
                        <Image
                            src={'/icons/User.png'}
                            alt={'User'}
                            width={20}
                            height={20}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        />
                        <motion.input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full name"
                            className={cn(
                                "w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
                                errors.name ? "border-red-500" : "border-gray-300"
                            )}
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.name && (
                            <motion.p
                                className="text-red-500 text-sm mt-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {errors.name}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Company Name */}
                <motion.div
                    className="mb-6"
                    variants={fadeInUp}
                >
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-2">
                        Company name <span className='text-red-500'>*</span>
                    </label>
                    <div className="relative">
                        <Image
                            src={'/icons/Buildings.png'}
                            alt={'Buildings'}
                            width={20}
                            height={20}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        />
                        <motion.input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Company name"
                            className={cn(
                                "w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
                                errors.companyName ? "border-red-500" : "border-gray-300"
                            )}
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.companyName && (
                            <motion.p
                                className="text-red-500 text-sm mt-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {errors.companyName}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Business Email */}
                <motion.div
                    className="mb-6"
                    variants={fadeInUp}
                >
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-2">
                        Business email
                    </label>
                    <div className="relative">
                        <Image
                            src={'/icons/Envelope.png'}
                            alt={'Envelope'}
                            width={20}
                            height={20}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        />
                        <motion.input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@company.com"
                            className={cn(
                                "w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
                                errors.email ? "border-red-500" : "border-gray-300"
                            )}
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.email && (
                            <motion.p
                                className="text-red-500 text-sm mt-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {errors.email}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Phone Number */}
                <motion.div
                    className="mb-6"
                    variants={fadeInUp}
                >
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-2">
                        Phone no <span className='text-red-500'>*</span>
                    </label>
                    <motion.div
                        className="relative border-1 border-[#d1d5db] rounded-lg"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <PhoneInput
                            international
                            defaultCountry="BD"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className={cn(
                                "phone-input-custom",
                                errors.phone ? "phone-input-error" : ""
                            )}
                            style={{
                                '--PhoneInputCountryFlag-height': '1.25em',
                                '--PhoneInputCountrySelectArrow-color': '#6b7280',
                            } as React.CSSProperties}
                        />
                    </motion.div>
                    <AnimatePresence>
                        {errors.phone && (
                            <motion.p
                                className="text-red-500 text-sm mt-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {errors.phone}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Message */}
                <motion.div
                    className="mb-6"
                    variants={fadeInUp}
                >
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-2">
                        Message
                    </label>
                    <div className="relative">
                        <Image
                            src={'/icons/PencilLine.png'}
                            alt={'PencilLine'}
                            width={20}
                            height={20}
                            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                        />
                        <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your requirements"
                            rows={4}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                </motion.div>

                {/* Employee Count */}
                <motion.div
                    className="mb-8"
                    variants={fadeInUp}
                >
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-4">
                        How many employee do you have?
                    </label>
                    <motion.div
                        className="grid grid-cols-3 md:grid-cols-5 gap-4"
                        variants={containerVariants}
                    >
                        {['1-50', '51-100', '101-200', '201-500', '500+'].map((range, index) => (
                            <motion.label
                                key={range}
                                className="flex items-center cursor-pointer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <input
                                    type="radio"
                                    name="employeeCount"
                                    value={range}
                                    checked={formData.employeeCount === range}
                                    onChange={(e) => handleEmployeeCountChange(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className={cn(
                                    "ml-2 text-grey-3",
                                    formData.employeeCount === range && 'font-semibold text-black'
                                )}>
                                    {range}
                                </span>
                            </motion.label>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                    variants={buttonVariants}
                    whileHover={hoverScale}
                    whileTap={tapScale}
                >
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-6 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                        <motion.span
                            className='text-base font-semibold'
                            animate={isSubmitting ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
                            transition={isSubmitting ? { duration: 1, repeat: Infinity } : {}}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </motion.span>
                        {!isSubmitting && (
                            <motion.div
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={'/icons/ArrowRight.png'}
                                    alt={'ArrowRight'}
                                    width={20}
                                    height={20}
                                />
                            </motion.div>
                        )}
                    </Button>
                </motion.div>
            </motion.form>

            <style jsx global>
                {`
                /* Custom styles for react-phone-number-input */
                .phone-input-custom .PhoneInputInput {
                    padding: 12px 16px;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    font-size: 16px;
                    outline: none;
                    transition: all 0.2s;
                    width: 100%;
                }
                
                .phone-input-custom .PhoneInputInput:focus {
                    border-color: transparent;
                    ring: 2px solid #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                }
                
                .phone-input-error .PhoneInputInput {
                    border-color: #ef4444;
                }

                .PhoneInputCountry{
                    margin: 0px 10px;
                }

                .PhoneInputCountrySelectArrow{
                    margin-left: 10px;
                    height: 8px;
                    width: 8px;
                }
                
                .phone-input-custom .PhoneInputCountrySelect {
                    border: none;
                    border-right: 1px solid #d1d5db;
                    border-radius: 8px 0 0 8px;
                    padding: 12px 8px;
                    background: white;
                    outline: none;
                    transition: all 0.2s;
                }
                
                .phone-input-custom .PhoneInputCountrySelect:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                }
                
                .phone-input-custom .PhoneInputCountrySelect:hover {
                    background-color: #f9fafb;
                }
                
                .phone-input-custom {
                    display: flex;
                    width: 100%;
                }
                
                .phone-input-custom .PhoneInputInput {
                    border: none;
                    flex: 1;
                }
            `}
            </style>
        </>

    )
}