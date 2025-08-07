// components/DemoForm.tsx
'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'



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
            return
        }

        setIsSubmitting(true)

        try {
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

            if (response.ok) {
                // Reset form on success
                setFormData({ ...initialFormData })
                alert('Form submitted successfully!')
            } else {
                throw new Error('Failed to submit form')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('Error submitting form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="lg:w-1/2">
                {/* Name */}
                <div className="mb-6">
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
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full name"
                            className={cn(
                                "w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
                                errors.name ? "border-red-500" : "border-gray-300"
                            )}
                        />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div className="mb-6">
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
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Company name"
                            className={cn(
                                "w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
                                errors.companyName ? "border-red-500" : "border-gray-300"
                            )}
                        />
                    </div>
                    {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>

                {/* Business Email */}
                <div className="mb-6">
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
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@company.com"
                            className={cn(
                                "w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
                                errors.email ? "border-red-500" : "border-gray-300"
                            )}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-2">
                        Phone no <span className='text-red-500'>*</span>
                    </label>
                    <div className="relative border-1 border-[#d1d5db] rounded-lg">
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
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div className="mb-6">
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
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your requirements"
                            rows={4}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        />
                    </div>
                </div>

                {/* Employee Count */}
                <div className="mb-8">
                    <label className="block text-grey-2 text-base font-poppins font-semibold mb-4">
                        How many employee do you have?
                    </label>
                    <div className="grid grid-cols-5 gap-4">
                        {['1-50', '51-100', '101-200', '201-500', '500+'].map((range) => (
                            <label key={range} className="flex items-center cursor-pointer">
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
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-6 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                    <span className='text-base font-semibold'>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </span>
                    {!isSubmitting && (
                        <Image
                            src={'/icons/ArrowRight.png'}
                            alt={'ArrowRight'}
                            width={20}
                            height={20}
                        />
                    )}
                </Button>
            </form>

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