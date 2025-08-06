// components/DemoForm.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function DemoForm() {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '+880',
        message: '',
        employeeCount: '1-50'
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEmployeeCountChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            employeeCount: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <form onSubmit={handleSubmit} className="lg:w-1/2">
            {/* Name */}
            <div className="mb-6">
                <label className="block text-grey-2 text-base font-semibold mb-2">
                    Name <span className='text-red-500'>*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
            </div>

            {/* Company Name */}
            <div className="mb-6">
                <label className="block text-grey-2 text-base font-semibold mb-2">
                    Company name*
                </label>
                <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
            </div>

            {/* Business Email */}
            <div className="mb-6">
                <label className="block text-grey-2 text-base font-semibold mb-2">
                    Business email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
                <label className="block text-grey-2 text-base font-semibold mb-2">
                    Phone no*
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
            </div>

            {/* Message */}
            <div className="mb-6">
                <label className="block text-grey-2 text-base font-semibold mb-2">
                    Message
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
            </div>

            {/* Employee Count */}
            <div className="mb-8">
                <label className="block text-grey-2 text-base font-semibold mb-4">
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
                <span className='text-base font-semibold'>Submit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Button>
        </form>
    )
}